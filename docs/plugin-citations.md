---
title: Show citations with response semantics in declarative agents
description: Learn how to use response semantics so that MCP or API plugin content surfaced by your declarative agent renders as clickable, source-linked citations in Microsoft 365 Copilot.
author: akhilsaivalluri
ms.author: avalluri
ms.topic: article
ms.localizationpriority: medium
ms.date: 05/15/2026
---

<!-- cSpell:ignore akhilsaivalluri avalluri -->

# Show citations with response semantics

Citations build trust that a Microsoft 365 Copilot response is accurate and grounded. Citations are added automatically in the response body for Copilot synthesized responses. However, they might or might not allow the end user to open the source of information. When Copilot grounds a response on public web content, the URL is cited automatically.

For content coming from a [Model Context Protocol (MCP) server](build-mcp-plugins.md) or an [API](build-api-plugins-existing-api.md), that content must return a URL that an end user can open and review. You define [`response_semantics`](plugin-manifest-2.4.md#response-semantics-object) in your plugin definition so that Copilot knows where that URL is located in the plugin response, and can make the citation clickable with the right link.

If you skip this step, plugin content is still cited, but only with a representative pill or icon. The end user can't click through and confirm the data from your site. That's why clickable citations are also a Microsoft 365 Copilot Agents store policy requirement for apps published to the store.

:::image type="content" source="assets/images/declarative-agents/citations/citation-hover-experience.png" alt-text="On hover experience for clickable citations in a Copilot response.":::

> [!IMPORTANT]
> You do **not** need an Adaptive Card to get citations. Response semantics alone — a `data_path` plus a few `properties` mappings — is enough for Copilot to render a clickable citation pointing back to your source.
>
> Consider using interactive [MCP apps](plugin-mcp-apps.md) for rich UX beyond citations.

## Using response semantics

Response semantics defined in your plugin manifest is a contract between your MCP server or API and Copilot.

1. Your tool returns JSON.
1. In the [plugin manifest](plugin-manifest-2.4.md#response-semantics-object):

    - You tell Copilot **where in that JSON the citable items are located** (`data_path`).
    - You tell Copilot **which fields on each item map to the citation's title, subtitle, and URL** (`properties`).

1. Copilot renders a citation for each item. Users click through to your source.

This configuration also enables citations to work for your tool response not just in Copilot, but also in [ChatGPT Apps](https://developers.openai.com/api/docs/mcp) — with no additional modifications.

## Minimum configuration

Your `response_semantics` configuration is driven by the shape of your tool's response, not by the protocol of your tool response. The same manifest schema is used by Copilot agents with all tool protocols (MCP, OpenAPI, message extensions).

Most tool responses fall into one of two shapes:

- **An array of results** (like a search tool): the tool returns multiple items, each of which should become its own citation.
- **A single object** (like a fetch tool): the tool returns exactly one document or record, which becomes a single citation.

### Array of results (search-style)

Tools that returns multiple items typically return an array under a `results` (or equivalent) key, as shown in the following example.

```json
{
  "results": [
    {
      "id": "vr-001",
      "title": "Forecasting AI adoption in the enterprise (2026)",
      "url": "https://research.vanta.example.com/ai-adoption-2026",
      "publishedDate": "2026-03-12",
      "thumbnailUrl": "https://research.vanta.example.com/assets/vanta-logo.png"
    },
    {
      "id": "vr-005",
      "title": "Enterprise AI spend, deep dive",
      "url": "https://research.vanta.example.com/ai-spend",
      "publishedDate": "2026-03-28",
      "thumbnailUrl": "https://research.vanta.example.com/assets/vanta-logo.png"
    }
  ]
}
```

The following example shows a minimum response semantics configuration in the plugin manifest.

```json
"capabilities": {
  "response_semantics": {
    "data_path": "$.results",
    "properties": {
      "title": "$.title",
      "subtitle": "$.publishedDate",
      "url": "$.url"
    }
  }
}
```

The `data_path` property points to the array. Each element produces its own clickable citation. The `properties` JSONPaths are resolved relative to each array element, not the root.

### Single object (fetch-style)

The following example shows a response with exactly one record — a document, an entity, a file — to be cited as one source.

```json
{
  "id": "vr-001",
  "title": "Forecasting AI adoption in the enterprise (2026)",
  "text": "Vanta Research surveyed 412 enterprise CIOs across North America and EMEA between January and February 2026. We forecast that 64% of Fortune 500 firms will be running at least one production generative AI workload by end of 2026, up from 38% at the close of 2025...",
  "url": "https://research.vanta.example.com/ai-adoption-2026",
  "publishedDate": "2026-03-12",
  "thumbnailUrl": "https://research.vanta.example.com/assets/vanta-logo.png",
  "metadata": { "source": "vanta-research", "category": "AI" }
}
```

The following example shows a minimum response semantics configuration in the plugin manifest.

```json
"capabilities": {
  "response_semantics": {
    "data_path": "$",
    "properties": {
      "title": "$.title",
      "subtitle": "$.publishedDate",
      "url": "$.url"
    }
  }
}
```

The `data_path` property set to `$` selects the root object as a single citation item. This is the right choice whenever the tool returns one record — even if the record includes nested fields like `metadata`.

### MCP content wrapper

MCP tools wrap their response in a `content` array of `TextContentBlock` items. Copilot parses the `text` field of each block as JSON and then applies your `data_path` against the parsed value. The shape inside the `text` string is what drives your configuration — not the outer `content` wrapper.

#### Example MCP response

```json
{
  "content": [
    {
      "type": "text",
      "text": "{\"id\":\"vr-001\",\"title\":\"Forecasting AI adoption in the enterprise (2026)\",\"url\":\"https://research.vanta.example.com/ai-adoption-2026\"}"
    }
  ]
}
```

The parser unwraps the `text` payload first, leaving a single object. You use the [single object](#single-object-fetch-style) configuration (`"data_path": "$"`). An MCP search tool that returns an array inside the `text` field uses the [array of results](#array-of-results-search-style) configuration (`data_path: "$.results"`).

## Citation properties

The following properties are available on citations. All values are relative JSONPath expressions against one item selected by `data_path`.

| Property                       | Required          | What it does                                                                         |
|--------------------------------|-------------------|--------------------------------------------------------------------------------------|
| `title`                        | Yes (practically) | The clickable heading of the citation.                                               |
| `subtitle`                     | No                | Second line — dates, authors, categories.                                            |
| `url`                          | Yes (practically) | Where the citation navigates on click. Must be a canonical link back to your source. |
| `thumbnail_url`                | No                | Small image shown alongside the citation.                                            |
| `information_protection_label` | No                | Sensitivity (IP) label for the content.                                              |

> [!NOTE]
> If `url` is missing, the citation isn't clickable. This is a very common reason developers see non-functional citations.

## Setting `data_path`

The `data_path` property is a JSONPath ([RFC 9535](https://datatracker.ietf.org/doc/html/rfc9535)) expression. Using an incorrect JSONPath expression is one of the most common reasons citations don't show up.

| If your response looks like... | Use this `data_path` |
| --- | --- |
| `{ "results": [ ... ] }` | `$.results` |
| `{ "content": [ { "results": [ ... ] } ] }` (MCP-style nested) | `$.content[0].results` |
| A single object at the root (no array wrapper) | `$` |
| `{ "content": [ { "type": "text", "text": "<stringified JSON>" } ] }` (raw MCP) | `$` for root, or `$.results` if the inner JSON has an array |

> [!TIP]
> **Flatten your arrays.** Multi-level nested arrays (for example, `$.content[0].results[0].items`) are the schema pattern most likely to silently fail. If you own the tool response shape, return a flat `results: [...]` array.

## Going beyond response semantics

**As a first preference,** consider adding [rich UI widgets to your agent](plugin-mcp-apps.md). This approach is more future-ready and AI-native, allowing more intelligent, adaptive, and seamless interactions.

**Add an Adaptive Card as a last resort** if — and only if — you need one of:

- A **custom visual layout for the citation alone** (multi-column, image banners, formatted text blocks), or multiple fields rendered in the citation card body (beyond title, subtitle, and URL).
- **Action buttons** beyond the default "click the citation" behavior (for example, `Action.Execute`, multi-button toolbars).

For the vast majority of citation scenarios — "show me the source and let me click through" — skip Adaptive Cards entirely. They add complexity, are harder to debug, and the default citation UI is clean and consistent with the rest of Copilot.

### Example with Adaptive Card

```json
"response_semantics": {
  "data_path": "$.content[1].results",
  "properties": {
    "title": "$.title",
    "subtitle": "$.publishedDate",
    "url": "$.url"
  },
  "staticTemplate": {
    "type": "AdaptiveCard",
    "version": "1.4",
    "body": [
      {
        "type": "TextBlock",
        "text": "${title}",
        "weight": "bolder",
        "size": "medium"
      },
      {
        "type": "TextBlock",
        "text": "${subtitle}",
        "isSubtle": true
      },
      {
        "type": "TextBlock",
        "text": "${text}",
        "wrap": true
      }
    ],
    "selectAction": {
      "type": "OpenUrl",
      "url": "${url}"
    }
  }
}
```

Notice the `${title}`, `${subtitle}`, and `${url}` tokens — these are populated by the same `properties` map above. The Adaptive Card is a **presentation layer** on top of response semantics; it doesn't replace it.

## Known limitations

Plan around these when designing your tool and manifest:

- **Unstructured MCP text isn't parseable.** If your MCP tool returns plain narrative text (not JSON) inside a `TextContentBlock`, `response_semantics` can't extract citations from it. Return structured JSON inside the text block instead.
- **Critique / multi-model flows.** Pipelines that run a primary model, a verifier, and then a synthesis step have been observed to drop citations in the final synthesis.
- **Dynamic tool fetching.** When tools are discovered dynamically at runtime, manifest-level `response_semantics` might not apply. Prefer static tool registration if citations are important.
- If you see any of the above or other issues, click the thumbs-down button and share feedback (along with diagnostics if possible). Use easy-to-triage hashtags like `#citations`.

## Troubleshooting checklist

If citations aren't showing, use the following checklist.

- Is `data_path` pointing to the right node? Paste your tool's raw JSON response into a JSONPath tester and confirm your expression returns the array or object you expect.
- Does each item have a non-empty `url`? Missing URLs result in non-clickable citations.
- For MCP tools, is the `text` field inside `TextContentBlock` valid JSON? Parse it manually to confirm.
- Is the schema flat? If you have deeply nested arrays, try returning a single flat array.
- Did you declare `response_semantics` per function (inside that function's `capabilities` in the plugin manifest) and not at the plugin root? It must be scoped to the function.
- Removed the Adaptive Card? Try the minimum config first — the default citation UI almost always renders correctly when `data_path`, `title`, and `url` are correct.

## Example

### Tool response

```json
{
  "content": [
    {
      "type": "text",
      "text": "{\"results\":[{\"title\":\"Forecasting AI adoption\",\"publishedDate\":\"2026-03-12\",\"url\":\"https://research.example.com/ai-2026\"},{\"title\":\"Enterprise AI spend\",\"publishedDate\":\"2026-02-20\",\"url\":\"https://research.example.com/spend\"}]}"
    }
  ]
}
```

### Manifest function capability

```json
"capabilities": {
  "response_semantics": {
    "data_path": "$.results",
    "properties": {
      "title": "$.title",
      "subtitle": "$.publishedDate",
      "url": "$.url"
    }
  }
}
```

**What the user sees:** two clickable citation cards under the Copilot response, each linking to the source URL.

## Related content

- [Plugin manifest schema 2.4 — `response_semantics` object](plugin-manifest-2.4.md#response-semantics-object)
- [Add MCP apps to declarative agents in Microsoft 365 Copilot](plugin-mcp-apps.md)
- [Best practices for building declarative agents](declarative-agent-best-practices.md)
