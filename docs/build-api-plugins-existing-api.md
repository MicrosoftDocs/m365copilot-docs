---
title: Build API plugins from an existing API for Microsoft 365 Copilot
description: Learn how to build API plugins from an existing API for Microsoft 365 Copilot
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 05/19/2025
ms.topic: how-to
---

<!-- markdownlint-disable MD024 MD051 -->

# Build API plugins from an existing API for Microsoft 365 Copilot

[!INCLUDE [api-plugins-declarative-agents-only](includes/api-plugins-declarative-agents-only.md)]

[API plugins](overview-api-plugins.md) connect your existing REST API to Microsoft 365 Copilot. You can use the [Microsoft 365 Agents Toolkit](https://aka.ms/M365AgentsToolkit) to generate a plugin from an existing REST API with an [OpenAPI specification](https://www.openapis.org/what-is-openapi).

## Prerequisites

- Requirements specified in [Requirements for Copilot extensibility options](prerequisites.md#requirements-for-copilot-extensibility-options)
- An existing REST API with an OpenAPI specification (this walkthrough uses the [Budget Tracker sample API](https://github.com/microsoftgraph/msgraph-sample-copilot-plugin))
- [Visual Studio Code](https://code.visualstudio.com/)
- [Microsoft 365 Agents Toolkit](https://aka.ms/M365AgentsToolkit)

> [!TIP]
> For the best results, make sure that your OpenAPI specification follows the guidelines detailed in [How to make an OpenAPI document effective in extending Copilot](openapi-document-guidance.md).

To follow along with this guide, download the [Budget Tracker sample API](https://github.com/microsoftgraph/msgraph-sample-copilot-plugin) and configure it to run on your local development machine. Build the sample at least once to generate the **BudgetTracker.json** file for the API.

## Create the plugin

[!INCLUDE [toolkit-version-note](includes/toolkit-version-note.md)]

API plugins are a ZIP file that contains the following files.

- The OpenAPI specification for the REST API.
- An [API plugin manifest](api-plugin-manifest.md) that references the included OpenAPI specification and describes the available operations, authentication method, and response formats.

1. Open Visual Studio Code. If Agents Toolkit isn't already installed, see [Install Agents Toolkit](/microsoftteams/platform/toolkit/install-teams-toolkit) for installation instructions.

1. Select the **Microsoft 365 Agents Toolkit** icon in the left-hand Activity Bar.

1. Select **Create a New Agent/App** in the Agents Toolkit task pane.

    :::image type="content" source="assets/images/api-plugins/create-plugin-ttk.png" alt-text="A screenshot of the Agents Toolkit interface":::

1. Select **Declarative Agent**.

1. Select **Add an Action**, then select **Start with an OpenAPI Description Document**.

1. Select **Browse** and browse to the location of the OpenAPI specification from the Budget Tracker sample, located at **./openapi/BudgetTracker.json**.

1. Select all the operations to enable for the plugin.

    :::image type="content" source="assets/images/api-plugins/select-operations-ttk.png" alt-text="The Agents Toolkit UI to select operations":::

1. Choose a location for the API plugin project.

1. Enter `Budget Tracker` as a name for the plugin.

Once you complete these steps, Agents Toolkit generates the required files for the plugin and opens a new Visual Studio Code window with the plugin project loaded.

> [!NOTE]
> If your identity server requires Proof Key for Code Exchange (PKCE), uncomment the following line in **m365agents.yml** in the API plugin project.
>
> ```yml
> # isPKCEEnabled: true
> ```

## Package and sideload the plugin

1. Open the plugin project in Visual Studio Code.

1. Select the **Microsoft 365 Agents Toolkit** icon in the left-hand Activity Bar.

1. In the **Accounts** pane, select **Sign in to Microsoft 365**. (If you're already signed in continue to the next step).

1. Confirm that both **Custom App Upload Enabled** and **Copilot Access Enabled** display under your Microsoft 365 account. If they don't, check with your organization admin. See [Requirements for Copilot extensibility options](prerequisites.md#requirements-for-copilot-extensibility-options) for details.

1. In the **Lifecycle** pane, select **Provision**.

1. When asked to **Enter client id for OAuth registration...**, enter your **Plugin client ID**.

1. When asked to **Enter client secret for OAuth registration...**, enter your **Plugin client secret**.

1. Read the message in the dialog and select **Confirm** to continue.

1. Wait for the toolkit to report that is finished provisioning.

    :::image type="content" source="assets/images/api-plugins/provision-complete-ttk.png" alt-text="The Agents Toolkit message confirming successful provisioning":::

Your plugin is now available to test with your user account in Microsoft 365 Copilot in Microsoft Teams.

## Use the plugin

1. Open Teams in your browser and sign in with the Microsoft 365 account you used to upload your plugin.

1. Select **Chat** in the left-hand Activity Bar.

1. Select **Copilot** in the **Chat** pane.

1. Select **Budget Tracker** in the Agents list on the right-hand side. If the list isn't available, select the **Copilot chats and more** icon in the top right corner.

    :::image type="content" source="assets/images/api-plugins/copilot-agents.png" alt-text="A screenshot of the Agents list in Microsoft Teams":::

1. Ask a question about budgets. For example, try `How much is left in the Fourth Coffee lobby renovation budget?`. When prompted, choose **Always allow** or **Allow once** to proceed.

1. When asked to sign in, select **Sign in to Budget Tracker**.
