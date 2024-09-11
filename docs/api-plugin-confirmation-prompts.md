---
title: Confirmation prompts for API plugins for Microsoft Copilot for Microsoft 365
description: Learn about confirmation prompts for API plugins and how to change default confirmation behavior for Microsoft Copilot for Microsoft 365
author: jasonjoh
ms.author: jasonjoh
ms.topic: conceptual
---

# Confirmation prompts for API plugins for Microsoft Copilot for Microsoft 365

By default, Microsoft Copilot for Microsoft 365 asks the user to confirm sending data to a plugin before it sends it to prevent unintended consequences in external systems. The user is able to see the data to be sent and is given a choice to allow or decline. For some API operations, users are given the option to always allow data to be sent, which prevents future confirmation prompts for that particular operation.

Normally, Copilot for Microsoft 365 shows the user the always allow option for HTTP GET operations, and doesn't show the option for POST, PATCH, PUT, and DELETE. API plugin developers can change this behavior for individual operations in their API. Developers can also customize the text that Copilot displays to the user as part of the confirmation prompt. 

## Overriding prompt behavior

Developers can control whether Copilot for Microsoft 365 shows the always allow option for a specific operation by adding the `x-openai-isConsequential` property in the OpenAPI document for their API. Setting this property to `true` disables the always allow option, and setting it to `false` enables it. As a rule, any action with side effects in the external system should be marked with `true` to ensure the user is in control and prevent unintended consequences for actions with side effects in the external system. 

For example, consider an API that creates a reminder: `POST /reminders`. Because it's a POST operation, Copilot for Microsoft 365 asks the user to confirm every time this API is used, and doesn't give the user the option to always allow this operation.

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

Now imagine a related API that retrieves existing reminders: `GET /reminders`. Since it's a GET, Copilot for Microsoft 365 shows the user the always allow option.

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
