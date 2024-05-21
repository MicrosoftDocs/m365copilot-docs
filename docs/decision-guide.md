---
title: Extensibility options for Microsoft Copilot for Microsoft 365
description: Understand which type of Microsoft Copilot for Microsoft 365 plugin or connector works best for you
author: girliemac
ms.author: timura
ms.topic: conceptual
ms.date: 05/14/2024
---

# Extensibility options for Microsoft Copilot for Microsoft 365

After [making the decision to extend Microsoft Copilot](build-or-extend.md), it’s important to understand the variety of methods available for leveraging the capabilities of external services, apps, and data. This guide aims to streamline your journey through the extensibility options of Copilot for Microsoft 365, assisting you in identifying the most suitable solution aligned with your specific needs and goals.

[!INCLUDE [preview-disclaimer](includes/preview-disclaimer.md)]

## Explore your extensibility options

Let's look at all the options you have available.

:::image type="content" source="assets/images/decision-making-guide.png" alt-text="A diagram that shows various developer options." lightbox="assets/images/decision-making-guide.png":::

To add unstructured data into Microsoft Graph, use:

- **Graph connectors**, which enable data ingestion from various sources to Microsoft Graph, facilitating unified data access and insights across Microsoft 365 and other services.

And there are the growing number of extensions you build. Your options include:

- **Declarative copilots**, which are designed for specific tasks or domain knowledge.
- **Plugins**, which add skills and actions to Microsoft 365.
  - **API plugins** can work either standalone, or with declarative copilots by calling REST APIs via OpenAPI service.
  - **Message Extensions** for Teams are the search and action capability for Teams that now work as plugins too.
  - **Actions in Copilot Studio**, which connects Microsoft 365 and the Power Platform environment.
    - **Conversational actions**, which can be created directly in Copilot Studio, to process a user query by completing one or more operations, and then sends one or more responses back to the user.
    - **Prompts** which use AI Builder and natural language understanding including grounding on Dataverse to target the specific scenarios and workflows within your business.
    - **Flows**, which use Power Automate flow to map existing flows or processes in your organization to perform actions, and retrieve and work with data.
    - **Connectors**, which use Power Platform connectors to access data from other systems, such as popular enterprise products like Salesforce, Zendesk, MailChimp, and GitHub.

## Pro-code or low-code?

Your journey will vary based on your desired outcomes and your coding expertise. Whether you’re a seasoned coder or prefer low-code or no-code solutions, there’s a suite of tools tailored to your development style.

**Pro-code** options are declarative copilots, API plugins, message extensions, and Graph connectors. [**Teams Toolkit**](/microsoftteams/platform/toolkit/teams-toolkit-fundamentals) for [Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=TeamsDevApp.ms-teams-vscode-extension) would be your best friend for the development to tailor your copilots.

**Low-code** or **no-code** options are declarative copilots, all Copilot Studio actions, and Graph connectors. You can develop rapidly with user-friendly interface on [**Copilot Studio**](/microsoft-copilot-studio/fundamentals-what-is-copilot-studio).

## Weighing your options

There are many factors that you want to consider when deciding which option to pick.
Before settling on a path, it’s wise to consider the pros and cons of each option. This will ensure you make an informed decision that aligns with your development needs and goals.

| Extensibility options   | Benefits                           | Limitations                          |
|:------------------------|:-----------------------------------|:-------------------------------------|
| **Graph connectors**               |  [Relevance based on user activities](#relevance-based-on-user-activities)  <br/> <br/> [Semantic discovery of content](#semantic-discovery-of-content-without-turning-on-a-plugin) <br/> <br/> Content in Graph also works with ContextIO, Content Recommendations and Enterprise Search in Microsoft365.com, SPO, and Bing at Work <br/> <br/> [Data stays within compliance boundary](#data-stays-within-compliance-boundary)              | Not visible or discoverable to end-users unless used with declarative copilots and/or message extensions <br/> <br/> [No sideloading](#no-sideloading) <br/> <br/> [Potentially sync External Group ACLs](#potentially-sync-external-group-acls) |
| **Declarative copilots**     | Your own branded chat experience <br/> <br/> Improved discoverability and user-experiences   | Still in private preview and features are limited  |
| **API plugins**                  | Support search and action <br/> <br/> [Support basic Adaptive Cards for better UX](#better-ux-with-adaptive-cards) <br/> <br/> Simpler development with existing REST APIs with OpenAPI specifications <br/><br/> You can include instructions to LLM    | Still in private preview and features are limited       |
| **Teams message extensions** | Discoverable through Teams Store or App Source marketplace <br/> <br/> Support search and action <br/> <br/> [Support Adaptive Cards for better UX](#better-ux-with-adaptive-cards) and more controls <br/><br/> Works on Outlook too <br/> <br/> If you previously have build message extensions for Teams, they now work as plugins         | [Max one million plugins enabled per user](/graph/connecting-external-content-api-limits) <br/> <br/> [Plugins need to be manually enabled](/graph/connecting-external-content-api-limits) <br/> <br/> Limited numbers of commands (max 3) and parameters (max 5) <br/><br/> [Data can leave compliance boundary](#data-can-leave-compliance-boundary) <br/><br/> [Orchestrator](orchestrator.md) can only reason with 10 plugins per prompt <br/> <br/> [Performance depends on developers and hosting](#performance-depends-on-developers) <br/> <br/> Technical requirements for message extension plugins ([See Teams doc](/microsoftteams/platform/messaging-extensions/high-quality-message-extension#technical-requirements)) <br/> <br/> [Multi-parameter prompt complexity](#multi-parameter-prompt-complexity) |
| **Copilot Studio plugins**   | Fastest to first run experience <br/> <br/> No infrastructure management is needed <br/> <br/> No coding experience required <br/> <br/> Copilot Studio is included as part of the Microsoft Copilot license            | Customization can be limited <br/> <br/> Scaling might be limited to Microsoft Copilot Studio subscription tiers <br/> <br/> If the plugin uses Power Platform Connectors, users require a Power Platform license           |

Here's a brief explanation of some of the pros and cons—

### Benefits

#### Relevance based on user activities

**Graph connectors**: After you have indexed an external item with Graph Connectors, you can also add activities too (such as view, modify, and shared). These activities improve the relevance of the items such as the users that modified the item, in a similar way to native Microsoft 365 documents.

#### Semantic discovery of content without turning on a plugin

**Graph connectors**: Items indexed using Graph Connectors are part of the Microsoft Graph and therefore immediately accessible for summarization alongside Microsoft 365 content like documents, emails and events of a user. Plugins require that the administrators have enabled plugins, that the plugin app is installed and enabled by the user.

#### Data stays within compliance boundary

**Graph connectors**: For instance, Graph connectors help keep third-party data within the compliance boundary by indexing the data. On the other hand, the real-time data through the use of message extensions are not indexed and can be shared or accessed outside of the defined compliance boundaries. As a plugin developer, you are responsible for securing your customer's data within the bounds of your service and providing information on your policies regarding users' personal information.

> [!TIP]
> You can find more information about it at [Data, Privacy, and Security for Microsoft Copilot for Microsoft 365 extensibility](data-privacy-security.md).

#### Better UX with Adaptive Cards

**API plugins & Message extensions**: This screen shows a sample response from a message extension plugin that utilizes Adaptive Cards. The response from Copilot is nicely displayed in a table with different font styles and colors, along with actionable buttons.

:::image type="content" source="assets/images/plugin-example-northwind.png" alt-text="A screenshot that shows an example of rich UI in message extension" lightbox="assets/images/plugin-example-northwind.png":::

On the other hand, this screen below shows a sample response from Copilot, utilizing data from Graph connector. The Graph connector indexes issues and repositories from GitHub, presenting the results in plain text as opposed to an Adaptive Card format.

:::image type="content" source="assets/images/gc-example-github.png" alt-text="A screenshot that shows an example of Copilot response from Graph connector" lightbox="assets/images/gc-example-github.png":::

If you're developer who wants to connect data quickly by using an API, Graph connectors might be the solution for you.
However, it's worth noting that message extensions could enhance user experiences by presenting results in beautifully designed Adaptive Cards. Message extensions are full-featured Microsoft 365 apps that also work with Copilot.

> [!TIP]
> You can find the sample code for *Microsoft Graph TypeScript GitHub connector* at [Microsoft Copilot for Microsoft 365 extensibility samples](samples.md#microsoft-graph-connector-samples).

**Coming soon**: Copilot can take action on prompts by analyzing the input and using machine learning techniques to generate new content. Copilot can look at the commands available in the plugin based on the descriptions of it and its parameters. Copilot will then use relevant data it has access to and "stuff" these into the parameters and call the command.

### Limitations

#### No sideloading

**Graph Connectors**: There is no ability to side load with Graph Connectors. As a developer you will need Entra ID admin access to your tenant to register and consent to the required Graph permissions. The Search Administrator role is required to deploy your Graph Connector to Copilot.

#### Potentially sync External Group ACLs

**Graph Connectors**: **Graph Connectors**: If you don't implement Entra ID Groups in your system, you will need to create External Groups calling Graph APIs and maintain sync state of the membership of these groups with your systems groups.

#### Plugins need to be manually enabled

**Graph Connectors**: Unlike Graph Connected external items that are part of Microsoft Graph and immediate available to Copilot summarization. Administrators first need to enable plugins in the tenant as part of Public Preview ([https://aka.ms/extend-Copilot](https://aka.ms/extend-Copilot)). Additionally, the user of Copilot for Microsoft 365 needs to enable the plugin in the plugin management flyout.

#### Data can leave compliance boundary

**Message extensions**: Graph Connectors inserts external items into the Microsoft Graph. When Copilot selects a plugin as part of its orchestration, it calls the bot framework command and populates the parameters with data based on the description of the parameters. THe data it provides can be any of the data available to it in Microsoft 365 or other data provided by plugins in the conversational session. The bot framework commands are hosted externally to the Microsoft 365 boundary.

#### Multi-parameter prompt complexity

**Message extensions**: Message extension plugin developers should handle all potential prompt scenarios from users. Single-parameter prompts can be as simple as:
> Find Chai in Northwind Inventory

Multi-parameters can be more complex with multiple inquiries, such as:
> We've been receiving partial orders for tofu. Find the supplier in Northwind and draft an email summarizing our inventory and reminding them they should stop sending partial orders per our MOQ policy.

#### Performance depends on developers

**Message extensions**: The plugin bot framework commands that are invoked by Copilot are external and the response times of it are dependent on the developer hosting it.

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

This is the same example of writable data with a message extension shown earlier. This plugin manages a product inventory, which Copilot searches the data from the inventory and displays the results in Adaptive Card, where it allows a user to modify the data.

:::image type="content" source="assets/images/plugin-example-northwind-action.png" alt-text="A screenshot that shows an example of writable data via a message extension" lightbox="assets/images/plugin-example-northwind.png":::

> [!TIP]
> You can find the sample code for *Northwind Inventory* plugin at [Microsoft Copilot for Microsoft 365 extensibility samples](samples.md#teams-message-extension-samples).

**Coming soon**: Copilot can take action on prompts by analyzing the input and using machine learning techniques to generate new content. Copilot can look at the commands available in the plugin based on the descriptions of it and its parameters. Copilot will then use relevant data it has access to and "stuff" these into the parameters and call the command.

## Next step

Learn prerequisites for building connectors and plugins:

> [!div class="nextstepaction"]
> [Set up your dev environment](prerequisites.md)

### See also

- [Microsoft Graph connectors overview](overview-graph-connector.md)
- [Declarative copilot overview](overview-declarative-copilot.md)
- [API plugins overview](overview-api-plugins.md)
- [Copilot Studio plugins overview](overview-business-applications.md)
- [Teams Message extensions overview](overview-message-extension-bot.md)
