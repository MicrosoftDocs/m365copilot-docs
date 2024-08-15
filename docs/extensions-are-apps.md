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

The Microsoft 365 ecosystem is evolving into an integrated app platform, where you can use a common app model to define and package your app. What started as a way to [extend Teams apps to run in other Microsoft 365 applications](/microsoftteams/platform/m365-apps/overview?context=/microsoft-365-copilot/extensibility/context) has since expanded to support the distribution of [Graph connectors](/graph/connecting-external-content-deploy-teams?context=/microsoft-365-copilot/extensibility/context), [Outlook Add-ins](/office/dev/add-ins/develop/unified-manifest-overview), and now Copilot extensions.

### App package

The app package for Microsoft 365, including Copilot extensions, is a zip file that contains one or more configuration (manifest) files and your app icons. Your app logic and data storage are hosted elsewhere and accessed by the Microsoft 365 host application via HTTPS. You'll submit the app package to your admin to publish to your organization or to Partner Center to publish to Microsoft AppSource.

At minimum, an app package contains:

 - the **app manifest** (`manifest.json`), which describes app configuration, capabilities, required resources, and important attributes,
 - a **large color icon** (`color.png`), a full-color 92x92 icon to disply your extension in the Microsoft Copilot UI and store, and
 - a **small outline icon** (`outline.png`), a 32x32 icon with transparent background (not currently used in Copilot, but required to pass validation)

The app package can also contain declarative copilot and API plugin definitions, as well as localization files for other supported languages.

:::image type="content" source="assets/images/app-package.png" alt-text="Diagram showing the anatomy of a Microsoft 365 app package: app manifest (.json file) + icons (color and outline .png files) wrapped in a .zip file":::

## App icons

Your app package must include both a color and outline version of your Copilot extension icon, as .png files. These icons have specific size requirements in order to pass store validation.

### Color icon

The color icon represents your Copilot extension within the Microsoft Copilot UI and in-product (Teams, Outlook, Microsoft 365) app stores.

:::row:::
:::column:::

:::image type="content" source="assets/images/color-icon.png" alt-text="Sample image of an app color icon, showing 192x192 pixels as total icon size with background included, with a central 96x96 pixel space showing the 'Safe region' for the app symbol":::

:::column-end:::
:::column span="2":::

Your color icon:

- Can be any color
- Must be 192 x 192 pixels total
- Should be 96 x 96 pixels for the symbol itself (to allow 48 pixels of padding for [host scenarios where it is cropped](/microsoftteams/platform/concepts/build-and-test/apps-package#color-icon))
- Must sit atop a fully solid or fully transparent square background

:::column-end:::
:::row-end:::


### Outline icon

The outline icon is used to represent pinned and/or active apps on the Teams app bar. It's not currently used for Copilot extensions, but still required in order for the app package to pass validation.

:::row:::
:::column:::

:::image type="content" source="assets/images/outline-icon.png" alt-text="Sample image of an app outline icon, showing 32x32 pixel size and white icon outline with transparent background":::

:::column-end:::
:::column span="2":::

Your outline icon:

- Must be 32 x 32 pixels
- Must be either white with a transparent background, or transparent with a white background
- Must not contain additional padding around the symbol

:::column-end:::
:::row-end:::

## App manifest

The app manifest for Microsoft 365 (previously known as *Teams app manifest*) is a JSON file that describes the functionality and characteristics of your app. At its core, the app manifest for Microsoft 365 is the schema for building [Teams apps](/microsoftteams/platform/concepts/build-and-test/apps-package), however it has since expanded (since version 1.17) to define apps that run across Microsoft 365 hosts, in addition to Teams.

Every app manifest must include the following information:

- `version` - The version number of the app, in the format of MAJOR.MINOR.PATCH ([semver](http://semver.org/) standard)
- `developer` - contains information about your company like it's name and website url.
- `name` - contains the name of your app experience, displayed to users in the Microsoft 365 application host.
- `description` - Describes your app to users. For apps submitted to AppSource, these values must match the information in your AppSource entry.
- `icons` - contains paths to the icon files that will be used within the Microsoft 365 application host.
- Additional elements of your app - manifest sections define the integration points of your app, such as tabs, bots, and message extensions.
- `accentColor` - A color to use with and as a background for your outline icons, in [RGB hex value](https://developer.mozilla.org/docs/Web/CSS/CSS_colors/Color_picker_tool), for example `#4464ee`.
- `id` - The unique Microsoft-generated identifier for this app, in GUID form.
- `developer` - Specifies information about the developer and their business. For apps submitted to AppSource, the value must match the values that you provide in the Partner Center app submission form.
- PLACEHOLDER for one or more capabilities

TODO example manifest snippet

TODO copilotExtensions explainer

## Declarative copilot manifest



## API plugin manifest


## See also

- [App manifest schema reference](microsoftteams/platform/resources/schema/manifest-schema-dev-preview?context=/microsoft-365-copilot/extensibility/context)
- [App manifest schema reference (Developer preview)](/microsoftteams/platform/resources/schema/manifest-schema?context=/microsoft-365-copilot/extensibility/context)
- [Manage extensions for Copilot](manage.md)
- [Publish extensions for Copilot for Microsoft 365](publish.md)
