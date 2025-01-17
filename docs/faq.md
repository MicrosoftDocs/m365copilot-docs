---
title: Microsoft 365 Copilot Extensibility FAQ
description: Get answers to frequently asked questions related to Microsoft 365 Copilot extensibility.
author: girliemac
ms.author: timura
ms.topic: best-practice
ms.date: 01/15/2024
---

# Frequently asked questions for Microsoft 365 Copilot extensibility

This article provides answers to the frequently asked questions (FAQs) about Microsoft 365 Copilot extensibility and related topics.

## General questions

### What's the difference between declarative agents and custom engine agents?

Declarative agents are tools that enhance the Microsoft 365 Copilot experience. They combine custom knowledge and skills (like actions, triggers, and workflows) to create a rich conversational experience. These agents can be integrated into Microsoft 365 and use connectors for advanced features. They can also include other features like API plugins and app functionalities for Teams and Microsoft 365.

Custom engine agents use custom foundation models and orchestrators and can be tailored to specific enterprise needs. Custom engine agents include agents built with Copilot Studio, Teams AI library, and Azure AI Foundry. Custom engine agents currently work as standalone and Teams apps. 

For more information, see [Your extensibility options for Microsoft 365 Copilot](decision-guide.md).

### What's the difference between actions and plugins?

Although *actions* and *plugins* are sometimes used interchangeably, an action is actually a single API call from a plugin (For example, "Close ticket #1234"), and a plugin is a set of functions (such as close, create, resolve.).

In general, actions are the functionality that provides skills to Copilot within declarative agents. You can use Copilot Studio to build actions from Power Platform connectors, or you can create conversational, prompt, or flow connectors by using the Copilot Studio design canvas. You can use Teams Toolkit, or any technology stack that supports standard REST APIs, to build actions as API plugins.

With actions, you can light up agents that work *in-context* of Microsoft 365 Copilot, or you can use them to provide skills to agents that work in *immersive* experiences, such as declarative agents.

### What's the difference between Power Platform plugins and API connectors?
 
Both Power Platform connectors and API plugins allow for the calling of a standard REST API given an OpenAPI definition (Swagger) that describes it. Power Platform connectors are used from Power Platform, which includes Copilot Studio, and API plugins are defined in a Microsoft Teams or Microsoft 365 app package along with declarative agents.

### What's the equivalent of API plugins in Copilot Studio?

The orchestrator and connector mechanisms in Copilot Studio differ from API-based plugins. To connect an API with Copilot Studio, you need to create a custom connector that uses OpenAPI V2 swagger and add an AI description. This approach allows you to integrate various APIs seamlessly and apply the AI capabilities of Copilot Studio for enhanced functionality.

### What are the differences between Microsoft Graph connectors and Power Platform connectors?

Microsoft Graph connectors enable you to bring additional information into Microsoft Graph to make it discoverable across various Microsoft 365 experiences, including Microsoft 365 Copilot. The connection is synchronous to data-providing services; it replicates data into Microsoft 365 for use in Copilot and other scenarios. 

Power Platform connectors enable agents to interact with other systems to retrieve information in near real-time (for example, "Get ticket #1234") and to establish read/write actions (for example, "Create a ticket").

For Microsoft Graph connectors, any valid Microsoft 365 Copilot, Microsoft 365, or Office 365 license allows you to view data from connectors in your search results. However, you need sufficient index quota to ingest content from those connectors.

For Power Platform connectors, the licensing requirements can vary depending on the specific connectors and the actions you want to perform. Some connectors might require premium licenses, which aren't included in the standard Microsoft 365 licenses.

## Copilot security questions

### Is my data in Microsoft 365 Copilot protected?

Yes. Microsoft 365 Copilot adheres to strict privacy, security, and compliance standards. To learn more about how Microsoft 365 Copilot handles your organization data and the third party data, see [Data, Privacy, and Security for Microsoft 365 Copilot](/copilot/microsoft-365/microsoft-365-copilot-privacy).

### What are data retention policies?

For information about data retention in Copilot, see [Learn about retention for Copilot](/purview/retention-policies-copilot)

## License questions

### What licenses do I need to purchase to develop declarative agents or custom engine agents?

You can build declarative agents grounded on web search with limited capabilities without a Microsoft 365 Copilot license. If you have a [Microsoft 365 Copilot license](https://www.microsoft.com/microsoft-365/enterprise/copilot-for-microsoft-365#Pricing), you don't need additional licenses to build declarative agents with additional capabilities, including Microsoft Graph connectors and plugins. For details, see [Agent capabilities for Microsoft 365 users](prequisites.md#agent-capabilities-for-microsoft-365-users). 

You don't need a [Copilot Studio license](https://www.microsoft.com/microsoft-copilot/microsoft-copilot-studio#Pricing) to build agents; however, if you want to ground your agent in organizational data, you either need a license or you need to set up consumption metering in your tenant. For details, see [Copilot Studio requirements](prerequisites.md#copilot-studio-requirements) and [Manage message capacity](/microsoft-copilot-studio/requirements-messages-management). 

If you build AI solutions other than agents, a Copilot Studio license is required.

You don't need a Microsoft 365 Copilot license to build custom engine agents by using Teams AI Library. Instead, the cost depends on the Azure services consumed in the app. For details, see the [Azure pricing calculator](https://azure.microsoft.com/pricing/calculator/).

## Teams Toolkit questions

### What is the value of using Teams Toolkit?

If you're already a Visual Studio Code user, Teams Toolkit runs on Visual Studio Code with GitHub integration. Also, you can take advantage of features like CI/CD, and multitenants support.

### What do I need to connect to an API?

Unlike the low-code solution that uses a Power Platform connector to connect an API, Teams Toolkit lets you build an application package so Copilot can directly access a REST API without any intermediate layer. You just need to include an OpenAPI definition. It's important to add detailed descriptions to the OpenAPI definition so Copilot knows how to use the API. In some cases, you might need to simplify large or complex APIs.

## Azure AI questions

Azure AI services and Copilot extensibility cater to different needs and use cases within the AI ecosystem. The following questions help you understand the differences.

### What are the differences between Copilot extensibility and Azure AI services?

See the following table to learn about the differences between Copilot extensibility and Azure AI services.

| Feature | Copilot extensibility | Azure AI services|
|:--------|:----------------------|:-----------------|
| Scope   |Focused on extending the capabilities of Microsoft 365 Copilot within the Microsoft 365 ecosystem.| Provide a broad range of AI capabilities, including machine learning, cognitive services, and the Azure OpenAI Service.|
| Customization| Allows for the creation of plugins, connectors, and declarative agents to enhance productivity tools like Word, Excel, and Teams.|Highly customizable, allowing you to build and deploy AI models tailored to specific business needs.|
| Integration|Primarily integrates with Microsoft 365 applications, using organizational data and context.|Can be integrated into various applications and services beyond the Microsoft ecosystem.|

**Copilot extensibility use cases**

:::image type="content" source="assets/images/personas-extend-copilot.png" border="false" alt-text="Persona 1 - I am a developer, who manages the product database at an e-commerce company, and I want to build an inventory catalog plugin that brings the product information for internal org. Persona 2 - I am a marketing manager, who aims to launch a new campaign for my products. And I want a tool that helps developing marketing assets tailored to the campaign." lightbox="assets/images/personas-extend-copilot.png":::

Use cases for Azure AI services include creating bespoke AI solutions, such as:

- A customer service chatbot for your e-commerce site
- A virtual assistant to schedule appointments for your healthcare service
- Gaming experiences that incorporate generative AI

:::image type="content" source="assets/images/personas-build-custom-ai-apps.png" border="false" alt-text="Persona 1 - I'm an engineer, working for an e-commerce company, and I want to build a smart customer service chatbot for our shoe store. Persona 2 - I'm a game developer, and I want to craft a game featuring fictional characters that can engage in natural conversations with the players." lightbox="assets/images/personas-build-custom-ai-apps.png":::

### What are the differences between Copilot Studio and Azure AI Foundry?

The differences are the scope, customization, and integration they offer.

Copilot Studio comes with low-code features for users who prefer that approach. It applies AI to create chatbots and agents with a range of features such as AI integration and provides easy deployment across various channels.

[Azure AI Foundry](/azure/ai-studio/what-is-ai-studio) (formerly known as Azure AI Studio) is a coding-based platform that empowers developers to build and deploy intelligent, fully customizable bots. You can integrate these various AI tools and models, which enables you to innovate with AI in a secure and responsible manner. However, Azure AI Foundry is not the tool for *extending* Microsoft 365 Copilot's model and orchestrator.

### Can I build declarative agents with Azure AI services?

If you want to use Azure AI services, we recommend you to build custom engine agents instead of declarative agents.

If you choose to work with OpenAI models, such as GPT-4 turbo, you can take advantage of the web-based interface of [Azure OpenAI Studio](https://oai.azure.com/), which comes with the **Deploy to Teams** feature that generates a code template that you can modify, test, and deploy using Teams Toolkit.

To learn more about the difference between custom engine agents and declarative agents, see [Your extensibility options for Microsoft 365 Copilot](decision-guide.md).

---

🙋 If you have more questions or feedback, [let us know](feedback.md)!