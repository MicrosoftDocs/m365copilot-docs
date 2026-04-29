---
title: Troubleshoot the Agent Evaluations CLI
description: Resolve common setup, authentication, runtime, and environment issues for the M365 Copilot Agent Evaluations CLI.
ms.date: 04/22/2026
author: lauragra
ms.author: lauragra
ms.topic: troubleshooting
ms.localizationpriority: medium
---

# Troubleshoot the Agent Evaluations CLI

This article provides troubleshooting information for the Microsoft 365 Copilot Agent Evaluations CLI. Issues are grouped by the stage of the workflow they affect: setup, authentication, runtime, and environment.

## Setup issues

Problems encountered during installation or when running the CLI for the first time.

### Installation failures

If `npm install -g @microsoft/m365-copilot-eval` fails:

- Verify you're running Node.js 24.12.0 or later: `node --version`.
- Check that you have permission to install global npm packages. On Unix/macOS, you may need `sudo` or an nvm-managed Node installation.
- If you're behind a corporate proxy, see [Network or proxy issues](#network-or-proxy-issues).

### `runevals` command not found

If the `runevals` command isn't recognized after installation:

```bash
# Verify the package is installed globally
npm list -g @microsoft/m365-copilot-eval

# Reinstall if missing
npm install -g @microsoft/m365-copilot-eval
```

If the package is listed but the command still isn't found, check that your npm global `bin` directory is on your `PATH`:

```bash
npm bin -g
```

Add the output directory to your `PATH` if it's missing.

### Pre-cache the Python environment

The tool downloads a Python runtime and dependencies on first run. To set up the environment ahead of time without running evaluations:

```bash
runevals --init-only
```

This is useful for:

- Pre-warming the cache in CI/CD pipelines.
- Testing the setup without running evaluations.
- Isolating installation issues from evaluation issues.

For troubleshooting the setup itself, combine with debug logging:

```bash
runevals --init-only --log-level debug
```

## Authentication issues

Problems with tenant, agent, or Azure OpenAI credentials.

### Authentication errors

If authentication fails:

- Verify `TENANT_ID` matches the tenant where your agent is deployed.
- Confirm you're running on Windows. Support for other operating systems is coming soon.
- Ensure you're signed in to the correct Microsoft 365 account.
- If you're using multiple tenants, sign out of other accounts before running `runevals`.

### Tenant mismatch

If the tool connects but returns no agent, your `TENANT_ID` may not match the tenant where the agent is deployed. Verify the tenant ID by running:

```bash
az account show --query tenantId
```

You can also follow the instructions in [Required environment variables](evaluations-cli-overview.md#required-environment-variables).

### Azure OpenAI API key errors

If evaluation scoring fails with a 401 or 403 error:

- Verify `AZURE_AI_API_KEY` is correct and not expired.
- Confirm `AZURE_AI_OPENAI_ENDPOINT` matches the resource the key belongs to.
- Check that `gpt-4o-mini` (or the model set in `AZURE_AI_MODEL_NAME`) is deployed in your Azure OpenAI resource.

## Runtime issues

Problems that occur when running evaluations after successful setup.

### Agent not found

If the tool can't find your agent:

- Verify `M365_AGENT_ID` (or `M365_TITLE_ID` for Agents Toolkit projects) is correct.
- Confirm your agent is deployed to the tenant specified by `TENANT_ID`.
- Ensure you have permission to access the agent.
- Try specifying the agent ID explicitly: `runevals --m365-agent-id "<your-agent-id>"`.

### Evaluation failures

If evaluations start but fail mid-run:

- Run with verbose logging to see detailed errors: `runevals --log-level debug`.
- Check exit codes for the general failure category. See [Exit codes](evaluations-cli-reference.md#exit-codes) in the CLI reference.

> [!WARNING]
> The `--log-level debug` option may include raw API payloads and response data in console output. Redaction is pattern-based and might not catch all PII or custom credentials. Don't share debug-level output publicly without manual review.

## Environment issues

Problems with the cached Python runtime, cache directory, or network connectivity.

### Cache issues

The evaluation tool uses a local cache for the Python runtime and dependencies.

```bash
# View cache info
runevals cache-info

# Clear and rebuild the cache
runevals cache-clear
runevals --init-only --log-level debug
```

### Permission issues

If cache operations fail with permission errors:

```bash
# View the cache directory path
runevals cache-dir

# Fix permissions (Unix/macOS)
chmod -R u+w $(runevals cache-dir)

# Fix permissions (Windows PowerShell)
icacls "$(runevals cache-dir)" /grant ${env:USERNAME}:F /T
```

### Network or proxy issues

If initialization fails behind a corporate proxy:

```bash
# Set proxy (Unix/macOS)
export HTTPS_PROXY=http://proxy:8080
export HTTP_PROXY=http://proxy:8080

# Set proxy (Windows PowerShell)
$env:HTTPS_PROXY="http://proxy:8080"
$env:HTTP_PROXY="http://proxy:8080"

# Retry initialization with verbose output
runevals --init-only --log-level debug
```

## Get support

If the troubleshooting steps above don't resolve your issue, file an issue in the [M365 Copilot Agent Evaluations GitHub repo](https://github.com/microsoft/m365-copilot-eval).

Before you file an issue, collect:

- The CLI version: `runevals --version`.
- The exact command you ran.
- Error output (redact any PII, keys, or tenant-specific identifiers).
- Your operating system and Node.js version: `node --version`.

To file the issue:

- Open a new issue at [M365 Copilot Agent Evaluations — Issues](https://github.com/microsoft/m365-copilot-eval/issues).
- Apply the appropriate label (for example, `setup`, `authentication`, `runtime`, `environment`) to help triage.

## Related content

- [Agent Evaluations CLI overview](evaluations-cli-overview.md)
- [Quickstart: Use the Agent Evaluations CLI](evaluations-cli-quickstart.md)
- [Dataset schema and test design](evaluations-cli-create-tests.md)
- [CLI reference](evaluations-cli-reference.md)
