---
title: Build declarative copilots from Microsoft 365 Admin Center
description: Microsoft 365 Admin Center provides creating a Copilot extension capability for administrators that are aiming to extend Graph Connectors. 
author: aycabas
ms.author: aycabas
ms.topic: overview
---

# Build declarative copilots from Microsoft 365 Admin Center

Graph Connectors are an excellent way to integrate enterprise data with Copilot, including declarative copilots. For enterprises that prefer a tailored approach, Graph Connectors can be used with declarative copilots to enable customized solutions that meet specific business purposes, allowing seamless interaction with business data.

The Microsoft 365 Admin Center now allows Global Administrators to create declarative copilots to extend existing Graph Connectors. Note that only Global Administrators can create, edit, and manage their declarative copilots directly from the Microsoft 365 Admin Center.

[!INCLUDE [preview-disclaimer-copilot](includes/preview-disclaimer-copilot.md)]

## Create declarative copilots from the Admin Center

Follow these steps to extend your existing Graph Connectors directly from the Microsoft 365 Admin Center:

1. Go to [the Admin Center](https://admin.microsoft.com/), select **Settings**, and then select **Search and intelligence** from the left-hand side menu.
2. Select **Data Sources**.
3. Under the Connections tab, select **Create Extension**.

    :::image type="content" source="assets/images/search-intelligence-page.png" alt-text="A screenshot that shows Search and intelligence page in the Admin Center." lightbox="assets/images/search-intelligence-page.png" :::

4. Provide the following fields to create the Copilot extension and select **Create**:

    - **Add connections:** An existing Graph Connector that is the data source of the extension.
    - **Change Icon:** Symbol-based icons representing the theme or function of the Copilot extension.
    - **Name:** The primary identifier that reflects the Copilot extension's functionality.
    - **Description**: A brief overview detailing the Copilot extension’s purpose and capabilities, setting the right user expectations.
    - **Give instructions for this extension:** Concise guidance on how to interact with the Copilot extension, including question formatting, interaction tips to maximize effectiveness, and do’s and don’ts.
    - **Conversation Starters:** Suggested prompts to initiate interactions, demonstrating the conversational scope and easing user engagement.

    :::image type="content" source="assets/images/create-extension-si.png" alt-text="A screenshot that shows success page." lightbox="assets/images/create-extension-si.png" :::

5. The Copilot extension for your Graph Connector is successfully created and ready to preview.

    :::image type="content" source="assets/images/extension-ready-si.png" alt-text="A screenshot that shows the Copilot extension panel." lightbox="assets/images/extension-ready-si.png" :::

6. Open Copilot for Microsoft 365 to start testing your Copilot extension. In Copilot for Microsoft 365, you can find your Copilot extension under the **Copilot chats and more** section.
     
    :::image type="content" source="assets/images/extension-ready-si.png" alt-text="A screenshot that shows the Copilot extension panel." lightbox="assets/images/si-preview.png" :::

## Manage and deploy Copilot extensions from the Admin Center

The administrators can manage the extensions from the **Extensions** tab.

:::image type="content" source="assets/images/manage-extensions-si.png" alt-text="A screenshot that shows the Extensions tab." lightbox="assets/images/manage-extensions-si.png" :::

Administrators can view the details of the extension by selecting the extension of their choice. From the extension overview panel, administrators can perform various actions:

* **Preview:** Preview the extension.
* **Delete:** Delete the extension.
* **Edit connections:** Edit the connections for the extension.
* **Edit description:** Edit the description of the extension.
* **Edit instruction:** Update the instruction details of the extension.
* **Edit conversation starters:** Edit the conversation starters of the extension.
* **Edit users:** Manage and update the user access for the extension.

To edit all extension details together, select **Edit**.

:::image type="content" source="assets/images/edit-extensions-si.png" alt-text="A screenshot that shows the edit Extensions panel." lightbox="assets/images/edit-extensions-si.png" :::

After editing the extension details, select **Deploy** to apply the changes.

:::image type="content" source="assets/images/deploy-extensions-si.png" alt-text="A screenshot that shows the editing panel and deploy button." lightbox="assets/images/deploy-extensions-si.png" :::

## See also

- [Declarative copilots for Microsoft 365 overview](./overview-declarative-copilot.md)
- [Microsoft Graph Connectors for Microsoft Copilot for Microsoft 365](overview-graph-connector.md)