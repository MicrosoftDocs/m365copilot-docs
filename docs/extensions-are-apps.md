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
 - a **large color icon** (`color.png`), a full-color 92x92 icon to display your extension in the Microsoft Copilot UI and store, and
 - a **small outline icon** (`outline.png`), a 32x32 icon with transparent background (not currently used in Copilot, but required to pass validation)

The app package can also contain declarative copilot and API plugin definitions, as well as localization files for other supported languages.

:::image type="content" source="assets/images/app-package.png" alt-text="Diagram showing the anatomy of a Microsoft 365 app package: app manifest (.json file) + icons (color and outline .png files) wrapped in a .zip file" border="false":::

## App icons

Your app package must include both a color and outline version of your Copilot extension icon, as .png files. These icons have specific size requirements in order to pass store validation.

> [!NOTE]
> Currently only the color icon is used to represent Copilot extensions to the end-user (both as its store listing and within Microsoft 365 Copilot UI), but an outline icon is still required when submitting the app package to Microsoft AppSource.

For further design guidance on color and outline icons for the Microsoft 365 app package, [App icons for Teams Store and app bar](/microsoftteams/platform/concepts/design/design-teams-app-icon-store-appbar).

### Color icon

The color icon represents your extension within the Microsoft Copilot UI and in-product (Teams, Outlook, Microsoft 365) app stores.

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

The app manifest for Microsoft 365 is a JSON file that describes the functionality and characteristics of your app. At its core, the app manifest for Microsoft 365 is the schema for building [Teams apps](/microsoftteams/platform/concepts/build-and-test/apps-package), however it has since expanded (since version 1.17) to define apps that run across Microsoft 365 hosts, in addition to Teams.

If you're using Microsoft Copilot Studio to build a declarative copilot, the app manifest will be generated for you based on the info you provide during the creation process.

Every app manifest must include the following information:

| Manifest field | Description |
|--|--|
| [version](/microsoftteams/platform/resources/schema/manifest-schema-dev-preview#version?context=/microsoft-365-copilot/extensibility/context)| The version number of the app, in the format of MAJOR.MINOR.PATCH ([semver](http://semver.org/) standard). |
| [id](/microsoftteams/platform/resources/schema/manifest-schema-dev-preview#id?context=/microsoft-365-copilot/extensibility/context) | The unique generated identifier for this app from Microsoft Application Registration Portal ([apps.dev.microsoft.com](https://apps.dev.microsoft.com/)), in GUID form. |
| [developer](/microsoftteams/platform/resources/schema/manifest-schema-dev-preview#developer?context=/microsoft-365-copilot/extensibility/context) | Information about the developer, including name, website, and links to privacy policy and terms of use. For apps submitted to AppSource, values must match the value provided in the Partner Center app submission form.
| [name](/microsoftteams/platform/resources/schema/manifest-schema-dev-preview#name?context=/microsoft-365-copilot/extensibility/context) | The name of your app, as displayed to end-users within the application host.|
| [description](/microsoftteams/platform/resources/schema/manifest-schema-dev-preview#description?context=/microsoft-365-copilot/extensibility/context) | Short and long descriptions of your app for users. For apps submitted to AppSource, these values must match the information in your AppSource entry.|
| [icons](/microsoftteams/platform/resources/schema/manifest-schema-dev-preview#icons?context=/microsoft-365-copilot/extensibility/context) | Relative paths to color and outline icon files.|
| [accentColor](/microsoftteams/platform/resources/schema/manifest-schema-dev-preview#accentColor?context=/microsoft-365-copilot/extensibility/context) | A color to use with and as a background for your outline icons, in [RGB hex value](https://developer.mozilla.org/docs/Web/CSS/CSS_colors/Color_picker_tool), for example `#4464ee`.|
| *Definitions for specific app capabilities* | A definition for each app capability, such as personal tabs ([staticTabs](/microsoftteams/platform/resources/schema/manifest-schema-dev-preview#staticTabs?context=/microsoft-365-copilot/extensibility/context)), message extensions ([composeExtensions](/microsoftteams/platform/resources/schema/manifest-schema-dev-preview#composeExtensions?context=/microsoft-365-copilot/extensibility/context)), or [bots](/microsoftteams/platform/resources/schema/manifest-schema-dev-preview#bots?context=/microsoft-365-copilot/extensibility/context). Declarative copilots and API plugins are defined under the [copilotExtensions](#copilotextensions-definitions) node.

Here's an example app manifest with placeholder sections at the end for message extension and copilot extension app capabilities:

```json
{
    "$schema": "https://developer.microsoft.com/en-us/json-schemas/teams/v1.18/MicrosoftTeams.schema.json",
    "manifestVersion": "1.18",
    "version": "1.0.0",
    "id": "00000000-0000-0000-0000-000000000000",
    "developer": {
        "name": "Northwind Traders",
        "websiteUrl": "https://www.example.com",
        "privacyUrl": "https://www.example.com/termofuse",
        "termsOfUseUrl": "https://www.example.com/privacy"
    },
    "icons": {
        "color": "Northwind-Logo-196.png",
        "outline": "Northwind-Logo-32.png"
    },
    "name": {
        "short": "Northwind Inventory",
        "full": "Northwind Inventory App"
    },
    "description": {
        "short": "App allows you to find and update product inventory information",
        "full": "Northwind Inventory is the ultimate tool for managing your product inventory. With its intuitive interface and powerful features, you'll be able to easily find your products by name, category, inventory status, and supplier city. You can also update inventory information with the app."
    },
    "accentColor": "#3690E9",
    "composeExtensions": {
        ...
    },
    "copilotExtensions": {
        ...
    }
}
```

To learn more, see the [App manifest schema reference](/microsoftteams/platform/resources/schema/manifest-schema-dev-preview?context=/microsoft-365-copilot/extensibility/context) (generally available version), and [Developer preview app manifest schema reference](/microsoftteams/platform/resources/schema/manifest-schema?context=/microsoft-365-copilot/extensibility/context).

### `copilotExtensions` definitions

Declarative copilots and API plugins each have their own definition schemas. These definition files, along with unique IDs, are referenced from the `copilotExtensions` object of the app manifest. 

Here's an example that references both a declarative copilot and API plugin:

```json
    "copilotExtensions": {
        "declarativeCopilots": [
            {
                "id": "copilot1",
                "file": "declarativeCopilot1.json"
            }
        ],
        "plugins": [
            {
                "id": "plugin1",
                "file": "plugin1.json"
            }
        ]
    },
```

You can also reference an API plugin definition directly within a declarative copilot definition, so that the plugin functionality is directly integrated within the copilot experience. Referencing your API plugin from the app manifest root enables it for broader use in the base mode Microsoft 365 Copilot chat experience.

:::image type="content" source="assets/images/app-manifest-extensions.png" alt-text="Diagram showing app manifest referencing a declarative copilot manifest and API plugin manifest. The declarative copilot manifest references another API plugin manifest" border="false":::

Please note the following:

- Currently only one declarative copilot definition and one API plugin definition is supported per app manifest.

- When using Copilot Studio to build Copilot extensions, a unique `id` will be generated for each, as part of the overall app manifest generation. When building extensions with Teams Toolkit or your own IDE, you assign the `id` yourself, according to your own conventions or friendly name.

## Declarative copilot manifest

The declarative copilot manifest includes instructions for Copilot responses, conversation starter sample prompts, data sources used for grounding, and a list of actions (API plugin skills) the copilot is able to perform.

To learn more, see [Declarative copilot manifest schema for Microsoft 365 Copilot](declarative-copilot-manifest.md).

## API plugin manifest

The API plugin manifest describes the plugin's capabilities, including the the APIs it supports and the operations it can perform. It also includes metadata such as name, description, version, and a reference to the OpenAPI definition of the REST APIs with which it interacts. API plugins can be referenced directly from the app manifest for broad use across Microsoft 365 Copilot experiences, or from within a declarative copilot manifest so that it's only called from your copilot.

To learn more, see [API plugin manifest schema for Microsoft 365 Copilot](api-plugin-manifest.md).

## Localizing your extension

The way you localize a Copilot extension is slightly different than how you localize other capabilities (such as tabs, bots, and message extensions) in the app manifest. 

You'll use the same localization file (per language) for both classic Teams app capabilities and Copilot extensions. However, while all other app manifest fields are referenced using JSONPath expressions in the language file(s), Copilot extension-related fields are simply referenced using dictionary keys.

DIAGRAM

Following are the steps for supporting additional languages (beyond the default) to your Copilot extension.

### 1. Update your Copilot extension manifest(s) with tokenized keys

Update your declarative copilot and/or API plugin manifests with tokenized keys (indicated with double square brackets, for example `[[PLUGIN_NAME]]`) for any field values you wish to localize. Localization keys much match this regular expression: `^[a-zA-Z_][a-zA-Z0-9_]*$`

Here's an example declarative copilot manifest with tokenized values for its name and description:

```json
{
    "$schema": "https://aka.ms/json-schemas/copilot-extensions/v1.0/declarative-copilot.schema.json",
    "name": "[[DC_Name]]",
    "description": "[[DC_Description]]",
    "instructions": "# You are an assistant..."
}
```

### 2. Add `localizationInfo` to your app manifest

Add the `localizationInfo` section to your app manifest, with [language tags](/globalization/locale/standard-locale-names) and relative paths to each supported language file within your app package. 

If your extension supports more than one language, then you must specify a standalone language file for every supported language, *including your default language*.

TODO: Is the above statement true? (Seems like it should be, or at least will be for 2.0, so a good thing to advise customers to do now)

Here's an example localization info section in app manifest:

```json
"localizationInfo": {
    "defaultLanguageTag": "en",
    "defaultLanguageFile": "en.json",
    "additionalLanguages": [
        {
            "languageTag": "fr",
            "file": "fr.json"
        }
    ]
},
```

If your extension doesn't support additional languages, the default language strings are represented within app manifest file itself. (Single language app packages don't require a separate language file for the default language.)

### 3. Create a localization file for each additional language

Create a localization file for each additional supported language with values for the tokenized keys, using the file names specified (for `defaultLanguageFile` and `file` properties) in app manifest from the previous step.

For each language file, specify the following properties from the app localization schema:

TODO: Are all the current required fields for Teams loc schema still required for 1.18 / Copilot extensions?

| Manifest field | Description | Max length| Required |
|--|--|--|--|
| `@schema` | The URL to localization schema. For Copilot extensions, use v1.18: `https://developer.microsoft.com/en-us/json-schemas/teams/v1.18/MicrosoftTeams.Localization.schema.json`. Manifest schema version must be same for both app manifest and localization files. | | ✔️ |
| `name.short` | Replaces the short name from app manifest with value provided. | 30 characters | ✔️ |
| `name.full` | Replaces the full name from app manifest with value provided | 100 characters | ✔️ |
| `description.short`| Replaces the short description from app manifest with value provided. | 80 characters | ✔️ |
| `description.full` | Replaces full description from app manifest with value provided. | 4000 characters | ✔️ |
| *Key/value pairs for localized strings in Copilot extensions* | For Copilot extensions, use tokenized keys (as specified in app `manifest.json`, but without double square brackets) with their localized values. For example: `"DC_Name": "Copilote de Communications"`| | |
| *JSONPath/value pairs for localized strings of any other app components* | For all other (classic Teams) app components, use JSONPath expressions as keys for the localized values. For example: `"staticTabs[0].name": "Accueil"`|

Here's an example language file, with localized strings for both Copilot extensions and personal tabs:

```json
{
    "$schema": "https://developer.microsoft.com/json-schemas/teams/v1.18/MicrosoftTeams.Localization.schema.json",
    "name.short": "Copilote de Communications",
    "name.full": "Copilote pour les Communications",
    "description.short": "Outils pour les professionnels de la communication",
    "description.full": "Outils pour les professionnels de la communication Contoso, y compris la galerie de ressources et les assistants personnels",
    "localizationKeys": {
        "DC_Name": "Copilote de Communications",
        "DC_Description": "Un assistant pour les professionnels de la communication et des relations publiques chez Contoso."
    },
    "staticTabs[0].name": "Accueil",
    "staticTabs[1].name": "Galerie de ressources",
    "staticTabs[2].name": "À propos de Contoso"
}
```

To learn more, see [Localize your app (Microsoft Teams)](/microsoftteams/platform/concepts/build-and-test/apps-localization) and the [Localization schema reference](/microsoftteams/platform/resources/schema/localization-schema).

## See also

- [Manage extensions for Copilot](manage.md)
- [Publish extensions for Copilot for Microsoft 365](publish.md)
