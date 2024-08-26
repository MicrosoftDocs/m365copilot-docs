---
title: Microsoft 365 Copilot extensibility FAQ
description: Frequently asked questions for Microsoft Copilot extensions and beyond
author: girliemac
ms.author: timura
ms.topic: best-practice
ms.date: 08/26/2024
---

# Frequently asked questions for Microsoft Copilot extensibility and beyond

This section provides answers to the frequently asked questions (FAQs) about Microsoft 365 Copilot extensibility and related topics.

## Pro-code vs. Copilot Studio questions

Building a Copilot extension with Teams Toolkit for pro-coders and Copilot Studio for low-coders offers different approaches and tools for developers. Some of the unique technology and terminology may confuse you, so here are some questions and answers:

#### What is the difference between plugins and actions?

While the terms "actions" and "plugins" in Copilot Studio are often used interchangeably, they have distinct meanings. Generally, an action refers to a single API call from a plugin (*e.g.*, "Close ticket #1234"), whereas a plugin encompasses a collection of functions (*e.g.*, close, create, resolve, etc.).

#### What is the equivalent of API-based plugins in Copilot Studio?

The orchestrator and connector mechanisms in Copilot Studio differ from API-based plugins. To connect an API with Copilot Studio, you need to create a custom connector that uses OpenAPI V2 swagger and add an AI description. This approach allows you to integrate various APIs seamlessly and leverage the AI capabilities of Copilot Studio for enhanced functionality.

#### What are the differences between Power Graph connectors and Power Platform connectors?

**Power Graph connectors** enable bringing additional information periodically to the Microsoft Graph making it discoverable across various Microsoft 365 experiences including Copilot for Microsoft 365. The connection is synchronous to data-providing services, replicating data into Microsoft 365 for use in Copilot and other scenarios. 

In contrast, **Power Platform connectors** enable copilots to interact with other systems to retrieve information in near real-time (*e.g.*, "Get ticket #1234") also establish read/write actions (*e.g.*, "Create a ticket").

For Microsoft Graph connectors, any valid Microsoft 365 Copilot, Microsoft 365, or Office 365 license allows you to view data from connectors in your search results. However, you need sufficient index quota to ingest content from those connectors.

For Power Platform connectors, the licensing requirements can vary depending on the specific connectors and the actions you want to perform. Some connectors may require premium licenses, which are not included in the standard Microsoft 365 licenses.

## Data and safety questions

#### Is my data with Microsoft 365 Copilot protected?

Yes, your data with Microsoft 365 Copilot is protected. Microsoft Copilot for Microsoft 365 adheres to strict privacy, security, and compliance standards, including GDPR and the EU Data Boundary. It uses encryption for data in transit and at rest, and does not retain prompts or responses beyond a short caching period for runtime purposes. Additionally, it only accesses data you have permission to see within your M365 environment. 

When you extend Copilot, queries based on your prompts, conversation history, and Microsoft 365 data can be shared with the extension to generate a response or complete a command, and your external data from connectors is ingested into Microsoft Graph and remains in your tenant. Learn more at [Data, Privacy, and Security considerations of extending Copilot for Microsoft 365](data-privacy-security.md).

#### How are the performance and safety evaluated? 

All response generation features of copilots are tested, measured, and validated internally before releasing generally. Such evaluations are done using extensive experimentation to ensure accurate, grounded and responsible responses that align with human preferences.

For each capability, we have conducted several tests to validate Microsoft Copilot for Microsoft 365. In addition to all Copilot for Microsoft 365 related capabilities, Responsible AI (RAI) testing was performed on different harm types to evaluate defect rates. The defect scores are then used to improve the model and mitigate the harm. It's important to keep in mind that the system was designed to mimic natural human communication, but the output may be inaccurate, incorrect, or out of date.

## License & price questions

#### What licenses do I need to purchase to develop extensions or custom engine copilots?

The [Microsoft 365 Copilot license](https://www.microsoft.com/microsoft-365/enterprise/copilot-for-microsoft-365#Pricing) is an additional service that is not included with standard Microsoft 365 licenses. The cost for Microsoft 365 Copilot is $30 USD per user per month, with an annual subscription. This license provides AI capabilities within the Office suite of applications, including Teams, Word, Outlook, Excel, PowerPoint, OneNote, Forms, and Loop. To build extensions for Microsoft 365 Copilot, you may need additional licensing:

**Building Copilot extensions with Teams Toolkit (for Pro-Coders)**: Requires a Microsoft 365 Copilot license. Pro-coders can build custom plugins and extensions using Teams Toolkit, which is free to use.

**Copilot Extensibility with Copilot Studio**: Requires both [a tenant license and a per-user license](https://www.microsoft.com/microsoft-copilot/microsoft-copilot-studio#Pricing). The tenant license costs $200 per month and allows for 25,000 messages. Each user who creates copilots needs a zero-cost per-user license. The Copilot Studio license is included with the Microsoft 365 Copilot SKU, which is priced at $30 per user per month. 

On the other hand, if you wish to **build custom engine copilot** using Teams AI Library, you are not required Microsoft 365 Copilot license. Instead, the cost depends on the Azure services consumed in the app. See the [Azure Pricing Calculator](https://azure.microsoft.com/pricing/calculator/).

#### Can I have Copilot license for development purposes?

Unfortunately, the Copilot license does not apply to the M365 development tenant. You will need to purchase a separate tenant with a Copilot license or build on a production environment, although the latter is not recommended.

## Azure AI questions

Azure AI services and Copilot extensibility cater to different needs and use cases within the AI ecosystem. Here are some topics to help you understand their differences:

#### What are the differences between Copilot extensibility and Azure AI services?

**Copilot Extensibility**
- **Scope**: Focused on extending the capabilities of Microsoft Copilot within the Microsoft 365 ecosystem.
- **Customization**: Allows for the creation of plugins, connectors, and declarative copilots to enhance productivity tools like Word, Excel, and Teams.
- **Integration**: Primarily integrates with Microsoft 365 applications, leveraging organizational data and context

**Azure AI Services**
- **Scope**: Azure AI services provide a broad range of AI capabilities, including machine learning, cognitive services, and the Azure OpenAI Service.
- **Customization**: Highly customizable, allowing developers to build and deploy AI models tailored to specific business needs.
- **Integration**: Can be integrated into various applications and services beyond the Microsoft ecosystem.

Use Cases for Azure AI services include creating bespoke AI solutions, such as:

- A customer service chatbot for your e-commerce site
- A virtual assistant to schedule appointments for your healthcare service
- Gaming experiences that incorporate generative AI

:::image type="content" source="assets/images/personas-build-custom-ai-apps.png" border="false" alt-text="Persona 1 - I am an engineer, working for an e-commerce company, and I want to build a smart customer service chatbot for our shoe store. Persona 2 - I am a game developer, and I want to craft a game featuring fictional characters that can engage in natural conversations with the players." lightbox="assets/images/personas-build-custom-ai-apps.png":::

#### What are the differences between Copilot Studio and Azure AI Studio?

**Copilot Studio** is designed for users who prefer a low-code or no-code approach. It leverages AI to create chatbots and copilots with a range of features such as AI integration and easy deployment across various channels. 

[**Azure AI Studio**](/azure/ai-studio/what-is-ai-studio) is a coding-based platform that empowers seasoned developers to build and deploy intelligent, fully customizable bots. you can integrate these various AI tools and models, allowing developers to innovate with AI in a secure and responsible manner, however, this is *not* the tool to *extend* Microsoft 365 Copilot.

#### Can I build Microsoft Copilot extensions with Azure AI Studio? 

If you want to build with a model of your choice using Azure AI Studio, instead of *extending* Microsoft Copilot with Microsoft 365 enterprise data, you should build **Custom engine copilot**. To learn more about the difference between custom engine copilots and declarative copilots, read [Your extensibility options for Microsoft 365 Copilot](decision-guide.md).

You can create intelligent bots for Teams and M365 from the **Deploy to Teams** feature with Teams Toolkit.

---

You have more questions and feedback? [Let us know](feedback.md)!