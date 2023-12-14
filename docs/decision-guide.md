---
title: Extensibility options for Microsoft Copilot for Microsoft 365
description: Understand which type of Microsoft Copilot for Microsoft 365 plugin or connector works best for you
author: girliemac
ms.author: timura
ms.topic: conceptual
ms.date: 11/15/2023
---

# Extensibility options for Microsoft Copilot for Microsoft 365

There’s a growing number of ways you can expand, enrich, and customize Copilot with plugins and Graph connectors. This article will discuss and compare Copilot extensibility options.

Create plugins to extend Copilot's capabilities, such as crafting a Microsoft Teams message extension or a Power Platform connector. Alternatively, employ connectors to seamlessly integrate your enterprise data into the Copilot for Microsoft 365 experience.

[!INCLUDE [preview-disclaimer](includes/preview-disclaimer.md)]

You have more than one way to personalize Copilot for Microsoft 365 with the intelligence of external services, apps, and data.
To start building your connector or plugins, you can select the tools and SDKs based on how you want to develop.

:::image type="content" source="assets/images/decision-making-tree.png" alt-text="Decision-making questions to figure out which Copilot for Microsoft 365 extensibility service you should use" lightbox="assets/images/decision-making-tree.png":::

1. If you are a no-code or low-code developer, who has invested in Power Platform already and wants to expose the external data in Power Platform too, additionally to Copilot, naturally your choice would be Microsoft Power Platform connectors.
1. If you leverage Microsoft Graph and connect your unstructured enterprise data in Microsoft 365, including Microsoft Search, Context IQ, and the Microsoft 365 app, Graph Connectors would be your option.
1. And if you would like to connect your structured data in real-time from external sources on the fly, Message Extensions should be your choice. Write the logic using Bot Framework. And if you have built Message Extension apps for Teams before, great news is that your app already has the foundation of a plugin for Copilot! Make sure that your app manifest is up-to-date, and the app meets all criteria if you are publishing as plugin.

There are more factors that you want to consider when deciding which option to pick. If you are a proficient coder who favors a high-level programming option over a no-code or low-code one, you still want to consider the following aspects.

## Data types

Consider your data: how it's structured, the level of volume and activity you expect, and the required data access.

| Graph connectors                | Message extension plugins       | Copilot Studio plugins       |
|:--------------------------------|:--------------------------------|:--------------------------------|
| **Data Structure** |
| [Un-structured or flattened data](#unstructured-data) | [Structured data](#structured-data) | [Structured data](#structured-data) |
| **Data volume**        |
| Up to 5M items per connection   | Suitable for high volume data (Over 5M) | Suitable for high volume data (Over 5M)  |
| **Data activity**      |
| Up to 20 requests per second    | Suitable for high activity (Over 20 req/sec.)  |Suitable for high activity (Over 20 req/sec.)|
| **Summarize / Act**         |
| [Summarize](#summarize) only                       | [Summarize](#summarize) + [Act](#act) | [Summarize](#summarize) only  |

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

**Coming soon**: Copilot can take action on prompts by analyzing the input and using machine learning techniques to generate new content. Copilot can look at the commands available in the plugin based on the descriptions of it and its parameters. Copilot will then use relevant data it has access to to "stuff" these into the parameters and call the command.

## Benefits

You may want to explore the pros and cons of each option before making a decision. Let's take a look at the good parts of each option first.

| Graph connectors                | Message extension plugins       | Copilot Studio plugins       |
|:--------------------------------|:--------------------------------|:--------------------------------|
| **Benefits**       |
| [Relevance based on user activities](#relevance-based-on-user-activities) | [Discoverability in Store](#discoverability-in-store) | Fastest to first run experience |
| [Semantic discovery of content](#semantic-discovery-of-content-without-turning-on-a-plugin) | [Enabling branded experience](#enabling-branded-experience) | No coding experience required |
| [Data stays within compliance boundary](#data-stays-within-compliance-boundary) | [Better UX with Adaptive Cards](#better-ux-with-adaptive-cards) | |
| **Positive Developer Experience** |
| Fast connect, register schema, and index items | Teams Toolkit for Visual Studio & VS Code | Low code GUI IDE |
| | Sideloading for development & test | |
| **Also work with** |
| Context IQ | Teams chat | |
| Viva Topics | Outlook | |
| Enterprise Search in M365.com, Sharepoint, and Bing @ work | | |
| Content recommendations in M365 apps | | |

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

| Graph connectors                | Message extension plugins       | Copoilot Studio plugins       |
|:--------------------------------|:--------------------------------|:--------------------------------|
| **Limitations** |
| - [Max 30 connectors in Tenant](/graph/connecting-external-content-api-limits?branch=main&branchFallbackFrom=pr-en-us-77&context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext)<br/>- Relatively low data volume and activity<br/>- App visibility to users | - [Plugins need to be manually enabled](#plugins-need-to-be-manually-enabled)<br/>- [Data can leave compliance boundary](#data-can-leave-compliance-boundary)<br/>- [Orchestrator](orchestrator.md) can only reason with 10 plugins per prompt<br/>- [Performance depends on developers and hosting](#performance-depends-on-developers) | - No adaptive card support <br/> - No multi-turn support <br/> - No auth support <br/> -   |
| **Developer experience limitations**  |
| - [No sideloading](#no-sideloading)<br/>- [Potentially sync External Group ACLs](#potentially-sync-external-group-acls) | - [Multi-parameter prompt complexity](#multi-parameter-prompt-complexity) | - [No Continuous Integration experience](#no-continuous-integration-experience) |

### Plugins need to be manually enabled
Unlike Graph Connected external items that are part of Microsoft Graph and immediate available to Copilot summarization. Administrators first need to enable Plugins in the tenant as part of Public Preview ([https://aka.ms/extend-Copilot](https://aka.ms/extend-Copilot)). Additionally, the user of Copilot for Microsoft 365 needs to enable the plugin in the plugin management flyout.

### Data can leave compliance boundary
Graph Connectors inserts external items into the Microsoft Graph. When Copilot selects a Plugin as part of its orchestration, it calls the bot framework commmand and populates the parameters with data based on the description of the parameters. THe data it provides can be any of the data available to it in Microsoft 365 or other data provided by Plugins in the conversational session. The bot framework commands are hosted externally to the Microsoft 365 boundary.

### Performance depends on developers
The Plugin bot framework commands that are invoked by Copilot are external and the response times of it are dependent on the developer hosting it.

### Power Platform licenses required
To build with Copilot Studio is included as part of the Microsoft Copilot licneses. If the Plugin uses Power Platform Connectors the required licenses are required to execute them.

### No sideloading
There is no ability to side load with Graph Connectors. As a developer you will need Entra ID admin access to your tenant to register and consert the required Graph permission and also the Search Administrator role to deploy your Graph Connector to Copilot.

### No Continuous Integration experience
Low code IDE does not have an ability to check in source code currently in to a allow for versioning and deploying into dev/test/production processes.

### Potentially sync External Group ACLs
If you don't implement Entra ID Groups in your system, you will need to create External Groups calling Graph APIs and maintain sync state of the memebership of these groups with your systems groups.

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
