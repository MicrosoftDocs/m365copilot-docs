import { readdir, readFile, stat } from 'node:fs/promises';
import { isIP } from 'node:net';
import { lookup } from 'node:dns/promises';
import path from 'node:path';

const LINK_PATTERN = /https:\/\/aka\.ms\/copilot\.dev[^\s)\]>"']*/g;
const EXPECTED_HOST = 'interactivedemo.microsoft.com';
const EXPECTED_PATHNAME = '/copilot.dev';
const MAX_REDIRECTS = 10;
const MAX_ATTEMPTS = 3;
const RETRY_BASE_DELAY_MS = 1_000;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function isPrivateIp(address) {
  const kind = isIP(address);
  if (kind === 4) {
    const [a, b] = address.split('.').map(Number);
    return (
      a === 10 || // 10.0.0.0/8 private
      a === 127 || // 127.0.0.0/8 loopback
      (a === 169 && b === 254) || // 169.254.0.0/16 link-local (cloud metadata)
      (a === 172 && b >= 16 && b <= 31) || // 172.16.0.0/12 private
      (a === 192 && b === 168) || // 192.168.0.0/16 private
      a === 0 // 0.0.0.0/8 "this host" / unspecified
    );
  }
  if (kind === 6) {
    const normalized = address.toLowerCase();
    return (
      normalized === '::1' || // loopback
      normalized === '::' || // unspecified
      normalized.startsWith('fc') || // fc00::/7 unique local
      normalized.startsWith('fd') || // fc00::/7 unique local
      normalized.startsWith('fe80') || // fe80::/10 link-local
      normalized.startsWith('::ffff:') // IPv4-mapped, could embed a private v4 address
    );
  }
  return false;
}

async function assertPublicHost(url) {
  const host = url.hostname.replace(/^\[|\]$/g, '');
  if (isIP(host)) {
    if (isPrivateIp(host)) {
      throw new Error(`Redirect target "${host}" resolves to a private or reserved address`);
    }
    return;
  }
  const results = await lookup(host, { all: true });
  for (const { address } of results) {
    if (isPrivateIp(address)) {
      throw new Error(`Redirect target "${host}" resolves to a private or reserved address (${address})`);
    }
  }
}

async function collectMarkdownFiles(inputs) {
  const files = [];

  for (const input of inputs) {
    const info = await stat(input);
    if (info.isDirectory()) {
      const entries = await readdir(input, { withFileTypes: true });
      const children = entries
        .filter((entry) => entry.name !== 'node_modules' && !entry.name.startsWith('.'))
        .map((entry) => path.join(input, entry.name));
      files.push(...await collectMarkdownFiles(children));
    } else if (input.endsWith('.md')) {
      files.push(input);
    }
  }

  return files;
}

async function fetchWithRetry(url) {
  let lastError;
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
    try {
      const response = await fetch(url, {
        redirect: 'manual',
        signal: AbortSignal.timeout(20_000),
        headers: { 'user-agent': 'm365copilot-docs-interactive-demo-validator' },
      });
      if (response.status === 429 || response.status >= 500) {
        throw new Error(`Transient HTTP ${response.status}`);
      }
      return response;
    } catch (error) {
      lastError = error;
      if (attempt < MAX_ATTEMPTS) {
        await delay(RETRY_BASE_DELAY_MS * 2 ** (attempt - 1));
      }
    }
  }
  throw lastError;
}

async function followRedirects(startUrl) {
  let currentUrl = startUrl;

  for (let redirectCount = 0; redirectCount <= MAX_REDIRECTS; redirectCount += 1) {
    await assertPublicHost(new URL(currentUrl));
    const response = await fetchWithRetry(currentUrl);

    if (response.status >= 300 && response.status < 400) {
      const location = response.headers.get('location');
      if (!location) {
        throw new Error(`Redirect ${response.status} did not include a Location header`);
      }
      currentUrl = new URL(location, currentUrl).toString();
      continue;
    }

    return { response, finalUrl: new URL(currentUrl) };
  }

  throw new Error(`Exceeded ${MAX_REDIRECTS} redirects`);
}

function verifyQueryPreserved(sourceUrl, finalUrl) {
  for (const [key, value] of sourceUrl.searchParams) {
    if (!finalUrl.searchParams.getAll(key).includes(value)) {
      throw new Error(`Query parameter "${key}" was not preserved`);
    }
  }
}

async function main() {
  const inputs = process.argv.slice(2);
  const files = await collectMarkdownFiles(inputs.length > 0 ? inputs : ['docs']);
  const occurrences = [];

  for (const file of files) {
    const content = await readFile(file, 'utf8');
    for (const match of content.matchAll(LINK_PATTERN)) {
      const line = content.slice(0, match.index).split('\n').length;
      const href = match[0].replace(/[.,;:]+$/, '');
      occurrences.push({ file, line, href });
    }
  }

  const uniqueLinks = [...new Set(occurrences.map(({ href }) => href))];
  const failures = [];

  for (const href of uniqueLinks) {
    try {
      const sourceUrl = new URL(href);
      if (sourceUrl.pathname !== EXPECTED_PATHNAME) {
        // Routes must be encoded in the "page" query parameter, not appended to the path.
        throw new Error(`Route "${sourceUrl.pathname}" must be encoded in the "page" query parameter, not appended to the path`);
      }
      const { response, finalUrl } = await followRedirects(href);

      if (!response.ok) {
        throw new Error(`Final response was HTTP ${response.status}`);
      }
      if (finalUrl.hostname !== EXPECTED_HOST) {
        throw new Error(`Final host was "${finalUrl.hostname}", expected "${EXPECTED_HOST}"`);
      }
      // The production app is an SPA and returns its shell for unknown state. Browser
      // verification remains required for the restored page, tool, scenario, and arguments.
      verifyQueryPreserved(sourceUrl, finalUrl);
      console.log(`PASS ${href}`);
    } catch (error) {
      const locations = occurrences
        .filter((occurrence) => occurrence.href === href)
        .map(({ file, line }) => `${file}:${line}`)
        .join(', ');
      failures.push(`${locations}: ${href}\n  ${error.message}`);
    }
  }

  console.log(`Checked ${uniqueLinks.length} unique Interactive Demo links in ${files.length} Markdown files.`);

  if (failures.length > 0) {
    console.error(`\n${failures.join('\n')}`);
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
