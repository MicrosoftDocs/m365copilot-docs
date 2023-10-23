---
title: Extend copilot for your scenario
description: Understand which type of Microsoft 365 Copilot plugin or connector works best for your business use case
ms.topic: conceptual
ms.date: 11/1/2023
---

# Extend Copilot for your scenario

Intro - business use-cases and scenarios here.

## Extensibility options for Microsoft 365 Copilot

You have more than one way to personalize Microsoft 365 Copilot with the intelligence of external services, apps, and data.
To start building your connector or plugins, you can select the tools and SDKs based on how you want to develope.

:::image type="content" source="assets/images/decision-making-tree.png" alt-text="Decision-making questions to figure out which M365 Copilot extensibility service you should use":::

1. If you are a low-code developer, who have invested in Power Platform already and want to expose the external data in Power Platform too, additionally to Copilot, naturally your choice would be Power Platform connectors.
2. If you want to connect your data in Microsoft 365, including Microsoft Search, Context IQ, and the Microsoft 365 app, Graph Connectors would be your option.
3. If you would like to connect real-time data from external source on the fly, Message Extensions should be your choice. Write the logic using Bot Framework! And if you have built Message Extension apps for Teams before, a great news is that your app is Copilot-ready already! Make sure that your app manifest is most up-to-date.

## Next step

If you want to go low-code with Power Platform Connector:

> [!div class="nextstepaction"]
> [Start building Power Platform Connector](/connectors/custom-connectors/define-blank?context=microsoft-365-copilot/extensibility/context)

If you want to start creating Graph connector:

> [!div class="nextstepaction"]
> [Start building Graph Connector](/graph/connecting-external-content-connectors-overview?context=microsoft-365-copilot/extensibility/context)

And if you want to build a Teams message extension app:

> [!div class="nextstepaction"]
> [Start building Message Extension]((/microsoftteams/platform/messaging-extensions/what-are-messaging-extensions?context=microsoft-365-copilot/extensibility/context))
