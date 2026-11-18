---
title: Copilot Pages Tools for Work IQ (preview)
description: Learn about supported scenarios, permissions, and creation and editing workflows for Copilot Pages Tools in Work IQ.
author: afazmi-MSFT
ms.author: afazmi
ms.topic: overview
ms.localizationpriority: medium
ms.date: 11/16/2026
---

# Copilot Pages Tools for Work IQ (preview)

By using Copilot Pages Tools in Work IQ, agents can create shareable Microsoft 365 Copilot Pages and edit existing Pages from natural-language requests. Use these tools to turn a user's request into a collaborative page or apply requested changes to a page the user identifies.

> [!IMPORTANT]
> Copilot Pages Tools in Work IQ are in preview.

Work IQ exposes Copilot Pages Tools through resource paths under `/pages`. Agents use the Work IQ MCP interface to discover available paths and inspect their schemas. For more information, see [Work IQ MCP entity model](mcp/entity-model.md).

## Prerequisites

Before using Copilot Pages Tools, [enable Work IQ in your organization](enable-work-iq.md).

## Covered scenarios

| Scenario | Capabilities |
| --- | --- |
| Create a collaborative page | Generate a shareable Copilot Page from the user's topic, instructions, and content requirements. |
| Edit an existing page | Apply requested changes in place to an existing Copilot Page identified by its exact URL. |

| Action path | Required inputs | Purpose |
| --- | --- | --- |
| `/pages/create_page` | `userRequest` | Create a new Page. |
| `/pages/edit_page` | `userRequest`, `artifactUrl` | Edit the identified Page in place. |

## Create a page

Pass the user's creation request in `userRequest`. Include the topic and any requested content requirements. The value must be a non-empty string. The workflow generates the page content; you don't need to provide an artifact filename.

For example, the action body for a creation request can be:

```json
{
  "userRequest": "Create a Copilot Page explaining our release checklist: review code, complete accessibility checks, obtain release approval, and monitor the rollout."
}
```

These are action-body fields, not the complete MCP request envelope. For `do_action`, set `actionUrl` to `/pages/create_page` and serialize the body as a JSON string in `jsonBody`. See [Work IQ MCP tool reference](mcp/tool-reference.md).

Invoke `/pages/create_page` once for each distinct creation request. Don't use it to update an existing page.

The tool must return a `resource_link` identifying a Microsoft 365 Copilot Page (`.page`). Share the returned link so the user can open and collaborate on the page. An `.html` link or a local or SharePoint file path isn't a valid substitute for the page result.

## Edit a page

Pass the user's requested changes in `userRequest` and the existing page's exact URL separately in `artifactUrl`. Both values must be non-empty strings.

Obtain the target URL from the user or grounded search results. Preserve the complete URL unchanged, including its encoding and query parameters. Don't reconstruct a URL, substitute a local path or output filename, or put the target URL only in `userRequest`.

Call `/pages/edit_page` once for the final edit. If you don't have a grounded target URL, obtain it before calling the action; don't create a replacement page.

When an edit returns a `resource_link`, it must identify a Copilot Page (`.page`). A confirmed successful in-place edit can return no new link. In that case, report the confirmed update without inventing a link.

## Handle failures and retries

Creation and editing change persistent content. Don't automatically repeat a write because a response is delayed or unsuccessful.

| Situation | Required behavior |
| --- | --- |
| Creation has been attempted | Don't retry unless the tool explicitly instructs you to recover and retry. |
| Approval is declined or edit target validation fails | Don't retry or use another persistence path. |
| Edit explicitly reports a concurrent-edit conflict | Fetch the latest Page through an available supported read capability, regenerate the edit, and retry once with the same `artifactUrl`. If the latest content isn't accessible, stop rather than guessing. |
| Other edit failure | Don't retry automatically. |
| Result points to HTML or a file path instead of a Page | Treat the result as incorrect; don't report successful Page creation or a valid Page link. |

Don't invent conversation identifiers, sensitivity labels, annotations, page identifiers, or other application metadata.

## Related content

- [Work IQ overview](index.md)
- [Enable Work IQ in your organization](enable-work-iq.md)
- [Work IQ API permissions reference](permissions.md)
- [Work IQ MCP entity model](mcp/entity-model.md)
- [Work IQ MCP tool reference](mcp/tool-reference.md)
