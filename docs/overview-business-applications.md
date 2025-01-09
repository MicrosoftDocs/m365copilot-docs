---
title: Extend Microsoft 365 Copilot with Actions 
description: Extend Microsoft 365 Copilot by using Power Platform and Dynamics 365 to create actions.
author: jhaskett-msft
ms.author: jhaskett
ms.date: 12/10/2024
ms.topic: overview
---


# Use actions to extend Microsoft 365 Copilot

Copilot Studio actions plug into Microsoft 365 Copilot to extend its skills. Actions make use of Microsoft business applications like Microsoft Power Platform.


Power Platform is a suite of business applications that centralizes all your business processes. It is a low-code platform designed for building customized end-to-end business solutions.

By using Power Platform, you can create actions for Microsoft Copilot that enhance its capabilities, enabling Copilot to interact with your data.

> [!IMPORTANT]
> Actions for Microsoft 365 Copilot are in public preview.
> Production tenants must be licensed for Microsoft 365 Copilot.

## Actions for Microsoft Copilot

Actions for Microsoft Copilot use Power Platform components such as Power Automate flows, certified connectors, or prompts to define a specific business behavior that you can add to Microsoft Copilot. Copilot uses the appropriate action to address users' questions. The following built-in actions are available:

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

You can also create new actions by using Power Platform components in Microsoft Copilot Studio. For more information, see [Copilot connectors, actions, and extensions overview (preview)](/microsoft-copilot-studio/copilot-plugins-overview).

> [!NOTE]
> Dynamics plugins were available for preview only and are no longer supported. We recommend that you create an agent and add actions as needed. For more information, see [Extend bot-based message extension as agents for Microsoft 365 Copilot](https://learn.microsoft.com/en-us/microsoftteams/platform/messaging-extensions/build-bot-based-agent?tabs=visual-studio-code) and [Extend Microsoft 365 Copilot with Copilot agents](https://learn.microsoft.com/en-us/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions).

## Get Microsoft 365 Copilot licenses to enable actions

Use the following steps to get Microsoft 365 Copilot licenses to enable actions:

1. Sign in to the [Microsoft 365 admin center](https://admin.microsoft.com/).

1. Get the appropriate number of [Microsoft 365 Copilot licenses](/microsoft-365-copilot/microsoft-365-copilot-setup#provision-copilot-for-microsoft-365-licenses).

1. Consent to moving data across regions, as applicable. For details, see [Turn on copilots and generative AI features](/power-platform/admin/geographical-availability-copilot).

## Deploy an action

To deploy an action, sign in to the Microsoft 365 admin center and locate the action in the list of Integrated Apps. Select the action you want and follow the steps to complete the deployment.

To find Power Automate flows, search for "Power Automate". For Power Platform connector actions, search for the respective connector name; for example, FreshDesk. For Copilot artifacts such as actions created in Microsoft Copilot Studio, search for "Copilot Studio".



> [!NOTE]
> The action must be enabled for your environment to appear in the Integrated Apps list.

## Use the built-in actions in Microsoft 365 Copilot in Microsoft Teams

You can use the built-in actions shipped by Microsoft in your Microsoft 365 Copilot app in Microsoft Teams. To use built-in actions:

1. Sign in to the Microsoft Teams app.

1. Open the Copilot app. If the Copilot app isn't in your sidebar, search in the Teams app store.

1. In the right pane, choose **Get Copilot agents**.

1. Choose the app that you deployed from the **Apps** menu.

1. Start a natural language conversation and get results.

## Create actions

You can create new Copilot actions in Microsoft Copilot Studio. To use Copilot Studio to create actions, you need a license. For more information, see [Copilot connectors, actions, and extensions overview (preview)](/microsoft-copilot-studio/copilot-plugins-overview).

### Action development paths

There are multiple starting points for action development. You can extend the built-in actions or you can create a new action. To extend built-in actions, go to the page for that action page.

To create an action, you can start with a custom prompt, a Power Platform connector, a Power Automate flow, or a conversational action.

### Start with a prompt

Prompts allow the generation of content using natural language, which includes summarizing, classifying, extracting entities, translating, assessing sentiment, and much more. For more information, see [Create a custom prompt (preview)](/ai-builder/create-a-custom-prompt?context=/microsoft-365-copilot/extensibility/context).

### Start with a Power Platform connector

Power Platform connectors allow for the retrieval and update of data from data sources accessed through APIs. Connectors make it possible to access data from popular Enterprise systems such as Salesforce, Zendesk, MailChimp, and GitHub, and are routinely used by makers in their Power Apps and flows. For more information, see [Create an action from a connector (preview)](/connectors/create-a-connector-ai-plugin?context=/microsoft-365-copilot/extensibility/context).

### Start with a conversational action

Use Microsoft Copilot Studio to create conversational actions that retrieve and integrate data across multiple sources with AI, run custom logic on the results, access external APIs via connectors, and send summary results to the user. For more information, see [Create conversational actions (preview)](/microsoft-copilot-studio/copilot-conversational-plugins?context=/microsoft-365-copilot/extensibility/context).

## Related content

- [Create a custom prompt](/ai-builder/create-a-custom-prompt?context=/microsoft-365-copilot/extensibility/context)
- [Create a connector action (preview)](/connectors/create-a-connector-ai-plugin?context=/microsoft-365-copilot/extensibility/context)
- [Create conversational actions](/microsoft-copilot-studio/copilot-conversational-plugins?context=/microsoft-365-copilot/extensibility/context)
- [Use Power Automate flow actions (preview)](/power-automate/flow-plugins-m365?context=/microsoft-365-copilot/extensibility/context)
