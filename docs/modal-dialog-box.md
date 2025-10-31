---
title: Add modal dialog box to Microsoft 365 Copilot agent Adaptive Card responses
description: "Learn how to add modal dialog boxes to Microsoft 365 Copilot agent Adaptive Card responses."
#customer intent: As a developer, I want to enhance Copilot agent responses by returning a modal dialog box.
author: Lauragra
ms.author: lauragra
ms.reviewer: lauragra
ms.date: 10/31/2025
ms.topic: concept-article
---

# Add a modal dialog box to Adaptive Card responses (preview)

You can enhance Adaptive Card responses in declarative agents for Microsoft 365 Copilot by adding modal dialog boxes that allow inline editing. This approach allows the card to collect input data, send structured payloads to your app, and dynamically update the card based on returned responses - creating a seamless, stateful interaction without leaving the agent surface.

This article describes how to use the `Action.Execute` function (available starting with Adaptive Card schema version 1.5) to add modal dialog boxes to your Copilot agent responses. These dialog boxes allow users to edit and submit information via the Adaptive Card.

> [!NOTE]
> The `Action.Execute` function is currently in preview.

## Define the Adaptive Card template

To use the modal dialog box action:

- Add the [Adaptive Card template](/microsoft-365-copilot/extensibility/api-plugin-adaptive-cards) to your [API plugin manifest](/microsoft-365-copilot/extensibility/api-plugin-manifest-2.3).

- Include the `Action.Excute` schema in the Adaptive Card definition.

The following example shows the schema for Action.Execute.

1. "static_template": {

1. "type": "AdaptiveCard",

1. "\$schema": "http://adaptivecards.io/schemas/adaptive-card.json",

1. "version": "1.5",

1. "body": \[

1. {

1. "type": "Container",

1. "\$data": "\${\$root}",

1. "items": \[

1. {

1. "type": "TextBlock",

1. "text": "ticketId: \${if(ticketId, ticketId, 'N/A')}",

1. "wrap": true

1. },

1. {

1. "type": "Input.Text",

1. "value": "\${if(title, title, 'N/A')}",

1. "id": "title",

1. "wrap": true,

1. "maxLength": 500

1. },

1. {

1. "type": "Input.Text",

1. "value": "\${if(description, description, 'N/A')}",

1. "id": "description",

1. "wrap": true,

1. "maxLength": 500,

1. "isMultiline": true

1. },

1. {

1. "type": "Input.Number",

1. "label": "Severity",

1. "value": "\${if(severity, severity, 'N/A')}",

1. "id": "severity",

1. "wrap": true

1. },

1. {

1. "type": "Input.Date",

1. "label": "Due Date - Overdue ⏰",

1. "id": "dueDate",

1. "value": "\${if(dueDate, dueDate, 'N/A')}",

1. "wrap": true

1. },

1. {

1. "type": "Input.Number",

1. "placeholder": "Placeholder text",

1. "id": "completionPercentage",

1. "label": "Completion Percentage",

1. "max": 100,

1. "min": 0,

1. "value": "\${if(completionPercentage, completionPercentage, 'N/A')}",

1. "isVisible": true,

1. "wrap": true

1. }

1. \]

1. }

1. \],

1. "actions": \[

1. {

1. "type": "Action.Execute",

1. "verb": "updateTickets",

1. "isVisible": true,

1. "id": "ticketUpdate",

1. "title": "Update Ticket",

1. "data": {

1. "ticketId": "\${if(ticketId, ticketId, 'N/A')}"

1. }

1. }

1. \]

1. }

1. },

1. {

1. "name": "updateTickets",

1. "description": "Update a ticket field for a given ticketId",

1. "capabilities": {

1. "response_semantics": {

1. "data_path": "\$",

1. "properties": {

1. "title": "\$.title",

1. "subtitle": "\$.description"

1. },

1. "static_template": {

1. "type": "AdaptiveCard",

1. "\$schema": "http://adaptivecards.io/schemas/adaptive-card.json",

1. "version": "1.5",

1. "body": \[

1. {

1. "type": "Container",

1. "\$data": "\${\$root}",

1. "items": \[

1. {

1. "type": "TextBlock",

1. "text": "ticketId: \${if(updatedTicket.ticketId, updatedTicket.ticketId, 'N/A')}",

1. "wrap": true

1. },

1. {

1. "type": "Input.Text",

1. "value": "\${if(updatedTicket.title, updatedTicket.title, 'N/A')}",

1. "id": "title",

1. "wrap": true,

1. "maxLength": 500

1. },

1. {

1. "type": "Input.Text",

1. "value": "\${if(updatedTicket.description, updatedTicket.description, 'N/A')}",

1. "id": "description",

1. "wrap": true,

1. "maxLength": 500,

1. "isMultiline": true

1. }

1. \]

1. }

1. \],

1. "actions": \[

1. {

1. "type": "Action.Execute",

1. "verb": "updateTickets",

1. "isVisible": true,

1. "id": "ticketUpdate",

1. "title": "Update Ticket",

1. "data": {

1. "ticketId": "\${if(updatedTicket.ticketId, updatedTicket.ticketId, 'N/A')}"

1. }

1. }

1. \]

1. }

1. }

1. }

1.  

## Request and response examples

The following request and response examples show what happens When a user takes an action that causes the `Action.Execute` function to run in the client.

### Request

1. {

1. "clientInfo": {

1. "clientPlatform": "chat-web",

1. "clientAppName": "Office",

1. "clientEntrypoint": "chat-officeweb",

1. "clientSessionId": "d8bc8369-277e-c48c-2faf-3c894945abe0"

1. },

1. "message": {

1. "text": "Card action execute",

1. "messageType": "ExecuteActionRequest",

1. "actionId": "sample_app AND type=Task AND created \>= -30d\\, startAt=0, maxResults=10)",

1. "author": "user",

1. "executeActionData": {

1. "gptId": "gpt_ud",

1. "gptActionId": "plugin_1",

1. "titleId": "U_e80ce190-4f5a-ee50-ce95-dcbabd8cd2ec",

1. "verb": "updateTickets",

1. "data": {

1. "ticketId": 1,

1. "title": "Bug Fix",

1. "description": "Fix login issues",

1. "severity": "3",

1. "dueDate": "2025-06-20",

1. "completionPercentage": "97"

1. }

1. }

1. }

1. }

1.  

### Response

1. {

1. "text": "Sample text",

1. "executeActionData": "{\\type\\:\\AdaptiveCard\\,\\\$schema\\:\\http://adaptivecards.io/schemas/adaptive-card.json\\,\\version\\:\\1.5\\,\\body\\:\[{\\type\\:\\Container\\,\\style\\:\\good\\,\\items\\:\[{\\type\\:\\TextBlock\\,\\text\\:\\Ticket updated successfully\\,\\color\\:\\default\\,\\weight\\:\\bolder\\,\\wrap\\:true},{\\type\\:\\TextBlock\\,\\text\\:\\1\\,\\wrap\\:true},{\\type\\:\\TextBlock\\,\\text\\:\\Bug Fix\\,\\wrap\\:true},{\\type\\:\\TextBlock\\,\\text\\:\\Fix login issues\\,\\wrap\\:true},{\\type\\:\\TextBlock\\,\\text\\:\\3\\,\\wrap\\:true},{\\type\\:\\TextBlock\\,\\text\\:\\2025-06-20\\,\\wrap\\:true},{\\type\\:\\TextBlock\\,\\text\\:\\97\\,\\wrap\\:true}\]}\]}",

1. "messageType": "ExecuteActionResponse",

1. "author": "bot",

1. "createdAt": "2025-04-30T11:07:44.9557335+00:00",

1. "timestamp": "2025-04-30T11:07:44.9557335+00:00",

1. "messageId": "649112bc-7fe2-40bd-990d-928364fb173c",

1. "requestId": "3058aa09-c9b6-3425-b0ef-49ef2ad4b9a5",

1. "offense": "Unknown",

1. "spokenText": "Sample text",

1. "turnCount": 1

1. }

1.  

## Related content

- [Adaptive Card reponses](/microsoft-365-copilot/extensibility/api-plugin-adaptive-cards)
- [Add a dialog box to Adaptive Card templates](/microsoft-365-copilot/extensibility/adaptive-card-dialog-box)
- [Declarative agent app package](/microsoft-365-copilot/extensibility/overview-declarative-agent#building-declarative-agents)
