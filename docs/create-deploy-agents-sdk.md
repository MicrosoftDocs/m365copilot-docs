---
title: Create and Deploy a Custom Engine Agent with Microsoft 365 Agents SDK
description: Use the Microsoft 365 Agents SDK to build a custom engine agent and deploy it to Microsoft 365 Copilot.
author: jessicaaawu
ms.author: scritchley
ms.topic: article
ms.localizationpriority: medium
ms.date: 05/15/2025
ms.custom: [copilot-learning-hub]
---

# Create and deploy an agent with Microsoft 365 Agents SDK

The Microsoft 365 Agents SDK enables you to build custom engine agents by using the AI stack of your choice, then deploy them to Microsoft 365 Copilot. With the Microsoft 365 Agents Toolkit for Visual Studio and Visual Studio Code, you can use the built-in templates to scaffold your projects.

The SDK supports integration with a wide range of models and orchestrators—including Azure Foundry, Semantic Kernel, OpenAI Agents, LangChain, or custom-built solutions. You can even combine multiple agents built with different technologies and surface them through Microsoft 365 Copilot.

## What you can do with the Microsoft 365 Agents SDK

You can use the Microsoft 365 Agents SDK to:

- **Build agents quickly** and surface them across multiple channels, including Microsoft 365 Copilot and Microsoft Teams.

- **Use your preferred AI services** to implement agentic patterns. The SDK is model- and orchestrator-agnostic - giving you full flexibility.

- **Customize agent behavior** based on the capabilities of each client channel. For example, you can tailor your agent to respond to specific events or actions in Copilot, Teams, or other platforms.

## Get started with the SDK

You can get started with the Microsoft 365 Agents SDK in one of three ways:

- [Use the Microsoft 365 Agents Toolkit](#use-the-agents-toolkit-recommended) (recommended) - Available in C#, JavaScript, and Python for Visual Studio and Visual Studio Code, the toolkit provides scaffolding and templates to help you set up your agent project.
- [Clone a sample project](#clone-a-sample-project-or-use-the-cli) - Start with a working example and open it in your preferred IDE.
- [Use the CLI](#clone-a-sample-project-or-use-the-cli) - Generate a new agent using command-line tools.

### Use the Agents Toolkit (recommended)

The Microsoft 365 Agents Toolkit helps you quickly scaffold agent projects using built-in templates for Visual Studio and Visual Studio Code.

The Agents Toolkit includes the following templates:

- **Echo Agent / Empty Agent** - Start from a minimal baseline and add your own AI, orchestration, and knowledge sources.
- **Weather Agent** - Integrate Azure Foundry or OpenAI AI services with orchestration tools like Semantic Kernel or LangChain already configured for you.

You can run and test your agent locally by using the agents playground. For more information, see the following articles:

- [Create a new agent using Visual Studio (C#)](/microsoft-365/agents-sdk/create-new-toolkit-project-vs)
- [Create a new agent using Visual Studio Code (JavaScript & Python coming soon)](/microsoft-365/agents-sdk/create-new-toolkit-project-vsc)

### Clone a sample project or use the CLI

If you prefer not to use the Agents Toolkit, you can clone a sample in GitHub or use the CLI.

To get started, see the [Agents SDK quickstart](/microsoft-365/agents-sdk/create-test-basic-agent?tabs=csharp).

## Deploy your agent

Deploying your agent is dependent on your choice of platform. For example, to deploy to Azure, you can follow the steps in [Deploy your agent to Azure manually](/microsoft-365/agents-sdk/deploy-azure-bot-service-manually). For other platforms, see the platform documentation for deploying web apps.

## Related content

- [Managing Turns in the Agents SDK](/microsoft-365/agents-sdk/managing-turns)
- [Using Activities](/microsoft-365/agents-sdk/using-activities)
- [Creating Messages](/microsoft-365/agents-sdk/creating-messages)
