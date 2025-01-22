---
title: Microsoft 365 Copilot extensibility samples
description: Extend Microsoft 365 Copilot with plugins and Microsoft Graph connectors
author: jasonjoh
ms.author: jasonjoh
ms.topic: conceptual
ms.localizationpriority: medium
ms.date: 11/01/2024
---

# Microsoft 365 Copilot extensibility samples

This article provides links to code samples to help you develop Copilot extensibility solutions, including agents, Microsoft Graph connectors, and plugins.

## Declarative agent samples

The following declarative agent samples are available from the PNP community.

| Sample | Description |
|--------|-------------|
| [Career Coach](https://github.com/pnp/copilot-pro-dev-samples/tree/main/samples/da-CareerCoach) | Provides personalized career development suggestions, including role understanding, skill gap analysis, learning opportunities, and career transition plans. It aims to understand the user's current role, identify career goals, assess skills and gaps, suggest learning opportunities and create a detailed action plan for future growth. |
| [Idea Coach](https://github.com/pnp/copilot-pro-dev-samples/tree/main/samples/da-IdeaCoach) | Facilitates brainstorming sessions and planning, offering creative exercises, idea organization techniques, and feedback for improvement. It uses a fun, collaborative tone, asks iterative questions and provides detailed agendas and creative suggestions for running effective brainstorming sessions. |
| [Learning Coach](https://github.com/pnp/copilot-pro-dev-samples/tree/main/samples/da-LearningCoach) | Helps users understand complex topics by breaking them down into simple, intermediate, and advanced summaries, and also provides guided practice and learning plans. It employs various techniques for learning complex topics, including glossaries, analogies, practice exercises and structured study plans. |
| [Prompt Coach](https://github.com/pnp/copilot-pro-dev-samples/tree/main/samples/da-PromptCoach) | Assists users in creating effective and well-structured prompts for Copilot. Offering analysis, compliance checks and improvement suggestions. It asks for information on the goal, context, source, and expectations to generate effective prompts and provides detailed analyses for to help elevate your prompt writing prowess. |
| [Writing Coach](https://github.com/pnp/copilot-pro-dev-samples/tree/main/samples/da-WritingCoach) | Provides detailed feedback on writing, helps change the tone of messages, translates text, and helps writing instructions, stories, blog posts, and whitepapers. It focuses on clarity, coherence, grammar, and overall impact, offering specific improvements and alternatives for various types of document authoring. |

## Declarative agent with API plugin samples

The following samples implement custom agents using Microsoft's orchestration and models.

| Sample | Description |
|--------|-------------|
| [Trey Research Copilot extension (OAuth version)](https://github.com/OfficeDev/Copilot-for-M365-Samples/tree/main/samples/cext-trey-research-auth) | This example demonstrates how to build your own declarative agent using Microsoft's orchestrator and LLMs, that's also capable of interacting with an API through an API plugin. This sample includes authentication. |
| [Trey Research Copilot extension (anonymous version)](https://github.com/OfficeDev/Copilot-for-M365-Samples/tree/main/samples/cext-trey-research) | This example demonstrates how to build your own declarative agent using Microsoft's orchestrator and LLMs, that's also capable of interacting with an API through an API plugin. This version of the Trey Research sample doesn't do authentication, but might be useful for demos and experimentation. |

## Custom engine agent samples

The following samples implement custom engine agents using custom orchestration and models.

| Sample | Description |
|--------|-------------|
| [Meeting Helper with Azure OpenAI](https://github.com/OfficeDev/Microsoft-Teams-Samples/tree/main/samples/bot-ai-meeting-helper) | This example demonstrates how Azure OpenAI extracts action items from meeting transcriptions for all participants who subscribed to a meeting. It then sends these action items to each individual user in a 1:1 chat after the meeting concludes. |
| [Virtual assistant bot](https://github.com/OfficeDev/Microsoft-Teams-Samples/tree/main/samples/bot-virtual-assistant) | This sample application demonstrates a root bot that routes inputs to skill bots for tailored responses. |

## Microsoft Graph connector samples

The following samples implement Microsoft Graph connectors that extend Microsoft 365 Copilot.

| Sample | Description |
|--------|-------------|
| [TypeScript policies connector](https://adoption.microsoft.com/en-us/sample-solution-gallery/sample/pnp-graph-connector-nodejs-typescript-policies/) | This sample contains a Microsoft Graph connector that shows how to ingest local policies into Microsoft 365. For each file, it extracts the metadata from front matter, maps them to the external connection's schema, and ingests the content, retaining the content and metadata. The ingested content is set to be visible to everyone in the organization. |
| [.NET Microsoft Graph docs connector](https://adoption.microsoft.com/sample-solution-gallery/sample/pnp-graph-connector-dotnet-csharp-graphdocs-ttk/) | This sample .NET project shows you how to build a Microsoft Graph connector to ingest unstructured data to Microsoft 365 and make it available to Microsoft 365 Copilot. The project uses Teams Toolkit for Visual Studio to package the connector as a Microsoft Teams app and simplify its deployment in the organization. |
| [.NET GitHub connector](https://github.com/microsoftgraph/msgraph-sample-github-connector-dotnet) | This .NET application shows you how to use the Microsoft Graph connector API to create a custom connector that indexes issues and repositories from GitHub. This connector sample powers experiences such as Microsoft Search, Copilot in Teams, the Microsoft 365 Copilot app, and more. |
| [Python GitHub connector](https://github.com/microsoftgraph/msgraph-sample-github-connector-python) | This Python application shows you how to use the Microsoft Graph connector API to create a custom connector that indexes issues and repositories from GitHub. This connector sample powers experiences such as Microsoft Search, Copilot in Teams, the Microsoft 365 Copilot app, and more. |
| [TypeScript GitHub connector](https://github.com/microsoftgraph/msgraph-sample-github-connector-typescript) | This TypeScript application shows you how to use the Microsoft Graph connector API to create a custom connector that indexes issues and repositories from GitHub. This connector sample powers experiences such as Microsoft Search, Copilot in Teams, the Microsoft 365 Copilot app, and more. |

### Microsoft Graph connector samples from the community

You can find the latest list of Microsoft Graph connector samples from the community in the [Microsoft Adoption center](https://adoption.microsoft.com/sample-solution-gallery/?product=Microsoft+Graph+connectors&product=Microsoft+365+Copilot).

## Plugins for Microsoft 365 Copilot

### Teams message extension samples

The following samples implement Teams message extensions that extend Microsoft 365 Copilot.

| Sample | Description |
|--------|-------------|
| [Northwind Inventory extension](https://github.com/OfficeDev/Copilot-for-M365-Samples/tree/main/samples/msgext-northwind-inventory-ts) | This TypeScript sample implements a Teams message extension that allows users to query data from the Northwind sample database and take action on that data. |
| [Azure AI search extension](https://github.com/OfficeDev/Copilot-for-M365-Samples/tree/main/samples/msgext-doc-search-js) | This JavaScript sample implements a Teams message extension that uses Azure AI search to enable vector search of documents. |
| [.NET Product support extension](https://github.com/OfficeDev/Copilot-for-M365-Samples/tree/main/samples/msgext-product-support-sso-csharp) | This .NET sample implements a Teams message extension that allows users to query Products held in SharePoint Online team site via Microsoft Graph. |
| [TypeScript Product support extension](https://github.com/OfficeDev/Copilot-for-M365-Samples/tree/main/samples/msgext-product-support-sso-ts) | This TypeScript sample implements a Teams message extension that allows users to query Products held in SharePoint Online team site via Microsoft Graph. |
| [.NET Multi Parameters](https://github.com/OfficeDev/Copilot-for-M365-Samples/tree/main/samples/msgext-multiparam-csharp) | Plugin that demonstrates how to implement complex utterances and support deep retrieval |
| [TypeScript Multi Parameters](https://github.com/OfficeDev/Copilot-for-M365-Samples/tree/main/samples/msgext-multiparam-ts) | Plugin that demonstrates how to implement complex utterances and support deep retrieval |
| [JavaScript Multi Parameters](https://github.com/OfficeDev/Copilot-for-M365-Samples/tree/main/samples/msgext-multiparam-js) | Plugin that demonstrates how to implement complex utterances and support deep retrieval |
| [Compliance checker](https://github.com/OfficeDev/Microsoft-Teams-Samples/tree/main/samples/msgext-ai-doc-compliance-checker) | Use Azure OpenAI to compare proposal documents against a guideline document and return whether the proposal complies and why/why not. |
| [Expert finder](https://github.com/OfficeDev/Microsoft-Teams-Samples/tree/main/samples/msgext-expert-finder-js) | This sample implements a Teams message extension that can be used to query a database of candidates based on their skills, location, and availability. The sample, when used with Microsoft 365 Copilot, demonstrates Single Sign-On (SSO), and Copilot's ability to perform multi-parameter search. |

## Videos

- [Build your first customer Graph connector for Microsoft 365 Copilot](https://www.youtube.com/embed/2oQ_6wXrwDQ)
- [Write a message extension for Teams and Microsoft 365 Copilot](https://www.youtube.com/embed/zK-L83cwJ8c)
