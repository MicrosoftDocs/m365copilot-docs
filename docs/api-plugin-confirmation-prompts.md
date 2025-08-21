---
title: Confirmation prompts for API plugins for Microsoft 365 Copilot
description: Learn about confirmation prompts for API plugins and how to change default confirmation behavior for Microsoft 365 Copilot
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 09/13/2024
ms.topic: conceptual
---

# Confirmation prompts for API plugins for Microsoft 365 Copilot

[!INCLUDE [api-plugins-declarative-agents-only](includes/api-plugins-declarative-agents-only.md)]

By default, Microsoft 365 Copilot asks the user to confirm sending data to a plugin before it sends it to prevent unintended consequences in external systems. The user is able to see the data to be sent and is given a choice to allow or decline. For some API operations, users are given the option to always allow data to be sent, which prevents future confirmation prompts for that particular operation.

Normally, Microsoft 365 Copilot shows the user the always allow option for HTTP GET operations, and doesn't show the option for POST, PATCH, PUT, and DELETE. API plugin developers can change this behavior for individual operations in their API. Developers can also customize the text that Copilot displays to the user as part of the confirmation prompt.

## Overriding prompt behavior

Developers can control whether Microsoft 365 Copilot shows the always allow option for a specific operation by adding the `x-openai-isConsequential` property in the OpenAPI document for their API. Setting this property to `true` disables the always allow option, and setting it to `false` enables it. As a rule, any action with side effects in the external system should be marked with `true` to ensure the user is in control and prevent unintended consequences for actions with side effects in the external system.

For example, consider an API that creates a reminder: `POST /reminders`. Because it's a POST operation, Microsoft 365 Copilot asks the user to confirm every time this API is used, and doesn't give the user the option to always allow this operation.

:::image type="content" source="assets/images/api-plugins/post-confirm.png" alt-text="Copilot confirmation dialog for a POST operation.":::

To enable the always allow option, add the `x-openai-isConsequential` property set to false as shown in the following example.

```yml
post:
  x-openai-isConsequential: false
  summary: Create a new reminder
  description: Create a new budget with a specified name and due date
  operationId: CreateReminder
  requestBody:
    content:
      application/json:
        schema:
          $ref: '#/components/schemas/Reminder'
    required: true
```

Now imagine a related API that retrieves existing reminders: `GET /reminders`. Since it's a GET, Microsoft 365 Copilot shows the user the always allow option.

:::image type="content" source="assets/images/api-plugins/get-always-allow.png" alt-text="Copilot confirmation dialog for a GET operation.":::

This behavior can be changed by adding `x-openai-isConsequential` set to true.

```yml
get:
  x-openai-isConsequential: true
  summary: Get existing reminders
  description: Gets a list of existing reminders
  operationId: GetReminders
```

## Customizing confirmation text

Developers can specify the confirmation text by setting the `body` property in the [Confirmation object](api-plugin-manifest.md#confirmation-object) in the function's [Function capabilities object](api-plugin-manifest.md#function-capabilities-object) in the plugin manifest. The value of `body` should be indicative of what the function does. If this property isn't present in the manifest, the `description` property in the [Function object](api-plugin-manifest.md#function-object) is used instead.

```json
{
  "name": "GetBudgets",
  "description": "Returns details including name and available funds of budgets, optionally filtered by budget name",
  "capabilities": {
    "confirmation": {
      "type": "AdaptiveCard",
      "title": "Search budgets",
      "body": "Do you want to allow searching for budgets?"
    }
  }
}
```

## Enabling localization of confirmation text

To enable confirmation test to be localized, take the following steps.

**Step 1: Use Localization Keys in the Plugin Manifest**
In your plugin manifest (e.g., plugin.json), replace literal strings with localization keys using the format:

    ```json
    {
      "schema_version": "v2.3",
      "name_for_human": "[[plugin_name]]",
      "description_for_human": "[[plugin_description]]"
    }
    ```

These keys (e.g., plugin_name, plugin_description) must match entries in your localization file and conform to the regex ^[a-zA-Z_][a-zA-Z0-9_]*.

**Step 2: Create Localization Files**
Localization files should be in JSON format and include a localizationKeys object mapping each key to its translated string. For example:

```json
    {
  "localizationKeys": {
    "plugin_name": "Weather Assistant",
    "plugin_description": "Provides weather updates and forecasts."
      }
    }
```

You can create multiple localization files for different languages (e.g., en.json, fr.json, de.json) and reference them in your plugin configuration.

**Step 3: Add `localizationInfo` to the App Manifest**

Include a localizationInfo section in your app manifest to reference the localization files. For example,

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
    }
```

**Step 4: Test Localization Behavior**

Use tools like the Microsoft 365 Agents Toolkit or Copilot Studio to test your plugin in different language environments. You can:

- Upload localization files.
- Switch languages in the Copilot interface.
- Validate that localized strings appear correctly in conversation starters, descriptions, and UI elements. [Build API...65 Copilot], [Copilot St...l Copilots]
