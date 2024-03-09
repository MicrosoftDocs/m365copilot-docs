---
title: Build plugins using Microsoft business applications
description: Extend Microsoft Copilot for Microsoft 365 using Microsoft Dynamics 365 apps and Microsoft Power Platform
author: jhaskett-msft
ms.author: jhaskett
ms.topic: overview
---


# Build plugins using Microsoft business applications

> [!IMPORTANT]
> Microsoft business applications plugins for Microsoft Copilot for Microsoft 365 are in gated preview. During the preview, production tenants must be licensed for Copilot for Microsoft 365 and an administrator must opt-in to enable plugins by either contacting their Microsoft Customer Success Account Manager or by submitting a support ticket with the title "Enable Copilot plugins for tenants".

Microsoft business applications include a suite of products and services that help you manage specific business functions, such as sales, customer service, finance, operations, and talent consisting of Microsoft Dynamics 365 and Microsoft Power Platform.

Dynamics 365 revolutionizes CRM and ERP by applying intelligence to all forms of data. It enables organizations to evolve from reactive business decisions to proactive insights that allow your employees to accelerate business results.

Power Platform is a suite of business applications that centralizes all your business processes. It is a low-code platform for rapidly building customized end-to-end business solutions.

Using Dynamics 365 and Power Platform, you can create plugins for Microsoft Copilot that enhance capabilities and utilize Copilot to interact with your data.

## Plugins for Microsoft Copilot

Plugins for Microsoft Copilot in Power Platform leverage Dynamics 365 apps and Power Platform components such as Power Automate flows, certified connectors or prompts to define a specific business behavior that you can add to Microsoft Copilot. Copilot will use the appropriate plugin able to address the questions of an end user in the application. The following built-in plugins are available.

- Plugins from Microsoft Dynamics 365 apps
  - [Dynamics 365 Sales](/dynamics365/sales/microsoft-365-copilot-for-sales) (preview)
  - [Dynamics 365 Customer Service](/dynamics365/customer-service/administer/cs-region-availability-service-limits?branch=mg-copilot-faq) (preview)
  - [Dynamics 365 Field Service](/dynamics365/field-service/flw-m365-chat) (preview)
  - [Dynamics 365 Supply Chain](/dynamics365/fin-ops-core/dev-itpro/m365-copilot/faq-for-chat-with-fno-data-on-m365copilot) (preview)
- Plugins for [Microsoft Power Platform connectors](/connectors/create-a-connector-ai-plugin#supported-queries-for-certified-connectors)
  - FreshDesk
  - GitHub
  - MailChimp
  - MSN Weather
  - SalesForce
  - ServiceNow
  - Twilio
  - Zendesk
- Plugins for Microsoft Power Automate flows
  - List my tasks from To Do and Planner
  - List my pending approvals

You can also create new plugins using Power Platform components in Microsoft Copilot Studio. For more information, see [Create and configure copilot plugins (preview)](/microsoft-copilot-studio/copilot-plugins-overview).

## Get Copilot for Microsoft 365 licenses and enable plugins

1. Sign in to the [Microsoft 365 admin center](https://admin.microsoft.com/).

1. Obtain the appropriate number of [Copilot for Microsoft 365 licenses](/microsoft-365-copilot/microsoft-365-copilot-setup#provision-copilot-for-microsoft-365-licenses).

1. [Enable copilots and generative AI features](/power-platform/admin/geographical-availability-copilot) by consenting to moving data across regions as applicable.

1. Raise a support ticket with title "Enable Copilot plugins for tenants" to prepare your tenant for plugins. Once the ticket is resolved, it may take up to 12 hours for the changes to take effect. Once the "Dynamics 365" app appears in the list of available apps in Microsoft 365 admin center's **Settings**->**Integrated apps**, plugins have been enabled.

## Deploy a plugin

1. Sign in to the Microsoft 365 admin center with your admin account.
1. Expand **Settings** on the side navigation pane and select **Integrated apps**.
1. Under the **Available apps** tab, search for the plugin you want to deploy.

    :::image type="content" source="assets/images/overview-business-applications/integrated-apps-dynamics365.png" alt-text="This screenshot shows Microsoft Dynamics 365 as an available integrated app in Microsoft 365 admin center." lightbox="assets/images/overview-business-applications/integrated-apps-dynamics365.png":::

    > [!TIP]
    >
    > - For Power Automate flows, search for "Power Automate" app.
    > - For Power Platform connector plugins, search for the respective connector names. For example, FreshDesk.

1. Select an integrated app containing the plugin to deploy.

    :::image type="content" source="assets/images/overview-business-applications/microsoft-dynamics-365.png" alt-text="This screenshot shows Microsoft 365 admin center section where you can deploy or block an integrated app." lightbox="assets/images/overview-business-applications/microsoft-dynamics-365.png":::

1. Select **Next** to open the **Users** tab, choose to deploy for all users, a specific set of users, or yourself.

    :::image type="content" source="assets/images/overview-business-applications/deploy-d365.png" alt-text="This screenshot shows the option to deploy an app to all users or to specific users.":::

1. Select **Next** and complete the remaining steps to deploy the app. It may take up to 12 hours for the deployed app's plugin to show in Copilot for Microsoft 365.

> [!NOTE]
> The apps that appear under **Integrated apps** are sometimes referred to as "titles".

## Use the built-in plugins in Copilot for Microsoft 365 in Microsoft Teams

You can use the built-in plugins shipped by Microsoft in your Copilot for Microsoft 365 app in Microsoft Teams.

1. Login to Microsoft Teams app.

1. Open the Copilot app. If the Copilot app isn't in your sidebar, search in the Teams app store. A plugins icon is present in the text prompt.

    :::image type="content" source="assets/images/overview-business-applications/plugin-flyout.png" alt-text="This screenshot shows the Copilot for Microsoft 365 app with the plugins icon highlighted.":::

1. Select the plugins icon and enable the plugin you want to use from the plugin flyout.

    :::image type="content" source="assets/images/overview-business-applications/plugins.png" alt-text="This screenshot shows the plugins listed in chat experience.":::

1. Start a natural language conversation and get results.

    :::image type="content" source="assets/images/overview-business-applications/example.png" alt-text="This screenshot shows an example text for search and to get the results.":::

## Create plugins

You can create new Copilot plugins in Microsoft Copilot Studio, which requires a Microsoft Copilot Studio license. For more information, see [Create and configure copilot plugins (preview)](/microsoft-copilot-studio/copilot-plugins-overview).

### Plugin development paths

There are multiple starting points for plugin development. You can extend the built-in plugins or you can create a new plugin. For extending the built-in plugins, refer to respective plugins page.

For plugin creation, you can start with a custom prompt, a Power Platform connector, or a conversational plugin.

### Start with a custom prompt

Prompts allow generating content using natural language which includes summarizing, classifying, extracting entities, translating, assessing sentiment and much more. To learn more, see [Create a custom prompt (preview)](/ai-builder/create-a-custom-prompt?context=/microsoft-365-copilot/extensibility/context).

We are adding the ability to use your data to provide improved answers soon.

### Start with a Power Platform connector

Power Platform connectors allow retrieving and updating data from data sources accessed through APIs. Connectors make it possible to access data from popular Enterprise systems such as Salesforce, Zendesk, MailChimp and Github and are routinely used by makers in their Power Apps and flows. To learn more, see [Create a plugin from a connector (preview)](/connectors/create-a-connector-ai-plugin?context=/microsoft-365-copilot/extensibility/context).

### Start with a conversational plugin

Use Microsoft Copilot Studio to create conversational plugins that retrieve and integrate data across multiple sources with AI, execute custom logic on the results, access external API's via connectors, and send summary results to the user. To learn more, see [Create a conversational plugin (preview)](/microsoft-copilot-studio/copilot-conversational-plugins?context=/microsoft-365-copilot/extensibility/context).

## Use plugins

After a plugin is created, publish it so it appears in the AI Plugins page in Microsoft Copilot Studio. To use plugins created in Microsoft Copilot Studio, deploy the "Copilot Studio" app in Microsoft 365 admin center's **Settings** -> **Integrated apps**.

## Known limitations

To comply with data residency requirements, only a subset of environments (top 20) are allowed per tenant with Copilot for Microsoft 365. This is a temporary limit will be removed in the future. Here's how to identify the allowlisted 20 environments:

1. Open [portal.azure.com](https://portal.azure.com/) and click on the **Tenant** properties. Note down the *Country or Region* associated with your tenant.  

2. Open Power Platform Admin Center, select the **Environments** page and sort all environments by *Type*, *Region* and *Created on* (descending).

3. In the first 20 environments you find where *Type* is “Production”, the allowlisted environments are the ones with their region matching the region associated with your tenant.

4. To test plugins in an environment outside of the top 20 that are allowlisted, you can to provision a new environment in the same region. Otherwise, you'll need to wait until the allowlisting limits are removed.  

### See also

- [Create a custom prompt (preview)](/ai-builder/create-a-custom-prompt?context=/microsoft-365-copilot/extensibility/context)
- [Create a connector plugin (preview)](/connectors/create-a-connector-ai-plugin?context=/microsoft-365-copilot/extensibility/context)
- [Create a conversational plugin (preview)](/microsoft-copilot-studio/copilot-conversational-plugins?context=/microsoft-365-copilot/extensibility/context)
