---
title: Extensibility options for Microsoft 365 Copilot
description: Understand which type of Microsoft 365 Copilot plugin or connector works best for you
author: girliemac
ms.author: timura
ms.topic: conceptual
ms.date: 11/14/2023
---

# Extensibility options for Microsoft 365 Copilot

You can enhance Copilot's functionality by developing plugins and connectors to fit your needs.

Create Copilot plugins to extend its capabilities, such as crafting a Microsoft Teams message extension or a Power Platform connector. Alternatively, employ connectors to seamlessly integrate your enterprise data into the Microsoft 365 Copilot experience.

[!INCLUDE [preview-disclaimer](includes/preview-disclaimer.md)]

## Choose your extensibility path

You have more than one way to personalize Microsoft 365 Copilot with the intelligence of external services, apps, and data.
To start building your connector or plugins, you can select the tools and SDKs based on how you want to develop.

:::image type="content" source="assets/images/decision-making-tree.png" alt-text="Decision-making questions to figure out which M365 Copilot extensibility service you should use" lightbox="assets/images/decision-making-tree.png":::

1. If you are a low-code developer, who have invested in Power Platform already and want to expose the external data in Power Platform too, additionally to Copilot, naturally your choice would be Power Platform connectors.
2. If you want to connect your data in Microsoft 365, including Microsoft Search, Context IQ, and the Microsoft 365 app, Graph Connectors would be your option.
3. And if you would like to connect real-time data from external source on the fly, Message Extensions should be your choice. Write the logic using Bot Framework! And if you have built Message Extension apps for Teams before, a great news is that your app is Copilot-ready already! Make sure that your app manifest is most up-to-date.

### Decisions, decisions

There are more factors that you want to consider when deciding which option to pick. If you are a proficient coder who favors a high-level programming option over a no-code or low-code one, you still want to consider the following aspects.

#### Data types

One consideration would be your data types—what structure your data has, and how much volume and activity you want, also, if you want your data to be modifiable by users.

|                    | Graph connectors                | Message extension plugins       |
|:-------------------|:--------------------------------|:--------------------------------|
| **Structure**          | Un-structured or Flattened data | Structured data |
| **Data volume**        | Up to 5M items per connection   | Suitable for high volume data (5M+) |
| **Data activity**      | Up to 20 requests per second    | Suitable for high activity (20 req/sec. or more)|
| **Read/write**         | Read-only                       | Writable

This is an example of the writable data with a message extension. This plugin manages a product inventory, which Copilot can find data from the inventory and displays it in Adaptive Card, where it allows a user to modify the stock.

:::image type="content" source="assets/images/plugin-example-northwind.png" alt-text="A screenshot that shows an example of writable data via a message extension" lightbox="assets/images/plugin-example-northwind.png":::

#### Benefits and limitations

You probably want to consult the pros and cons of these to choose the right one for you too!

For instance, Graph connectors help keep third-party data within the compliance boundary by indexing the data, where the real-time data through the use of message extensions are not indexed and can be shared or accessed outside of the defined compliance boundaries.

|                    | Graph connectors                | Message extension plugins       |
|:-------------------|:--------------------------------|:--------------------------------|
| **Benefits**    | <li>Relevance based on user activities  <li>Semantic discovery of content <li>Activities (view, modify, shared with) help with ranking <li>Data stays within compliance boundary| <li>Discoverability in Store <li>Enabling branded experience <li>Better UX with Adaptive cards|
| **Limitations** | <li>Max 30 connectors in Tenant <li>Relatively low data volume and activity <li>User visibility <li>Need to keep in sync if you are in external groups outside of Azure AD group | <li>Plugins need to be manually enabled <li>Data can leaves compliance boundary  <li>Orchestrator can only reason 10 plugins per prompt <li>Performance depends on developers & hosting|

### The more you know

|                    | Graph connectors                | Message extension plugins       |
|:-------------------|:--------------------------------|:--------------------------------|
| **Also work with**                    | <li>Context IQ <li>Viva Topics <li>Enterprise Search in M365.com, Sharepoint, and Bing @ work <li>content recommendations in M365 apps | <li>Teams chat <li>Outlook |
| **Ease of development**               | <li>Fast as you just create connection, register schema, and index items | <li>Great tool sets for Visual Studio & VS Code <li>Sideloading |
| **Developer experience limitations**  | <li>No tools for Visual Studio & VS Code <li>No sideloading | <li>Steep learning curve <li>More time consuming

Above all, if your main consideration is a quick development by just calling an API to make data connection, Graph connectors may be what you need. But if you would rather write a full-fledged powerful M365 app that also works on Copilot, Message extension plugin is the one for you!

## Next step

If you want to go low-code with Power Platform Connector:

> [!div class="nextstepaction"]
> [Start building Power Platform Connector](/connectors/custom-connectors/define-blank?context=microsoft-365-copilot/extensibility/context)

If you want to start creating Graph connector:

> [!div class="nextstepaction"]
> [Start building Graph Connector](overview-graph-connector.md)

And if you want to build a Teams message extension app:

> [!div class="nextstepaction"]
> [Start building Message Extension](overview-message-extension-bot.md)
