---
title: Extensibility options for Microsoft Copilot for Microsoft 365
description: Understand which type of Microsoft Copilot for Microsoft 365 plugin or connector works best for you
author: girliemac
ms.author: jthake
ms.topic: conceptual
ms.date: 12/12/2023
---

# Extensibility options for Microsoft Copilot for Microsoft 365

There’s a growing number of ways you can expand, enrich, and customize Copilot with plugins and Graph connectors. This article will discuss and compare Copilot extensibility options.

Create plugins to extend Copilot's capabilities, such as crafting a Microsoft Teams message extension or a Power Platform connector. Alternatively, employ connectors to seamlessly integrate your enterprise data into the Copilot for Microsoft 365 experience.

[!INCLUDE [preview-disclaimer](includes/preview-disclaimer.md)]

You have more than one way to personalize Copilot for Microsoft 365 with the intelligence of external services, apps, and data.
To start building your connector or plugins, you can select the tools and SDKs based on how you want to develop.

There are many factors that you want to consider when deciding which option to pick. If you are a proficient coder who favors a high-level programming option over a no-code or low-code one, you still want to consider the following aspects.

## Data types

Consider your data: how it's structured, the level of volume and activity you expect, and the required data access.

| Solution | Data structure | Data volume | Data activity | Summarize/ Act |
|-------|-------|---------|----------|----------|
| **Graph connectors** | [Un-structured or flattened data](#unstructured-data) | Up to 5M items per connection | Up to 20 requests per second | [Summarize](#summarize) only |
| **Message extension plugins** | [Structured data](#structured-data) | Suitable for high volume data (Over 5M) | Suitable for high activity (Over 20 req/sec.)  | [Summarize](#summarize) + [Act](#act) |
| **Copilot Studio plugins** | [Structured data](#structured-data) | Suitable for high volume data (Over 5M) | Suitable for high volume data (Over 5M) | [Summarize](#summarize) only |

### Unstructured data

Unstructured data refers to data that is not organized in a predefined manner, such as plain text-based documents, wiki pages, and PDF files. Copilot can be used to analyze and extract information from unstructured data, and generate new content based on the patterns and relationships it identifies. For example, Copilot could analyze company policy documents and answer a question specific to an employee.

### Structured data

Structured data refers to data that is organized in a predefined manner, often in the form of tables with rows and columns. Copilot can be used to analyze and extract information from structured data, and generate new content based on the patterns and relationships it identifies. For example, Copilot could analyze sales data and generate a report summarizing key trends and insights.

### Summarize

Copilot can analyze and extract key information from large amounts of data, and present it in a concise and coherent manner. This can be particularly useful for tasks such as summarizing long documents or email threads, where the AI can identify the most important points and present them in a clear and easy-to-understand format.

### Act

This is an example of writable data with a message extension. This plugin manages a product inventory, which Copilot searches the data from the inventory and displays the results in Adaptive Card, where it allows a user to modify the stock.

:::image type="content" source="assets/images/plugin-example-northwind.png" alt-text="A screenshot that shows an example of writable data via a message extension" lightbox="assets/images/plugin-example-northwind.png":::

> [!TIP]
> You can find the sample code for *Northwind Inventory* plugin at [Microsoft Copilot for Microsoft 365 extensibility samples](samples.md#teams-message-extension-samples).

**Coming soon**: Copilot can take action on prompts by analyzing the input and using machine learning techniques to generate new content. Copilot can look at the commands available in the plugin based on the descriptions of it and its parameters. Copilot will then use relevant data it has access to and "stuff" these into the parameters and call the command.

## Benefits

You may want to explore the pros and cons of each option before making a decision. Let's take a look at the good parts of each option first.

| Extensibility option | Benefits    |  Also work with   |
|:--------------------------------|:--------------------------------|:--------------------------------|
|  Graph connectors               |  - [Relevance based on user activities](#relevance-based-on-user-activities)  <br/>  - [Semantic discovery of content](#semantic-discovery-of-content-without-turning-on-a-plugin) <br/> - [Data stays within compliance boundary](#data-stays-within-compliance-boundary)              |  - Context IQ <br/> - Viva Topics <br /> -  Enterprise Search in M365.com, SharePoint, and Bing @ work <br /> - Content recommendations in M365 apps    |
|  Message extension plugins      |   - [Discoverability in Store](#discoverability-in-store) <br/> -   [Enabling branded experience](#enabling-branded-experience)  <br /> -[Better UX with Adaptive Cards](#better-ux-with-adaptive-cards)            | - Outlook <br /> - Teams chat       |
|  Copilot Studio conversational plugins         |    - Fastest to first run experience <br /> - No coding experience required             |  - Generative answers grounded with public websites, SharePoint, Azure OpenAI, and custom data sources <br /> - Connect to PowerPlatform connectors like SAP, Salesforce, SQL and DataVerse. |
|  Copilot Studio AI plugins         |    - Fastest to first run experience <br /> - No coding experience required             | - Copilot for M365   |

### Relevance based on user activities

After you have indexed an external item with Graph Connectors, you can also add activities too (such as view, modify, and shared). These activities improve the relevance of the items such as the users that modified the item, in a similar way to native Microsoft 365 documents.

### Semantic discovery of content without turning on a plugin

Items indexed using Graph Connectors are part of the Microsoft Graph and therefore immediately accessible for summarization alongside Microsoft 365 content like documents, emails and events of a user. Plugins require that the administrators have enabled plugins, that the Plugin app is installed and enabled by the user.

### Discoverability in Store

Plugins are deployed via user or admin acquisition through the Teams Store or App Source marketplace. This is a great discoverability benefit of plugins.

### Enabling branded experience

Plugins have more visibility to a user that they available as they are part of the plugin management fly out in the Copilot chat experience.

### Data stays within compliance boundary

For instance, Graph connectors help keep third-party data within the compliance boundary by indexing the data. On the other hand, the real-time data through the use of message extensions are not indexed and can be shared or accessed outside of the defined compliance boundaries. As a plugin developer, you are responsible for securing your customer's data within the bounds of your service and providing information on your policies regarding users' personal information.

> [!TIP]
> You can find more information about it at [Data, Privacy, and Security for Microsoft Copilot for Microsoft 365 extensibility](data-privacy-security.md).

### Better UX with Adaptive Cards

This screen below shows a sample response from Copilot, utilizing data from Graph connector. The Graph connector indexes issues and repositories from GitHub, presenting the results in plain text as opposed to an Adaptive Card format. By comparing this with the Message extension example shown earlier, you can see the differences between them.

:::image type="content" source="assets/images/gc-example-github.png" alt-text="A screenshot that shows an example of Copilot response from Graph connector" lightbox="assets/images/gc-example-github.png":::

If you're developer who wants to connect data quickly by using an API, Graph connectors might be the solution for you.

However, it's worth noting that message extensions could enhance user experiences by presenting results in beautifully designed Adaptive Cards. Message extensions are full-featured Microsoft 365 apps that also work with Copilot.

> [!TIP]
> You can find the sample code for *Microsoft Graph TypeScript GitHub connector* at [Microsoft Copilot for Microsoft 365 extensibility samples](samples.md#microsoft-graph-connector-samples).

## Limitations

Now, consider the limitations of each option.

| Extensibility option | General Limitations                  |  Tooling limitations       |
|:--------------------------------|:--------------------------------|:--------------------------------|
|  Graph connectors               |  - [Max 30 connectors in Tenant](/graph/connecting-external-content-api-limits?branch=main&branchFallbackFrom=pr-en-us-77&context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext)<br/>- Relatively low data volume and activity<br/>- App visibility to users <br /> [Graph connectors API limits](/graph/connecting-external-content-api-limits?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext)      |  - [No sideloading](#no-sideloading)<br/>- [Potentially sync External Group ACLs](#potentially-sync-external-group-acls)     |
|  Message extension plugins      |   - Max one million plugins enabled per user <br/> - [Plugins need to be manually enabled](#plugins-need-to-be-manually-enabled)<br/>- [Data can leave compliance boundary](#data-can-leave-compliance-boundary)<br/>- [Orchestrator](orchestrator.md) can only reason with 10 plugins per prompt<br/>- [Performance depends on developers and hosting](#performance-depends-on-developers) <br/> [Technical requirements for message extension plugins](/microsoftteams/platform/messaging-extensions/high-quality-message-extension?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext&tabs=tasks#technical-requirements)     |  - [Multi-parameter prompt complexity](#multi-parameter-prompt-complexity)     |
|  Copilot Studio conversational plugins         |  - No adaptive card support <br/> - No custom parameters support    |   - One function per plugin <br/> - No control over response/reasoning instructions <br/> - Plugin available just within the tenant |
|  Copilot Studio AI plugins        |  - No adaptive card support <br/> - No data grounding <br/>  - No structured output    |  - GPT-3.5 model only    |

### Plugins need to be manually enabled

Unlike Graph Connected external items that are part of Microsoft Graph and immediate available to Copilot summarization. Administrators first need to enable Plugins in the tenant as part of Public Preview ([https://aka.ms/extend-Copilot](https://aka.ms/extend-Copilot)). Additionally, the user of Copilot for Microsoft 365 needs to enable the plugin in the plugin management flyout.

### Data can leave compliance boundary

Graph Connectors inserts external items into the Microsoft Graph. When Copilot selects a Plugin as part of its orchestration, it calls the bot framework command and populates the parameters with data based on the description of the parameters. THe data it provides can be any of the data available to it in Microsoft 365 or other data provided by Plugins in the conversational session. The bot framework commands are hosted externally to the Microsoft 365 boundary.

### Performance depends on developers

The Plugin bot framework commands that are invoked by Copilot are external and the response times of it are dependent on the developer hosting it.

### Power Platform licenses required

To build with Copilot Studio is included as part of the Microsoft Copilot licenses. If the Plugin uses Power Platform Connectors the required licenses are required to execute them.

### No sideloading

There is no ability to side load with Graph Connectors. As a developer you will need Entra ID admin access to your tenant to register and consent the required Graph permission and also the Search Administrator role to deploy your Graph Connector to Copilot.

### Potentially sync External Group ACLs

If you don't implement Entra ID Groups in your system, you will need to create External Groups calling Graph APIs and maintain sync state of the membership of these groups with your systems groups.

### Multi-parameter prompt complexity

Message extension plugin developers should handle all potential prompt scenarios from users. Single-parameter prompts can be as simple as:
> Find Chai in Northwind Inventory

Multi-parameters can be more complex with multiple inquiries, such as:
> We've been receiving partial orders for tofu. Find the supplier in Northwind and draft an email summarizing our inventory and reminding them they should stop sending partial orders per our MOQ policy.

## Next step

Learn prerequisites for building connectors and plugins:

> [!div class="nextstepaction"]
> [Set up your dev environment](prerequisites.md)

### See also

- [Start with Microsoft Graph connectors](overview-graph-connector.md)

- [Start with Microsoft Teams Message extensions](overview-message-extension-bot.md)

- [Start with Microsoft business application](overview-business-applications.md)
