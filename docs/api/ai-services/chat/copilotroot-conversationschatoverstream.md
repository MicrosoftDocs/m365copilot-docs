---
title: Continue streamed conversations.
description: Continue streamed conversations with the Microsoft 365 Copilot Chat API.
author: muwagerikpe
ms.author: muwagerikpe
ms.topic: reference
ms.date: 09/26/2025
ms.localizationpriority: medium
doc_type: conceptualPageType
---

<!-- markdownlint-disable MD024 -->

# Continue streamed conversations with Microsoft 365 Copilot using the Microsoft 365 Copilot Chat API

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

The Microsoft 365 Copilot Chat API allows you to create and continue multi-turn conversations with Microsoft 365 Copilot, while respecting the defined access controls within the tenant. Use the Chat API to continue streamed conversations with Microsoft 365 Copilot.

This documentation covers continuing streamed Copilot conversations using the Chat API. Learn how to create [Copilot conversations](copilotroot-conversations.md) or continue [synchronous conversations](copilotroot-conversationschat.md) with the Chat API.

## Permissions

Choose the permission or permissions marked as least privileged for this API. Use a higher privileged permission or permissions [only if your app requires it](/graph/permissions-overview#best-practices-for-using-microsoft-graph-permissions). For details about delegated and application permissions, see [Permission types](/graph/permissions-overview#permission-types). To learn more about these permissions, see the [permissions reference](/graph/permissions-reference).

| Permission type                        | Least privileged permissions    | Higher privileged permissions |
|:---------------------------------------|:---------------------------------------------|:------------------------------|
| Delegated (work or school account)     | Sites.Read.All, Mail.Read, People.Read.All, OnlineMeetingTranscript.Read.All, Chat.Read, ChannelMessage.Read.All, ExternalItem.Read.All\*               | Not supported.         |
| Delegated (personal Microsoft account) | Not supported.               | Not supported.                |
| Application                            | Not supported.               | Not supported.                |

\* You need all of these Microsoft Graph permissions to successfully call the Microsoft 365 Copilot Chat API.

## HTTP request

To continue streamed conversations with the Chat API, you will make the following HTTP request.

```http
POST https://graph.microsoft.com/beta/copilot/conversations/{conversationId}/chatOverStream
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
| `contextualResources`        | [copilotContextualResources](resources/copilotcontextualresources.md)                                                          | This can be used to provide OneDrive and SharePoint files that should be used as context, and/or toggling web search grounding Optional. |

## Response

If successful, this method returns a stream of server sent events (SSE) with a status of `200 OK` and Content-Type of “text/event-stream”. Each SSE will contain a [copilotConversation](resources/copilotconversation.md).

## Examples

### Example 1: Sending a chat message to the Microsoft 365 Copilot Chat API

The following example shows of sending a prompt to the Chat API using the synchronous endpoint.

#### Request

The following example shows the request.

```http
POST https://graph.microsoft.com/beta/copilot/conversations/d0f6bffa-49d4-43c6-b93b-e7183f92b765/chatOverStream
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

The following example shows the response. Most event streams have been redacted from the example for brevity.

```http
HTTP/1.1 200 OK
Content-Type: event/stream

data: {"@odata.context":"https://prod-s01-000-nam-centralus.substrate.cosmic.office.net/api/beta/copilot/conversations('d0f6bffa-49d4-43c6-b93b-e7183f92b765')/microsoft.graph.copilot.chatOverStream/$metadata#Edm.Stream/$entity","id":"d0f6bffa-49d4-43c6-b93b-e7183f92b765","agentId":null,"createdDateTime":"2025-09-30T22:00:45.1392713Z","displayName":"Intermediate Conversation Update","state":"active","turnCount":0,"messages":[]}
id:1 

data: {"@odata.context":"https://prod-s01-000-nam-centralus.substrate.cosmic.office.net/api/beta/copilot/conversations('d0f6bffa-49d4-43c6-b93b-e7183f92b765')/microsoft.graph.copilot.chatOverStream/$metadata#Edm.Stream/$entity","id":"d0f6bffa-49d4-43c6-b93b-e7183f92b765","agentId":null,"createdDateTime":"2025-09-30T22:00:48.14175Z","displayName":"Intermediate Conversation Update","state":"active","turnCount":1,"messages":[]}
id:2

data: {"@odata.context":"https://prod-s01-000-nam-centralus.substrate.cosmic.office.net/api/beta/copilot/conversations('d0f6bffa-49d4-43c6-b93b-e7183f92b765')/microsoft.graph.copilot.chatOverStream/$metadata#Edm.Stream/$entity","id":"d0f6bffa-49d4-43c6-b93b-e7183f92b765","agentId":null,"createdDateTime":"2025-09-30T22:01:20.9535583Z","displayName":"Intermediate Conversation Update","state":"active","turnCount":0,"messages":[{"@odata.type":"#microsoft.graph.copilotConversationResponseMessage","id":"65781ab5-79ce-4159-950f-edc04c51e909","text":"You asked about your meeting scheduled for **9 AM tomorrow**, and I found **1 meeting** on your calendar.\n\n### \ud83d\uddd3\ufe0f Scheduled Meeting\n- **Title**: <Event>Contoso Engineering Standup</Event>\n- **Time**: Tomorrow from **9:00 AM to 9:30 AM**\n- **Organizer**: <Person>John Doe</Person>[^1^]\n- **Location**: Microsoft Teams Meeting\n- **Invitee Status**: No one has accepted the meeting invite yet[^1^]\n\nLet me know if you'd like help preparing for this meeting or checking who else was invited.","createdDateTime":"2025-09-30T22:00:49.7881529Z","adaptiveCards":[{"type":"AdaptiveCard","version":"1.0","body":[{"type":"TextBlock","text":"You asked about your meeting scheduled for **9 AM tomorrow**, and I found **1 meeting** on your calendar.\n\n### \uD83D\uDDD3️ Scheduled Meeting\n- **Title**: [Contoso Engineering Standup](https://teams.microsoft.com/l/meeting/details?eventId=AAMkADg5ZjdjZGNiLWRiMzItNDA3MC1iNDNlLTdlMGY4ZDc0ZjdlZgBGAAAAAACm2kxZvrUtTa-iv1uzeNCxBwA4nsl0tFf4R7qmHdVqpNbsAAAAAAENAAA4nsl0tFf4R7qmHdVqpNbsAAAVa4BBAAA%3d&EntityRepresentationId=8c968792-ca7a-42d6-8b44-9e5212b2d240)\n- **Time**: Tomorrow from **9:00 AM to 9:30 AM**\n- **Organizer**: [John Doe](https://www.office.com/search?q=John+Doe&EntityRepresentationId=55cdb988-cbf5-44db-b75d-a431ca839c70) [1](https://teams.microsoft.com/l/meeting/details?eventId=AAMkADg5ZjdjZGNiLWRiMzItNDA3MC1iNDNlLTdlMGY4ZDc0ZjdlZgBGAAAAAACm2kxZvrUtTa-iv1uzeNCxBwA4nsl0tFf4R7qmHdVqpNbsAAAAAAENAAA4nsl0tFf4R7qmHdVqpNbsAAAVa4BBAAA%3d)\n- **Location**: Microsoft Teams Meeting\n- **Invitee Status**: No one has accepted the meeting invite yet [1](https://teams.microsoft.com/l/meeting/details?eventId=AAMkADg5ZjdjZGNiLWRiMzItNDA3MC1iNDNlLTdlMGY4ZDc0ZjdlZgBGAAAAAACm2kxZvrUtTa-iv1uzeNCxBwA4nsl0tFf4R7qmHdVqpNbsAAAAAAENAAA4nsl0tFf4R7qmHdVqpNbsAAAVa4BBAAA%3d)\n\nLet me know if you'd like help preparing for this meeting or checking who else was invited.","wrap":true}]}],"attributions":[{"attributionType":"annotation","providerDisplayName":"","attributionSource":"model","seeMoreWebUrl":"https://teams.microsoft.com/l/meeting/details?eventId=AAMkADg5ZjdjZGNiLWRiMzItNDA3MC1iNDNlLTdlMGY4ZDc0ZjdlZgBGAAAAAACm2kxZvrUtTa-iv1uzeNCxBwA4nsl0tFf4R7qmHdVqpNbsAAAAAAENAAA4nsl0tFf4R7qmHdVqpNbsAAAVa4BBAAA%3d&EntityRepresentationId=8c968792-ca7a-42d6-8b44-9e5212b2d240","imageWebUrl":"","imageFavIcon":"","imageWidth":0,"imageHeight":0},{"attributionType":"annotation","providerDisplayName":"","attributionSource":"model","seeMoreWebUrl":"https://www.office.com/search?q=John+Doe&EntityRepresentationId=55cdb988-cbf5-44db-b75d-a431ca839c70","imageWebUrl":"","imageFavIcon":"","imageWidth":0,"imageHeight":0},{"attributionType":"citation","providerDisplayName":"Contoso Engineering Standup","attributionSource":"model","seeMoreWebUrl":"https://teams.microsoft.com/l/meeting/details?eventId=AAMkADg5ZjdjZGNiLWRiMzItNDA3MC1iNDNlLTdlMGY4ZDc0ZjdlZgBGAAAAAACm2kxZvrUtTa-iv1uzeNCxBwA4nsl0tFf4R7qmHdVqpNbsAAAAAAENAAA4nsl0tFf4R7qmHdVqpNbsAAAVa4BBAAA%3d","imageWebUrl":"","imageFavIcon":"","imageWidth":0,"imageHeight":0}],"sensitivityLabel":{"sensitivityLabelId":null,"displayName":null,"tooltip":null,"priority":null,"color":null,"isEncrypted":null}}]}
id:137 

data: {"@odata.context":"https://prod-s01-000-nam-centralus.substrate.cosmic.office.net/api/beta/copilot/conversations('d0f6bffa-49d4-43c6-b93b-e7183f92b765')/microsoft.graph.copilot.chatOverStream/$metadata#Edm.Stream/$entity","id":"d0f6bffa-49d4-43c6-b93b-e7183f92b765","agentId":null,"createdDateTime":"2025-09-30T22:01:21.2572577Z","displayName":"Intermediate Conversation Update","state":"active","turnCount":0,"messages":[]}
id:138 

data: {"@odata.context":"https://prod-s01-000-nam-centralus.substrate.cosmic.office.net/api/beta/copilot/conversations('d0f6bffa-49d4-43c6-b93b-e7183f92b765')/microsoft.graph.copilot.chatOverStream/$metadata#Edm.Stream/$entity","id":"d0f6bffa-49d4-43c6-b93b-e7183f92b765","agentId":null,"createdDateTime":"2025-09-30T22:01:21.2583928Z","displayName":"Intermediate Conversation Update","state":"active","turnCount":0,"messages":[]}
id:139 

data: {"@odata.context":"https://prod-s01-000-nam-centralus.substrate.cosmic.office.net/api/beta/copilot/conversations('d0f6bffa-49d4-43c6-b93b-e7183f92b765')/microsoft.graph.copilot.chatOverStream/$metadata#Edm.Stream/$entity","id":"d0f6bffa-49d4-43c6-b93b-e7183f92b765","agentId":null,"createdDateTime":"2025-09-30T22:01:22.9017213Z","displayName":"Intermediate Conversation Update","state":"active","turnCount":0,"messages":[]}
id:140 

data: {"@odata.context":"https://prod-s01-000-nam-centralus.substrate.cosmic.office.net/api/beta/copilot/conversations('d0f6bffa-49d4-43c6-b93b-e7183f92b765')/microsoft.graph.copilot.chatOverStream/$metadata#Edm.Stream/$entity","id":"d0f6bffa-49d4-43c6-b93b-e7183f92b765","agentId":null,"createdDateTime":"2025-09-30T22:01:22.9022796Z","displayName":"Intermediate Conversation Update","state":"active","turnCount":0,"messages":[]}
id:141 

data: {"@odata.context":"https://prod-s01-000-nam-centralus.substrate.cosmic.office.net/api/beta/copilot/conversations('d0f6bffa-49d4-43c6-b93b-e7183f92b765')/microsoft.graph.copilot.chatOverStream/$metadata#Edm.Stream/$entity","id":"d0f6bffa-49d4-43c6-b93b-e7183f92b765","agentId":null,"createdDateTime":"2025-09-30T22:00:44.7918493Z","displayName":"What meeting do I have at 9 AM tomorrow morning?","state":"active","turnCount":1,"messages":[{"@odata.type":"#microsoft.graph.copilotConversationResponseMessage","id":"8c74f6a7-ae3c-4ac6-845e-01e5008c6d87","text":"What meeting do I have at 9 AM tomorrow morning?","createdDateTime":"2025-09-30T22:00:44.7918493Z","adaptiveCards":[],"attributions":[],"sensitivityLabel":{"sensitivityLabelId":null,"displayName":null,"tooltip":null,"priority":null,"color":null,"isEncrypted":null}},{"@odata.type":"#microsoft.graph.copilotConversationResponseMessage","id":"65781ab5-79ce-4159-950f-edc04c51e909","text":"You asked about your meeting scheduled for **9 AM tomorrow**, and I found **1 meeting** on your calendar.\n\n### \ud83d\uddd3\ufe0f Scheduled Meeting\n- **Title**: <Event>Contoso Engineering Standup</Event>\n- **Time**: Tomorrow from **9:00 AM to 9:30 AM**\n- **Organizer**: <Person>John Doe</Person>[^1^]\n- **Location**: Microsoft Teams Meeting\n- **Invitee Status**: No one has accepted the meeting invite yet[^1^]\n\nLet me know if you'd like help preparing for this meeting or checking who else was invited.","createdDateTime":"2025-09-30T22:00:49.7881529Z","adaptiveCards":[{
  "type": "AdaptiveCard",
  "version": "1.0",
  "body": [
    {
      "type": "TextBlock",
      "text": "You asked about your meeting scheduled for **9 AM tomorrow**, and I found **1 meeting** on your calendar.\n\n### 🗓️ Scheduled Meeting\n- **Title**: [Contoso Engineering Standup](https://teams.microsoft.com/l/meeting/details?eventId=AAMkADg5ZjdjZGNiLWRiMzItNDA3MC1iNDNlLTdlMGY4ZDc0ZjdlZgBGAAAAAACm2kxZvrUtTa-iv1uzeNCxBwA4nsl0tFf4R7qmHdVqpNbsAAAAAAENAAA4nsl0tFf4R7qmHdVqpNbsAAAVa4BBAAA%3d&EntityRepresentationId=8c968792-ca7a-42d6-8b44-9e5212b2d240)\n- **Time**: Tomorrow from **9:00 AM to 9:30 AM**\n- **Organizer**: [John Doe](https://www.office.com/search?q=John+Doe&EntityRepresentationId=55cdb988-cbf5-44db-b75d-a431ca839c70) [1](https://teams.microsoft.com/l/meeting/details?eventId=AAMkADg5ZjdjZGNiLWRiMzItNDA3MC1iNDNlLTdlMGY4ZDc0ZjdlZgBGAAAAAACm2kxZvrUtTa-iv1uzeNCxBwA4nsl0tFf4R7qmHdVqpNbsAAAAAAENAAA4nsl0tFf4R7qmHdVqpNbsAAAVa4BBAAA%3d)\n- **Location**: Microsoft Teams Meeting\n- **Invitee Status**: No one has accepted the meeting invite yet [1](https://teams.microsoft.com/l/meeting/details?eventId=AAMkADg5ZjdjZGNiLWRiMzItNDA3MC1iNDNlLTdlMGY4ZDc0ZjdlZgBGAAAAAACm2kxZvrUtTa-iv1uzeNCxBwA4nsl0tFf4R7qmHdVqpNbsAAAAAAENAAA4nsl0tFf4R7qmHdVqpNbsAAAVa4BBAAA%3d)\n\nLet me know if you'd like help preparing for this meeting or checking who else was invited.",
      "wrap": true
    }
  ]
}],"attributions":[{"attributionType":"annotation","providerDisplayName":"","attributionSource":"model","seeMoreWebUrl":"https://teams.microsoft.com/l/meeting/details?eventId=AAMkADg5ZjdjZGNiLWRiMzItNDA3MC1iNDNlLTdlMGY4ZDc0ZjdlZgBGAAAAAACm2kxZvrUtTa-iv1uzeNCxBwA4nsl0tFf4R7qmHdVqpNbsAAAAAAENAAA4nsl0tFf4R7qmHdVqpNbsAAAVa4BBAAA%3d&EntityRepresentationId=8c968792-ca7a-42d6-8b44-9e5212b2d240","imageWebUrl":"","imageFavIcon":"","imageWidth":0,"imageHeight":0},{"attributionType":"annotation","providerDisplayName":"","attributionSource":"model","seeMoreWebUrl":"https://www.office.com/search?q=John+Doe&EntityRepresentationId=55cdb988-cbf5-44db-b75d-a431ca839c70","imageWebUrl":"","imageFavIcon":"","imageWidth":0,"imageHeight":0},{"attributionType":"citation","providerDisplayName":"Contoso Engineering Standup","attributionSource":"model","seeMoreWebUrl":"https://teams.microsoft.com/l/meeting/details?eventId=AAMkADg5ZjdjZGNiLWRiMzItNDA3MC1iNDNlLTdlMGY4ZDc0ZjdlZgBGAAAAAACm2kxZvrUtTa-iv1uzeNCxBwA4nsl0tFf4R7qmHdVqpNbsAAAAAAENAAA4nsl0tFf4R7qmHdVqpNbsAAAVa4BBAAA%3d","imageWebUrl":"","imageFavIcon":"","imageWidth":0,"imageHeight":0}],"sensitivityLabel":{"sensitivityLabelId":null,"displayName":null,"tooltip":null,"priority":null,"color":null,"isEncrypted":null}}]}
id:142 
```

### Example 2: Using a OneDrive or SharePoint file as context in a chat message to the Microsoft 365 Copilot Chat API

The following example shows how to use a OneDrive or SharePoint file as context when sending a message to the Chat API. Multiple OneDrive and SharePoint files can be used as context when sending a chat message.

#### Request

The following example shows the request.

```http
POST https://graph.microsoft.com/beta/copilot/conversations/0d110e7e-2b7e-4270-a899-fd2af6fde333/chat
Content-Type: application/json

{
  "message": {
    "text": "Summarize this document for me."
  },
  "locationHint": {
    "timeZone": "America/New_York"
  },
  "contextualResources": {
    "files": [
      {
        "uri": "https://contoso.sharepoint.com/sites/Engineering/Shared%20Documents/Specs/Business-Model.docx"
      }
    ]
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
  "createdDateTime": "2025-09-30T16:15:13.0889735Z",
  "displayName": "What meeting do I have at 9 AM tomorrow morning?",
  "state": "active",
  "turnCount": 2,
  "messages": [
    {
      "@odata.type": "#microsoft.graph.copilotConversationResponseMessage",
      "id": "7b9f74b6-673a-7077-d29e-5ef8a6c6968c",
      "text": "Summarize this document for me.",
      "createdDateTime": "2025-09-30T16:15:13.0889735Z",
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
      "id": "85e25e6e-4218-40fb-91a3-897d555d18d0",
      "text": "You asked for a summary of the document \"<File>Business-Model.docx</File>\". Here’s a concise overview based on its content:\n\n---\n\n## **Summary: What Is a Business Model?**\n\n### **Definition & Importance**\n- A business model is a holistic framework for creating, delivering, and capturing value. It’s not just about monetization, but about how an organization systematically unlocks long-term value for itself and its customers.\n- Business models are essential for startups and established companies alike, as they guide value creation, customer engagement, and sustainable growth.\n\n### **Key Concepts**\n- **Business Model vs. Business Plan:** A business model is about experimentation and testing assumptions in the real world, while a business plan is a static document with projections that are often untested.\n- **Business Model vs. Revenue Strategy:** Monetization is just one part of a business model. A true business model also covers operations, customer acquisition, retention, supply chain, and more.\n\n### **Design & Innovation**\n- Business model design is about building a sustainable value chain, starting with a clear value proposition and focusing on key stakeholders.\n- Innovation in business models can be more disruptive than technological innovation. Companies like Company1, Company2, and Company3 succeeded by innovating their business models, not just their technology.\n- Competitive advantages (or \"moats\") are often built around innovative business models, especially in the digital era.\n\n### **Experimentation**\n- Business modeling is an iterative process, much like scientific experimentation. Entrepreneurs must test, adapt, and refine their models to find what works in the marketplace.\n\n### **Frameworks**\n- **Business Model Canvas:** A popular tool that breaks down a business model into key partners, activities, value propositions, customer relationships, segments, resources, channels, cost structure, and revenue streams.\n- **Lean Startup Canvas:** Focuses on experimentation, customer feedback, and iterative design, especially for startups.\n\n### **Components (FourWeekMBA Perspective)**\n- **People Dimension:** Value proposition, brand positioning, and ambitious goal setting.\n- **Financial Dimension:** Customer segments, distribution channels, and profit formula.\n\n### **Types of Business Models**\nThe document details 30+ business model types, including:\n- Asymmetric (hidden revenue, e.g., Company1, Company4)\n- One-for-one (e.g., Company5)\n- Razor and blade (e.g., Company6)\n- Peer-to-peer (e.g., Company7)\n- Multi-sided platforms (e.g., Company8)\n- Freemium, subscription, affiliate, consulting, agency, vertically integrated, e-commerce marketplace, discount, attention merchant, privacy-focused, franchising, on-demand, user-generated content, educational niche, chain/franchise mix, instant news, blockchain-based, multi-brand, family-owned, humanist enterprise, direct-to-consumer, enterprise/complex sales, distribution-based, and more.\n\n### **Key Takeaways**\n- There is no single best business model; success depends on context, timing, and market conditions.\n- Business models must evolve with changing technologies and market needs.\n- Experimentation, adaptability, and a clear value proposition are critical for long-term success.\n\n---\n\nIf you’d like a deeper dive into any specific section or business model type from the document, just let me know!",
      "createdDateTime": "2025-09-30T16:15:25.509337Z",
      "adaptiveCards": [
        {}
      ],
      "attributions": [
        {
          "attributionType": "annotation",
          "providerDisplayName": "",
          "attributionSource": "model",
          "seeMoreWebUrl": "https://contoso.sharepoint.com/sites/Engineering/Shared%20Documents/Specs/Business-Model.docx",
          "imageWebUrl": "",
          "imageFavIcon": "",
          "imageWidth": 0,
          "imageHeight": 0
        },
        {
          "attributionType": "citation",
          "providerDisplayName": "529425287-What-Is-a-Business-Model",
          "attributionSource": "grounding",
          "seeMoreWebUrl": "https://contoso.sharepoint.com/sites/Engineering/Shared%20Documents/Specs/Business-Model.docx",
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

### Example 3: Toggling off web search grounding when sending a chat message to the Microsoft 365 Copilot Chat API

The following example shows how to toggle off web search grounding when sending a chat message to the Chat API. If web search grounding is toggling off, only enterprise search grounding is used to answer a chat message. Toggling web search grounding is a single-turn action.

#### Request

The following example shows the request.

```http
POST https://graph.microsoft.com/beta/copilot/conversations/0d110e7e-2b7e-4270-a899-fd2af6fde333/chat
Content-Type: application/json

{
  "message": {
    "text": "What is the highest grossing movie at the global box office this year?"
  },
  "locationHint": {
    "timeZone": "America/New_York"
  },
  "contextualResources": {
    "webContext": {
      "isWebEnabled": false
    }
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
  "createdDateTime": "2025-09-30T20:54:38.6856711Z",
  "displayName": "What meeting do I have at 9 AM tomorrow morning?",
  "state": "active",
  "turnCount": 3,
  "messages": [
    {
      "@odata.type": "#microsoft.graph.copilotConversationResponseMessage",
      "id": "40ec0e9f-d46a-0d57-a3c4-7342d86929d9",
      "text": "What is the highest grossing movie at the global box office this year?",
      "createdDateTime": "2025-09-30T20:54:38.6856711Z",
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
      "id": "9c0a96b9-ccf1-4a50-82ca-1ef7c2776c54",
      "text": "You asked: **What is the highest grossing movie at the global box office this year?**\n\nCurrently, I do not have access to real-time web search or external box office databases, and there are no internal enterprise documents or files provided that contain this information. As a result, I cannot provide the latest global box office data for this year.\n\n**How you can find this information:**\n- The most reliable sources for up-to-date box office rankings are websites like Source1, Source2, or Source3. These sites regularly update global box office statistics and highlight the top-grossing films of the year.\n\nIf you have a specific internal report or file related to box office performance, please let me know where to find it, and I’ll be happy to summarize the relevant details for you! Would you like tips on how to track box office trends or insights into recent movie industry performance?",
      "createdDateTime": "2025-09-30T20:54:45.2785423Z",
      "adaptiveCards": [
        {}
      ],
      "attributions": [],
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

### Example 4: Sending additional context with a chat message to the Microsoft 365 Copilot Chat API

The following example shows how to send additional context with a chat message to the Chat API. Additional context is meant to provide additional grounding for the Chat API to reason over, like excerpts from documents, articles, or websites.

#### Request

The following example shows the request.

```http
POST https://graph.microsoft.com/beta/copilot/conversations/0d110e7e-2b7e-4270-a899-fd2af6fde333/chat
Content-Type: application/json

{
  "message": {
    "text": "What is the birthday of my best friend, John Doe?"
  },
  "additionalContext": [
    {
      "text": "John Doe's birthday is on January 1st."
    }
  ],
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
  "createdDateTime": "2025-09-30T21:00:22.9880382Z",
  "displayName": "What meeting do I have at 9 AM tomorrow morning?",
  "state": "active",
  "turnCount": 4,
  "messages": [
    {
      "@odata.type": "#microsoft.graph.copilotConversationResponseMessage",
      "id": "70894d7b-94b2-d65a-f4ed-7f7b10f63737",
      "text": "What is the birthday of my best friend, John Doe?",
      "createdDateTime": "2025-09-30T21:00:22.9880382Z",
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
      "id": "65b34190-40d2-4933-9539-8324684aca5a",
      "text": "You asked for the birthday of your best friend, <Person>John Doe</Person>.\n\nBased on the information available, <Person>John Doe</Person>'s birthday is on **January 1st**. If you need this added to your calendar or want a reminder set up, just let me know!",
      "createdDateTime": "2025-09-30T21:00:26.9371633Z",
      "adaptiveCards": [
        {}
      ],
      "attributions": [],
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

## Related content

- [Overview of the Microsoft 365 Copilot Chat API](overview.md)
- [Create Copilot conversations using the Microsoft 365 Copilot Chat API](copilotroot-conversations.md)
- [Continue synchronous conversations with Microsoft 365 Copilot using the Microsoft 365 Copilot Chat API](copilotroot-conversationschat.md)
