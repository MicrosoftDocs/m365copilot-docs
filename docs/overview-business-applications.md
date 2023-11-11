---
title: Build plugins using Microsoft business applications
description: Extend Microsoft Copilot for Microsoft 365 using Microsoft Dynamics 365 apps and Microsoft Power Platform
ms.topic: overview
ms.date: 11/14/2023
author: tapanm-msft
ms.author: tapanm
---

# Build plugins using Microsoft business applications

[!INCLUDE [preview-disclaimer](includes/preview-disclaimer.md)]

Microsoft business applications include a suite of products and services that help you manage specific business functions, such as sales, customer service, finance, operations, and talent consisting of Microsoft Dynamics 365 and Microsoft Power Platform.

Dynamics 365 revolutionizes CRM and ERP by applying intelligence to all forms of data. It enables organizations to evolve from reactive business decisions to proactive insights that allow your employees to accelerate business results.

Power Platform is a suite of business applications that centralizes all your business processes. It is a low-code platform for rapidly building customized end-to-end business solutions.

Using Dynamics 365 and Power Platform, you can create AI plugins that enhance Microsoft 365 Copilot capabilities and utilize them through applications such as Microsoft 365 Chat.

## AI plugins

AI plugins in Power Platform leverage Power Platform components such as power automate flows, certified connectors or prompts to define a specific business behavior that you can add to a copilot. Copilot will use the appropriate plugin able to address the questions of an end user in the application.

Copilot in Dynamics 365 apps such as Finance, Supply Chain Management, and Sales on the other hand allows you to perform various kinds of tasks providing different kinds of information using large language models (LLM).

## Types of AI plugins

There are diverse types of AI plugins, as explained below.

### Prompts

Prompts allow generating content using natural language which includes summarizing, classifying, extracting entities, translating, assessing sentiment and much more. Learn more: [Create a custom prompt (preview)](/ai-builder/create-a-custom-prompt)

We are adding the ability to use your data to provide improved answers soon.

### Connector plugins

Connectors allow retrieving and updating data from data sources accessed through APIs. Connectors make it possible to access data from popular Enterprise systems such as Salesforce, Zendesk, MailChimp and Github and are routinely used by makers in their Power Apps and flows. Learn more: [Create a connector AI plugin (preview)](/connectors/create-a-connector-ai-plugin)

### Open AI plugins

Open AI plugins provide access to data sources, allowing specific data to be surfaced through AI experiences that would not normally be available through general models. Learn more: [Add an OpenAI plugin](/power-virtual-agents/copilot-ai-plugins#add-an-openai-plugin)

### Topics plugins

Use Microsoft Copilot Studio to create Topics, enabling customers to custom craft plugins that retrieve and integrate data across multiple sources with AI, execute custom logic on the results, access external API's via connectors, and send summary results to the user. Learn more: [Create a Topic (preview)](/power-virtual-agents/copilot-conversational-plugins)

## Enable integrated apps with plugins for Microsoft 365 Copilot

Microsoft 365 admins can manage integrated apps with plugins for Microsoft 365 Copilot in the Microsoft 365 admin center. To access the settings, you need to be a global administrator or a service administrator. Follow these steps to access the plugins settings:

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

## Enable Microsoft 365 Copilot in Power Platform

After deployment, Power Platform environment admins must enable the **M365 Copilot** setting for the environment in Power Platform admin center. To enable this setting, go to [Power Platform admin center](https://admin.powerplatform.com/) &gt; **Environment** &gt; **Settings** &gt; **Product** &gt; **Features**, and then, turn **M365 Copilot** to **On**.

:::image type="content" source="assets/images/overview-business-applications/power-platform-setting.png" alt-text="This screenshot shows the Power Platform admin center to enable Microsoft 365 Copilot feature.":::

## Use AI plugins

After plugins are created or enabled, you can share them, and use [AI plugins in Microsoft 365 Copilot](/power-virtual-agents/copilot-ai-plugins#add-an-openai-plugin).

You can also use AI plugins as available in Dynamics 365 apps such as [Finance, Supply Chain Management](/dynamics365/fin-ops-core/dev-itpro/m365-copilot/faq-for-chat-with-fno-data-on-m365copilot), and Dynamics 365 Sales.

### See also

- [Create a custom prompt (preview)](/ai-builder/create-a-custom-prompt)
- [Create a connector AI plugin (preview)](/connectors/create-a-connector-ai-plugin)
- [Add an OpenAI plugin](/power-virtual-agents/copilot-ai-plugins#add-an-openai-plugin)
- [Create a Topic (preview)](/power-virtual-agents/copilot-conversational-plugins)
