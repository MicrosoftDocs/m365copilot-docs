---
title: Copilot extensions are apps for Microsoft 365
description: Copilot extensions are also apps for Microsoft 365, which use a unified process for packaging, publishing, and management.
author: JoshuaPartlow
ms.author: joshuapa
ms.topic: concept-article
ms.date: 08/15/2024
---

# Copilot extensions are apps for Microsoft 365

[!INCLUDE [preview-disclaimer](includes/preview-disclaimer.md)]

When you build a Copilot extension, you're also building an app for Microsoft 365. Apps for Microsoft 365 share a common manifest schema and packaging format, and unified distribution and management processes and tools. The end result is that your apps and Copilot extensions reach the widest possible audience and appear contextually within the workflow of your users.

This article will walk you through the key parts of the Microsoft 365 app model for Copilot extension development.

## App model for Microsoft 365

The Microsoft 365 ecosystem is evolving into an integrated app platform, where you can use a common app model to define and package your app. What started as a way to [extend Teams apps to run in other Microsoft 365 applications](/microsoftteams/platform/m365-apps/overview?context=/microsoft-365-copilot/extensibility/context) has since expanded to support the distribution of [Graph connectors](), [Outlook Add-ins](), and now Copilot extensions.

### App package

The app package for Microsoft 365, including Copilot extensions, is a zip file that contains one or more configuration (manifest) files and your app's icons. Your app logic and data storage are hosted elsewhere and accessed by the Microsoft 365 host application via HTTPS. You'll submit the app package to your admin to publish to your organization or to Partner Center to publish to Microsoft AppSource.

## App icons

PLACEHOLDER explainer on required app icons

According to the current implementation, usually the small and large icon are set as the same. But in some cases, depending on the ingestion source the field might be overridden. Anyhow, in case of BizChat Extensibility, the field "outline" in the manifest will be set as small icon and used in the BizChat UX.

## App manifest

The app manifest for Microsoft 365 (previously known as *Teams app manifest*) is a JSON file that describes the functionality and characteristics of your app. At its core, the app manifest for Microsoft 365 is the schema for building [Teams apps](), however it has since expanded (as of version 1.17) to define apps that run across Microsoft 365 hosts, in addition to Teams.

Every app manifest must include the following information:

- `developer` - contains information about your company like it's name and website url.
- `name` - contains the name of your app experience, displayed to users in the Microsoft 365 application host.
- `localizationInfo` - contains information about default language and paths to additional language files.
- `icons` - contains paths to the icon files that will be used within the Microsoft 365 application host.
- Additional elements of your app - manifest sections define the integration points of your app, such as tabs, bots, and message extensions.

For detailed manifest guidance, see the [app manifest](/microsoftteams/platform/resources/schema/manifest-schema) schema documentation.

### Declarative copilot manifest

PLACEHOLDER for overview on DCs and API Plugins + links to reference docs.

### API plugin manifest

## Localization

PLACEHOLDER

## See also

- [Plugins and connectors work across Microsoft 365 experiences](ecosystem.md#plugins-and-connectors-work-across-microsoft-365-experiences)
- [Teams apps across Microsoft 365](/microsoftteams/platform/m365-apps/overview?context=/microsoft-365-copilot/extensibility/context)
- [Manage extensions for Copilot](manage.md)
- [Publish extensions for Copilot for Microsoft 365](publish.md)
