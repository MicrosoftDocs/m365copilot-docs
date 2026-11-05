---
title: Publish your plugin to your organization
description: Publish or share a tested Microsoft 365 Copilot plugin package with users in your organization through a supported method.
author: erikadoyle
ms.author: edoyle
ms.topic: how-to
ms.localizationpriority: medium
ms.date: 11/03/2026
ai-usage: ai-assisted
ms.custom: msecd-doc-authoring-1013
---

# Publish your plugin to your organization

Publish or share your tested plugin package with users in your organization. Follow the instructions for the tool you used to create the package.

An administrator might need to complete extra steps before users can use it. The steps depend on how you publish or share the plugin and your organization's settings.

## Before you begin

Ensure you have:

- The plugin package and version that passed [validation and testing](validate-plugin.md).
- The organization and users you want to share it with.
- The name, description, support details, privacy statement, and terms of use required by your publishing method.
- A person responsible for setup and support.

## Choose how to publish or share

| How you created the package | What to do |
|---|---|
| **Work IQ Dev Tools** using `wiqd plugin` | Use `wiqd plugin publish --env <env>` to submit the provisioned plugin to the organization app catalog for administrator approval. Use `wiqd plugin share --scope tenant` for direct tenant-wide access, or give the package to an administrator for upload. Follow the [Work IQ Dev Tools plugin guide](https://microsoft.github.io/wiqd/getting-started/build-a-plugin/). |
| **Microsoft 365 Agents Toolkit** | Follow the [Agents Toolkit publishing instructions](/microsoftteams/platform/toolkit/publish). Confirm that the procedure supports your plugin package and intended Microsoft 365 experience. |
| **Administrator upload** | Give the tested package to your administrator. They follow [Upload plugins or skills](/microsoft-365/admin/manage/manage-plugins-skills-mcp-servers?context=/microsoft-365/copilot/extensibility/context#upload-plugins-or-skills). |
| **Another supported tool** | Follow that tool's documented plugin publishing or sharing instructions. Confirm that they support your package and intended audience. |

> [!NOTE]
> This article covers plugin packages. For an existing standalone (unpackaged) agent, follow the guidance for [Agent Builder](agent-builder-share-manage-agents.md), [Copilot Studio](/microsoft-copilot-studio/agents-experience/publication-fundamentals-publish-channels), or the [Work IQ Dev Tools agent lifecycle](https://microsoft.github.io/wiqd/concepts/agent-lifecycle/).

For automated candidate testing and approved release submission through WIQD, see [Configure plugin CI/CD with Work IQ Dev Tools](plugin-ci-cd.md).

## Publish or share your plugin

1. Open the instructions for your selected method.
1. Select the exact tested plugin package and version.
1. Provide the details required by that method.
1. Submit, upload, publish, or share the package with the intended organization or audience.
1. Check the result and note any remaining steps.

The selected method or your organization's policy determines whether an administrator must approve the package.

## Check the result

| Status | What it means | What to do next |
|---|---|---|
| **Submitted or in review** | The package is awaiting review or approval. Publication isn't complete. | Track the submission and address any requested changes. |
| **Published** | The plugin is published through the selected organizational method. | Confirm how intended users can find it and complete any required availability steps. |
| **Shared** | Direct access was granted to the selected audience. Sharing isn't organization app-catalog submission and doesn't complete required availability steps. | Verify access and any required setup. |
| **Rejected or blocked** | A requirement prevents publishing or sharing. | Resolve the issue and repeat any affected validation or tests before trying again. |

Keep the package identity, version, submission identifier if provided, status, and intended audience with your release information.

## Next step: Make your plugin available

Users might still need installation, access approval, sign-in, or connection setup before they can use the plugin.

Give the administrator or person responsible for setup:

- The package identity, version, and publishing or sharing result.
- The intended users or groups.
- Required configuration and known limitations.
- The support contact.

After you publish or share your plugin, use the [Manage plugins with Microsoft Agent 365](govern-plugins.md#manage-plugins-with-microsoft-agent-365) administration map to find the page for the package and any separately controlled capabilities. Then follow [Make your plugin available](deploy-plugin.md). If the submission is still under review, track it before proceeding with steps that require a published package.

## Related content

- [Publish or share your plugin](publish.md)
- [Publish your plugin through Microsoft Marketplace](publish-plugin-publicly.md)
- [Make your plugin available and govern access](govern-plugins.md)
