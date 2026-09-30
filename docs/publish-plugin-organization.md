---
title: Publish your plugin or agent to your organization
description: Publish or submit a tested Microsoft 365 Copilot plugin or agent through a supported organizational publishing route.
author: erikadoyle
ms.author: edoyle
ms.topic: how-to
ms.localizationpriority: medium
ms.date: 09/30/2026
---

# Publish your plugin or agent to your organization

Publish the exact tested plugin or agent artifact or version through the organizational route supported by its authoring tool and package type.

Depending on the route, publishing can place the plugin or agent in the org catalog or another organizational publishing flow. It doesn't complete any later administration actions required by that route.

## Before you begin

Have:

- The exact tested artifact or published version.
- The target organization and intended audience.
- A supported organizational publishing procedure for the package type and authoring tool.
- Required publishing metadata, support information, privacy statement, and terms of use.
- An owner for the publishing record and post-publishing handoff.

## Choose how to publish

| What did you build? | How to publish it | Result |
|---|---|---|
| A declarative agent supported by Work IQ Dev Tools | Follow the [Work IQ Dev Tools agent lifecycle](https://microsoft.github.io/wiqd/concepts/agent-lifecycle/). Validate, package, then run `wiqd agent publish --env prod`. | The package enters the organizational catalog flow. Follow the current Work IQ Dev Tools and catalog guidance for any required administrator review or availability actions before users install it. |
| An alpha plugin package built with `wiqd plugin` | WIQD doesn't provide a `wiqd plugin publish` command. Use `wiqd plugin share --scope tenant` for direct tenant sharing, or package the plugin and use the supported administrator custom-app upload procedure. | The plugin is shared directly or enters the administrator-managed custom-app flow. Public Marketplace submission remains a separate Partner Center process. |
| A supported Microsoft 365 app package built with Microsoft 365 Agents Toolkit | Follow [Publish apps using Microsoft 365 Agents Toolkit](/microsoftteams/platform/toolkit/publish) or your organization's supported custom-app publishing procedure. | The app package enters the applicable organizational publishing workflow. |
| An agent for Microsoft 365 Copilot built with Copilot Studio | Select **Publish**, then use the supported organizational availability option. See [Publish and configure an agent for Microsoft 365 Copilot](/microsoft-copilot-studio/microsoft-365-copilot-extend-with-agents#publish-and-configure-an-agent-for-microsoft-365-copilot). | The agent enters the applicable organizational publishing or review flow. |
| An agent built with Agent Builder | Follow [Submit agents from Agent Builder to your org catalog](agent-builder-submit-to-org-catalog.md). | The agent version is submitted for administrator review and publication through the organization catalog. |

> [!NOTE]
> **Don't see your authoring path?** Follow the publishing procedure documented for that package type and authoring tool. If it doesn't provide an organizational publishing route, don't substitute development sideloading or direct sharing for publishing.

## Publish your plugin or agent

1. Open the organizational publishing procedure for the selected route.
1. Select the exact tested artifact or version.
1. Provide the required identity, descriptions, assets, publisher, support, privacy, and terms-of-use information.
1. Submit or publish the plugin or agent to the intended organization.
1. Record the package or version, submission identifier, status, audience, and owner.

## Complete the post-publishing handoff

If the selected route requires administrator action, provide:

- The plugin or agent identity, package version, and submission or org-catalog identifier.
- The intended users or groups and supported Microsoft 365 experiences.
- Required licenses, permissions, consent, connections, external services, and customer configuration.
- Test evidence, known limitations, support information, and the update owner.

Publishing doesn't complete approval, acquisition, assignment, deployment, enablement, connection, blocking, or removal. Those actions belong to the administration and governance lifecycle when the selected route requires them.

Organizational publishing is complete when the tested plugin or agent has entered the supported org catalog or organizational publishing flow and its status and ownership are recorded.

Continue to [choose what happens after publishing](govern-plugins.md).

## Related content

- [Choose how to publish and distribute your plugin](publish.md)
- [Publish publicly through Microsoft Marketplace](publish-plugin-publicly.md)
- [For administrators](administrator-guide.md)
