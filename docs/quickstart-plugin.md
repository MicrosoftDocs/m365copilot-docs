---
title: "Quickstart: Package an existing declarative agent as a plugin with Work IQ Dev Tools"
description: Use the local source for an existing declarative agent to validate, provision, package, and share it as a plugin with Work IQ Dev Tools.
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 11/09/2026
ms.topic: quickstart
---

# Quickstart: Package an existing declarative agent as a plugin with Work IQ Dev Tools

Use [Work IQ Dev Tools](https://microsoft.github.io/wiqd/) with the local source for an existing declarative agent to validate, provision, package, and share it as a plugin. This quickstart starts from an existing source project, not a new-agent scaffold.

> [!IMPORTANT]
> The entire `wiqd plugin` command tree is alpha and subject to change. If the steps in this walkthrough don't work, confirm current commands, supported component combinations, target experiences, and feature requirements in [Build a plugin with Work IQ Dev Tools](https://microsoft.github.io/wiqd/getting-started/build-a-plugin/).

> [!TIP]
> Watch Work IQ Dev Tools build a Copilot plugin from a prompt and publish it to the Agent Store in the [interactive demo](https://interactivedemo.microsoft.com/work-iq/dev-tools).

## Prerequisites

- [GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/install-copilot-cli) with an active Copilot subscription
- The WIQD coding-assistant plugin for GitHub Copilot CLI (see the installation commands in this section)
- Node.js 24.15 or later and npm, available on your `PATH`, for the WIQD CLI and installation script. These tools aren't required just to begin conversational or file-based authoring.
- PowerShell 7 or later (Windows only)
- A Microsoft 365 account with access to Copilot
- [Custom app upload enabled](prerequisites.md#microsoft-365-agents-toolkit-requirements) in your tenant
- A supported declarative agent source project

After installing GitHub Copilot CLI, install the WIQD coding-assistant plugin:

```powershell
copilot plugin install wiqd@awesome-copilot
```

Alternatively, add the WIQD marketplace and install the plugin from there:

```powershell
copilot plugin marketplace add microsoft/wiqd
copilot plugin install wiqd@wiqd
```

Start a new GitHub Copilot CLI session after installation.

The coding-assistant plugin provides authoring guidance; it doesn't install the `wiqd` CLI. Install the CLI separately before running validation and lifecycle commands. Confirm the CLI installation with `wiqd --version` and check its prerequisites with `wiqd doctor`.

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

    ```text
    Create a plugin named My Plugin by using the agent in "..\My Agent"
    ```

## Validate the plugin project

Explicitly select offline source validation before you provision or package the plugin. In GitHub Copilot CLI, ask:

```text
Validate the plugin source offline in the dev environment
```

Select `--mode source` explicitly for offline validation (`wiqd plugin validate --mode source --env dev`); omitting the mode defaults to package validation. Source validation checks saved declarative-agent source and references, plus basic plugin project guards. It doesn't fully validate skills, root connectors, or the complete app package, and a pass doesn't establish runtime behavior.

## Provision the plugin

> [!IMPORTANT]
> This example uses the standard shared `dev` environment. Check the effective lifecycle configuration and selected environment file under `environmentFolderPath` (default `env`) for `AGENT_SCOPE=shared` before provisioning for sharing. An environment named `dev` alone doesn't establish shared scope. Keep the same environment for provisioning, packaging, validation, and sharing.

Ask GitHub Copilot to provision the plugin.

```text
Provision the plugin using the dev environment
```

Wait for provisioning to complete. Provisioning doesn't establish that every plugin capability is available in Copilot Chat; support depends on the component and target Microsoft 365 experience.

## Package the plugin

Ask GitHub Copilot to package the plugin.

```text
Package the plugin using the dev environment
```

> [!IMPORTANT]
> You must provision the plugin before you package it. If you package before you provision, the resulting package is invalid.

## Validate the package

After packaging, locate the generated ZIP and confirm that the file exists. In GitHub Copilot CLI, provide its actual path and ask:

```text
Validate this existing plugin ZIP in package mode using the dev environment
```

Package validation uses `--mode package` and an existing ZIP supplied through `--package-file`, not an automatic build. Review the returned verdict and findings. Exit code `0` means the selected checks passed; warnings can still be reported. Blocking findings or incomplete results aren't a pass, and package validation doesn't prove runtime behavior.

The current validation modes are `source`, `package`, and `marketplace`. `source` is the explicit offline check. The default, `package`, requires an existing ZIP, uploads a captured copy to the Microsoft 365 validation service, and might require authentication. `marketplace` adds policy and evidence checks; it isn't official store approval. Validation doesn't automatically build a ZIP, sign you in, or provision the plugin. For details, see [Validation and MVL](https://microsoft.github.io/wiqd/concepts/validation-mvl/).

## Share the plugin

You can now ask GitHub Copilot to share your plugin deployment, either with specific users inside your organization or with your entire organization. Confirm `AGENT_SCOPE=shared` in the selected environment before sharing. The sharing audience (`--scope users` or `--scope tenant`) doesn't change the deployment scope.

```text
Share the plugin with AmberR@contoso.com using the dev environment
```

Or:

```text
Share the plugin with my organization using the dev environment
```

> [!IMPORTANT]
> Sharing custom plugins depends on your organization's settings for allowing or blocking sharing of plugins. If you encounter any errors during this step, check with your admins. For more information, see [Agent sharing and publishing settings](/microsoft-365/copilot/agent-essentials/m365-agents-admin-guide#agent-sharing-and-publishing-settings).

## Publish the plugin to your organization's plugin registry

As an alternative to sharing your plugin, you can request to publish your plugin to your organization's plugin registry. Your organization admins can then review your plugin and approve or deny the request.

```text
Submit my plugin to the organization catalog for admin approval using the dev environment
```

Sharing grants direct access; catalog submission is a separate operation and isn't administrator approval or completed user installation.

## Delete the package (optional)

If this plugin is just a test plugin, ask GitHub Copilot to remove the plugin. This action deletes any provisioned cloud resources.

```text
Delete the plugin using the dev environment
```

## Related content

- [Build a plugin with Work IQ Dev Tools](https://microsoft.github.io/wiqd/getting-started/build-a-plugin/)
- [Choose how to publish and distribute](publish.md)
- [Monitor, update, and retire](improve-plugin.md)
