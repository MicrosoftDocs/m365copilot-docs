---
title: Build plugins using Microsoft business applications
description: Extend Microsoft Copilot for Microsoft 365 using Microsoft Dynamics 365 apps and Microsoft Power Platform
author: tapanm-msft
ms.author: tapanm
ms.topic: overview
ms.date: 11/15/2023
---

# Build plugins using Microsoft business applications

[!INCLUDE [preview-disclaimer](includes/preview-disclaimer.md)]

Microsoft business applications include a suite of products and services that help you manage specific business functions, such as sales, customer service, finance, operations, and talent consisting of Microsoft Dynamics 365 and Microsoft Power Platform.

Dynamics 365 revolutionizes CRM and ERP by applying intelligence to all forms of data. It enables organizations to evolve from reactive business decisions to proactive insights that allow your employees to accelerate business results.

Power Platform is a suite of business applications that centralizes all your business processes. It is a low-code platform for rapidly building customized end-to-end business solutions.

Using Dynamics 365 and Power Platform, you can create plugins for Microsoft Copilot that enhance capabilities and utilize Copilot to interact with your data.

## Plugins for Microsoft Copilot

Plugins for Microsoft Copilot in Power Platform leverage Power Platform components such as Power Automate flows, certified connectors or prompts to define a specific business behavior that you can add to Microsoft Copilot. Copilot will use the appropriate plugin able to address the questions of an end user in the application. For more information, see [Create and configure copilot plugins (preview)](/microsoft-copilot-studio/copilot-plugins-overview).

### Plugin development paths

There are multiple starting points for creating a plugin.

#### Start with a custom prompt

Prompts allow generating content using natural language which includes summarizing, classifying, extracting entities, translating, assessing sentiment and much more. To learn more, see [Create a custom prompt (preview)](/ai-builder/create-a-custom-prompt?context=/microsoft-365-copilot/extensibility/context).

We are adding the ability to use your data to provide improved answers soon.

#### Start with a Power Platform connector

Power Platform connectors allow retrieving and updating data from data sources accessed through APIs. Connectors make it possible to access data from popular Enterprise systems such as Salesforce, Zendesk, MailChimp and Github and are routinely used by makers in their Power Apps and flows. To learn more, see [Create a plugin from a connector (preview)](/connectors/create-a-connector-ai-plugin?context=/microsoft-365-copilot/extensibility/context).

#### Start with a Topic

Use Microsoft Copilot Studio to create Topics, enabling customers to craft custom plugins that retrieve and integrate data across multiple sources with AI, execute custom logic on the results, access external API's via connectors, and send summary results to the user. To learn more, see [Create a Topic (preview)](/microsoft-copilot-studio/copilot-conversational-plugins?context=/microsoft-365-copilot/extensibility/context).

## Enable integrated apps with plugins for Microsoft Copilot for Microsoft 365

Microsoft 365 admins can manage integrated apps with plugins for Microsoft Copilot in the Microsoft 365 admin center. To access the settings, you need to be a global administrator or a service administrator. Follow these steps to access the plugins settings:

1. Sign into the Microsoft 365 admin center with your admin account.

1. Go to **Settings** &gt; **Integrated apps**.

1. Under the **Available apps** tab, search for the plugin.

    :::image type="content" source="assets/images/overview-business-applications/integrated-apps-dynamics365.png" alt-text="This screenshot shows Microsoft Dynamics 365 as available integrated app in Microsoft 365 admin center.":::

1. Select an integrated app containing the plugin to block or deploy.

    :::image type="content" source="assets/images/overview-business-applications/deploy-block-app.png" alt-text="This screenshot shows Microsoft 365 admin center section where you can deploy or block an integrated app.":::

1. Choose to deploy for all users, a specific set of users, or yourself.

    :::image type="content" source="assets/images/overview-business-applications/select-users.png" alt-text="This screenshot shows the option to deploy app to all users, or to specific users.":::

1. Select **Update**.

Now that the selected integrated app with plugin is deployed, ensure the applicable Power Platform environment is enabled to allow Microsoft 365 Copilot using the next steps.

## Use plugins

After plugins are created or enabled, you can share them, and use [plugins in Microsoft Copilot](/microsoft-copilot-studio/copilot-plugins-overview).

You can also use plugins available in Dynamics 365 apps such as [Finance, Supply Chain Management](/dynamics365/fin-ops-core/dev-itpro/m365-copilot/faq-for-chat-with-fno-data-on-m365copilot), and [Dynamics 365 Sales](/dynamics365/sales/microsoft-365-copilot-for-sales).

### See also

- [Create a custom prompt (preview)](/ai-builder/create-a-custom-prompt?context=/microsoft-365-copilot/extensibility/context)
- [Create a connector plugin (preview)](/connectors/create-a-connector-ai-plugin?context=/microsoft-365-copilot/extensibility/context)
- [Create a Topic (preview)](/microsoft-copilot-studio/copilot-conversational-plugins?context=/microsoft-365-copilot/extensibility/context)
