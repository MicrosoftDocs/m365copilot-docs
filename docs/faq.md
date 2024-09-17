---
title: Microsoft 365 Copilot extensibility FAQ
description: Frequently asked questions for Microsoft Copilot agents and beyond
author: girliemac
ms.author: timura
ms.topic: best-practice
ms.date: 09/16/2024
---

# Frequently asked questions for Microsoft 365 Copilot extensibility and beyond

This section provides answers to the frequently asked questions (FAQs) about Microsoft 365 Copilot extensibility and related topics.

## "What is the difference between A and B" questions

#### What is the difference between declarative agents and custom engine agents?

**Declarative agents**: are tools that enhance the Microsoft 365 Copilot experience. They combine custom knowledge and skills (like actions, triggers, and workflows) to create a rich conversational experience. These agents can be integrated into Microsoft 365 and use connectors for advanced features. They can also include other features like API plugins and app functionalities for Teams and Microsoft 365.

**Custom engine agents**: are developed using custom foundation models and orchestrators and can be tailored to specific enterprise needs. These custom agents include agents built with Copilot Studio, Teams AI library, Azure AI, etc. Custom engine agents currently work as standalone, Teams apps and, in the future, as *immersive* Copilot agent experiences. 

No sure which one to build? [Your extensibility options for Microsoft 365 Copilot](decision-guide.md) article may help you.

#### What is the difference between custom engine agents and Copilot Studio custom agent?

**Custom engine agents** and **Copilot Studio custom agents** share a similar characteristic—they don't use the Microsoft Copilot foundation model or orchestration. If you need more advanced customization around orchestration, or if your users don't use Microsoft 365 Copilot, consider the custom agent path. You can build this through several alternatives, such as the Teams AI library or Azure OpenAI for custom engine agents, or Copilot Studio for building custom agents.

#### What is the difference between actions and plugins?

While the terms "actions" and "plugins" are sometimes used interchangeably, however, technically an action refers to a single API call from a plugin (*e.g.*, "Close ticket #1234"), whereas a plugin encompasses a collection of functions (*e.g.*, close, create, resolve, etc.).

In general, actions are the functionality that provides skills to Copilot within Declarative agents. Developers can use Copilot Studio to build Actions from Power Platform connectors, or they can create conversational, prompt, or flow connectors using the Copilot Studio design canvas. Developers can use Teams Toolkit, or any technology stack that supports standard REST APIs, to build actions as API Plugins.
With actions you can light up Copilot agents that work *in-context* of Microsoft 365 Copilot, or they can also be used to provide skills to Copilot agents that work in *immersive* experiences, such as declarative agents.

#### What is the difference between Power Platform Plugins and API Connectors
 
Both Power Platform connectors and API Plugins allow calling of a standard REST API given an Open AI definition (Swagger) that describes it. However Power Platform connectors are used from Power Platform, which includes Copilot Studio, and API Plugins are defined in a Microsoft Teams/Microsoft 365 application package along with declarative agents.

#### What is the equivalent of API plugins in Copilot Studio?

The orchestrator and connector mechanisms in Copilot Studio differ from API-based plugins. To connect an API with Copilot Studio, you need to create a custom connector that uses OpenAPI V2 swagger and add an AI description. This approach allows you to integrate various APIs seamlessly and apply the AI capabilities of Copilot Studio for enhanced functionality.

#### What are the differences between Graph connectors and Power Platform connectors?

**Graph connectors** enable bringing additional information to the Microsoft Graph making it discoverable across various Microsoft 365 experiences including Copilot for Microsoft 365. The connection is synchronous to data-providing services, replicating data into Microsoft 365 for use in Copilot and other scenarios. 

In contrast, **Power Platform connectors** enable agents to interact with other systems to retrieve information in near real-time (*e.g.*, "Get ticket #1234") also establish read/write actions (*e.g.*, "Create a ticket").

For Microsoft Graph connectors, any valid Microsoft 365 Copilot, Microsoft 365, or Office 365 license allows you to view data from connectors in your search results. However, you need sufficient index quota to ingest content from those connectors.

For Power Platform connectors, the licensing requirements can vary depending on the specific connectors and the actions you want to perform. Some connectors may require premium licenses, which aren't included in the standard Microsoft 365 licenses.

#### What are the differences between Copilot extensibility and Azure AI services?

Jump to the [Azure AI questions](#azure-ai-questions) section below!

## Data and safety questions

#### Is my data with Microsoft 365 Copilot protected?

Yes, your data with Microsoft 365 Copilot is protected. Microsoft Copilot for Microsoft 365 adheres to strict privacy, security, and compliance standards, including GDPR and the EU Data Boundary. It uses encryption for data in transit and at rest, and doesn't retain prompts or responses beyond a short caching period for runtime purposes. Additionally, it only accesses data you have permission to see within your Microsoft 365 environment. 

When you extend Copilot, it can share queries based on your prompts, conversation history, and Microsoft 365 data with the agent to generate responses or complete commands. Additionally, any external data from connectors is ingested into Microsoft Graph and stays within your tenant. Learn more at [Data, Privacy, and Security considerations of extending Copilot for Microsoft 365](data-privacy-security.md).

#### How are the performance and safety evaluated? 

All response generation features of agents are tested, measured, and validated internally before releasing generally. Such evaluations are done using extensive experimentation to ensure accurate, grounded, and responsible responses that align with human preferences.

For each capability, we conducted several tests to validate Microsoft Copilot for Microsoft 365. In addition to all Copilot for Microsoft 365 related capabilities, Responsible AI (RAI) testing was performed on different harm types to evaluate defect rates. The defect scores are then used to improve the model and mitigate the harm. It's important to keep in mind that the system was designed to mimic natural human communication, but the output may be inaccurate, incorrect, or out of date.

## License questions

#### What licenses do I need to purchase to develop declarative agents or custom engine agents?

There's no extra license requirement to build declarative agents (including Graph connectors and plugins), when you have the [Microsoft 365 Copilot license](https://www.microsoft.com/microsoft-365/enterprise/copilot-for-microsoft-365#Pricing).

**Copilot Extensibility with Copilot Studio**: [Copilot Studio license](https://www.microsoft.com/microsoft-copilot/microsoft-copilot-studio#Pricing) isn't required to build Copilot agents, however, if you build AI solutions other than Copilot agents, the license is required.

On the other hand, if you wish to **build custom engine agent** using Teams AI Library, you aren't required Microsoft 365 Copilot license. Instead, the cost depends on the Azure services consumed in the app. See the [Azure Pricing Calculator](https://azure.microsoft.com/pricing/calculator/).

#### Can I have Copilot license for development purposes?

Unfortunately, the Copilot license doesn't apply to the Microsoft 365 development tenant. You need to purchase a separate tenant with a Copilot license or build on a production environment, although the latter isn't recommended.

## Teams Toolkit questions

#### What is the value of using Teams Toolkit?

If you're already a Visual Studio Code user, Teams Toolkit runs on VS Code with GitHub integration! Also, you can take advantage of the features like, CI/CD, and multitenants support.

#### What do I need to connect to an API?

Unlike the low-code solution, where you use Power Platform connector to connect an API, Teams Toolkit lets you build an application package so Copilot can access a REST API without any intermediate layer; all you need to do is include an OpenAPI definition. It's important to add detailed descriptions to the OpenAPI definition so Copilot knows how to use the API; simplifying very large or complex API's may be necessary in some cases.

## Azure AI questions

Azure AI services and Copilot extensibility cater to different needs and use cases within the AI ecosystem. Here are some topics to help you understand their differences:

#### What are the differences between Copilot extensibility and Azure AI services?

**Copilot Extensibility**
- **Scope**: Focused on extending the capabilities of Microsoft Copilot within the Microsoft 365 ecosystem.
- **Customization**: Allows for the creation of plugins, connectors, and declarative agents to enhance productivity tools like Word, Excel, and Teams.
- **Integration**: Primarily integrates with Microsoft 365 applications, leveraging organizational data and context

**Azure AI Services**
- **Scope**: Azure AI services provide a broad range of AI capabilities, including machine learning, cognitive services, and the Azure OpenAI Service.
- **Customization**: Highly customizable, allowing developers to build and deploy AI models tailored to specific business needs.
- **Integration**: Can be integrated into various applications and services beyond the Microsoft ecosystem.

Use Cases for Azure AI services include creating bespoke AI solutions, such as:

- A customer service chatbot for your e-commerce site
- A virtual assistant to schedule appointments for your healthcare service
- Gaming experiences that incorporate generative AI

:::image type="content" source="assets/images/personas-build-custom-ai-apps.png" border="false" alt-text="Persona 1 - I'm an engineer, working for an e-commerce company, and I want to build a smart customer service chatbot for our shoe store. Persona 2 - I'm a game developer, and I want to craft a game featuring fictional characters that can engage in natural conversations with the players." lightbox="assets/images/personas-build-custom-ai-apps.png":::

#### What are the differences between Copilot Studio and Azure AI Studio?

The differences are the scope, customization, and integration they offer.

**Copilot Studio** comes with low-code features for users who prefer the approach. It applies AI to create chatbot and agents with a range of features such as AI integration and easy deployment across various channels. 

[**Azure AI Studio**](/azure/ai-studio/what-is-ai-studio) is a coding-based platform that empowers developers to build and deploy intelligent, fully customizable bots. You can integrate these various AI tools and models, allowing developers to innovate with AI in a secure and responsible manner, however, Azure AI Studio is not the tool for *extending* Microsoft 365 Copilot.

#### Can I build Microsoft Copilot agents with Azure AI services? 

If you want to use Azure AI services, we recommend you to build **Custom engine agent**, instead of *extending* Microsoft Copilot.

You can build Custom engine agent with Microsoft 365 enterprise data, using the web-based interface of [Azure OpenAI Studio](https://oai.azure.com/). You can create intelligent bots for Teams and Microsoft 365 from the **Deploy to Teams** feature with Teams Toolkit.

To learn more about the difference between custom engine agents and declarative agents, read [Your extensibility options for Microsoft 365 Copilot](decision-guide.md).

---

🙋 You have more questions and feedback? [Let us know](feedback.md)!