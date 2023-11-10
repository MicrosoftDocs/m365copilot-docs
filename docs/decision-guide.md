---
title: Extensibility options for Microsoft Copilot for Microsoft 365
description: Understand which type of Microsoft Copilot for Microsoft 365 plugin or connector works best for you
author: girliemac
ms.author: timura
ms.topic: conceptual
ms.date: 11/14/2023
---

# Extensibility options for Microsoft Copilot for Microsoft 365

You can enhance Copilot's functionality by developing plugins and connectors to fit your needs.

Create Copilot plugins to extend its capabilities, such as crafting a Microsoft Teams message extension or a Power Platform connector. Alternatively, employ connectors to seamlessly integrate your enterprise data into the Copilot for Microsoft 365 experience.

[!INCLUDE [preview-disclaimer](includes/preview-disclaimer.md)]

## Choose your extensibility path

You have more than one way to personalize Copilot for Microsoft 365 with the intelligence of external services, apps, and data.
To start building your connector or plugins, you can select the tools and SDKs based on how you want to develop.

:::image type="content" source="assets/images/decision-making-tree.png" alt-text="Decision-making questions to figure out which Copilot for Microsoft 365 extensibility service you should use" lightbox="assets/images/decision-making-tree.png":::

1. If you are a low-code developer, who have invested in Power Platform already and want to expose the external data in Power Platform too, additionally to Copilot, naturally your choice would be Power Platform connectors.
2. If you want to connect your data in Microsoft 365, including Microsoft Search, Context IQ, and the Microsoft 365 app, Graph Connectors would be your option.
3. And if you would like to connect real-time data from external source on the fly, Message Extensions should be your choice. Write the logic using Bot Framework! And if you have built Message Extension apps for Teams before, a great news is that your app is Copilot-ready already! Make sure that your app manifest is most up-to-date.

### Decisions, decisions

There are more factors that you want to consider when deciding which option to pick. If you are a proficient coder who favors a high-level programming option over a no-code or low-code one, you still want to consider the following aspects.

#### Data types

One consideration would be your data types—what structure your data has, and how much volume and activity you want, also, if you want your data to be modifiable by users.

|                    | Graph connectors                | Message extension plugins       |
|:-------------------|:--------------------------------|:--------------------------------|
| **Structure**          | Un-structured or flattened data | Structured data |
| **Data volume**        | Up to 5M items per connection   | Suitable for high volume data (Over 5M) |
| **Data activity**      | Up to 20 requests per second    | Suitable for high activity (Over 20 req/sec.)|
| **Read/write**         | Read-only                       | Writable

This is an example of the writable data with a message extension. This plugin manages a product inventory, which Copilot searches the data from the inventory and displays the results in Adaptive Card, where it allows a user to modify the stock.

:::image type="content" source="assets/images/plugin-example-northwind.png" alt-text="A screenshot that shows an example of writable data via a message extension" lightbox="assets/images/plugin-example-northwind.png":::

> [!TIP]
> You can find the sample code for *Northwind Inventory* plugin at [Microsoft Copilot for Microsoft 365 extensibility samples](samples.md#teams-message-extension-samples).

#### Benefits and limitations

You probably want to consult the pros and cons of these to choose the right one for you too!

|                    | Graph connectors                | Message extension plugins       |
|:-------------------|:--------------------------------|:--------------------------------|
| **Benefits**    | <li>Relevance based on user activities  <li>Semantic discovery of content <li>Activities (such as view, modify, and shared) with help with ranking and relevance of search results <li>Data stays within compliance boundary| <li>Discoverability in Store <li>Enabling branded experience <li>Better UX with Adaptive Cards|
| **Limitations** | <li>Max 30 connectors in Tenant <li>Relatively low data volume and activity <li>App visibility to users | <li>Plugins need to be manually enabled <li>Data can leaves compliance boundary  <li>[Orchestrator](orchestrator.md) can only reason 10 plugins per prompt <li>Performance depends on developers & hosting|

For instance, Graph connectors help keep third-party data within the compliance boundary by indexing the data. On the other hand, the real-time data through the use of message extensions are not indexed and can be shared or accessed outside of the defined compliance boundaries. As a plugin developer, you are responsible for securing your customer's data within the bounds of your service and providing information on your policies regarding users' personal information.

> [!TIP]
> You can find more information about it at [Data, Privacy, and Security for Microsoft Copilot for Microsoft 365 extensibility](data-privacy-security.md).

This is a sample response from Copilot, utilizing data from Graph connector. The Graph connector in question indexes issues and repositories from GitHub, presenting the results in plain text as opposed to an Adaptive Card format. By comparing this with the Message extension example provided earlier, you can see the differences between them.

:::image type="content" source="assets/images/gc-example-github.png" alt-text="A screenshot that shows an example of Copilot response from Graph connector" lightbox="assets/images/gc-example-github.png":::

> [!TIP]
> You can find the sample code for *Microsoft Graph TypeScript GitHub connector* at [Microsoft Copilot for Microsoft 365 extensibility samples](samples.md#microsoft-graph-connector-samples).

### The more you know

Above all, if your main consideration is a quick development by just calling an API to make data connection, Graph connectors may be what you need. But if you would rather write a full-fledged powerful M365 app that also works on Copilot, Message extension plugin is the one for you! Here's more about your development considerations.

|                    | Graph connectors                | Message extension plugins       |
|:-------------------|:--------------------------------|:--------------------------------|
| **Also work with**                    | <li>Context IQ <li>Viva Topics <li>Enterprise Search in M365.com, Sharepoint, and Bing @ work <li>Content recommendations in M365 apps | <li>Teams chat <li>Outlook |
| **Ease of development**               | <li>Fast connect, register schema, and index items | <li>Teams Toolkit for Visual Studio & VS Code <li>Sideloading for development & test |
| **Developer experience limitations**  | <li>No tools for Visual Studio & VS Code <li>No sideloading <li>Need to keep in sync with the access control list (ACL) manually if you are in external groups outside of Azure AD group | <li>Steep learning curve <li>More time to develope <li>Need to handle multi-parameter prompts.

Message extension plugin developers should handle all potential prompt scenarios from users. Single-parameter prompts can be as simple as:
> Find Chai in Northwind Inventory

While multi-parameters can be more complex with multiple inquiries, such as:

> We've been receiving partial orders for Tofu. Find the supplier in Northwind and draft an email summarizing our inventory and reminding them they should stop sending partial orders per our MOQ policy.
