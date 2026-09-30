---
title: Build or Reuse Connectors for a Microsoft 365 Copilot Plugin
description: Configure an existing connector or build the connector required by your Microsoft 365 Copilot plugin.
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 09/30/2026
ms.topic: how-to
---

# Build or reuse connectors

Use the connector decisions from your component plan to provide the required access to enterprise or third-party data and services. The connector must use a model supported by the target Microsoft experience and preserve the intended identity, permissions, and data boundaries.

## Reuse a connector or connection

Before you build a connector:

1. Search the [prebuilt connectors gallery](/microsoftsearch/connectors-gallery?context=/microsoft-365/copilot/extensibility/context).
1. Check whether an approved organizational connection already provides the required source and schema.
1. Confirm that the connector model supports the target Microsoft experiences and required freshness.
1. Review the connection owner, application identity, permissions, consent, security trimming, and support commitments.
1. Configure the connection for the development or test environment.
1. Test representative data retrieval and permission scenarios.

Don't create a duplicate connection when an approved connection already meets the requirement and operating model.

## Choose the implementation path

Use the connector model and implementation technology identified in the development plan.

| Requirement | Start with |
|---|---|
| Understand synced and federated connector models | [Microsoft 365 Copilot connectors overview](overview-copilot-connector.md) |
| Build a custom connector with Agents Toolkit | [Build your first custom Copilot connector](build-your-first-connector.md) |
| Build with the Microsoft Graph connectors SDK | [Microsoft Graph connectors SDK overview](/graph/custom-connector-sdk-sample-overview?context=/microsoft-365/copilot/extensibility/context) |
| Manage connections, schema, items, or external groups through an API | [Microsoft Graph connectors API overview](/graph/connecting-external-content-connectors-api-overview?context=/microsoft-365/copilot/extensibility/context) |
| Build a connector for people data | [Build connectors for people data](build-connectors-with-people-data.md) |
| Build a connector for Cowork | [Build plugins for Copilot Cowork](/microsoft-365-copilot/cowork/cowork-plugin-development) |
| Use a Power Platform connector | [Connectors documentation](/connectors/) |

GitHub Copilot can assist with connector code, schema, transformations, tests, and repository changes. The connector model and target experience determine the runtime, API, hosting, and administration requirements.

## Implement the connector

Complete the applicable work:

1. Configure the external source and development or test connection.
1. Implement authentication, consent, application identity, and user access.
1. Define the schema and map source data to the required model.
1. Configure security trimming, freshness, synchronization, or real-time retrieval.
1. Implement error handling, retries, monitoring, and support diagnostics.
1. Test representative content, permissions, updates, deletions, and failures.
1. Record the connection ID, environment, owner, dependencies, limitations, and support process.

## Confirm that the connector is working

The connector is ready for integration when:

- The required data is indexed or retrieved through the selected connector model.
- Authentication, consent, and permissions work for representative users.
- Security trimming prevents users from receiving content they can't access.
- Schema, freshness, updates, and deletions behave as required.
- Errors and unavailable source systems produce diagnosable behavior.
- Ownership, environment, connection identifiers, limitations, and test evidence are recorded.

Continue with any other components in the plan. When they are complete, [integrate and test your components](integrate-test-plugin-components.md).

## Related content

- [Connectors as plugin capabilities](plugin-type-connectors.md)
- [Build or reuse capabilities for your plugin](build-reuse-plugin.md)
- [Microsoft Graph connectors API](/graph/connecting-external-content-connectors-api-overview?context=/microsoft-365/copilot/extensibility/context)
- [Microsoft 365 Copilot extensibility samples](samples.md)
