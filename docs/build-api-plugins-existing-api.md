---
title: Build API plugins from an existing API for Microsoft 365 Copilot
description: Learn how to build API plugins from an existing API for Microsoft 365 Copilot
author: jasonjoh
ms.author: jasonjoh
ms.date: 10/08/2024
ms.topic: how-to
---

<!-- markdownlint-disable MD024 MD051 -->

# Build API plugins from an existing API for Microsoft 365 Copilot

[!INCLUDE [api-plugins-declarative-agents-only](includes/api-plugins-declarative-agents-only.md)]

[API plugins](overview-api-plugins.md) connect your existing REST API to Microsoft 365 Copilot. You can use the [Teams Toolkit](/microsoftteams/platform/toolkit/teams-toolkit-fundamentals) to generate a plugin from an existing REST API with an [OpenAPI specification](https://www.openapis.org/what-is-openapi).

## Prerequisites

- Requirements specified in [Requirements for plugin development](prerequisites.md#requirements-for-developing-agents-and-plugins)
- An existing REST API with an OpenAPI specification (this walkthrough uses the [Budget Tracker sample API](https://github.com/microsoftgraph/msgraph-sample-copilot-plugin))
- [Visual Studio Code](https://code.visualstudio.com/) with Teams Toolkit version 5.9 or later
- [Teams Toolkit](/microsoftteams/platform/toolkit/install-teams-toolkit)
- Optional: [Microsoft Kiota Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=ms-graph.kiota)

> [!TIP]
> For the best results, make sure that your OpenAPI specification follows the guidelines detailed in [How to make an OpenAPI document effective in extending Copilot](openapi-document-guidance.md).

To follow along with this guide, download the [Budget Tracker sample API](https://github.com/microsoftgraph/msgraph-sample-copilot-plugin) and configure it to run on your local development machine. Build and run the sample at least once to generate the **openapi.yml** file for the API.

## Enable plugin development in Teams Toolkit

1. Open Visual Studio Code. If Teams Toolkit isn't already installed, see [Install Teams Toolkit](/microsoftteams/platform/toolkit/install-teams-toolkit) for installation instructions.

1. Select **File** -> **Preferences** -> **Settings**. In the **Settings** window, search for `copilot` to locate the **Fx-extension: Develop Copilot Plugin** option. If not already enabled, enable the setting.

1. In the **Settings** window, search for `kiota` to locate the **Fx-extension: Enable Microsoft Kiota** option. If you want to enable Kiota, enable this option. Otherwise, disable it. For details, see [Benefits of enabling Microsoft Kiota](#benefits-of-enabling-microsoft-kiota).

1. If you made any changes to settings, restart Visual Studio Code before proceeding.

### Benefits of enabling Microsoft Kiota

Enabling Microsoft Kiota in Teams Toolkit has the following benefits.

- The user interface for selecting operations from the OpenAPI document is replaced with an API explorer that is better suited for large OpenAPI documents.
- The developer is able to search for public OpenAPI descriptions using [Kiota's search command](/openapi/kiota/using#description-search).

## Create the plugin

API plugins are a ZIP file that contains the following files.

- The OpenAPI specification for the REST API.
- An [API plugin manifest](api-plugin-manifest.md) that references the included OpenAPI specification and describes the available operations, authentication method, and response formats.
- A [Teams app manifest](/microsoftteams/platform/resources/schema/manifest-schema) (for example, `manifest.json`) with a `copilotExtensions` property that references the API plugin manifest.

1. Open Visual Studio Code. If Teams Toolkit isn't already installed, see [Install Teams Toolkit](/microsoftteams/platform/toolkit/install-teams-toolkit) for installation instructions.

1. Select the **Teams Toolkit** icon in the left-hand Activity Bar.

1. Select **Create a New App** in the Teams Toolkit task pane.

    :::image type="content" source="assets/images/api-plugins/create-plugin-ttk.png" alt-text="A screenshot of the Teams Toolkit interface":::

1. Select **Agent**, then select **Declarative Agent**.

1. Select **Add plugin**, then select **Start with an OpenAPI Description Document**.

The next steps differ depending on if you enabled Microsoft Kiota or not.

### [Teams Toolkit without Kiota](#tab/toolkit)

1. Select **Browse** and browse to the location of the OpenAPI specification from the Budget Tracker sample, located at **./openapi/openapi.yml**.

1. Select all the operations to enable for the plugin.

    :::image type="content" source="assets/images/api-plugins/select-operations-ttk.png" alt-text="The Teams Toolkit UI to select operations":::

1. Choose a location for the API plugin project.

1. Enter `Budget Tracker` as a name for the plugin.

### [Teams Toolkit with Kiota](#tab/kiota)

1. Select **Browse path** and browse to the location of the OpenAPI specification from the Budget Tracker sample, located at **./openapi/openapi.yml**.

1. The side bar view changes to the Kiota API explorer. Use the **Add all** button to select all the operations to enable for the plugin.

    :::image type="content" source="assets/images/api-plugins/select-operations-kiota.png" alt-text="The Kiota UI to select operations":::

1. Select the **Generate** button in the Kiota API explorer.

    :::image type="content" source="assets/images/api-plugins/generate-plugin-kiota.png" alt-text="The Generate button in the Kiota API explorer":::

1. Choose a location for the API plugin project.

1. Enter `Budget Tracker` as a name for the plugin.

---

Once you complete these steps, Teams Toolkit generates the required files for the plugin and opens a new Visual Studio Code window with the plugin project loaded.

> [!NOTE]
> If your identity server requires Proof Key for Code Exchange (PKCE), uncomment the following line in **teamsapp.yml** in the API plugin project.
>
> ```yml
> # isPKCEEnabled: true
> ```

## Package and sideload the plugin

1. Open the plugin project in Visual Studio Code.

1. Select the **Teams Toolkit** icon in the left-hand Activity Bar.

1. In the **Accounts** pane, select **Sign in to Microsoft 365**. (If you're already signed in continue to the next step).

1. Confirm that both **Custom App Upload Enabled** and **Copilot Access Enabled** display under your Microsoft 365 account. If they don't, check with your organization admin. See [Requirements for plugin development](prerequisites.md#requirements-for-developing-agents-and-plugins) for details.

1. In the **Lifecycle** pane, select **Provision**.

1. When asked to **Enter client id for OAuth registration...**, enter your **Plugin client ID**.

1. When asked to **Enter client secret for OAuth registration...**, enter your **Plugin client secret**.

1. Read the message in the dialog and select **Confirm** to continue.

1. Wait for the toolkit to report that is finished provisioning.

    :::image type="content" source="assets/images/api-plugins/provision-complete-ttk.png" alt-text="The Teams Toolkit message confirming successful provisioning":::

Your plugin is now available to test with your user account in Microsoft 365 Copilot in Microsoft Teams.

## Use the plugin

1. Open Teams in your browser and sign in with the Microsoft 365 account you used to upload your plugin.

1. Select **Chat** in the left-hand Activity Bar.

1. Select **Copilot** in the **Chat** pane.

1. Select **Budget Tracker** in the Agents list on the right-hand side. If the list isn't available, select the **Copilot chats and more** icon in the top right corner.

    :::image type="content" source="assets/images/api-plugins/copilot-agents.png" alt-text="A screenshot of the Agents list in Microsoft Teams":::

1. Ask a question about budgets. For example, try `How much is left in the Fourth Coffee lobby renovation budget?`. When prompted, choose **Always allow** or **Allow once** to proceed.

1. When asked to sign in, select **Sign in to Budget Tracker**.
