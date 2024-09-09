---
title: Microsoft Copilot for Microsoft 365 extensibility samples
description: Extend Microsoft Copilot for Microsoft 365 with plugins and Microsoft Graph connectors
author: jasonjoh
ms.author: jasonjoh
ms.topic: conceptual
ms.date: 11/15/2023
---

# Microsoft Copilot for Microsoft 365 extensibility samples

## Microsoft Graph connector samples

The following samples implement Microsoft Graph connectors that extend Copilot for Microsoft 365.

| Sample | Description |
|--------|-------------|
| [.NET Microsoft Graph docs connector](https://adoption.microsoft.com/sample-solution-gallery/sample/pnp-graph-connector-dotnet-csharp-graphdocs-ttk/) | This sample .NET project shows you how to build a Microsoft Graph connector to ingest unstructured data to Microsoft 365 and make it available to Copilot for Microsoft 365. The project uses Teams Toolkit for Visual Studio to package the connector as a Microsoft Teams apps and simplify its deployment in the organization. |
| [.NET GitHub connector](https://github.com/microsoftgraph/msgraph-sample-github-connector-dotnet) | This .NET application shows you how to use the Microsoft Graph connector API to create a custom connector that indexes issues and repositories from GitHub. This connector sample powers experiences such as Microsoft Search, Copilot in Teams, the Microsoft 365 App, and more. |
| [Python GitHub connector](https://github.com/microsoftgraph/msgraph-sample-github-connector-python) | This Python application shows you how to use the Microsoft Graph connector API to create a custom connector that indexes issues and repositories from GitHub. This connector sample powers experiences such as Microsoft Search, Copilot in Teams, the Microsoft 365 App, and more. |
| [TypeScript GitHub connector](https://github.com/microsoftgraph/msgraph-sample-github-connector-typescript) | This TypeScript application shows you how to use the Microsoft Graph connector API to create a custom connector that indexes issues and repositories from GitHub. This connector sample powers experiences such as Microsoft Search, Copilot in Teams, the Microsoft 365 App, and more. |

### Samples from the community

You can find the latest list of Microsoft Graph connector samples from the community in the [Microsoft Adoption center](https://adoption.microsoft.com/sample-solution-gallery/?product=Microsoft+Graph+connectors&product=Microsoft+365+Copilot).

### Build your first customer Graph connector for Copilot for Microsoft 365

> [!VIDEO https://www.youtube.com/embed/2oQ_6wXrwDQ]

## Declarative copilot with API plugin samples

The following samples implement custom copilots using Microsoft's orchestration and models.

| Sample | Description |
|--------|-------------|
| [Trey Research Copilot extension (OAuth version)](https://github.com/OfficeDev/Copilot-for-M365-Samples/tree/main/samples/cext-trey-research-auth) | This example demonstrates how to build your own copilot using Microsoft's orchestrator and LLMs, that's also capable of interacting with an API through an API plugin. This sample includes authentication. |
| [Trey Research Copilot extension (anonymous version)](https://github.com/OfficeDev/Copilot-for-M365-Samples/tree/main/samples/cext-trey-research) | This example demonstrates how to build your own copilot using Microsoft's orchestrator and LLMs, that's also capable of interacting with an API through an API plugin. This version of the Trey Research sample doesn't do authentication, but might be useful for demos and experimentation. |

## Custom engine copilot samples

The following samples implement custom copilots using custom orchestration and models.

| Sample | Description |
|--------|-------------|
| [Meeting Helper with Azure OpenAI](https://github.com/OfficeDev/Microsoft-Teams-Samples/tree/main/samples/bot-ai-meeting-helper) | This example demonstrates how Azure OpenAI extracts action items from meeting transcriptions for all participants who subscribed to a meeting. It then sends these action items to each individual user in a 1:1 chat after the meeting concludes. |
| [Virtual assistant bot](https://github.com/OfficeDev/Microsoft-Teams-Samples/tree/main/samples/bot-virtual-assistant) | This sample application demonstrates a root bot that routes inputs to skill bots for tailored responses. |

## Plugins for Copilot for Microsoft 365

### Teams message extension samples

The following samples implement Teams message extensions that extend Copilot for Microsoft 365.

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
| [Expert finder](https://github.com/OfficeDev/Microsoft-Teams-Samples/tree/main/samples/msgext-expert-finder-js) | This sample implements a Teams message extension that can be used to query a database of candidates based on their skills, location, and availability. The sample, when used with Copilot for Microsoft 365, demonstrates Single Sign-On (SSO), and Copilot's ability to perform multi-parameter search. |

#### Write a message extension for Teams and Copilot for Microsoft 365

> [!VIDEO https://www.youtube.com/embed/zK-L83cwJ8c]
