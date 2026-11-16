---
title: Build Copilot-powered apps
description: Choose APIs to build applications that use Microsoft 365 work context and Copilot capabilities.
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 11/16/2026
ai-usage: ai-assisted
ms.topic: overview
---

# Build Copilot-powered apps

Use APIs when people interact with an application that you host and operate. This path gives you control over the user experience, runtime, deployment, and application lifecycle.

This is the **Build Copilot into your own app** path: build Copilot capabilities into an app you own with APIs, SDKs, Microsoft Graph and Work IQ app guidance. You finish with a choice of services, runtime, hosting, and application lifecycle.

To package supported skills, tools, and agents for Copilot instead, follow the [plugin path](/plugins/plugins-overview). A custom engine agent's orchestration, hosting, and runtime belong on this app path, even when the solution also has separately packaged capabilities.

## Choose an approach

| Option | Use it to |
|---|---|
| [Work IQ APIs](work-iq/index.md) | Use Microsoft 365 work context through supported REST, agent-to-agent (A2A), and MCP interfaces |
| [Microsoft 365 Copilot APIs](copilot-apis-overview.md) | Add Copilot search, retrieval, chat, export, meeting, reporting, and administration capabilities to an application |
| [Microsoft Graph](/graph/overview) | Access Microsoft 365 data and services through the permissions and API contracts your app requires |
| [Copilot API client libraries](sdks/api-libraries.md) | Call supported Microsoft 365 Copilot APIs from your application |
| [Custom engine agents](overview-custom-engine-agent.md) | Choose your own orchestration, models, hosting, and runtime |

You can combine these options. For example, an application can use the Microsoft 365 Copilot APIs for chat and retrieval and Work IQ APIs for Microsoft 365 work context.

## Understand how this path differs from plugins

Applications are experiences that you own and operate. They can use APIs, SDKs, models, services, and data sources without becoming plugins.

Calling an API doesn't by itself publish a plugin. A plugin uses the applicable package, registry, distribution, and governance lifecycle for supported Microsoft experiences. An application can interact with plugins or include separately packaged capabilities, but each part retains its own lifecycle requirements.

An API plugin is a technical action mechanism used by a declarative agent. It isn't a Microsoft 365 Copilot API or a peer capability in the plugin registry model.

## Plan the application

Before implementation:

- Define the users, customer outcome, and experience that you own.
- Choose the required APIs, SDKs, models, and hosting services.
- Plan user, application, and service identities.
- Identify permissions, consent, authentication, and connection requirements.
- Review data access, storage, retention, privacy, security, and responsible AI requirements.
- Define deployment environments, monitoring, support, versioning, and incident response.
- Determine whether any part of the solution also requires a plugin or Microsoft 365 app package.

If the solution also requires a plugin, see [Plan your plugin](/plugins/planning-guide).

## Follow the application lifecycle

1. Choose the APIs, SDKs, runtime, and hosting model.
1. Register and configure the required identities and permissions.
1. Build and test the application.
1. Validate behavior, security, data access, and supported environments.
1. Deploy through the distribution channel for your application platform.
1. Monitor availability, usage, cost, security, and quality.
1. Update, deprecate, or retire the solution according to your service lifecycle.

## Next step

Choose [Work IQ APIs](work-iq/index.md), [Microsoft 365 Copilot APIs](copilot-apis-overview.md), or a [custom engine agent approach](overview-custom-engine-agent.md) for your application plan.

## Related content

- [Ways to extend Microsoft 365 Copilot](overview.md)
- [For builders](/plugins/builder-guide)
- [Microsoft 365 Copilot APIs overview](copilot-apis-overview.md)
- [Work IQ APIs](work-iq/index.md)
- [Build a custom engine agent](overview-custom-engine-agent.md)
