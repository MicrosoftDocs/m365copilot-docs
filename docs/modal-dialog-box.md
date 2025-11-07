---
title: Allow inline editing of modal dialog boxes in Adaptive Card responses in agents for Microsoft 365 Copilot
description: "Learn how to allow users to edit modal dialog boxes in Adaptive Card responses in agents for Microsoft 365 Copilot."
author: Lauragra
ms.author: lauragra
ms.reviewer: isrumnon
ms.date: 11/07/2025
ms.topic: concept-article
ms.localizationpriority: medium
---

# Allow inline editing of modal dialog boxes in Adaptive Card responses (preview)

You can enhance Adaptive Card responses in declarative agents for Microsoft 365 Copilot by allowing inline editing. This approach allows the card to collect input data, send structured payloads to your app, and dynamically update the card based on returned responses - creating a seamless, stateful interaction without leaving the agent surface.

This article describes how to use the `Action.Execute` function (available starting with Adaptive Card schema version 1.5) to add modal dialog boxes to your Copilot agent responses. These dialog boxes allow users to edit and submit information via the Adaptive Card.

> [!NOTE]
> The `Action.Execute` function is currently in preview.

## Adaptive Card editing

To use the modal dialog box action:

- Add the [Adaptive Card template](/microsoft-365-copilot/extensibility/api-plugin-adaptive-cards) to your [API plugin manifest](/microsoft-365-copilot/extensibility/api-plugin-manifest-2.3).
- Include the `Action.Execute` schema in the Adaptive Card definition.

The following example shows the schema for Action.Execute.

```json
{
  "static_template": {
    "type": "AdaptiveCard",
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "version": "1.5",
    "body": [
      {
        "type": "Container",
        "$data": "${$root}",
        "items": [
          {
            "type": "TextBlock",
            "text": "ticketId: ${if(ticketId, ticketId, 'N/A')}",
            "wrap": true
          },
          {
            "type": "Input.Text",
            "value": "${if(title, title, 'N/A')}",
            "id": "title",
            "wrap": true,
            "maxLength": 500
          },
          {
            "type": "Input.Text",
            "value": "${if(description, description, 'N/A')}",
            "id": "description",
            "wrap": true,
            "maxLength": 500,
            "isMultiline": true
          },
          {
            "type": "Input.Number",
            "label": "Severity",
            "value": "${if(severity, severity, 'N/A')}",
            "id": "severity",
            "wrap": true
          },
          {
            "type": "Input.Date",
            "label": "Due Date - Overdue ⏰",
            "id": "dueDate",
            "value": "${if(dueDate, dueDate, 'N/A')}",
            "wrap": true
          },
          {
            "type": "Input.Number",
            "placeholder": "Placeholder text",
            "id": "completionPercentage",
            "label": "Completion Percentage",
            "max": 100,
            "min": 0,
            "value": "${if(completionPercentage, completionPercentage, 'N/A')}",
            "isVisible": true,
            "wrap": true
          }
        ]
      }
    ],
    "actions": [
      {
        "type": "Action.Execute",
        "verb": "updateTickets",
        "isVisible": true,
        "id": "ticketUpdate",
        "title": "Update Ticket",
        "data": {
          "ticketId": "${if(ticketId, ticketId, 'N/A')}"
        }
      }
    ]
  }
},
{
  "name": "updateTickets",
  "description": "Update a ticket field for a given ticketId",
  "capabilities": {
    "response_semantics": {
      "data_path": "$",
      "properties": {
        "title": "$.title",
        "subtitle": "$.description"
      },
      "static_template": {
        "type": "AdaptiveCard",
        "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
        "version": "1.5",
        "body": [
          {
            "type": "Container",
            "$data": "${$root}",
            "items": [
              {
                "type": "TextBlock",
                "text": "ticketId: ${if(updatedTicket.ticketId, updatedTicket.ticketId, 'N/A')}",
                "wrap": true
              },
              {
                "type": "Input.Text",
                "value": "${if(updatedTicket.title, updatedTicket.title, 'N/A')}",
                "id": "title",
                "wrap": true,
                "maxLength": 500
              },
              {
                "type": "Input.Text",
                "value": "${if(updatedTicket.description, updatedTicket.description, 'N/A')}",
                "id": "description",
                "wrap": true,
                "maxLength": 500,
                "isMultiline": true
              }
            ]
          }
        ],
        "actions": [
          {
            "type": "Action.Execute",
            "verb": "updateTickets",
            "isVisible": true,
            "id": "ticketUpdate",
            "title": "Update Ticket",
            "data": {
              "ticketId": "${if(updatedTicket.ticketId, updatedTicket.ticketId, 'N/A')}"
            }
          }
        ]
      }
    }
  }
}
```

## Request and response examples

The following request and response examples show what happens when a user takes an action that causes the `Action.Execute` function to run in the client.

### Request

```json
{ 
  "clientInfo": { 
    "clientPlatform": "chat-web", 
    "clientAppName": "Office", 
    "clientEntrypoint": "chat-officeweb", 
    "clientSessionId": "d8bc8369-277e-c48c-2faf-3c894945abe0" 
  }, 
  "message": { 
    "text": "Card action execute", 
    "messageType": "ExecuteActionRequest", 
    "actionId": "jiraclouddev_searchForIssuesUsingJql(jql=\"assignee=currentUser() AND type=Task AND created >= -30d\", startAt=0, maxResults=10)", 
    "author": "user", 
    "executeActionData": { 
      "gptId": "gpt_ud", 
      "gptActionId": "plugin_1", 
      "titleId": "U_e80ce190-4f5a-ee50-ce95-dcbabd8cd2ec", 
      "verb": "updateTickets", 
      "data": { 
        "ticketId": 1, 
        "title": "Bug Fix", 
        "description": "Fix login issues", 
        "severity": "3", 
        "dueDate": "2025-06-20", 
        "completionPercentage": "97" 
      } 
    } 
  } 
}
```

### Response

```json
{ 
  "text": "Mohit custom text", 
  "executeActionData": "{\"type\":\"AdaptiveCard\",\"$schema\":\"http://adaptivecards.io/schemas/adaptive-card.json\",\"version\":\"1.5\",\"body\":[{\"type\":\"Container\",\"style\":\"good\",\"items\":[{\"type\":\"TextBlock\",\"text\":\"✅ Ticket updated successfully\",\"color\":\"default\",\"weight\":\"bolder\",\"wrap\":true},{\"type\":\"TextBlock\",\"text\":\"1\",\"wrap\":true},{\"type\":\"TextBlock\",\"text\":\"Bug Fix\",\"wrap\":true},{\"type\":\"TextBlock\",\"text\":\"Fix login issues\",\"wrap\":true},{\"type\":\"TextBlock\",\"text\":\"3\",\"wrap\":true},{\"type\":\"TextBlock\",\"text\":\"2025-06-20\",\"wrap\":true},{\"type\":\"TextBlock\",\"text\":\"97\",\"wrap\":true}]}]}", 
  "messageType": "ExecuteActionResponse", 
  "author": "bot", 
  "createdAt": "2025-04-30T11:07:44.9557335+00:00", 
  "timestamp": "2025-04-30T11:07:44.9557335+00:00", 
  "messageId": "649112bc-7fe2-40bd-990d-928364fb173c", 
  "requestId": "3058aa09-c9b6-3425-b0ef-49ef2ad4b9a5", 
  "offense": "Unknown", 
  "spokenText": "Ticket updated successfully", 
  "turnCount": 1 
} 
```

## Related content

- [Adaptive Card responses](/microsoft-365-copilot/extensibility/api-plugin-adaptive-cards)
- [Add a dialog box to Adaptive Card templates](/microsoft-365-copilot/extensibility/adaptive-card-dialog-box)
- [Declarative agent app package](/microsoft-365-copilot/extensibility/overview-declarative-agent#building-declarative-agents)
