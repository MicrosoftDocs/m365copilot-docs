---
title: Microsoft 365 Copilot Extensibility FAQ
description: Get answers to frequently asked questions related to Microsoft 365 Copilot extensibility.
author: girliemac
ms.author: timura
ms.topic: best-practice
ms.localizationpriority: medium
ms.date: 11/16/2026
ai-usage: ai-assisted
---

# Frequently asked questions for Microsoft 365 Copilot extensibility

This article provides answers to the frequently asked questions (FAQs) about Microsoft 365 Copilot extensibility and related topics.

## General questions

### What's the difference between declarative agents and custom engine agents?

Declarative agents are tools that enhance the Microsoft 365 Copilot experience. They combine custom knowledge and skills (like actions, triggers, and workflows) to create a rich conversational experience. These agents can be integrated into Microsoft 365 and use connectors for advanced features. They can also include other features like API plugins and app functionalities for Teams and Microsoft 365.

Custom engine agents use custom foundation models and orchestrators and can be tailored to specific enterprise needs. Custom engine agents include agents built with Copilot Studio, Teams SDK, and Azure AI Foundry. Custom engine agents currently work as standalone and Teams apps.

For more information, see [Agents for Microsoft 365](/plugins/agents-overview).

### What's the difference between actions and plugins?

A **Microsoft 365 Copilot plugin** is an installable package that can bring together supported skills, tools, and agents.

An **API plugin** or **MCP plugin** is an integration that provides actions to a declarative agent, such as a function or tool to close a support ticket. It uses an API or MCP plugin manifest, not the Microsoft 365 app manifest that describes the installable package.

When a plugin package includes the agent, the API or MCP actions remain available through that agent. They don't become independently available capabilities of the package. For the manifest relationship and integration choices, see [Plugins and declarative agent actions](/plugins/plugins-overview#plugins-and-declarative-agent-actions).

To add actions to an agent, follow [MCP and API plugins for declarative agents](/plugins/overview-plugins). For Copilot Studio, use the [tools and connectors supported by Copilot Studio](/microsoft-copilot-studio/advanced-connectors).

### What's the difference between Power Platform connectors and API plugins?

Both Power Platform connectors and API plugins allow for the calling of a standard REST API given an OpenAPI definition (Swagger) that describes it. Power Platform connectors are used from Power Platform, which includes Copilot Studio, and API plugins are defined in a Microsoft Teams or Microsoft 365 app package along with declarative agents.

### What's the equivalent of API plugins in Copilot Studio?

The orchestrator and connector mechanisms in Copilot Studio differ from API-based plugins. To connect an API with Copilot Studio, you need to create a custom connector that uses OpenAPI V2 swagger and add an AI description. This approach allows you to integrate various APIs seamlessly and apply the AI capabilities of Copilot Studio for enhanced functionality.

### What are the differences between Copilot connectors and Power Platform connectors?

[Microsoft 365 Copilot connectors](/plugins/overview-copilot-connector) enable you to bring extra information into Microsoft Graph to make it discoverable across various Microsoft 365 experiences, including Microsoft 365 Copilot. The connection is synchronous to data-providing services. It replicates data into Microsoft 365 for use in Copilot and other scenarios.

Power Platform connectors enable agents to interact with other systems to retrieve information in near real-time (for example, "Get ticket #1234") and to establish read/write actions (for example, "Create a ticket").

For Copilot connectors, any valid Microsoft 365 Copilot, Microsoft 365, or Office 365 license allows you to view data from connectors in your search results. However, you need sufficient index quota to ingest content from those connectors.

For Power Platform connectors, the licensing requirements can vary depending on the specific connectors and the actions you want to perform. Some connectors might require premium licenses, which aren't included in the standard Microsoft 365 licenses.

## Copilot security questions

### Is my data in Microsoft 365 Copilot protected?

Yes. Microsoft 365 Copilot adheres to strict privacy, security, and compliance standards. To learn more about how Microsoft 365 Copilot handles your organization data and the third party data, see [Data, Privacy, and Security for Microsoft 365 Copilot](/copilot/microsoft-365/microsoft-365-copilot-privacy).

### What are data retention policies?

For information about data retention in Copilot, see [Learn about retention for Copilot](/purview/retention-policies-copilot)

## License questions

### What licenses do I need to purchase to develop declarative agents or custom engine agents?

You can build declarative agents based on web search with limited capabilities without a Microsoft 365 Copilot license. If you have a [Microsoft 365 Copilot license](https://www.microsoft.com/microsoft-365/enterprise/copilot-for-microsoft-365#Pricing), you don't need additional licenses to build declarative agents with extra capabilities, including Copilot connectors and plugins. For details, see [Microsoft 365 Copilot developer licenses](/plugins/prerequisites#microsoft-365-copilot-developer-licenses).

You don't need a [Copilot Studio license](https://www.microsoft.com/microsoft-copilot/microsoft-copilot-studio#Pricing) to build agents; however, if you want to ground your agent in organizational data, you either need a license or you need to set up consumption metering in your tenant. For details, see [Copilot Studio requirements](/plugins/prerequisites#copilot-studio-requirements) and [Manage message capacity](/microsoft-copilot-studio/requirements-messages-management).

If you build AI solutions other than agents, a Copilot Studio license is required.

You don't need a Microsoft 365 Copilot license to build custom engine agents by using Teams SDK. Instead, the cost depends on the Azure services consumed in the app. For details, see the [Azure pricing calculator](https://azure.microsoft.com/pricing/calculator/).

<!-- markdownlint-disable MD033 -->
<a id="agents-toolkit-questions"></a>
<!-- markdownlint-enable MD033 -->

## Development tool questions

<!-- markdownlint-disable MD033 -->
<a id="what-is-the-value-of-using-agents-toolkit"></a>
<!-- markdownlint-enable MD033 -->

### Which pro-code development tool is recommended?

[Work IQ Dev Tools (WIQD)](https://aka.ms/wiqd/docs) is the recommended pro-code starting point for supported declarative-agent and plugin scenarios. It provides source-controlled projects and command-line lifecycle workflows. Toolkit-based walkthroughs remain available for existing projects and workflows that require them. WIQD doesn't target custom engine agents. See [Choose development tools for your plugin](/plugins/choose-plugin-development-tools) for capability and target-experience requirements.

### What do I need to connect to an API?

For a supported pro-code declarative-agent scenario, use Work IQ Dev Tools to add an API action from an OpenAPI description. The API plugin manifest configures the action, and the containing agent is distributed in an app package. You host your REST API separately. Add detailed descriptions to the OpenAPI document so Copilot knows how to use the API. You might need to simplify large or complex APIs. See [Add MCP and API actions to declarative agents](/plugins/overview-plugins).

### Should I use JSON manifests or TypeSpec for building agents and plugins?

For new supported pro-code declarative-agent and plugin scenarios, start with [Work IQ Dev Tools](/plugins/choose-plugin-development-tools#start-with-work-iq-dev-tools). The following comparison applies when you choose a Toolkit-based workflow; it isn't a recommendation to switch from WIQD to Toolkit.

Within that workflow, the choice between JSON manifests and TypeSpec depends on your development preferences and project complexity:

**Use TypeSpec when:**

- You prefer a code-first approach with strong typing and IntelliSense support
- Your API surfaces are complex with many endpoints, nested schemas, or intricate authentication patterns
- You want automatic validation and manifest generation to reduce configuration errors
- You're building multiple agents or plugins and want consistency across projects
- You value maintainable, readable code over raw JSON configurations

**Use JSON manifests when:**

- You prefer direct control over the exact manifest structure
- You're working with simple agents that have minimal capabilities
- You're migrating existing JSON-based configurations
- You want to understand the underlying manifest format in detail

For developers who choose the Toolkit-based TypeSpec workflow, TypeSpec offers type safety, automatic generation, and reduced boilerplate code. For more information, see [TypeSpec for Microsoft 365 Copilot overview](/plugins/overview-typespec).

## Azure AI questions

Azure AI services and Copilot extensibility cater to different needs and use cases within the AI ecosystem. The following questions help you understand the differences.

### What are the differences between Copilot extensibility and Azure AI services?

See the following table to learn about the differences between Copilot extensibility and Azure AI services.

| Feature | Copilot extensibility | Azure AI services|
|:--------|:----------------------|:-----------------|
| Scope   |Focused on extending the capabilities of Microsoft 365 Copilot within the Microsoft 365 ecosystem.| Provide a broad range of AI capabilities, including machine learning, cognitive services, and the Azure OpenAI Service.|
| Customization| Allows for the creation of plugins, connectors, and declarative agents to enhance productivity tools like Word, Excel, and Teams.|Highly customizable, allowing you to build and deploy AI models tailored to specific business needs.|
| Integration|Primarily integrates with Microsoft 365 applications, using organizational data and context.|Can be integrated into various applications and services beyond the Microsoft ecosystem.|

#### Copilot extensibility use cases

:::image type="content" source="assets/images/personas-extend-copilot.png" border="false" alt-text="Persona 1 - I am a developer, who manages the product database at an e-commerce company, and I want to build an inventory catalog plugin that brings the product information for internal org. Persona 2 - I am a marketing manager, who aims to launch a new campaign for my products. And I want a tool that helps developing marketing assets tailored to the campaign." lightbox="assets/images/personas-extend-copilot.png":::

Use cases for Azure AI services include creating bespoke AI solutions, such as:

- A customer service chatbot for your e-commerce site
- A virtual assistant to schedule appointments for your healthcare service
- Gaming experiences that incorporate generative AI

:::image type="content" source="assets/images/personas-build-custom-ai-apps.png" border="false" alt-text="Persona 1 - I'm an engineer, working for an e-commerce company, and I want to build a smart customer service chatbot for our shoe store. Persona 2 - I'm a game developer, and I want to craft a game featuring fictional characters that can engage in natural conversations with the players." lightbox="assets/images/personas-build-custom-ai-apps.png":::

### What are the differences between Copilot Studio and Azure AI Foundry?

The differences are the scope, customization, and integration they offer.

Copilot Studio comes with low-code features for users who prefer that approach. It applies AI to create chat bots and agents with a range of features such as AI integration and provides easy deployment across various channels.

[Azure AI Foundry](/azure/ai-studio/what-is-ai-studio) (formerly known as Azure AI Studio) is a coding-based platform that empowers developers to build and deploy intelligent, fully customizable bots. You can integrate these various AI tools and models, which enables you to innovate with AI in a secure and responsible manner. However, Azure AI Foundry is not the tool for *extending* Microsoft 365 Copilot's model and orchestrator.

### Can I build declarative agents with Azure AI services?

If you want to use Azure AI services, we recommend you to build custom engine agents instead of declarative agents.

If you choose to work with OpenAI models, such as GPT-4 turbo, you can take advantage of the web-based interface of [Azure OpenAI Studio](https://oai.azure.com/), which comes with the **Deploy to Teams** feature that generates a code template that you can modify, test, and deploy using Agents Toolkit.

To learn more about the difference between custom engine agents and declarative agents, see [Agents for Microsoft 365](/plugins/agents-overview).

---

🙋 If you have more questions or feedback, [let us know](feedback.md)!
