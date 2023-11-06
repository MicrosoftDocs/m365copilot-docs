---
title: The Copilot for Microsoft 365 ecosystem
description: A plugin or connector written for copilot will run across the Microsoft 365 ecosystem. Learn how to leverage the Microsoft 365 ecosystem to extend the reach of your apps, services, and data.
author: erikadoyle
ms.author: edoyle
ms.topic: overview
ms.date: 11/14/2023
---

# The Copilot for Microsoft 365 ecosystem

When you extend Copilot for Microsoft 365 with your external data through connectors and with your specialized skills through plugins, you're leveraging the entire Microsoft 365 ecosystem to extend the reach of your apps, services, and data.

As part of the broader Microsoft 365 ecosystem, the value of your copilot plugins and connectors are amplified in the following ways:

- As a **Developer**, you can *write once, and run anywhere* across the growing list of Microsoft 365 host applications for Copilot and integrated apps. Copilot seamlessly integrates your plugins and connectors with its entire repertoire of skills and knowledge, making your *integration with Copilot the last one* you'll ever have to perform.

- Your **End-users** will *stay in the flow of their work*, leveraging the apps and services supporting their workflow as skills and knowledge accessible through copilot's natural language interface.

- **Business decision makers and IT admins** can *confidently adopt and centrally manage* your enterprise-grade technology, backed by the security and trust of Microsoft's commitment to Responsible AI.

The plugins and connectors you build for Copilot are part of the larger Microsoft 365 Copilot system. The following diagram illustrates how a user's prompt is interpreted, rationalized, and processed into natural language results through the different native components of, and extensions to, the copilot system.

TODO: Add icons for extensibility and visually anchor to M365 Apps (plugins) and MS Graph (connectors)
:::image type="content" source="assets/images/copilot-system-flow.png" alt-text="{alt-text}":::

The plugins and connectors you build extend, enrich, and customize copilot for the unique way your customers work. And as part of the broader Microsoft 365 ecosystem, your copilot plugins and connectors benefit from enhanced discoverability and potential audience reach, centralized and trustworthy distribution and management, and a host of development tools and support.

This article will walk you through the resources of the Microsoft 365 ecosystem available to you as a developer of copilot extensibility solutions.

## Copilot plugins and connectors work across Microsoft 365 experiences

There are over 350 million daily active users across applications in the Microsoft 365 ecosystem, including Teams, Outlook, Word, Excel, Power Point, and the Microsoft 365 app. When you write a copilot plugin or connector, it can reach all the places copilot runs across Microsoft 365.

. . . but that's not all! Depending on the [way you extend copilot](./decision-guide.md), your plugin or connector also runs outside of copilot experiences. The following table lists alternate ways the skills and knowledge from your Copilot plugins and connectors are available to end-users within an organization:

|Copilot extensibility type|Microsoft 365 product availability|Learn more|
|----------|-----------|------------|
|[Teams message extension plugins](./overview-message-extension-bot.md)|Microsoft 365 Copilot, Teams, Outlook| [Plugins as Microsoft 365 apps](./plugins-are-apps.md) |
|[Power Platform connector plugins](/connectors/connectors)|Microsoft 365 Copilot, Power Automate, Power Apps, Azure Logic Apps| [Connectors overview](/connectors/connectors)|
|[Microsoft Graph connectors](./overview-graph-connector.md)|Microsoft 365 Copilot, Microsoft Search, Context IQ in Outlook and the web, Microsoft 365 app (microsoft365.com)|[Graph connector experiences](/graph/connecting-external-content-experiences?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext)

Thanks to centralized publishing and management resources, administrators can easily share and confidently manage your copilot extensibility solutions, ensuring they benefit the widest possible audience.

## Simplified distribution and management

Microsoft is simplifying the way Copilot plugins and other Microsoft 365 apps and services are published and managed, both within your organization and within in-product app stores of Microsoft 365 products.

### Unified manifest and app package

TODO

### Microsoft 365 and Copilot program for Partner Center

For independent software vendors (ISVs), we're building out the **Microsoft 365 and Copilot** program (formerly known as [*Office store*](/partner-center/marketplace/why-publish)) within  Microsoft Partner Center ([partner.microsoft.com](https://partner.microsoft.com)) to be your home base for publishing Microsoft 365 apps, services, and copilot extensibility solutions.

Once purchased and deployed by an organization, your Copilot plugins are incorporated into a unified catalog representing copilot's available skill repertoire.

To learn more, see [Publish plugins and connectors for Microsoft 365 Copilot](./publish.md).

### Microsoft Admin Center

For line-of-business developers and IT admins, Microsoft Admin Center ([admin.microsoft.com](https://admin.microsoft.com)) is your one stop to upload custom copilot plugins and manage both custom and store-bought Microsoft 365 and Copilot extensibility solutions. Learn more about copilot-related management options in TODO: Link to MAC docs copilot section

For details on deploying a custom copilot plugin or connector to your organization, see [Publish plugins and connectors for Microsoft 365 Copilot](./publish.md).

## Comprehensive tools and support

TODO: Introduce tools for building Copilot plugins and connectors

TODO: Power Platform representation

### Teams Toolkit

TODO

### Teams Developer Portal

TODO

### Code samples

TODO: Link to Copilot samples, Teams/GCs/PowerPlat samples

### Copilot extensibility support and feedback

TODO: Summarize + link support and feedback resources

## Microsoft Security, Trust, and commitment to Responsible AI

TODO: Summarize security/privacy/responsible AI for developers and link off to copilot article for further details.
