---
title: Custom and declarative copilots
description: When building Microsoft 365 AI solutions for business, you can either extend Copilot or build your own copilot from the ground up. Use this decision guide to explore your options and considerations.
author: v-ypalikila
ms.author: timura
ms.topic: conceptual
ms.date: 06/27/2024
---

# Custom and declarative copilots

Microsoft Copilot is designed to be a versatile platform that integrates with Microsoft 365 and offers a range of functionalities for developers to build upon. It includes features like Graph Connectors, API Plugins, and the ability to create Copilot Extensions.

Copilots are natural language assistants that can help with creative tasks, generate insights, and execute automated workflows. Copilots are composed Of workflows, actions, knowledge, and triggers, powered by one or more foundation models and an orchestrator that oversees and synchronizes operations Of the copilot, Copilots can power gem-Al capabilities in apps, web services and can be published as Copilot extensions to extend and customize Microsoft Copilot.

Let's understand more about each item that makes a copilot:

* **Workflows**: Workflows guide copilot's behavior, scope, and functionalities.
* **Triggers**: Triggers prompt copilot to take proactive actions and automate tasks.
* **Actions**: Actions are copilot can perform on behalf Of users external systems.
* **Knowledge**: Knowledge and RAG techniques are used by copilot to provide relevant, contextual responses. 
* **Orchestrator**: Orchestrator synchronizes processing of user prompts across foundation models, knowledge, and actions.
* **Foundation models**: AI models that can perform a wide range of tasks.

Microsoft 365 Copilot offers two distinct pathways for enhancing productivity and streamlining workflows: Declarative Copilots and Custom Copilots. Understanding the differences between these two can empower developers and organizations to make informed decisions tailored to their unique needs.

Declarative Copilots are a type of extension that combines Microsoft Copilot with custom instructions. They allow for a more personalized experience by adding domain knowledge and focusing on specific data sources or user roles within an organization. The Low-Code Approach Declarative Copilots are designed for ease of use, allowing users to converse with, build, or extend functionalities using low to pro code models. These copilots are crafted declaratively with Copilot Studio, utilizing custom instructions and, optionally, training on organizational data.

Custom Engine Copilots are another extension type that allows for the use of a custom Large Language Model (LLM) or Orchestrator, which is useful for scenarios requiring specific AI stacks or for publishing copilots to external users not on Microsoft. The Pro-Code Solution Custom Copilots cater to organizations with their own Copilot-like capabilities. Custom Engine Copilots are built using the Copilot SDK, which enables coding of instructions and action calls. Custom Copilots offer a higher degree of flexibility, allowing for the development of overrides to existing horizontal skills and the packaging of custom plugins, including message extensions and adaptive cards.

## When to Choose Which?

The decision to use a declarative or custom copilot hinges on several factors:

|Declarative Copilots  |Custom Engine Copilots  |
|---------|---------|
|Use Copilot's orcestrator and model     |   Use custom orchestrator and model |
|For scenarios, which require a high level of focus or specialization.| For scenarios demanding extensive customization and control over the AI’s behavior|
|Developers who need to tailor Copilot for their scenarios can build Declarative copilots by simply declarating instructions in the app manifest. | Developers who need an advance customization for their Copilot experience can build Custom engine copilots by creating an AI chatbot.|
|Create managed copilots with a guided low-code experience with  Copilot St.udio |   Create custom copilots with custom code and full control with pro-code using Azure AI studio or Visual Studio Code.  |
|You can start in low-code with a managed stack with Copilot Studio where you can:<br> * Quickly and securely build a solution based on your unique instructions, knowledge, and actions. <br><br> * Control the orchestration Of your large language model to fit your specific workflows. <br><br> * Deploy your copilots across websites, messaging channels, Microsoft Teams and as copilot extensions to serve employees, customers, and partners.    |You can enhance your own copilot with Azure AI Studio to: <br><br> * Use prebuilt models or train models using your data. <br><br> * Build and manage your AI applications. <br><br> * Use tools for creating, refining, evaluating, and maintaining the building blocks of your copilot.        |
|Can extend skills and knowledge by utilizing Graph Connectors and plugins | Can extend skills and knowledge by utilizing Retrieval-Augmented Generation (RAG) and custom functions.|

Declarative and custom copilots serve as powerful extensions of the Microsoft 365 Copilot, each suited to different organizational needs and technical proficiencies. By carefully considering the criteria of complexity, customization, and development resources, developers can choose the right copilot to enhance their productivity and drive innovation within their workflows.
