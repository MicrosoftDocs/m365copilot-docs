---
title: Extensibility options for Microsoft 365 Copilot
description: Understand which type of Microsoft 365 Copilot plugin or connector works best for your business use case
author: girliemac
ms.author: timura
ms.topic: conceptual
ms.date: 11/14/2023
---

# Extensibility options for Microsoft 365 Copilot

You can enhance Copilot's functionality by developing plugins and connectors to fit your needs.

Create Copilot plugins to extend its capabilities, such as crafting a Microsoft Teams message extension or a Power Platform connector. Alternatively, employ connectors to seamlessly integrate your enterprise data into the Microsoft 365 Copilot experience.

## Extend Copilot for your scenario

Copilot extensibility helps your collaborative workspace to be more productive by bringing key information, common tools, and trusted processes to where people increasingly gather, learn, and work. Create something brand new for Copilot or integrate an existing app.

Here are some practical examples of what you can develop for your organization:

* **Product inventory for E-commerce**

    If your business operates in the realm of commerce, you can build an internal inventory tool by connecting it to your product database. For example, a user can ask Copilot to verify the availability of specific items, streamlining your internal processes.

* **Enterprise knowledge sharing**

    Consider a multinational corporation with a wealth of knowledge and insights stored in various formats - documents, emails, chat transcripts, spread across multiple systems. Microsoft Graph connectors can facilitate the consolidation of this data, making it searchable from a single, unified interface. This ensures that your organization's collective wisdom is readily accessible.

* **Issue tracking for engineering team**

    Assume your engineering team relies on a project management software. You can build a custom tool that enables users to monitor open tickets. For instance, a user can request information on all issues assigned to them, and Copilot for Microsoft 365 can seamlessly retrieve and present this data from your plugin.

:::image type="content" source="assets/images/copilot-scenario-01.png" alt-text="This illustration shows Copilot plugin scenario, where an engineer asks to show all open tickets for him":::

## Choose your extensibility path

You have more than one way to personalize Microsoft 365 Copilot with the intelligence of external services, apps, and data.
To start building your connector or plugins, you can select the tools and SDKs based on how you want to develop.

:::image type="content" source="assets/images/decision-making-tree.png" alt-text="Decision-making questions to figure out which M365 Copilot extensibility service you should use":::

1. If you are a low-code developer, who have invested in Power Platform already and want to expose the external data in Power Platform too, additionally to Copilot, naturally your choice would be Power Platform connectors.
2. If you want to connect your data in Microsoft 365, including Microsoft Search, Context IQ, and the Microsoft 365 app, Graph Connectors would be your option.
3. And if you would like to connect real-time data from external source on the fly, Message Extensions should be your choice. Write the logic using Bot Framework! And if you have built Message Extension apps for Teams before, a great news is that your app is Copilot-ready already! Make sure that your app manifest is most up-to-date.

## Next step

If you want to go low-code with Power Platform Connector:

> [!div class="nextstepaction"]
> [Start building Power Platform Connector](/connectors/custom-connectors/define-blank?context=microsoft-365-copilot/extensibility/context)

If you want to start creating Graph connector:

> [!div class="nextstepaction"]
> [Start building Graph Connector](overview-graph-connectors.md)

And if you want to build a Teams message extension app:

> [!div class="nextstepaction"]
> [Start building Message Extension](overview-message-extension-bot.md)
