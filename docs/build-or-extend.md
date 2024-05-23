---
title: Extend Microsoft Copilot or build your own copilot
description: When building Microsoft 365 AI solutions for business, you can either extend Copilot or build your own copilot from the ground up. Use this decision guide to explore your options and considerations.
author: girliemac
ms.author: timura
ms.topic: conceptual
ms.date: 05/22/2024
---

# Extending Microsoft Copilot versus building your own copilot

When it comes to deciding on your approach to AI development, there are numerous options to consider. Microsoft offers AI solutions and extensibility options ranging the stack from AI *infrastructure* (IaaS) to *platform* (PaaS) to *software* (SaaS) services, all geared toward accelerating your time-to-value thanks to open-source interoperability, integrated tools, and optimized AI infrastructure. If you're looking to build AI solutions for business, Microsoft 365 provides two powerful models for development: you can extend Microsoft Copilot or build your own custom engine copilot from the ground up.

:::image type="content" source="assets/images/build-or-extend.png" alt-text="A diagram that shows a summary of Build copilots or extend Microsoft Copilot. Read the article on this page for the details." lightbox="assets/images/build-or-extend.png" :::

This decision guide will help you explore your options and considerations.

## Extending Microsoft Copilot

**Microsoft Copilot** is available for end-users across multiple Microsoft products, including: Microsoft 365 (Office) app, Teams, Outlook, PowerPoint, Word, Excel, Power Apps, Power Automate, Power Virtual Agents, Power Pages, and Dynamics 365.

There are three versions of Microsoft Copilot:

- [**Microsoft Copilot**](https://copilot.microsoft.com/) - Available at [copilot.microsoft.com](https://copilot.microsoft.com/) and free for all users
- [**Copilot Pro**](https://www.microsoft.com/store/b/copilotpro) - A subscription-based version that offers faster performance and enhanced creativity capabilities
- [**Copilot for Microsoft 365**](https://www.microsoft.com/microsoft-365/enterprise/copilot-for-microsoft-365) - Available as "Work" profile with Copilot for Microsoft 365 subscription, specifically designed for enterprise users to enhance productivity within Microsoft 365 applications

By extending Copilot, you can tap into the vast knowledge and capabilities of Copilot’s Large Language Models (LLMs) and natural language processing. And when you expand Copilot for Microsoft 365, you gain the added advantage of utilizing the organizational knowledge within your workplace.

### Is extending Microsoft Copilot the right choice for you?

Building a full-fledged or stand-alone Retrieval-Augmented Generation (RAG) solution is not always what you need. Extending an existing interface with your own data may be the best suited solution for you.

Extending **Copilot** is right for you if:

- You want your service to be a part of the Microsoft ecosystem, enabling your users to benefit from the user experience of Microsoft products and allowing you to reach millions of users
- You want to leverage the Copilot orchestrator

For more on extending Copilot for all web users, see [Overview of plugins for Microsoft Copilot](/copilot/plugins/overview).

Additionally, you can also extend **Copilot for Microsoft 365** for enterprise users with extra features. This option is for you if:

- You are considering building AI solutions for organizations to boost employee productivity across businesses
- You want to leverage people-centric data with Microsoft Graph to provide more personalized experience for your users
- You want to use Graph Connector, SharePoint site library, or Dataverse table that is used in the workflow as your RAG data source

#### What can you create by extending Copilot for Microsoft 365?

You can either develop copilot extensions internally for your organization or build extensions that are publicly available. Here are some examples:

- You are a developer within an organization, who builds tools and applications intended for internal business use
- Or you are a developer at a *software as a service* (SaaS) company, who specializes in developing, marketing, and selling software products

:::image type="content" source="assets/images/personas-extend-copilot.png" border="false" alt-text="Persona 3 - I am a developer, who manages the product database at an e-commerce company, and I want to build an inventory catalog plugin that brings the product information for internal org. Persona 4 - I am a developer at a SaaS company, where we specialize a workspace design collaboration tool. And I want to build A collaboration extension that helps users discover content and share with their teammates." lightbox="assets/images/personas-extend-copilot.png":::

#### Types of copilot extensibility for Microsoft 365

There are two distinct extension interfaces for Microsoft Copilot for end-users: standalone *plugins* that connect REST APIs, and *declarative copilots*. As an analogy, you can view Microsoft Copilot as something like an operating system, where *plugins are services*, and *declarative copilots are apps*.

If these solutions align with your needs, continue exploring this Copilot for Microsoft 365 extensibility documentation site to learn more. Check out [Extensibility options of Copilot for Microsoft 365](decision-guide.md) to get started.

## Build your own copilot

Azure AI Services, Azure AI Search, Microsoft Copilot Studio, and other Microsoft Cloud technologies empower you to construct your own custom conversational AI experiences. A custom copilot can integrate company data and documents, retrieve real-time data from external APIs, and be embedded in company applications.

### Is building a custom copilot right for you?

If you’re a proficient developer and looking to create a fully customized end-to-end solution for your web or mobile app to cater to your business needs, and want:

- Full control on product branding
- Choice of language models and orchestration

Or, if you are building products like:

- A customer service chatbot for your e-commerce site
- A virtual assistant to schedule appointments for your healthcare service
- Gaming experiences that incorporate generative AI

:::image type="content" source="assets/images/personas-build-custom-ai-apps.png" border="false" alt-text="Persona 1 - I am an engineer, working for an e-commerce company, and I want to build a smart customer service chatbot for our shoe store. Persona 2 - I am a game developer, and I want to craft a game featuring fictional characters that can engage in natural conversations with the players." lightbox="assets/images/personas-build-custom-ai-apps.png":::

. . . then building a custom AI app with [**Azure AI Services**](/azure/developer/intro/azure-ai-for-developers) is probably the right choice for you.

When you choose to build a custom copilot, you have a broad spectrum of cognitive services and machine learning capabilities to leverage. These services come with pre-built models that can be tailored and deployed, making them perfect for applications that require features such as vision, speech, and language comprehension. RAG solutions can be utilized in conjunction with Azure AI services to develop applications capable of generating responses based on external data. This allows your bespoke AI assistants to be fully integrated with company data and documents or fetch real-time data from APIs.

If you're ready to build your own custom AI solutions, check out [**Azure AI Studio**](/azure/ai-studio/what-is-ai-studio).

Otherwise, if you prefer:

- A rapid development with its no-code interface, templates, co-pilot authoring run-time capabilities, and built-in analytics

Or you want to design tailored conversations for predictable scenarios that require specific responses such as:

- Sales help and support issues
- Opening hours and store information
- Public health tracking information

. . . then building a custom copilot with [**Copilot Studio**](/microsoft-copilot-studio/fundamentals-what-is-copilot-studio) may be the right path for you.

### Is building a custom engine copilot for Microsoft 365 right for you?

With Azure AI services, you can craft a custom AI chatbot for **Teams** and **Microsoft 365** applications. If you’re seeking a custom bot solution that operates on Teams chat, then building with the **Teams AI Library** is the perfect fit for you. You can utilize the **Teams Toolkit** to start coding, and also leverage the new Teams app deployment features on Azure AI Studio.

#### Microsoft Copilot stack or your stack?

In the context of building Copilot for Microsoft 365, there are several options available. This diagram provides a comparison between the Copilot extensibility options (Graph connectors, plugins, and declarative Copilot) and the custom engine Copilot:

:::image type="content" source="assets/images/copilot-ext-vs-cec.png" border="true" alt-text="This diagram compares options between extend or build for M365" lightbox="assets/images/copilot-ext-vs-cec.png":::

The custom engine Copilot operates on a BYO (Bring Your Own) model. So you'll use your preferred LLM and orchestrator instead of leveraging Microsoft Copilot services.

Building with **Teams AI Library** is an excellent choice if:

- You want to choose models and orchestration
- You have prior experience in building Teams bots or are familiar with Teams bot development
- You aim to have your conversational AI bot accessible to all Microsoft 365 users, regardless of their Copilot licensing status

Learn more on building your own [custom engine copilot](overview-custom-engine-copilot.md) with the Teams AI Library.

## Extending GitHub Copilot

GitHub Copilot is an AI-powered coding assistant that aids you in writing code. It suggests lines or blocks of code as you type, enhancing your coding efficiency. It’s compatible with IDEs, including Visual Studio Code.
If you’re interested in expanding its capabilities, now you can build extensions for GitHub Copilot. Stay tuned for detailed instructions and guidelines on [GitHub Copilot documentation](https://docs.github.com).

## Next step

Indeed, there are several ways to extend Copilot to better suit your specific needs. Learn more about these options:
> [!div class="nextstepaction"]
> [Choose your Copilot extensibility path](decision-guide.md)

## See also

- [Azure AI services](/azure/developer/intro/azure-ai-for-developers)
- [Azure AI Studio](/azure/ai-studio/what-is-ai-studio?tabs=home)
- [Teams AI Library](/microsoftteams/platform/bots/how-to/teams%20conversational%20ai/teams-conversation-ai-overview)
- [Copilot plugins for Bing](/copilot/plugins/overview)
- [Adopt, extend and build Copilot experiences across the Microsoft Cloud](/microsoft-cloud/dev/copilot/overview)
