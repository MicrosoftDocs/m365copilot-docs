---
title: Publish your plugin or agent to your organization
description: Submit a tested plugin or agent to your organization, understand Tools Registry and Agent Registry, and hand off approval and user availability to your administrator.
author: erikadoyle
ms.author: edoyle
ms.topic: how-to
ms.localizationpriority: medium
ms.date: 11/16/2026
ai-usage: ai-assisted
ms.custom: msecd-doc-authoring-1013
---

# Publish your plugin or agent to your organization

Submit your tested plugin or agent through a supported authoring tool, or give your plugin package to an administrator for upload. Choose the procedure that supports your item and target Microsoft experience.

> [!NOTE]
> Publishing isn't administrator approval or user availability. A successful submission can still need review, installation, user scoping, consent, or connections before anyone can use it.

## Before you begin

Ensure you have:

- The plugin package or agent version that passed the applicable [validation and testing](validate-plugin.md).
- The organization and users you want to share it with.
- The name, description, support details, privacy statement, and terms of use required by your publishing method.
- A person responsible for setup and support.

## Where your submission appears

Plugins published or shared to the plugin registry are reviewed through Tools Registry in the Microsoft 365 admin center. Agent-specific controls remain in Agent Registry.

| Inventory | Where to find it | What to review |
|---|---|---|
| Tools Registry | **Agents** > **Tools** > **Registry** | The plugin and its included capabilities |
| Agent Registry | **Agents** > **All agents** > **Registry** | The agent's settings and agent-specific controls; a packaged agent can also have a record here |

These are different inventories, not two names for one catalog. An agent's presence in Agent Registry doesn't mean that a plugin package has completed review or is available to users.

## Choose a submission method

| How you created the package | What to do |
|---|---|
| **Work IQ Dev Tools** using `wiqd plugin` (recommended pro-code route for supported scenarios) | Use `wiqd plugin publish --env <env>` to submit the provisioned plugin to the organization app catalog for administrator approval. Replace `<env>` with the tested environment. Direct sharing with `wiqd plugin share` is a separate operation, not catalog submission. Follow the [Work IQ Dev Tools plugin guide](https://microsoft.github.io/wiqd/getting-started/build-a-plugin/#publishing-paths). |
| **Microsoft 365 Agents Toolkit** | Follow the [Agents Toolkit publishing instructions](/microsoftteams/platform/toolkit/publish). Confirm that the procedure supports your plugin package and intended Microsoft 365 experience. |
| **Administrator upload** | Give the tested package to your administrator. They use **Agents** > **Tools** > **Registry** > **Upload**, as described in [Submit through administrator upload](#submit-through-administrator-upload). |
| **Another supported tool** | Follow that tool's documented plugin publishing or sharing instructions. Confirm that they support your package and intended audience. |

> [!NOTE]
> For an existing standalone agent, follow the submission procedure for [Agent Builder](agent-builder-submit-to-org-catalog.md), [Copilot Studio](/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams), or the [Work IQ Dev Tools agent lifecycle](https://microsoft.github.io/wiqd/concepts/agent-lifecycle/). Don't assume that an agent-only procedure supports a composed plugin package.

For automated candidate testing and approved release submission through WIQD, see [Configure plugin CI/CD with Work IQ Dev Tools](plugin-ci-cd.md).

## Submit through your authoring tool

1. Open the instructions for your selected method.
1. Select the tested package or agent version and confirm any required environment settings.
1. Provide the details required by that method.
1. Submit the item to the intended organization.
1. Check the result and note any remaining steps.

Keep the tested source, package version, and environment configuration consistent with the submission. A tool that publishes a project doesn't necessarily submit a previously captured package unchanged, so confirm which version it submits.

## Submit through administrator upload

Give your administrator the tested package, its metadata and version, and the intended users or groups. In the Microsoft 365 admin center, the administrator:

1. Opens **Agents** > **Tools** > **Registry** and selects **Upload**.
1. Uploads the plugin and reviews its included components.
1. Scopes the intended users.
1. Reviews the configuration and completes installation.

Follow [Upload plugins or skills](/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers#upload-plugins-or-skills) for the administrator procedure. Uploading alone doesn't complete component review, user scoping, or installation.

## Check the result

| Status | What it means | What to do next |
|---|---|---|
| **Submitted or in review** | The plugin or agent is awaiting review or approval. Publication isn't complete. | Track the submission and address any requested changes. |
| **Published** | The plugin or agent is published through the selected organizational method. | Confirm how intended users can find it and complete any required availability steps. |
| **Shared** | Direct access was granted to the selected audience. Sharing isn't organization app-catalog submission and doesn't complete required availability steps. | Verify access and any required setup. |
| **Rejected or blocked** | A requirement prevents publishing or sharing. | Resolve the issue and repeat any affected validation or tests before trying again. |

Keep the package or agent identity, version, submission identifier if provided, status, and intended audience with your release information.

## Hand off user availability

Users might still need installation, access approval, sign-in, or connection setup before they can use the plugin or agent.

Give the administrator or person responsible for setup:

- The package or agent identity, version, and publishing or sharing result.
- The intended users or groups.
- Required configuration and known limitations.
- The support contact.

Use the [Manage plugins with Microsoft Agent 365](govern-plugins.md#manage-plugins-with-microsoft-agent-365) administration map to find the page for the package and any separately controlled capabilities. If the submission is still under review, track it before proceeding with steps that require a published item.

## Next step

> [!div class="nextstepaction"]
> [Make your plugin available](deploy-plugin.md)

## Related content

- [Choose how to publish and distribute your plugin](publish.md)
- [Publish your plugin through Microsoft Marketplace](publish-plugin-publicly.md)
- [Make your plugin available and govern access](govern-plugins.md)
