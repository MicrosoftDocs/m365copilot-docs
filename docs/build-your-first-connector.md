---
title: Build Your First Connector for Microsoft 365 Copilot
description: Learn how to build your first Microsoft 365 Copilot connector by using the Microsoft 365 Agents Toolkit.
author: RachitMalik12
ms.author: malikrachit
ms.localizationpriority: medium
ms.date: 05/19/2025
ms.topic: how-to
---

# Build your first custom Copilot connector using Microsoft 365 Agents Toolkit

[Microsoft 365 Copilot connectors](overview-copilot-connector.md)(formerly Microsoft Graph connectors) enable you to ingest your line-of-business data into Microsoft Graph to make it available to Microsoft 365 Copilot. When your data is ingested, Copilot can reason over the data and use it to respond to user prompts.

The [Microsoft 365 Agents Toolkit](https://aka.ms/M365AgentsToolkit) includes a template that you can use to build Copilot connectors. The Copilot connector template is designed to help you build connectors quickly by using the Copilot connector API in Microsoft Graph. The template scaffolds a connector that pulls data from the GitHub API into Microsoft Graph. After you build your connector, you can run it locally via the F5 experience or deploy it via Azure Functions.

This article provides a walkthrough of the steps to build your first Copilot connector by using the Microsoft 365 Agents Toolkit in Visual Studio Code.

## Prerequisites

The following prerequisites are required to complete the steps in this article:

- [Visual Studio Code](https://code.visualstudio.com/)
- [Microsoft 365 Agents Toolkit for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=TeamsDevApp.ms-teams-vscode-extension)
- [Azure Functions Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions)
- [Node.js](https://nodejs.org/), supported versions: 18, 20, 22
- A [Microsoft 365 Copilot license](https://www.microsoft.com/microsoft-365/copilot/enterprise) or a [Microsoft 365 Developer tenant](https://developer.microsoft.com/microsoft-365/dev-program) with [uploading custom apps enabled](/microsoftteams/platform/m365-apps/prerequisites#prepare-a-developer-tenant-for-testing).

    > [!NOTE]
    > To test your connector in Microsoft 365 Copilot Chat, you need a Microsoft 365 Copilot license.

- You must have the ability to admin consent in Microsoft Entra admin center. You must be or complete this step as a Global administrator. See [Grant tenant-wide admin consent to an application](/entra/identity/enterprise-apps/grant-admin-consent#prerequisites) for the required roles.
- Your user must have the role Search Administrator, Cloud Application Developer to see the connector in the Microsoft 365 admin center.

## Build your first custom connector

Use the following steps to build your first connector.

1. In the sidebar in Visual Studio Code, choose the **Microsoft 365 Agents Toolkit > Create a New Agent/App**.

    :::image type="content" source="assets/images/atk-copilot-connectors/create-new-app.png" alt-text="Microsoft 365 Agents Toolkit menu":::

1. Select **Copilot connector**.

    :::image type="content" source="assets/images/atk-copilot-connectors/select-copilot-connector.png" alt-text="Project picker":::

1. Enter `Github Issues` as the connector name.

1. Create a tenant-wide unique ID for the connector. For details about the requirements for the connector ID, see the [id property of the externalConnection resource](/graph/api/resources/externalconnectors-externalconnection#properties).

1. Select **Default folder** to store your project root folder in the default location.

1. Configure the repository you want to pull issues from by using the `CONNECTOR_REPOS` field from in the `.env.local` file.

    :::image type="content" source="assets/images/atk-copilot-connectors/env-local.png" alt-text="env-local-file":::

1. Press **F5** to run the connector locally. The toolkit creates a Microsoft Entra app for your connector and starts the provisioning process.

1. Follow the link in the terminal to the Microsoft Entra admin center and select **Grant admin consent**.

    > [!NOTE]
    > To complete this step, you must be a Global Admin in your organization.
    >
    > :::image type="content" source="assets/images/atk-copilot-connectors/admin-consent.png" alt-text="The Grant admin consent button in the Microsoft Entra admin center":::

1. The app creates the connection, registers the schema, and then does a full crawl to ingest items.

    > [!NOTE]
    > Registering the schema might take up to 10 mins.

1. After the full crawl completes, in the Microsoft 365 admin center:

    - In the left pane, go to **Settings** > **Search & Intelligence** > **Data sources**.
    - Find your Connection ID.
    - Choose **Include connector results**.

        :::image type="content" source="assets/images/atk-copilot-connectors/include-connector-results.png" alt-text="The Include connector results button in the Microsoft 365 admin center":::

        > [!NOTE]
        > To complete this step, you must be a Search Admin. This step enables results from the connector to be used by Microsoft 365 Copilot Chat. If you are only going to use this connector as a [knowledge source for a declarative agent](knowledge-sources.md#copilot-connectors), this step isn't necessary.

1. To verify that the items were indexed, choose the relevant connector name. Check the **Items indexed** field to see how many issues were indexed.

    :::image type="content" source="assets/images/atk-copilot-connectors/items-indexed.png" alt-text="Github issues connector with 11 items indexed displayed":::

1. Open Microsoft 365 Copilot Chat and test a sample prompt such as "What are the two latest GitHub Issues?". Notice the external item citations at the bottom of the page. These citations are the data from your Copilot connector.

    :::image type="content" source="assets/images/atk-copilot-connectors/copilot-output.png" alt-text="M365 Copilot Output with Github issues":::

## Customize the template for your data source

To customize this template for your custom data, you can update the content of the following folders:

- `src/custom`: Contains custom code to gather and transform data to be ingested into Microsoft Graph. Although the example uses the GitHub issues API, you can replace it with any other API.

- `src/references`: Includes the schema definition of the connector. Adjust it to match the data and metadata you want to ingest.

- `src/models`: Contains the model definition for an internal representation of the data and configuration. Both models can be customized to fit your needs.

In addition to these folders, you can customize other parts of the code, depending on the scenario. You can search the code for comments starting with the `[Customization point]` string. These comments indicate areas for potential customization.

## Related content

- [Copilot connectors API](/graph/connecting-external-content-connectors-api-overview?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext)
- [Microsoft 365 Agents Toolkit overview](https://aka.ms/M365AgentsToolkit)
- [Create declarative agents using Microsoft 365 Agents Toolkit](build-declarative-agents.md)
- [Copilot connector samples](samples.md#copilot-connector-samples)
- [Community samples](https://github.com/pnp/graph-connectors-samples)
