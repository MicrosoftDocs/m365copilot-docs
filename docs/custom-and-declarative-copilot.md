---
title: Custom and declarative copilots
description: When building Microsoft 365 AI solutions for business, you can either extend Copilot or build your own copilot from the ground up. Use this decision guide to explore your options and considerations.
author: v-ypalikila
ms.author: timura
ms.topic: conceptual
ms.date: 06/27/2024
---

# Custom and declarative copilots

Custom and declarative copilots are specialized tools within the Copilot for Microsoft 365 framework, designed to streamline and personalize your workflow.

Custom copilots are for those who need a tailored AI experience. They use a unique Large Language Model or Orchestrator to fit specific requirements, perfect for teams with coding skills. With the Copilot SDK, you can create detailed instructions, override skills, and even develop custom plugins.

Declarative copilots are user-friendly and require less coding knowledge. They work by combining Copilot with custom instructions to focus on particular areas or roles within your organization. They're built using Copilot Studio, allowing you to easily extend Copilot's capabilities with a few simple commands.

Both types are designed to enhance your productivity by fitting into the Copilot for Microsoft 365 ecosystem, giving you the power to choose the right tool for your needs.

## When to Choose Which?

The decision to use a declarative or custom copilot hinges on several factors:

|Declarative copilots  |Custom Engine copilots  |
|---------|---------|
|Use Copilot's orcestrator and model     |   Use custom orchestrator and model |
|For scenarios, which require a high level of focus or specialization.| For scenarios demanding extensive customization and control over the AI’s behavior|
|Developers who need to tailor Copilot for their scenarios can build Declarative copilots by simply declarating instructions in the app manifest. | Developers who need an advance customization for their Copilot experience can build Custom engine copilots by creating an AI chatbot.|
|You can start with a managed stack with Copilot Studio where you can:<br> * Quickly and securely build a solution based on your unique instructions, knowledge, and actions. <br><br> * Control the orchestration Of your large language model to fit your specific workflows. <br><br> * Deploy your copilots across websites, messaging channels, Microsoft Teams and as copilot extensions to serve employees, customers, and partners.    |You can enhance your own copilot with Azure AI Studio to: <br><br> * Use prebuilt models or train models using your data. <br><br> * Build and manage your AI applications. <br><br> * Use tools for creating, refining, evaluating, and maintaining the building blocks of your copilot.        |
|Can extend skills and knowledge by utilizing Graph Connectors and plugins | Can extend skills and knowledge by utilizing Retrieval-Augmented Generation (RAG) and custom functions.|

Declarative and custom copilots serve as powerful extensions of the Microsoft 365 Copilot, each suited to different organizational needs and technical proficiencies. By carefully considering the criteria of complexity, customization, and development resources, developers can choose the right copilot to enhance their productivity and drive innovation within their workflows.
