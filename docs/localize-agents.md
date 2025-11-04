---
title: Localize Agents for Microsoft 365 Copilot
description: Learn how to add support for other languages to your agent.
author: erikadoyle
ms.author: edoyle
ms.topic: concept-article
ms.localizationpriority: medium
ms.date: 11/04/2025
---

# Localize your agent

Agents are essentially apps for Microsoft 365. They share a common manifest schema, app packaging, and distribution and management process. Your [app manifest](/microsoft-365/extensibility/schema) references the definition file for your declarative agents in the `copilotAgents` object.

The way you localize an agent is slightly different than how you localize other capabilities (such as tabs, bots, and message extensions) in a Microsoft 365 app manifest.

You use the same localization file (per language) for both Teams app capabilities and agents. However, while all other app manifest fields are referenced using JSONPath expressions in the language files, agent-related fields are referenced using dictionary keys. Unlike classic Teams app capabilities, which use default language strings in the app manifest itself, localized agents require a language file for the default language and for each extra language.

:::image type="content" source="assets/images/loc-manifest.png" alt-text="Diagram showing the relationship between app manifest, declarative agent manifest, and a language file for the purposes of localizing an agent":::

This article describes how to add support for other languages (beyond the default language) to your agents.

## Update your agent manifests with tokenized keys

Update your declarative agent and/or API plugin manifests with tokenized keys (indicated with double square brackets, for example `[[PLUGIN_NAME]]`) for any field values you want to localize. Localization keys must match this regular expression: `^[a-zA-Z_][a-zA-Z0-9_]*$`

The following example shows a declarative agent manifest with tokenized values for its name and description.

```json
{
    "$schema": "https://developer.microsoft.com/json-schemas/copilot/declarative-agent/v1.0/schema.json",
    "name": "[[DA_Name]]",
    "description": "[[DA_Description]]",
    "instructions": "# You are an assistant..."
}
```

## Add `localizationInfo` to your app manifest

Add the `localizationInfo` section to your app manifest, with [language tags](/globalization/locale/standard-locale-names) and relative paths to each supported language file within your app package.

If your agent supports more than one language, you must specify a standalone language file for every supported language, *including your default language*.

The following example shows the `localizationInfo` section in an app manifest.

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

If your agent doesn't support other languages, the default language strings are represented within the app manifest file itself. Single language app packages don't require a separate language file for the default language.

## Create a localization file for each extra language

Create a localization file for each supported language with values for the tokenized keys, using the file names specified (for the `defaultLanguageFile` and `file` properties) in the app manifest in the previous step.

The following example shows a language file, `fr.json`, with localized strings for both an agent and personal tabs.

```json
{
    "$schema": "https://developer.microsoft.com/json-schemas/teams/vDevPreview/MicrosoftTeams.Localization.schema.json",
    "name.short": "Agent de Communications",
    "name.full": "Agent pour les Communications",
    "description.short": "Outils pour les professionnels de la communication",
    "description.full": "Outils pour les professionnels de la communication Contoso, y compris la galerie de ressources et les assistants personnels",
    "localizationKeys": {
        "DA_Name": "Agent de Communications",
        "DA_Description": "Un assistant pour les professionnels de la communication et des relations publiques chez Contoso."
    },
    "staticTabs[0].name": "Accueil",
    "staticTabs[1].name": "Galerie de ressources",
    "staticTabs[2].name": "À propos de Contoso"
}
```

### Localizable fields in app manifest

For each language file, specify the following properties from the app localization schema that are required to be localized.

| Manifest field | Description | Max length| Required |
|--|--|--|--|
| `$schema` | The URL to the localization schema. For agents, use devPreview: `https://developer.microsoft.com/en-us/json-schemas/teams/vDevPreview/MicrosoftTeams.Localization.schema.json`. Manifest schema version must be same for both app manifest and localization files. | | ✔️ |
| `name.short` | Replaces the short name from the app manifest with the value provided. | 30 characters | ✔️ |
| `name.full` | Replaces the full name from the app manifest with value provided | 100 characters | ✔️ |
| `description.short`| Replaces the short description from the app manifest with value provided. | 80 characters | ✔️ |
| `description.full` | Replaces the full description from the app manifest with value provided. | 4,000 characters | ✔️ |
| *Key/value pairs for localized strings in agents* | For agents, use tokenized keys (as specified in app `manifest.json`, but without double square brackets) with their localized values. For example: `"DA_Name": "Agent de Communications"`| | |
| *JSONPath/value pairs for localized strings of any other app components* | For all other (classic Teams) app components, use JSONPath expressions as keys for the localized values. For example: `"staticTabs[0].name": "Accueil"`| | |

To learn more, see [Localize your app (Microsoft Teams)](/microsoftteams/platform/concepts/build-and-test/apps-localization) and the [Localization schema reference](/microsoftteams/platform/resources/schema/localization-schema).

### Localizable fields in declarative agent manifest

The following fields are localizable within the declarative agent manifest.

| Manifest field | Description | Max length| Required |
|--|--|--|--|
| `name`| The name of the declarative agent. Must contain at least one nonwhitespace character.| 100 characters| ✔️|
| `description`| The description of the declarative agent. Must contain at least one nonwhitespace character.| 1,000 characters | ✔️|
| `conversation_starters`| A list (array) of examples of questions that the declarative agent can answer, where each example is an object with `title` and `text`, both of which are localizable.| 12 objects in the array| |

To learn more, see [Declarative agent manifest reference](./declarative-agent-manifest-1.2.md).

### Localizable fields in API plugin manifest

The following fields are localizable within the API plugin manifest.

| Manifest field | Description | Max length| Required |
|--|--|--|--|
|`name_for_human`| A short, human-readable name for the plugin. It must contain at least one nonwhitespace character.| 20 characters |✔️|
|`description_for_model`|  The description for the plugin that is provided to the model, including what the plugin is for, and in what circumstances its functions are relevant.| 2,048 characters| |
|`description_for_human`| A human-readable description of the plugin.| 100 characters|✔️|
|`logo_url`|A URL used to fetch a logo that may be used by the orchestrator. | | |
|`legal_info_url`|An absolute URL that locates a document containing the terms of service for the plugin.| | |
|`privacy_policy_url`|An absolute URL that locates a document containing the privacy policy for the plugin.| | |
| `conversation_starter`| A list (array) of examples of questions that the plugin can answer, where each example is an object with `title` and `text`, both of which are localizable.| | |

To learn more, see [API plugin manifest reference](./api-plugin-manifest.md).

## Related content

- [Agent app package](agents-are-apps.md)
