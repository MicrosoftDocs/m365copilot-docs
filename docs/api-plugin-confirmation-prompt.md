---
title: Confirmation prompts for API plugins for Microsoft Copilot for Microsoft 365
description: Learn about confirmation prompts for API plugins and how to change default confirmation behavior for Microsoft Copilot for Microsoft 365
author: jasonjoh
ms.author: jasonjoh
ms.topic: conceptual
---

# Confirmation prompts for API plugins for Microsoft Copilot for Microsoft 365

By default, Microsoft Copilot for Microsoft 365 asks the user to allow it to send data to a plugin before it sends it. The user is able to see what data will be sent and is given a choice to allow or decline. For some API operations, users are give the option to always allow data to be sent, which prevents future confirmation prompts for that particular operation.

Normally, Copilot for Microsoft 365 shows the user the always allow option for HTTP GET operations, and does not show the option for POST, PATCH, PUT, and DELETE. API plugin developers can change this behavior for individual operations in their API.

## Overriding prompt behavior

Developers can control whether Copilot for Microsoft 365 shows the always allow option for a specific operation by adding the `x-openai-isConsequential` property in the OpenAPI document for their API. Setting this property to `true` disables the always allow option, and setting it to `false` enables it.

For example, consider an API to create a reminder: `POST /reminders`. Because it is a POST operation, Copilot for Microsoft 365 asks the user to confirm every time this API is used, and does not give the user the option to always allow this operation. To enable the always allow option, add the `x-openai-isConsequential` property set to false as shown in the following example.

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

Now imagine a related API to retrieve existing reminders: `GET /reminders`. Since it is a GET, Copilot for Microsoft 365 will show the user the always allow option. This can be changed by adding `x-openai-isConsequential` set to true.

```yml
get:
  x-openai-isConsequential: true
  summary: Get existing reminders
  description: Gets a list of existing reminders
  operationId: GetReminders
```
