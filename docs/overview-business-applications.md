---
title: Extend with actions using Microsoft Copilot Studio
description: Extend Microsoft 365 Copilot using Microsoft Power Platform and Microsoft Copilot Studio.
author: jhaskett-msft
ms.author: jhaskett
ms.date: 09/26/2024
ms.topic: overview
---


# Extend with actions using Microsoft Copilot Studio

> [!IMPORTANT]
> Actions for Microsoft 365 Copilot are in public preview.
> Production tenants must be licensed for Microsoft 365 Copilot.

Copilot Studio actions plug into Microsoft 365 Copilot to extend its skills, leveraging Microsoft business applications, a suite of products and services that help you manage specific business functions, such as sales, customer service, finance, operations, and talent consisting of Microsoft Dynamics 365 and Microsoft Power Platform.

Dynamics 365 revolutionizes CRM and ERP by applying intelligence to all forms of data. It enables organizations to evolve from reactive business decisions to proactive insights that allow your employees to accelerate business results.

Power Platform is a suite of business applications that centralizes all your business processes. It is a low-code platform for rapidly building customized end-to-end business solutions.

Using Dynamics 365 and Power Platform, you can create actions for Microsoft Copilot that enhance capabilities and utilize Copilot to interact with your data.

## Actions for Microsoft Copilot

Actions for Microsoft Copilot in Power Platform leverage Dynamics 365 apps and Power Platform components such as Power Automate flows, certified connectors, or prompts to define a specific business behavior that you can add to Microsoft Copilot. Copilot will use the appropriate action to address the questions of an end user in the application. The following built-in actions are available.

- Microsoft Dynamics 365 apps
  - [Dynamics 365 Sales](/dynamics365/sales/microsoft-365-copilot-for-sales) (preview)
  - [Dynamics 365 Customer Service](/dynamics365/customer-service/use/copilot-chat-customer-service-data) (preview)
  - [Dynamics 365 Field Service](/dynamics365/field-service/flw-m365-chat) (preview)
  - [Dynamics 365 Supply Chain](/dynamics365/fin-ops-core/dev-itpro/m365-copilot/faq-for-chat-with-fno-data-on-m365copilot) (preview)
- [Microsoft Power Platform connectors](/connectors/create-a-connector-ai-plugin#supported-queries-for-certified-connectors)
  - FreshDesk
  - GitHub
  - MailChimp
  - MSN Weather
  - SalesForce
  - ServiceNow
  - Twilio
  - Zendesk
- [Power Automate flows](/power-automate/flow-plugins-m365) (preview)
  - List my tasks from To Do and Planner
  - List my pending approvals

You can also create new actions using Power Platform components in Microsoft Copilot Studio. Learn more in [Copilot connectors, actions, and extensions overview (preview)](/microsoft-copilot-studio/copilot-plugins-overview).

## Get Microsoft 365 Copilot licenses and enable plugins

1. Sign in to the [Microsoft 365 admin center](https://admin.microsoft.com/).

1. Obtain the appropriate number of [Microsoft 365 Copilot licenses](/microsoft-365-copilot/microsoft-365-copilot-setup#provision-copilot-for-microsoft-365-licenses).

1. [Enable copilots and generative AI features](/power-platform/admin/geographical-availability-copilot) by consenting to moving data across regions as applicable.

## Deploy a plugin

To deploy a plugin, sign in to the Microsoft 365 admin center and locate the plugin in the list of Integrated Apps. Select the plugin you want and follow the steps to complete the deployment.

To find Power Automate flows, search for "Power Automate". For Power Platform connector plugins, search for the respective connector name; for example, FreshDesk. For Copilot artifacts such as actions created in Microsoft Copilot Studio, search for "Copilot Studio".

To find Dynamics 365 plugins for Microsoft 365 Copilot, search for "Dynamics 365". The search results will show the available Dynamics 365 plugins.

|For                                   |  Select                           |
|--------------------------------------|-----------------------------------|
|Dynamics 365 Field Service plugin     | **Dynamics 365 FieldService**     |
|Dynamics 365 Customer Service plugin  | **Dynamics 365 Service**          |
|Dynamics 365 Sales plugin             | **Dynamics 365**                  |
|Dynamics 365 Supply Chain plugin      | **Dynamics 365 Supply Chain**     |


> [!NOTE]
> The plugin must be enabled for your environment to appear in the Integrated Apps list.

In this example, we'll deploy the Dynamics 365 Field Service plugin:

1. Sign in to the Microsoft 365 admin center with your admin account.
1. Expand **Settings** on the side navigation pane and select **Integrated apps**.
1. Under the **Available apps** tab, search for the Dynamics 365 Field Service plugin using the string "Dynamics 365". You might also try "field" or "service."

    :::image type="content" source="assets/images/overview-business-applications/integrated-apps-dynamics365-field.png" alt-text="Screenshot showing Microsoft Dynamics 365 Field Service as an available integrated app in Microsoft 365 admin center.":::

1. Select the integrated app containing the plugin to deploy. For our example, we'll select **Dynamics 365 FieldService**.

1. Select **Next** to open the **Users** tab.

1. Choose to deploy for all users, a specific set of users, or yourself.

    :::image type="content" source="assets/images/overview-business-applications/microsoft-dynamics-365-field.png" alt-text="Screenshot showing the option to deploy an app to all users or to specific users.":::

1. Select **Next** and complete the remaining steps to deploy the app. It might take up to four hours for the deployed app's plugin to show in Microsoft 365 Copilot.

> [!NOTE]
> The apps that appear under **Integrated apps** are sometimes referred to as "titles".

## Use the built-in actions in Microsoft 365 Copilot in Microsoft Teams

You can use the built-in actions shipped by Microsoft in your Microsoft 365 Copilot app in Microsoft Teams.

1. Log in to Microsoft Teams app.

1. Open the Copilot app. If the Copilot app isn't in your sidebar, search in the Teams app store.

1. Select the plugins icon and enable the plugin you want to use from the plugin flyout.

    :::image type="content" source="assets/images/overview-business-applications/plugin-flyout.png" alt-text="Screenshot showing the plugins listed in the chat experience.":::

1. Start a natural language conversation and get results.

## Create actions

You can create new Copilot action in Microsoft Copilot Studio, which requires a Microsoft Copilot Studio license. Learn more in [Copilot connectors, actions, and extensions overview (preview)](/microsoft-copilot-studio/copilot-plugins-overview).

### Action development paths

There are multiple starting points for action development. You can extend the built-in actions or you can create a new action. For extending the built-in actions, refer to respective action page.

For action creation, you can start with a custom prompt, a Power Platform connector, a Power Automate flow, or a conversational action.

### Start with a prompt

Prompts allow generating content using natural language, which includes summarizing, classifying, extracting entities, translating, assessing sentiment, and much more. Learn more in [Create a custom prompt (preview)](/ai-builder/create-a-custom-prompt?context=/microsoft-365-copilot/extensibility/context).

We are adding the ability to use your data to provide improved answers soon.

### Start with a Power Platform connector

Power Platform connectors allow retrieving and updating data from data sources accessed through APIs. Connectors make it possible to access data from popular Enterprise systems such as Salesforce, Zendesk, MailChimp, and GitHub, and are routinely used by makers in their Power Apps and flows. Learn more in [Create a plugin from a connector (preview)](/connectors/create-a-connector-ai-plugin?context=/microsoft-365-copilot/extensibility/context).

### Start with a conversational action

Use Microsoft Copilot Studio to create conversational actions that retrieve and integrate data across multiple sources with AI, execute custom logic on the results, access external APIs via connectors, and send summary results to the user. Learn more in [Create conversational actions (preview)](/microsoft-copilot-studio/copilot-conversational-plugins?context=/microsoft-365-copilot/extensibility/context).

## Related information

- [Create a custom prompt (preview)](/ai-builder/create-a-custom-prompt?context=/microsoft-365-copilot/extensibility/context)
- [Create a connector action (preview)](/connectors/create-a-connector-ai-plugin?context=/microsoft-365-copilot/extensibility/context)
- [Create conversational actions (preview)](/microsoft-copilot-studio/copilot-conversational-plugins?context=/microsoft-365-copilot/extensibility/context)
- [Use Power Automate flow actions (preview)](/power-automate/flow-plugins-m365?context=/microsoft-365-copilot/extensibility/context)
