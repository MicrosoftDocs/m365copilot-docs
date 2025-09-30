---
title: Continue synchronous conversations.
description: Continue synchronous conversations with the Microsoft 365 Copilot Chat API.
author: muwagerikpe
ms.author: muwagerikpe
ms.topic: reference
ms.date: 09/26/2025
ms.localizationpriority: medium
doc_type: conceptualPageType
---

<!-- markdownlint-disable MD024 -->

# Continue synchronous conversations with Microsoft 365 Copilot using the Microsoft 365 Copilot Chat API

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

The Microsoft 365 Copilot Chat API allows you to create and continue multi-turn conversations with Microsoft 365 Copilot, while respecting the defined access controls within the tenant. Use the Chat API to continue synchronous conversations with Microsoft 365 Copilot.

This documentation covers continuing synchronous Copilot conversations using the Chat API. Learn how to create [Copilot conversations](copilotroot-conversations.md) or continue [streamed conversations](copilotroot-conversationschatoverstream.md) with the Chat API.

## Permissions

Choose the permission or permissions marked as least privileged for this API. Use a higher privileged permission or permissions [only if your app requires it](/graph/permissions-overview#best-practices-for-using-microsoft-graph-permissions). For details about delegated and application permissions, see [Permission types](/graph/permissions-overview#permission-types). To learn more about these permissions, see the [permissions reference](/graph/permissions-reference).

| Permission type                        | Least privileged permissions    | Higher privileged permissions |
|:---------------------------------------|:---------------------------------------------|:------------------------------|
| Delegated (work or school account)     | Sites.Read.All, Mail.Read, People.Read.All, OnlineMeetingTranscript.Read.All, Chat.Read, ChannelMessage.Read.All, ExternalItem.Read.All\*               | Not supported.         |
| Delegated (personal Microsoft account) | Not supported.               | Not supported.                |
| Application                            | Not supported.               | Not supported.                |

\* You need all of these Microsoft Graph permissions to successfully call the Microsoft 365 Copilot Chat API.

## HTTP request

To continue synchronous conversations with the Chat API, you will make the following HTTP request.

```http
POST https://graph.microsoft.com/beta/copilot/conversations/{conversationId}/chat
```

## Request headers

| Name            | Description                                                                                                |
|:----------------|:-----------------------------------------------------------------------------------------------------------|
| `Authorization` |`Bearer {token}.` Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |
| `Content-Type`  | `application/json.` Required.                                                                              |

## Request body

In the request body, supply a JSON representation of the parameters.

The following table lists the optional and required parameters that you can use when you call this action.

| Parameter                 | Type                                                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|:--------------------------|:----------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `message`             | [copilotConversationRequestMessageParameter](resources/copilotconversationrequestmessageparameter.md)                                                          | The chat message being sent into the Copilot conversation. Required.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `additionalContext`              | [copilotContextMessage](resources/copilotcontextmessage.md) collection                                                          | Extra context for the Copilot conversation. This should be used for additional grounding. Optional.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `locationHint` | [copilotConversationLocation](resources/copilotconversationlocation.md) | User location information. Required.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `contextualResources`        | [copilotContextualResources](copilotcontextualresources.md)                                                          | This can be used to provide OneDrive and SharePoint files that should be used as context, and/or toggling web search grounding Optional. |

## Response

If successful, this action returns a `200 OK` response code and a [copilotConversation](copilotconversation.md) in the response body.

## Examples

### Example 1: Sending a chat message to the Microsoft 365 Copilot Chat API

The following example shows of sending a prompt to the Chat API using the synchronous endpoint.

#### Request

The following example shows the request.

```http
POST https://graph.microsoft.com/beta/copilot/conversations/0d110e7e-2b7e-4270-a899-fd2af6fde333/chat
Content-Type: application/json

{
  "message": {
    "text": "What meeting do I have at 9 AM tomorrow morning?"
  },
  "locationHint": {
    "timeZone": "America/New_York"
  }
}
```

#### Response

The following example shows the response.

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#microsoft.graph.copilotConversation",
  "id": "0d110e7e-2b7e-4270-a899-fd2af6fde333",
  "createdDateTime": "2025-09-30T15:55:53.4711746Z",
  "displayName": "What meeting do I have at 9 AM tomorrow morning?",
  "state": "active",
  "turnCount": 1,
  "messages": [
    {
      "@odata.type": "#microsoft.graph.copilotConversationResponseMessage",
      "id": "cc211f56-1a5e-0af0-fec2-c354ce468b95",
      "text": "What meeting do I have at 9 AM tomorrow morning?",
      "createdDateTime": "2025-09-30T15:55:53.4711746Z",
      "adaptiveCards": [],
      "attributions": [],
      "sensitivityLabel": {
        "sensitivityLabelId": null,
        "displayName": null,
        "tooltip": null,
        "priority": null,
        "color": null,
        "isEncrypted": null
      }
    },
    {
      "@odata.type": "#microsoft.graph.copilotConversationResponseMessage",
      "id": "3fe6b260-c682-4f8e-a201-022ccb300742",
      "text": "You asked about your meeting scheduled for **9 AM tomorrow**, and I found **1 meeting** on your calendar.\n\n### 📅 Tomorrow at 9 AM\n- **Meeting**: <Event>Contoso Engineering Standup</Event>\n- **Organizer**: <Person>John Doe</Person>[^1^]\n- **Time**: 9:00 AM – 9:30 AM\n- **Location**: Microsoft Teams Meeting\n- **Status**: No one has accepted the invite yet[^1^]\n\nLet me know if you'd like help preparing for this meeting or checking who else was invited.",
      "createdDateTime": "2025-09-30T15:55:58.9856658Z",
      "adaptiveCards": [
        {}
      ],
      "attributions": [
        {
          "attributionType": "annotation",
          "providerDisplayName": "",
          "attributionSource": "model",
          "seeMoreWebUrl": "https://teams.microsoft.com/l/meeting/details?eventId=BBMkADg5ZjdjZGNiLWRiMzItNDA3MC1iNDNlLTdlMGY4ZDc0ZjdlZgBGAAAAAACm2kxZvrUtTa-iv1uzeNCxBwA4nsl0tFf4R7qmHdVqpNbsAAAAAAENAAA4nsl0tFf4R7qmHdVqpNbsAAAVa4BBAAA%3d&EntityRepresentationId=988db526-6e9b-46ec-906e-3fba32438e5d",
          "imageWebUrl": "",
          "imageFavIcon": "",
          "imageWidth": 0,
          "imageHeight": 0
        },
        {
          "attributionType": "annotation",
          "providerDisplayName": "",
          "attributionSource": "model",
          "seeMoreWebUrl": "https://www.office.com/search?q=John+Doe&EntityRepresentationId=g38b20af-0d21-47fd-8e45-fd9d55215cb3",
          "imageWebUrl": "",
          "imageFavIcon": "",
          "imageWidth": 0,
          "imageHeight": 0
        },
        {
          "attributionType": "citation",
          "providerDisplayName": "Contoso Engineering Standup",
          "attributionSource": "model",
          "seeMoreWebUrl": "https://teams.microsoft.com/l/meeting/details?eventId=BBMkADg5ZjdjZGNiLWRiMzItNDA3MC1iNDNlLTdlMGY4ZDc0ZjdlZgBGAAAAAACm2kxZvrUtTa-iv1uzeNCxBwA4nsl0tFf4R7qmHdVqpNbsAAAAAAENAAA4nsl0tFf4R7qmHdVqpNbsAAAVa4BBAAA%3d",
          "imageWebUrl": "",
          "imageFavIcon": "",
          "imageWidth": 0,
          "imageHeight": 0
        }
      ],
      "sensitivityLabel": {
        "sensitivityLabelId": null,
        "displayName": null,
        "tooltip": null,
        "priority": null,
        "color": null,
        "isEncrypted": null
      }
    }
  ]
}
```

### Example 2: Using a OneDrive or SharePoint file as context in a chat message to the Microsoft 365 Copilot Chat API

The following example shows how to use a OneDrive or SharePoint file as context when sending a message to the Chat API.

#### Request

The following example shows the request.

```http
POST https://graph.microsoft.com/beta/copilot/conversations/0d110e7e-2b7e-4270-a899-fd2af6fde333/chat
Content-Type: application/json

{
  "queryString": "How to setup corporate VPN?",
  "dataSource": "externalItem",
  "resourceMetadata": [
    "title",
    "author"
  ],
  "maximumNumberOfResults": "10"
}
```

#### Response

The following example shows the response.

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "retrievalHits": [
    {
      "webUrl": "https://contoso.service-now.com/sp?id=kb_article&sys_id=2gge30c",
      "extracts": [
        {
          "text": "To configure the VPN, click the Wi-Fi icon on your corporate device and select the VPN option."
        },
        {
          "text": "You will need to sign in with 2FA to access the corporate VPN."
        }
      ],
      "resourceType": "externalItem",
      "resourceMetadata": {
        "title": "VPN Access",
        "author": "John Doe"
      }
    },
    {
      "webUrl": "https://contoso.service-now.com/sp?id=kb_article&sys_id=b775c03",
      "extracts": [
        {
          "text": "Once you have selected Corporate VPN under the VPN options, log in with your corporate credentials."
        },
        {
          "text": "Please contact your IT admin if you are continuing to struggle with acessing the VPN."
        }
      ],
      "resourceType": "externalItem",
      "resourceMetadata": {
        "title": "Corporate VPN"
      }
    }
  ]
}
```

### Example 3: Toggling off web search grounding when sending a chat message to the Microsoft 365 Copilot Chat API

The following example shows how to [batch requests to the Retrieval API](/graph/json-batching?tabs=http). The Retrieval API supports up to 20 requests per batch. `id` in the request payload must be a String that uniquely identifies each request in the batch.

#### Request

The following example shows the request.

```http
POST https://graph.microsoft.com/beta/$batch
Accept: application/json
Content-Type: application/json

{
  "requests": [
    {
      "id": "1",
      "method": "POST",
      "url": "/copilot/retrieval",
      "body": {
        "queryString": "How to setup corporate VPN?",
        "dataSource": "sharePoint"
      },
      "headers": {
        "Content-Type": "application/json"
      }
    },
    {
      "id": "2",
      "method": "POST",
      "url": "/copilot/retrieval",
      "body": {
        "queryString": "How to setup corporate VPN?",
        "dataSource": "externalItem"
      },
      "headers": {
        "Content-Type": "application/json"
      }
    }
  ]
}
```

#### Response

The following example shows the response.

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "responses": [
    {
      "id": "1",
      "status": 200,
      "headers": {
        "Content-Type": "application/json; charset=utf-8"
      },
      "body": {
        "retrievalHits": [
          {
            "webUrl": "https://contoso.sharepoint.com/sites/HR/VPNAccess.docx",
            "extracts": [
              {
                "text": "To configure the VPN, click the Wi-Fi icon on your corporate device and select the VPN option."
              },
              {
                "text": "You will need to sign in with 2FA to access the corporate VPN."
              }
            ],
            "resourceType": "listItem",
            "resourceMetadata": {},
            "sensitivityLabel": {
              "sensitivityLabelId": "f71f1f74-bf1f-4e6b-b266-c777ea76e2s8",
              "displayName": "Confidential\\Any User (No Protection)",
              "toolTip": "Data is classified as Confidential but is NOT PROTECTED to allow access by approved NDA business partners. If a higher level of protection is needed, please use the Sensitivity button on the tool bar to change the protection level.",
              "priority": 4,
              "color": "#FF8C00",
              "isEncrypted": false
            }
          },
          {
            "webUrl": "https://contoso.sharepoint.com/sites/HR/Corporate_VPN.docx",
            "extracts": [
              {
                "text": "Once you have selected Corporate VPN under the VPN options, log in with your corporate credentials."
              },
              {
                "text": "Please contact your IT admin if you are continuing to struggle with accessing the VPN."
              }
            ],
            "resourceType": "listItem",
            "resourceMetadata": {},
            "sensitivityLabel": {
              "sensitivityLabelId": "f71f1f74-bf1f-4e6b-b266-c777ea76e2s8",
              "displayName": "Confidential\\Any User (No Protection)",
              "toolTip": "Data is classified as Confidential but is NOT PROTECTED to allow access by approved NDA business partners. If a higher level of protection is needed, please use the Sensitivity button on the tool bar to change the protection level.",
              "priority": 4,
              "color": "#FF8C00",
              "isEncrypted": false
            }
          }
        ]
      }
    },
    {
      "id": "2",
      "status": 200,
      "headers": {
        "Content-Type": "application/json; charset=utf-8"
      },
      "body": {
        "retrievalHits": [
          {
            "webUrl": "https://contoso.service-now.com/sp?id=kb_article&sys_id=2gge30c",
            "extracts": [
              {
                "text": "To configure the VPN, click the Wi-Fi icon on your corporate device and select the VPN option."
              },
              {
                "text": "You will need to sign in with 2FA to access the corporate VPN."
              }
            ],
            "resourceType": "externalItem",
            "resourceMetadata": {}
          },
          {
            "webUrl": "https://contoso.service-now.com/sp?id=kb_article&sys_id=b775c03",
            "extracts": [
              {
                "text": "Once you have selected Corporate VPN under the VPN options, log in with your corporate credentials."
              },
              {
                "text": "Please contact your IT admin if you are continuing to struggle with acessing the VPN."
              }
            ],
            "resourceType": "externalItem",
            "resourceMetadata": {}
          }
        ]
      }
    }
  ]
}
```

### Example 4: Sending additional context with a chat message to the Microsoft 365 Copilot Chat API

The following example shows a request to retrieve data from a specific Sharepoint site. The `filterExpression` parameter specifies the path to the site. The request asks for the `title` and `author` metadata to be returned for each item from which a text extract is retrieved. The response should include a maximum of four documents.

#### Request

The following example shows the request.

```http
POST https://graph.microsoft.com/beta/copilot/retrieval
Content-Type: application/json

{
  "queryString": "How to setup corporate VPN?",
  "dataSource": "sharePoint",
  "filterExpression": "path:\"https://contoso.sharepoint.com/sites/HR1/\"",
  "resourceMetadata": [
    "title",
    "author"
  ],
  "maximumNumberOfResults": "4"
}
```

#### Response

The following example shows the response.

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "retrievalHits": [
    {
      "webUrl": "https://contoso.sharepoint.com/sites/HR1/VPNAccess.docx",
      "extracts": [
        {
          "text": "To configure the VPN, click the Wi-Fi icon on your corporate device and select the VPN option."
        },
        {
          "text": "You will need to sign in with 2FA to access the corporate VPN."
        }
      ],
      "resourceType": "listItem",
      "resourceMetadata": {
        "title": "VPN Access",
        "author": "John Doe"
      },
      "sensitivityLabel": {
        "sensitivityLabelId": "f71f1f74-bf1f-4e6b-b266-c777ea76e2s8",
        "displayName": "Confidential\\Any User (No Protection)",
        "toolTip": "Data is classified as Confidential but is NOT PROTECTED to allow access by approved NDA business partners. If a higher level of protection is needed, please use the Sensitivity button on the tool bar to change the protection level.",
        "priority": 4,
        "color": "#FF8C00",
        "isEncrypted": false
      }
    },
    {
      "webUrl": "https://contoso.sharepoint.com/sites/HR1/VPNInstructions.docx",
      "extracts": [
        {
          "text": "Have your VPN username and password ready prior to starting the configuration."
        },
        {
          "text": "There are multiple VPN options available. Make sure to select the option that grants you access to your desired resources."
        }
      ],
      "resourceType": "listItem",
      "resourceMetadata": {
        "title": "VPN Instructions",
        "author": "Elisa Mueller"
      },
      "sensitivityLabel": {
        "sensitivityLabelId": "f0ddcc93-d3c0-4993-b5cc-76b0a283e252",
        "displayName": "Confidential\\Any User (No Protection)",
        "toolTip": "Data is classified as Confidential but is NOT PROTECTED to allow access by approved NDA business partners. If a higher level of protection is needed, please use the Sensitivity button on the tool bar to change the protection level.",
        "priority": 4,
        "color": "#FF8C00",
        "isEncrypted": false
      }
    }
  ]
}
```

## Related content

- [Overview of the Microsoft 365 Copilot Chat API](overview.md)
- [Create Copilot conversations using the Microsoft 365 Copilot Chat API](copilotroot-conversations.md)
- [Continue streamed conversations with Microsoft 365 Copilot using the Microsoft 365 Copilot Chat API](copilotroot-conversationschatoverstream.md)
