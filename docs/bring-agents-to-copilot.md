---
title: Bring Your Agents into Microsoft 365 Copilot with the Agents SDK
description: Use the Microsoft 365 Agents SDK and the Microsoft 365 Agents Toolkit to bring your custom agents into Microsoft 365 Copilot.
author: sarahcritchley
ms.author: scritchley
ms.topic: concept-article
ms.localizationpriority: medium
ms.date: 5/19/2025
---

# Bring your agents into Microsoft 365 Copilot

You might have agents within your organization that you built using C#, JavaScript, or Python, and that are hosted on Azure or another hosting infrastructure. These agents are specialized experiences that might be focused on a specific area utilize AI services, and are already integrated to web or custom apps. You can use the Microsoft 365 Agents Toolkit to surface your agent in Microsoft 365 Copilot Chat. This allows users to use the unified Microsoft 365 Copilot UI to work with agents built across the enterprise, making your agents more discoverable and accessible to users.

## Use the Microsoft 365 Agents SDK

To bring your agent into Microsoft 365 Copilot, use the [Microsoft 365 Agents Toolkit](https://aka.ms/M365AgentsToolkit) to integrate the agent with the [Microsoft 365 Agents SDK](m365-agents-sdk.md). The Agents SDK supports C#, JavaScript, and Python. If your agent is written in one of these languages, you don't have to modify it significantly. You can simply add the Agents SDK code to your agent and use the built-in channel adapters to deploy your agent to Microsoft 365 Copilot.

The built-in channel adapters in the Microsoft 365 Agents SDK support a number of channels, including Microsoft 365 Copilot.  By wrapping your existing agent with the Agents SDK, you can integrate with the Azure Bot Service that sits between a user surface or channel - such as Microsoft 365 Copilot - and your code. The Azure Bot Service translates what that channel sends and transforms it into common activities to match what your code understands-in this case, the Agents SDK wrapper that accepts incoming messages from Azure Bot Service.

## Modify components of your agent

To bring your agent into Copilot, you need modify some components of your agent, as described in this section.

We recommend that you start with the Microsoft 365 Agents Toolkit and use the Echo/Empty Agent sample (currently available in C# in Visual Studio and JavaScript in Visual Studio Code). To familiarize yourself with the Agents SDK structure, go through the steps to test and deploy your agent using the Agents Toolkit and the SDK; these tools simplify the tasks described.

1. Create your app registration and Azure Bot Service record to handle channel communication - The Microsoft 365 Agents SDK uses Azure Bot Service to handle the communication between channels and your code, managing components related to those channels. You need to  [Create an Azure Bot Service resource](/azure/bot-service/abs-quickstart) with an app registration that you reference in your agent manually.

2. Configure your agent event listeners - An agent built with the Microsoft 365 Agents SDK is structured to listen to events from the channel - in this case, Microsoft 365 Copilot. To begin, use **OnActivity**.

    Update the structure of your agent so it can handle the activity sent from Microsoft 365 Copilot to the Azure Bot Service.To do this, add the existing agent into the structure of an agent built with Microsoft 365 Agents SDK. You don't have to specifically call out many activities; an agent can listen for any message from the client by using the OnActivity method. The existing agent then can be added to or referenced in the method that is triggered from the event that is being listened to, and therefore run every time an activity is sent. An activity can be a message or another type of action within the channel.

3. Create manually or generate a [manifest file](https://github.com/microsoft/Agents/blob/main/samples/basic/authorization/auto-signin/dotnet/appManifest/m365copilot-manifest.json) by using the Agents Toolkit. Microsoft 365 Copilot requires a .zip package that contains a manifest file. The manifest file includes a set of instructions to tell Microsoft 365 Copilot where to look for your agent, and other information. Microsoft 365 Copilot requires an agent to be hosted and an endpoint that is linked through an app registration (id) and referenced in a manifest file. If your agent runs in Teams, you can modify the existing manifest file to support the latest schema for Microsoft 365 Copilot.

Agents connected to Microsoft 365 Copilot can optionally request permission from the user to act on their behalf. If you choose to use this capability, configure it during the agent setup process in Azure Bot Service. Tools to get started

The effort required to bring your agent into Copilot varies based on the agent complexity and whether you need to add token management to enable your agent to use the user's identity  to scope its knowledge.

To get started, use the Microsoft 365 Agents Toolkit and the Echo Agent sample to create your agent and follow documentation for [Visual Studio](/microsoft-365/agents-sdk/create-new-toolkit-project-vs) or [Visual Studio Code](/microsoft-365/agents-sdk/create-new-toolkit-project-vsc) to test and deploy it. This will help you become familiar with how the Agents Toolkit, Agents SDK, and Microsoft 365 Copilot work together.

## Related content

- [Microsoft 365 Agents SDK](/microsoft-365/agents-sdk/)
