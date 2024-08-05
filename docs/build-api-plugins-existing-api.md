---
title: Build API plugins from an existing API for Microsoft Copilot for Microsoft 365
description: Learn how to build API plugins from an existing API for Microsoft Copilot for Microsoft 365
author: jasonjoh
ms.author: jasonjoh
ms.topic: how-to
---

<!-- markdownlint-disable MD024 MD051 -->

# Build API plugins from an existing API for Microsoft Copilot for Microsoft 365

[API plugins](overview-api-plugins.md) connect your existing REST API to Microsoft Copilot for Microsoft 365. You can use the [Teams Toolkit](/microsoftteams/platform/toolkit/teams-toolkit-fundamentals) or [Kiota](/openapi/kiota/overview) to generate a plugin from an existing REST API with an [OpenAPI specification](https://www.openapis.org/what-is-openapi). Teams Toolkit offers a UI-based experience, while Kiota offers a command line interface (CLI) experience.

## Prerequisites

- Requirements specified in [Requirements for plugin development](prerequisites.md#requirements-for-plugin-development)
- An existing REST API with an OpenAPI specification (this walkthrough uses the [Budget Tracker sample API](https://github.com/microsoftgraph/msgraph-sample-copilot-plugin))
- [Visual Studio Code](https://code.visualstudio.com/) with Teams Toolkit version 5.9 or later (if using Teams Toolkit to generate the plugin)
- [Kiota](/openapi/kiota/install) (if using Kiota to generate the plugin)
- [Teams Toolkit CLI](/microsoftteams/platform/toolkit/teams-toolkit-cli) (if using Kiota to generate the plugin)

> [!TIP]
> For the best results, make sure that your OpenAPI specification follows the guidelines detailed in [How to make an OpenAPI document effective in extending Copilot](openapi-document-guidance.md).

To follow along with this guide, download the [Budget Tracker sample API](https://github.com/microsoftgraph/msgraph-sample-copilot-plugin) and configure it to run on your local development machine. Build and run the sample at least once to generate the **openapi.yml** file for the API.

## Create the plugin

API plugins are a ZIP file that contains the following files.

- The OpenAPI specification for the REST API.
- An [API plugin manifest](api-plugin-manifest.md) that references the included OpenAPI specification and describes the available operations, authentication method, and response formats.
- A [Teams app manifest](/microsoftteams/platform/resources/schema/manifest-schema) (for example, `manifest.json`) with a `copilotExtensions` property that references the API plugin manifest.

### [Teams Toolkit](#tab/toolkit)

1. Open Visual Studio Code. If Teams Toolkit isn't already installed, see [Install Teams Toolkit](/microsoftteams/platform/toolkit/install-teams-toolkit) for installation instructions.

1. Select **File** -> **Preferences** -> **Settings**. In the **Settings** window, search for `copilot` to locate the **Fx-extension: Develop Copilot Plugin** option. If not already enabled, enable the setting and restart Visual Studio Code.

1. Select the **Teams Toolkit** icon in the left-hand Activity Bar.

1. Select **Create a New App** in the Teams Toolkit task pane.

    :::image type="content" source="assets/images/api-plugins/create-plugin-ttk.png" alt-text="A screenshot of the Teams Toolkit interface":::

1. Select **API Plugin**.

1. Select **Start with an OpenAPI Description Document**.

1. Select **Browse** and browse to the location of the OpenAPI specification from the Budget Tracker sample, located at **./openapi/openapi.yml**.

1. Select all the operations to enable for the plugin.

    :::image type="content" source="assets/images/api-plugins/select-operations-ttk.png" alt-text="The Teams Toolkit UI to select operations":::

1. Choose a location for the API plugin project.

1. Enter `Budget Tracker` as a name for the plugin.

Once you complete these steps, Teams Toolkit generates the required files for the plugin and opens a new Visual Studio Code window with the plugin project loaded.

### [Kiota](#tab/kiota)

1. [Install Kiota](/openapi/kiota/install) if it isn't already installed.

1. Open your command-line interface (CLI) in the root of the Budget Tracker sample.

1. Create the plugin by using the following command.

    ```bash
    kiota plugin add --openapi ./openapi/openapi.yml --plugin-name "Budget Tracker" --type APIPlugin --output ./plugin
    ```

Once you complete these steps, Kiota generates the required files for the plugin in the **./plugin** folder.

> [!NOTE]
> The Budget Tracker sample already contains icon files (**color.png** and **outline.png**) in the **./plugin** folder. For your own plugin, see [Teams app manifest reference](/microsoftteams/platform/resources/schema/manifest-schema#icons) for guidelines on generating icons.

#### Add authentication details

For this step, you need the following values from client ID and client secret for your **Budget Tracker Plugin** app registration you created when [configuring the Budget Tracker sample](https://github.com/microsoftgraph/msgraph-sample-copilot-plugin#configure-the-sample).

- Tenant ID, client ID, and client secret from your **Budget Tracker Plugin** app registration
- API scope from your **Budget Tracker Service** app registration
- Your dev tunnel URL

1. Open your browser and browse to the [Teams apps developer portal](https://dev.teams.microsoft.com/tools). Select **Tools** in the left-hand navigation.

1. Select **OAuth client registration**. If you have no existing registrations, select **Register client**; if you have existing registrations, select **New OAuth client registration**.

1. Fill in the following fields.

    - **Registration name**: `Budget Tracker Auth`
    - **Base URL**: Your **API base URL**
    - **Restrict usage by org**: **My organization only**
    - **Restrict usage by app**: **Any Teams app**
    - **Client ID**: Your **Plugin client ID**
    - **Client secret**: Your **Plugin client secret**
    - **Authorization endpoint**: Your **Authorization endpoint**
    - **Token endpoint**: Your **Token endpoint**
    - **Refresh endpoint**: Your **Token endpoint**
    - **Scope**: Your **API scope**.

1. Select **Save**.

1. Copy the value of **OAuth client registration ID**.

1. Open **./plugin/budget tracker-apiplugin.json** and locate the following lines.

    ```json
    "auth": {
      "type": "None"
    },
    ```

1. Replace those lines with the following, replacing `OAUTH_CLIENT_ID` with the **OAuth client registration ID** you copied from the Teams developer portal.

    ```json
    "auth": {
      "type": "OAuthPluginVault",
      "reference_id": "OAUTH_CLIENT_ID"
    },
    ``

---

## Package and sideload the plugin

### [Teams Toolkit](#tab/toolkit)

1. Open the plugin project in Visual Studio Code.

1. Select the **Teams Toolkit** icon in the left-hand Activity Bar.

1. In the **Accounts** pane, select **Sign in to Microsoft 365**. (If you're already signed in continue to the next step).

1. Confirm that both **Custom App Upload Enabled** and **Copilot Access Enabled** display under your Microsoft 365 account. If they don't, check with your organization admin. See [Requirements for plugin development](prerequisites.md#requirements-for-plugin-development) for details.

1. In the **Lifecycle** pane, select **Provision**.

1. When asked to **Enter client id for OAuth registration...**, enter your **Plugin client ID**.

1. When asked to **Enter client secret for OAuth registration...**, enter your **Plugin client secret**.

1. Read the message in the dialog and select **Confirm** to continue.

1. Wait for the toolkit to report that is finished provisioning.

    :::image type="content" source="assets/images/api-plugins/provision-complete-ttk.png" alt-text="The Teams Toolkit message confirming successful provisioning":::

### [Kiota](#tab/kiota)

1. Use your preferred tool for creating ZIP files to add all of the files in the **./plugin** directory to a ZIP file named **BudgetTracker.zip**. For example, the following PowerShell command run in the **./plugin** directory generates the file.

    ```powershell
    Compress-Archive -Path * -DestinationPath ./BudgetTracker.zip
    ```

1. Use the following command to log in to the Teams Toolkit CLI.

    ```bash
    teamsapp account login
    ```

1. Use the following command to sideload the plugin for the logged in user.

    ```bash
    teamsapp install --file-path ./BudgetTracker.zip
    ```

---

Your plugin is now available to test with your user account in Copilot for Microsoft 365 in Microsoft Teams.

## Use the plugin

1. Open Teams in your browser and sign in with the Microsoft 365 account you used to upload your plugin.

1. Select **Chat** in the left-hand Activity Bar.

1. Select **Copilot** in the **Chat** pane.

1. In the message compose area, select the **Plugins** icon, then enable **Budget Tracker** in the **Plugins** flyout.

    :::image type="content" source="assets/images/api-plugins/enable-plugin.png" alt-text="The Budget Tracker plugin enabled in the Plugins flyout":::
