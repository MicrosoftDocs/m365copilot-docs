---
title: Use the retrieve tool in Work IQ MCP
description: Search Microsoft 365 and connected enterprise data and return grounding content for agentic applications.
author: MSFTgraph-sorceress
ms.author: hstoffels
ms.topic: how-to
ms.localizationpriority: medium
ms.date: 11/11/2026
---

<!-- cSpell:ignore rerank -->

# Use the `retrieve` tool in Work IQ MCP

The Work IQ MCP `retrieve` tool searches data that the signed-in user can access and returns grounding content for an AI agent. Use it when your application needs source content and metadata that it can pass to a model, evaluate, rerank, audit, or use in a multistep agentic workflow.

> [!IMPORTANT]
> The `retrieve` tool is available in public preview.

Unlike the `ask` tool, `retrieve` doesn't produce a final answer to the user's question. It returns:

- Model-friendly Markdown with inline citations.
- Structured metadata for each cited source.
- A terminal status and result count.

The `retrieve` tool can search Microsoft 365 data such as email, files, meetings, Teams messages, and people. By using the `copilot` strategy, it can also search connected enterprise sources available to Microsoft 365 Copilot.

> [!IMPORTANT]
> Work IQ uses delegated authentication. Retrieval runs in the context of the signed-in user and doesn't grant access to content that the user can't otherwise access.

## Before you begin

Complete the following prerequisites:

- [Enable your tenant for Work IQ](../enable-work-iq.md).
- [Set up usage-based billing for Copilot Credits](/microsoft-365/copilot/usage-based-billing-copilot-credits-setup) and assign the calling users to a spending policy that includes Work IQ API.
- Register a client application and grant the delegated `WorkIQAgent.Ask` permission. For more information, see [Work IQ API permissions reference](../permissions.md).
- Connect an MCP client to `https://workiq.svc.cloud.microsoft/mcp`.
- If your organization uses Work IQ MCP policy, confirm that Work IQ MCP is enabled. For more information, see [Policy governance for Work IQ MCP](policy-governance-mcp.md).

Call `tools/list` after connecting and confirm that `retrieve` is available. Tool availability and schemas can evolve, so use the schema returned by `tools/list` as the source of truth instead of hard-coding a locally copied schema.

## Choose a retrieval strategy

The `strategy` parameter controls where Work IQ searches.

| Strategy | Search scope | Use when |
|---|---|---|
| `grounding` (default) | Microsoft 365 indexed content, including SharePoint, OneDrive, Teams, and Outlook | You know the answer is available in Microsoft 365 and want a focused search |
| `copilot` | Microsoft 365 indexed content plus connected enterprise sources available to Copilot | The source is unknown or the query might require connectors, external data, or other Copilot-connected sources |

If you omit `strategy`, Work IQ uses `grounding`.

The `GraphConnectors` capability isn't supported with `grounding`. Use `copilot` when you include it.

> [!NOTE]
> Dataverse and Power BI are roadmap sources, not currently supported retrieval sources. Dataverse needs further evaluation before it can be described as supported, and it isn't a near-term priority. No delivery timeline is committed.

## Run a basic retrieval

The following example searches Microsoft 365 indexed content.

```json
{
  "method": "tools/call",
  "params": {
    "name": "retrieve",
    "arguments": {
      "query": "What are the approved customer identity requirements for Project Northwind?",
      "strategy": "grounding"
    }
  }
}
```

## Search across connected enterprise sources

Use `copilot` when the source is unknown or might be outside the Microsoft 365 index.

```json
{
  "method": "tools/call",
  "params": {
    "name": "retrieve",
    "arguments": {
      "query": "Find the latest Project Northwind launch risks across company sources.",
      "strategy": "copilot"
    }
  }
}
```

## Limit a request to specific source types

Use `capabilities` to provide a source allow list for one retrieval request. If you omit `capabilities` or pass an empty array, Work IQ searches all sources available to the selected agent and strategy.

Supported capability names are:

- `People`
- `Meetings`
- `OneDriveAndSharePoint`
- `Email`
- `TeamsMessages`
- `GraphConnectors`

The schema also includes a `Dataverse` capability name, but Dataverse isn't currently a supported retrieval source. Don't use it to imply current support.

### Search a SharePoint site, SharePoint Embedded container, or OneDrive location

Use `OneDriveAndSharePoint` with `items_by_url`. Supply a canonical SharePoint or OneDrive URL, not a sharing link.

```json
{
  "method": "tools/call",
  "params": {
    "name": "retrieve",
    "arguments": {
      "query": "Summarize the approved customer identity requirements.",
      "strategy": "grounding",
      "capabilities": [
        {
          "name": "OneDriveAndSharePoint",
          "items_by_url": [
            {
              "url": "https://contoso.sharepoint.com/sites/ProjectNorthwind"
            }
          ]
        }
      ]
    }
  }
}
```

You can also scope SharePoint and OneDrive retrieval by SharePoint IDs with `items_by_sharepoint_ids`.

The `retrieve` tool supports SharePoint Embedded content that the signed-in user can access. Scope SharePoint Embedded retrieval with the `OneDriveAndSharePoint` capability and the supported URL or SharePoint ID fields.

### Search selected email locations

Use the `Email` capability to limit retrieval to a shared mailbox, group mailboxes, or specific folders.

```json
{
  "method": "tools/call",
  "params": {
    "name": "retrieve",
    "arguments": {
      "query": "Find the latest customer escalation about Project Northwind.",
      "strategy": "grounding",
      "capabilities": [
        {
          "name": "Email",
          "shared_mailbox": "support@contoso.com"
        }
      ]
    }
  }
}
```

### Search a Microsoft Graph connector

Use `GraphConnectors` with the `copilot` strategy. The following example limits retrieval to one connector and adds connector-specific search terms.

```json
{
  "method": "tools/call",
  "params": {
    "name": "retrieve",
    "arguments": {
      "query": "Find open Project Northwind launch risks.",
      "strategy": "copilot",
      "capabilities": [
        {
          "name": "GraphConnectors",
          "connections": [
            {
              "connection_id": "contoso-project-tracker",
              "additional_search_terms": "project:northwind status:open"
            }
          ]
        }
      ]
    }
  }
}
```

## Use a declarative agent

By default, retrieval uses the built-in Microsoft 365 Copilot agent. To retrieve through another available declarative agent, pass its identifier in `agentId`.

```json
{
  "method": "tools/call",
  "params": {
    "name": "retrieve",
    "arguments": {
      "query": "What product guidance applies to this customer scenario?",
      "agentId": "<declarative-agent-id>",
      "strategy": "copilot"
    }
  }
}
```

Don't combine a nondefault `agentId` with a nonempty `capabilities` array. The declarative agent defines its own data scope, and Work IQ rejects requests that attempt to add a separate capability scope.

## Process the response

The authoritative retrieval payload is in:

```text
structuredContent
  -> application/vnd.ms-workiq.retrieval
```

The response returns grounding content and source metadata together in each `results` entry.

Read retrieved content from `structuredContent["application/vnd.ms-workiq.retrieval"].results`, not from the MCP `content` array. The `content` array can be empty even when results are returned.

### Structured results

The `results` array replaces the earlier top-level `markdown` and `retrievalHits` properties. Update clients to read each result's `markdown` and source metadata from the same entry.

The following example shows a successful response with an empty MCP `content` array.

```json
{
  "content": [],
  "structuredContent": {
    "application/vnd.ms-workiq.retrieval": {
      "results": [
        {
          "id": "h1",
          "markdown": "Project Northwind requires phishing-resistant authentication... [^h1]",
          "resourceId": "01ABC...",
          "webUrl": "https://contoso.sharepoint.com/sites/ProjectNorthwind/...",
          "entityUrl": "/drives/{drive-id}/items/{item-id}",
          "entityType": "Files",
          "driveId": "b!example",
          "itemId": "01ABC...",
          "contentProtection": "allowed",
          "resourceMetadata": {
            "document": {
              "title": "Customer identity requirements",
              "authorName": "Adele Vance",
              "occurrenceTime": "2026-09-28T16:30:00Z"
            }
          },
          "sensitivityLabel": {
            "displayName": "Confidential"
          },
          "relevanceScore": 0.92
        }
      ],
      "resultCount": 1,
      "searchMetadata": {
        "queryAlterationResponse": {
          "alteredQuery": "Project Northwind customer identity requirements"
        }
      },
      "stoppedReason": "completed",
      "conversationId": "d488527d-9d34-4e47-a0a8-9c58e46d7252"
    }
  },
  "isError": false
}
```

| Property | Type | Description |
|---|---|---|
| `results` | object array | Retrieved results, each containing Markdown and source metadata. An empty array represents no results. |
| `resultCount` | integer | The number of returned results. |
| `searchMetadata` | object | Optional search metadata. For example, `queryAlterationResponse.alteredQuery` can describe an altered query. The available fields can vary. |
| `stoppedReason` | string | The terminal retrieval status: `completed`, `cancelled`, or `error`. |
| `conversationId` | string | The conversation identifier, when returned. |

Each `results` entry can contain the following properties. Metadata fields depend on the source type and are included only when available.

| Property | Type | Description |
|---|---|---|
| `id` | string | The source identifier used by inline citations such as `[^h1]`. |
| `markdown` | string | Model-friendly grounding content for this result. |
| `resourceId` | string | The source resource identifier, when available. |
| `webUrl` | string | The source URL, when available. |
| `entityUrl` | string | A relative Microsoft Graph URL for the source entity, when available. |
| `entityType` | string | The source entity category, such as `Files`. |
| `driveId`, `itemId` | string | Microsoft Graph navigation identifiers for files, when available. |
| `chatId`, `teamId`, `channelId`, `messageId`, `replyToId` | string | Microsoft Graph navigation identifiers for Teams messages, when available. |
| `contentProtection` | string | The content-protection evaluation result, when available. Don't treat a missing, failed, blocked, or unrecognized value as an allow decision. |
| `resourceMetadata` | object | Source-specific metadata facets, such as `document`, `email`, `meeting`, `video`, `web`, `chat`, or `image`. |
| `sensitivityLabel` | object | Sensitivity-label metadata for the source, when available. |
| `relevanceScore` | number | The source relevance score, when available. |

### Use Markdown for model grounding

Pass each `results[].markdown` value to the model as grounding context. Use metadata from the same result to identify and link to the source, evaluate results, and record audit data. An empty `results` array means no results were returned.

Don't parse the Markdown to obtain stable application fields. Its format is optimized for model consumption and can change.

### Use source metadata for application logic

Use `results` for programmatic operations such as:

- Resolving citations to source URLs.
- Displaying source titles and authors.
- Evaluating or reranking results.
- Recording audit and evaluation data.
- Applying application-specific redaction or filtering.
- Navigating to Microsoft Graph entities when `entityUrl` is available.
- Inspecting sensitivity-label metadata.

Treat `entityUrl`, source URLs, and source identifiers as references, not as proof of authorization. The user's access is checked again when your application follows a reference.

When `conversationId` is returned, preserve it if your application needs to associate the retrieval turn with subsequent operations or diagnostics.

## Handle errors

Treat either of the following conditions as failed retrieval:

- The MCP tool result has `isError: true`.
- The retrieval payload has `stoppedReason: "error"`.

Depending on the deployed response contract, the structured payload can also include:

- `error`
- `errorCode`
- `recoveryAction`
- `retryAfterSeconds`

Don't automatically retry a policy-denied request. Policy denials require the user or an administrator to review access, consent, billing assignment, or Work IQ MCP policy.

Common causes of failure include:

| Symptom | Check |
|---|---|
| `401 Unauthorized` | Verify the token audience and confirm that the `scp` claim contains `WorkIQAgent.Ask` |
| `403 Forbidden` or access denied | Verify admin consent, user access, spending-policy assignment and limits, and Work IQ MCP policy |
| `retrieve` isn't returned by `tools/list` | Verify tenant availability and that Work IQ MCP isn't blocked |
| A connector request is rejected with `grounding` | Change the strategy to `copilot` |
| SharePoint results are broader than intended | Add `OneDriveAndSharePoint` capability scoping with a canonical URL or SharePoint IDs |

## Design agentic workflows with retrieval

For reliable agentic workflows:

1. Discover the `retrieve` schema through `tools/list`.
1. Choose `grounding` when the request is fully satisfiable from the Microsoft 365 index; otherwise use `copilot`.
1. Use capabilities for explicit source constraints.
1. Pass each result's `markdown` to the model and use metadata from that same result to identify and link to the source.
1. Use `results` for code, citations, evaluation, and auditing.
1. Preserve source security metadata such as sensitivity labels.
1. Treat an empty result as a valid retrieval outcome, not automatically as a system failure.
1. Surface policy denials and authentication failures instead of retrying them as transient errors.

## Related content

- [Work IQ MCP overview](overview.md)
- [Work IQ MCP tool reference](tool-reference.md)
- [Work IQ API permissions reference](../permissions.md)
- [Policy governance for Work IQ MCP](policy-governance-mcp.md)
- [Migrate agentic retrieval workflows to Work IQ MCP](migrate-retrieval-api.md)
