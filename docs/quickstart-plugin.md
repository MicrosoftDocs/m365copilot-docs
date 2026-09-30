---
title: "Quickstart: Package and Share an Existing Declarative Agent with Work IQ Dev Tools"
description: Use the local source for an existing declarative agent to validate, provision, package, deep-validate, share, and test it in Microsoft 365 Copilot.
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 09/30/2026
ms.topic: quickstart
---

# Quickstart: Create your first plugin with Work IQ Dev Tools

The [Work IQ Dev Tools](https://microsoft.github.io/wiqd/) command-line interface (CLI) enables you to package your existing declarative agent, skill, or Model Context Protocol (MCP) server as a plugin. The CLI can also validate the package, provision the plugin, and share it with your tenant.

> [!IMPORTANT]
> The entire `wiqd plugin` command tree is alpha and subject to change. If the steps in this walkthrough don't work, confirm current commands, supported component combinations, target experiences, and feature requirements in [Build a plugin with Work IQ Dev Tools](https://microsoft.github.io/wiqd/getting-started/build-a-plugin/).

## Prerequisites

- Node.js 24 or later
- PowerShell 7 or later (Windows only)
- A Microsoft 365 account with access to Copilot
- [Custom app upload enabled](prerequisites.md#microsoft-365-agents-toolkit-requirements) in your tenant
- A supported declarative agent source project

## Confirm that you have a supported starting project

Start from the root folder of a local declarative-agent source project. At minimum, the folder must contain:

```text
contoso-support-agent/
|-- appPackage/
|   |-- manifest.json
|   |-- declarativeAgent.json
|   `-- <the instruction and action files referenced by the manifests>
`-- <a supported lifecycle file>
```

The lifecycle file can be `m365agents.yml`, `m365agents.local.yml`, `teamsapp.yml`, or `teamsapp.local.yml`. The project can contain other folders and environment files.

This quickstart doesn't apply when:

- You have only a published agent or installed package and no local source project. Work IQ Dev Tools doesn't document a supported way to reconstruct the source project from a deployed title. Recover the original source repository or use the original authoring tool.
- The agent exists only in a managed authoring experience, such as Agent Builder or Copilot Studio. Use that tool's publishing and sharing procedure.
- You have a custom engine agent. This Work IQ Dev Tools route supports declarative agents.
- You have only an agent package `.zip`. The lifecycle commands require the source project and its lifecycle file.

If you don't have an existing project, you can follow the steps in [Tutorial: Create declarative agents by using Microsoft 365 Agents Toolkit and JSON](build-declarative-agents.md) to create a basic agent.

> [!NOTE]
> `wiqd plugin import` imports supported Open Plugin, Claude plugin, or Cursor plugin formats. It doesn't import an existing Microsoft 365 declarative agent project or package. For more information, see [Import / export (interop)](https://microsoft.github.io/wiqd/getting-started/build-a-plugin/#import--export-interop).

## Create your plugin

1. If you didn't already, [install Work IQ Dev Tools](https://microsoft.github.io/wiqd/getting-started/installation/).

1. Open your CLI in the directory where you want to create your plugin and sign in by using the following command:

    ```powershell
    wiqd auth login --interactive
    ```

1. In your CLI, launch GitHub Copilot by using the `copilot` command.

1. Ask GitHub Copilot to create a plugin with your existing declarative agent, skill, or MCP server. For example:

    ```powershell
    Create a plugin named My Plugin by using the agent in "..\My Agent"
    ```

## Validate the plugin project

If GitHub Copilot didn't validate the plugin automatically, ask it to validate the project before you provision or package it.

```powershell
Validate the plugin
```

## Provision the plugin

Ask GitHub Copilot to provision the plugin.

```powershell
Provision the plugin using the dev environment
```

Wait for provisioning to complete. You can now test your plugin in Microsoft Copilot Chat.

> [!IMPORTANT]
> The plugin must be provisioned by using the `dev` environment of the project to enable agent sharing.

## Package the plugin

Ask GitHub Copilot to package the plugin.

```powershell
Package the plugin
```

> [!IMPORTANT]
> You must provision the plugin before you package it. If you package before you provision, the resulting package is invalid.

## Validate the package

Ask GitHub Copilot to validate the packaged plugin. This step runs a more detailed validation against the generated ZIP package.

```powershell
Validate the packaged zip
```

## Share the plugin

You can now ask GitHub Copilot to share your package, either with specific users or groups inside your organization, or with your entire organization.

```powershell
Share the plugin with AmberR@contoso.com
```

Or:

```powershell
Share the plugin with my organization
```

> [!IMPORTANT]
> Sharing custom plugins depends on your organization's settings for allowing or blocking sharing of plugins. If you encounter any errors during this step, check with your admins. For more information, see [Agent sharing and publishing settings](/microsoft-365/copilot/agent-essentials/m365-agents-admin-guide#agent-sharing-and-publishing-settings).

## Publish the plugin to your organization's plugin registry

As an alternative to sharing your plugin, you can request to publish your plugin to your organization's plugin registry. Your organization admins can then review your plugin and approve or deny the request.

```powershell
Publish my package to the plugin registry so all users in my tenant can use it
```

## Delete the package (optional)

If this was just a test plugin, you can ask GitHub Copilot to remove the agent. This action deletes any provisioned cloud resources.

```powershell
Delete the plugin
```

## Related content

- [Build a plugin with Work IQ Dev Tools](https://microsoft.github.io/wiqd/getting-started/build-a-plugin/)
- [Choose how to publish and distribute](publish.md)
- [Monitor, update, and retire](improve-plugin.md)
