---
title: Build declarative copilots from Microsoft 365 Admin Center
description: Microsoft 365 Admin Center provides creating a Copilot extension capability for administrators that are aiming to extend Graph Connectors. 
author: aycabas
ms.author: aycabas
ms.topic: overview
---

# Build declarative copilots from Microsoft 365 Admin Center

The Microsoft 365 Admin Center offers an option for administrators to create declarative copilots to extend existing Graph Connectors. Administrators can create, edit, and manage their declarative copilots directly from the Microsoft 365 Admin Center.

[!INCLUDE [preview-disclaimer-copilot](includes/preview-disclaimer-copilot.md)]

## Create declarative copilots from the Admin Center

Follow these steps to extend your existing Graph Connectors directly from the Microsoft 365 Admin Center:

1. Go to [the Admin Center](https://admin.microsoft.com/), select **Settings**, and then select **Search and intelligence** from the left-hand side menu.
2. Select **Data Sources**.
3. Under the Connections tab, select **Create Extension**.

    :::image type="content" source="assets/images/" alt-text="A screenshot that shows Search and intelligence page in the Admin Center." lightbox="assets/images/" :::

4. Provide the following fields to create the Copilot extension and select **Create**:

    - **Add connections:** An existing Graph Connector that will be leveraged by the extension.
    - **Change Icon:** Symbol-based icons representing the theme or function of the Copilot extension.
    - **Name:** The primary identifier that reflects the Copilot extension's functionality.
    - **Description**: A brief overview detailing the Copilot extension’s purpose and capabilities, setting the right user expectations.
    - **Give instructions for this extension:** Concise guidance on how to interact with the Copilot extension, including question formatting, interaction tips to maximize effectiveness, and do’s and don’ts.
    - **Conversation Starters:** Suggested prompts to initiate interactions, demonstrating the conversational scope and easing user engagement.

    :::image type="content" source="assets/images/" alt-text="A screenshot that shows the Create Copilot extension panel." lightbox="assets/images/" :::

5. The Copilot extension for your Graph Connector is successfully created and ready to preview.

    :::image type="content" source="assets/images/" alt-text="A screenshot that shows success page." lightbox="assets/images/" :::

## Manage Copilot extensions from the Admin Center

The administrators can manage the extensions from the **Extensions** tab.

:::image type="content" source="assets/images/" alt-text="A screenshot that shows the Extensions tab." lightbox="assets/images/" :::

## See also

- [Declarative copilots for Microsoft 365 overview](./overview-declarative-copilot.md)
- [Microsoft Graph Connectors for Microsoft Copilot for Microsoft 365](overview-graph-connector.md)