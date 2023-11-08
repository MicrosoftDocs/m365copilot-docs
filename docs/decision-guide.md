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

[!INCLUDE [preview-disclaimer](includes/preview-disclaimer.md)]

## Choose your extensibility path

You have more than one way to personalize Microsoft 365 Copilot with the intelligence of external services, apps, and data.
To start building your connector or plugins, you can select the tools and SDKs based on how you want to develop.

:::image type="content" source="assets/images/decision-making-tree.png" alt-text="Decision-making questions to figure out which M365 Copilot extensibility service you should use" lightbox="assets/images/decision-making-tree.png":::

1. If you are a low-code developer, who have invested in Power Platform already and want to expose the external data in Power Platform too, additionally to Copilot, naturally your choice would be Power Platform connectors.
2. If you want to connect your data in Microsoft 365, including Microsoft Search, Context IQ, and the Microsoft 365 app, Graph Connectors would be your option.
3. And if you would like to connect real-time data from external source on the fly, Message Extensions should be your choice. Write the logic using Bot Framework! And if you have built Message Extension apps for Teams before, a great news is that your app is Copilot-ready already! Make sure that your app manifest is most up-to-date.

**TO-DO**: Add more info here (Jeremy & Angela)

- Pro code vs low code
- Structured data vs unstructured data
- Read only vs Read/Action

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
