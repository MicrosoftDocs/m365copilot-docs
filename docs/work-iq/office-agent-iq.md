---
title: Office Document Tools for Work IQ (preview)
description: Learn about supported Word, Excel, and PowerPoint scenarios and artifact creation and editing workflows in Work IQ.
author: afazmi-MSFT
ms.author: afazmi
ms.topic: overview
ms.localizationpriority: medium
ms.date: 11/16/2026
---

# Office Document Tools for Work IQ (preview)

By using Office Document Tools in Work IQ, agents can create and edit Word documents, Excel workbooks, and PowerPoint presentations. Use these tools to turn a complete content outline into an Office artifact or apply specified changes to an existing artifact.

> [!IMPORTANT]
> Office Document Tools in Work IQ are in preview.

Work IQ exposes these tools through resource paths under `/office-agent-mcp`. Agents use the Work IQ MCP interface to discover available paths and inspect their schemas. For more information, see [Work IQ MCP entity model](mcp/entity-model.md).

## Prerequisites

Before using Office Document Tools, [enable Work IQ in your organization](enable-work-iq.md).

## Covered scenarios

| Scenario | Capabilities |
| --- | --- |
| Create a Word document | Generate a document from a complete Markdown outline containing the intended final text. |
| Create an Excel workbook | Generate a spreadsheet or workbook from supplied content, tables, and formatting instructions. |
| Create a PowerPoint presentation | Generate a presentation from supplied content and an explicit outline. |
| Edit an existing Office artifact | Apply specified additions, removals, or updates to an existing Word, Excel, or PowerPoint artifact in place. |

Discover available paths and schemas at runtime.

| Action path | Required inputs | Purpose |
| --- | --- | --- |
| `/office-agent-mcp/generate_artifact` | `taskDescription`, `appName` | Create an Office artifact. |
| `/office-agent-mcp/edit_artifact` | `taskDescription`, `appName`, `artifactUrl` | Edit an existing artifact in place. |

Both actions accept an optional `userRequest`. Invoke an available action through `do_action`, following its discovered schema.

## Prepare the request

| Input | Guidance |
| --- | --- |
| `appName` | Use exactly `Word`, `Excel`, or `PowerPoint`, matching the intended or existing artifact. |
| `taskDescription` | Provide a complete Markdown outline with the actual final content and formatting instructions. For an edit, describe the intended changes and identify the sections to add, remove, or update. |
| `userRequest` | Optionally provide the effective user request separately from the detailed outline. Preserve the user's intent, constraints, and relevant refinements without inventing requirements. |
| `artifactUrl` | Required for editing. Copy the existing artifact URL verbatim from a grounded source. Don't re-encode, shorten, reconstruct, or correct it. |

For `taskDescription`, identify the document type, purpose, and audience when creating an artifact. Supply explicit headings and subsections, bullet lists, Markdown tables for tabular content, and fenced blocks where needed. Under each heading, provide the actual prose, bullets, and values to appear in the artifact, rather than instructions to invent them. End with formatting and styling preferences.

Don't delegate outline decisions to the generator or editor, and don't include placeholder tokens. Obtain missing facts or use accurate content that doesn't claim unsupported facts. Preserve the user's framing and grammatical person.

For edits, incorporate relevant follow-up instructions unless the user replaces, reverses, or cancels them. Keep `userRequest` concise and separate from the complete change outline in `taskDescription`.

### Example: Create a Word document

The following action body supplies the complete content for a short example document:

```json
{
  "appName": "Word",
  "taskDescription": "Word document. Purpose: explain a release checklist. Audience: the development team.\n\n# Release checklist\n\nUse this checklist before and after deployment.\n\n## Before deployment\n\n- Complete code review.\n- Complete accessibility checks.\n- Obtain release approval.\n\n## After deployment\n\n- Monitor the rollout for errors.\n- Record the release outcome.\n\nFormatting: Use a clear heading hierarchy and standard bullet lists.",
  "userRequest": "Create a short Word document with our release checklist: code review, accessibility checks, release approval, rollout monitoring, and recording the outcome."
}
```

Use `/office-agent-mcp/generate_artifact` for this body. These are action-body fields, not the complete MCP request envelope. For `do_action`, supply the path in `actionUrl` and serialize the body as a JSON string in `jsonBody`. See [Work IQ MCP tool reference](mcp/tool-reference.md).

### Edit an existing artifact

Use `/office-agent-mcp/edit_artifact` with the matching `appName`, a complete outline of the requested changes in `taskDescription`, and the exact existing URL in `artifactUrl`. Obtain the URL before calling the action. A change to any part of the URL can make the artifact unresolvable.

Use the edit action for changes to an existing artifact; don't create a replacement unless that request is explicit.

## Handle results and failures

Successful tool results include a `resource_link` for the created or edited artifact. Return the actual link to the user and preserve response metadata, including sensitivity labels when present.

An HTTP success status alone doesn't establish that artifact creation or editing succeeded. Work IQ reports tool execution failures with `isError: true` and error details in `content`. Inspect the returned tool result and surface the failure instead of reporting success. For more information, see [Work IQ MCP tool reference](mcp/tool-reference.md).

Both actions are non-idempotent. Don't automatically replay creation or editing after a timeout or ambiguous result; the original request might already have changed content. Don't interpret a long-running request as permission to submit it again.

## Related content

- [Work IQ overview](index.md)
- [Enable Work IQ in your organization](enable-work-iq.md)
- [Work IQ API permissions reference](permissions.md)
- [Work IQ MCP entity model](mcp/entity-model.md)
- [Work IQ MCP tool reference](mcp/tool-reference.md).
- [Policy governance for Work IQ MCP](mcp/policy-governance-mcp.md)
