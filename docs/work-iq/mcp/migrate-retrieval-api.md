---
title: Migrate agentic retrieval workflows to Work IQ MCP
description: Migrate delegated, agentic applications from the Copilot Retrieval API to the Work IQ MCP retrieve tool.
author: MSFTgraph-sorceress
ms.author: hstoffels
ms.topic: how-to
ms.localizationpriority: medium
ms.date: 10/05/2026
---

<!-- cSpell:ignore cutover hstoffels -->

# Migrate agentic retrieval workflows to Work IQ MCP

This guide helps you migrate an agentic application from the [Copilot Retrieval API](https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/ai-services/retrieval/overview) to the Work IQ MCP `retrieve` tool.

> [!IMPORTANT]
> The `retrieve` tool is available in public preview.

The `retrieve` tool is designed for applications that pass grounding to a model or agent loop. It returns model-friendly Markdown together with structured source metadata. The protocol and response shape differ from the Copilot Retrieval API, so applications must update their request and response handling.

## Decide whether this migration fits your application

Work IQ MCP is a strong migration target when your application:

- Uses delegated user authentication.
- Uses retrieved content as grounding for a model or agent.
- Benefits from searching email, meetings, Teams messages, people, Dataverse, or connected enterprise sources in addition to files.
- Can consume model-friendly Markdown and a structured source-metadata sidecar.
- Can use MCP tool discovery instead of a fixed REST-only contract.

Keep the existing Copilot Retrieval API integration, or run both paths during a transition, when your application:

- Requires a REST-only or strictly fixed response schema. Work IQ tools are planned to become available over REST in November 2026.
- Depends on legacy KQL or `filterExpression` behavior. Additional filter support for the `retrieve` tool is on the roadmap.

> [!IMPORTANT]
> Migration is not a mechanical endpoint substitution. The application changes from consuming document extracts returned by a REST retrieval endpoint to consuming model-facing grounding Markdown plus structured source metadata returned by an MCP tool.

## Compare the integration models

| Area | Copilot Retrieval API | Work IQ MCP `retrieve` |
|---|---|---|
| Protocol | Microsoft Graph REST | MCP `tools/call` |
| Primary scenario | Deterministic document retrieval | Grounding for agentic workflows |
| Authentication | Delegated Microsoft Graph permissions | Delegated `WorkIQAgent.Ask` |
| Sources | One selected retrieval source per request | Microsoft 365 data and, with `copilot`, connected enterprise sources |
| Grounding content | Per-hit extracts | Citation-bearing Markdown |
| Programmatic metadata | Retrieval hits and requested metadata | `retrievalHits` sidecar with source and security metadata |
| Source constraints | Source selection and KQL/filter expressions | Declarative Agent-shaped capabilities |
| Discovery | Fixed REST endpoint and schema | Runtime `tools/list` discovery |
| Billing | Microsoft 365 Copilot license or Copilot Retrieval API pay-as-you-go | Copilot Credits and Work IQ API spending policies |

## Inventory the current application

Before changing permissions or code, record:

- Delegated authentication flow and token acquisition.
- Microsoft Graph permissions such as `Files.Read.All`, `Sites.Read.All`, and `ExternalItem.Read.All`.
- Retrieval sources and source-specific request construction.
- KQL or `filterExpression` use.
- Requested metadata fields.
- SharePoint Embedded content and the URLs or SharePoint identifiers used to scope it.
- Query length, requested result count, throttling behavior, and retry policy.
- Whether Copilot Retrieval API access is covered by Microsoft 365 Copilot licensing or pay-as-you-go configuration.
- How extracts, citations, labels, and URLs are passed to downstream models.

Don't remove Microsoft Graph permissions that other Graph operations still require.

## Prepare Work IQ

1. [Enable your tenant for Work IQ](../enable-work-iq.md).
1. Add the delegated `WorkIQAgent.Ask` permission to the existing client application.
1. Grant tenant-wide admin consent.
1. Request the following OAuth scope:

   ```text
   api://workiq.svc.cloud.microsoft/WorkIQAgent.Ask
   ```

1. Confirm that the access token:
   - Is issued for the Work IQ resource.
   - Contains `WorkIQAgent.Ask` in the `scp` claim.
1. [Configure Work IQ MCP policy](policy-governance-mcp.md) in the Microsoft 365 admin center, if applicable.
1. [Set up usage-based billing for Copilot Credits](https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-copilot-credits-setup) and assign the migration users to a spending policy that includes Work IQ API.

Microsoft 365 Copilot licensing or Copilot Retrieval API pay-as-you-go configuration doesn't automatically configure Copilot Credits or a Work IQ API spending policy.

## Connect to Work IQ MCP

Configure your MCP client to use:

```text
https://workiq.svc.cloud.microsoft/mcp
```

OAuth protected-resource metadata is available at:

```text
https://workiq.svc.cloud.microsoft/.well-known/oauth-protected-resource
```

After connecting, call `tools/list` and confirm that `retrieve` is advertised. Don't cut over production traffic until the target tenant returns the tool and your client can bind to its advertised input schema.

## Convert requests

### Basic Microsoft 365 retrieval

Use `grounding`, the default strategy, when the query is fully satisfiable from the Microsoft 365 index.

#### Copilot Retrieval API concept

```http
POST /v1.0/copilot/retrieval
Content-Type: application/json

{
  "queryString": "What are the approved customer identity requirements?",
  "dataSource": "sharePoint",
  "resourceMetadata": ["title", "author"]
}
```

#### Work IQ MCP

```json
{
  "method": "tools/call",
  "params": {
    "name": "retrieve",
    "arguments": {
      "query": "What are the approved customer identity requirements?",
      "strategy": "grounding"
    }
  }
}
```

### Replace SharePoint source selection

Use `OneDriveAndSharePoint` capability scoping. Use a canonical site, library, folder, or file URL rather than a sharing link.

```json
{
  "method": "tools/call",
  "params": {
    "name": "retrieve",
    "arguments": {
      "query": "What are the approved customer identity requirements?",
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

The `retrieve` tool also supports SharePoint Embedded content that the signed-in user can access. Scope SharePoint and SharePoint Embedded retrieval with the supported URL or SharePoint ID fields.

Additional filter support is on the roadmap. Until the filters required by your application are available, validate every returned hit against the intended corpus and fail closed when the requested scope can't be represented.

### Add sources that weren't available through the document API

Use capability objects to constrain email, meetings, Teams messages, people, connectors, or Dataverse.

Use `copilot` for `GraphConnectors` and `Dataverse`.

## Convert response handling

The Copilot Retrieval API returns document hits and extracts. Work IQ returns:

- `markdown`: Grounding text for the model, with inline citations.
- `retrievalHits`: Structured source metadata for code.
- `resultCount`: Number of returned hits.
- `stoppedReason`: `completed`, `cancelled`, or `error`.
- `conversationId`: The conversation identifier, when returned.

Read the payload from:

```text
structuredContent
  -> application/vnd.ms-workiq.retrieval
```

Change the application pipeline as follows:

1. Send `markdown` to the downstream model or agent.
1. Resolve inline citation identifiers against `retrievalHits[].id`.
1. Use `retrievalHits`, not parsed Markdown, for URLs, entity identifiers, sensitivity labels, evaluation, and audit records.
1. Preserve `conversationId`, when returned, if the application needs to associate the retrieval turn with subsequent operations or diagnostics.
1. Treat `isError: true` or `stoppedReason: "error"` as failed retrieval.
1. Treat no hits as an empty result, not automatically as an infrastructure failure.

## Validate both paths before cutover

Run both implementations with the same signed-in test users and representative queries.

Separate the evaluation into two groups:

### Matched SharePoint comparison

Use a corpus and scope that both products can represent. Compare:

- Whether returned resources belong to the requested corpus.
- Relevant-source coverage.
- Citation correctness.
- Error and throttling behavior.
- Security-label preservation.
- Grounding usefulness to the downstream model.

### Broader agentic comparison

Evaluate Work IQ capabilities that don't have a direct document-Retrieval-API equivalent:

- Cross-source retrieval across files, email, meetings, Teams, and people.
- Connected enterprise sources with `copilot`.
- Citation-bearing Markdown that can be inserted directly into a model context.
- Source metadata for navigation, evaluation, and auditing.

Don't combine the two groups into one claim of strict feature equivalence. The broader comparison demonstrates the value of Work IQ for agentic workflows; the matched comparison measures migration compatibility.

## Validate authorization, governance, and billing

Confirm that:

- The token audience is Work IQ.
- The `scp` claim contains `WorkIQAgent.Ask`.
- `tools/list` advertises `retrieve`.
- Results contain only content the signed-in user can access.
- Location-scoped retrieval doesn't escape the intended corpus.
- Inline Markdown citations resolve to retrieval hits.
- Sensitivity labels and source URLs are preserved when supplied.
- Policy-denied calls fail clearly and aren't retried automatically.
- Copilot Credit usage is assigned to the expected spending policy, group, users, and Work IQ API service.

Start with a pilot security group. Expand only after authorization, relevance, latency, and cost meet your requirements.

## Cut over

1. Route the selected agentic retrieval traffic to Work IQ MCP.
1. Monitor errors, latency, grounding quality, and Copilot Credit consumption.
1. Keep the Copilot Retrieval API implementation for a time-bounded rollback period.
1. Remove the Copilot Retrieval API pay-as-you-go connection after no workloads use it.
1. Remove Graph permissions only when no other Graph operation requires them.
1. Remove legacy code and monitoring after the rollback period.

## Roll back

If you need to reverse the migration:

1. Route traffic back to the Copilot Retrieval API.
1. Keep Work IQ permission and spending-policy configuration in place while investigating unless security or cost requires immediate disablement.
1. To stop Work IQ usage for only the migration cohort, remove Work IQ API from that cohort's spending policy or remove the cohort from the policy.
1. Block Work IQ MCP tenant-wide only when you intend to stop it for the entire tenant.
1. Allow time for policy and billing configuration changes to propagate.

## Troubleshoot migration issues

| Symptom | Likely cause | Action |
|---|---|---|
| Work IQ isn't listed when adding API permissions | The Work IQ service principal hasn't been provisioned | Use Work IQ once or follow the manual provisioning steps in [Enable your tenant for Work IQ](../enable-work-iq.md) |
| `401 Unauthorized` | Wrong token audience, missing delegated scope, or invalid user sign-in | Request the Work IQ scope and inspect the token audience and `scp` claim |
| `403 Forbidden` or access denied | Missing consent, no spending-policy coverage, exhausted limit, user access issue, or policy denial | Check consent, Cost Management, user access, and Work IQ MCP policy |
| `retrieve` isn't returned by `tools/list` | The tool isn't available to the tenant or Work IQ MCP is blocked | Check tenant availability and the Agent Tools registry |
| SharePoint results are too broad | A legacy filter wasn't represented in the Work IQ request | Add URL or SharePoint-ID scoping and validate returned corpus membership |
| Connector request is rejected with `grounding` | Connectors require broader Copilot orchestration | Use `strategy: "copilot"` |
| Calls fail after billing setup | Configuration hasn't propagated or the user isn't covered | Verify group membership and Work IQ API policy selection, then allow for propagation |

## Related content

- [Use the `retrieve` tool in Work IQ MCP](retrieve.md)
- [Work IQ MCP overview](overview.md)
- [Work IQ MCP tool reference](tool-reference.md)
- [Work IQ API permissions reference](../permissions.md)
- [Policy governance for Work IQ MCP](policy-governance-mcp.md)
