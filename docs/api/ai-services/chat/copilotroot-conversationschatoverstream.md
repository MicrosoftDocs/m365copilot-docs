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

The Microsoft 365 Copilot Chat API allows you to create and continue multi-turn conversations with Microsoft 365 Copilot, while respecting the defined access controls within the organization. Use the Chat API to continue streamed conversations with Microsoft 365 Copilot.

This documentation covers continuing streamed Copilot conversations using the Chat API. Learn how to create [Copilot conversations](copilotroot-conversations.md) or continue [synchronous conversations](copilotroot-conversationschat.md) with the Chat API.

## Permissions

Choose the permission or permissions marked as least privileged for this API. Use a higher privileged permission or permissions [only if your app requires it](/graph/permissions-overview#best-practices-for-using-microsoft-graph-permissions). For details about delegated and application permissions, see [Permission types](/graph/permissions-overview#permission-types). To learn more about these permissions, see the [permissions reference](/graph/permissions-reference).

| Permission type                        | Least privileged permissions    | Higher privileged permissions |
|:---------------------------------------|:--------------------------------|:------------------------------|
| Delegated (work or school account)     | Sites.Read.All, Mail.Read, People.Read.All, OnlineMeetingTranscript.Read.All, Chat.Read, ChannelMessage.Read.All, ExternalItem.Read.All\* | Not supported. |
| Delegated (personal Microsoft account) | Not supported.                  | Not supported.                |
| Application                            | Not supported.                  | Not supported.                |

\* You need all of these Microsoft Graph permissions to successfully call the Microsoft 365 Copilot Chat API.

## HTTP request

```http
POST https://graph.microsoft.com/beta/copilot/conversations/{conversationId}/chatOverStream
```

## Request headers

| Name            | Description                                                                                                 |
|:----------------|:------------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}.` Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |
| `Content-Type`  | `application/json.` Required.                                                                               |

## Request body

In the request body, supply a JSON representation of the parameters.

The following table lists the optional and required parameters that you can use when you call this action.

| Parameter             | Type                                                                                                  | Description |
|:----------------------|:------------------------------------------------------------------------------------------------------|:------------|
| `message`             | [copilotConversationRequestMessageParameter](resources/copilotconversationrequestmessageparameter.md) | The chat message being sent into the Copilot conversation. Required. |
| `additionalContext`   | [copilotContextMessage](resources/copilotcontextmessage.md) collection                                | Extra context for the Copilot conversation. This parameter provides extra grounding data. Optional. |
| `locationHint`        | [copilotConversationLocation](resources/copilotconversationlocation.md)                               | User location information. Required. |
| `contextualResources` | [copilotContextualResources](resources/copilotcontextualresources.md)                                 | Provides OneDrive and SharePoint files that should be used as context, and/or toggles web search grounding. Optional. |

## Response

If successful, this method returns a stream of server sent events (SSE) with a status of `200 OK` and Content-Type of `text/event-stream`. Each SSE contains a [copilotConversation](resources/copilotconversation.md).

## Examples

### Example 1: Sending a chat message to the Microsoft 365 Copilot Chat API

The following example shows how to send a prompt to the Chat API using the streamed endpoint.

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

The following example shows the response. Most event streams are redacted from the example for brevity.

```http
HTTP/1.1 200 OK
Content-Type: text/event-stream

data: {
  "id": "d0f6bffa-49d4-43c6-b93b-e7183f92b765",
  "agentId": null,
  "createdDateTime": "2025-09-30T22:01:20.9535583Z",
  "displayName": "Intermediate Conversation Update",
  "state": "active",
  "turnCount": 0,
  "messages": [
    {
      "@odata.type": "#microsoft.graph.copilotConversationResponseMessage",
      "id": "65781ab5-79ce-4159-950f-edc04c51e909",
      "text": "You asked about your meeting scheduled for **9 AM tomorrow**, and I found **1 meeting** on your calendar.\n\n### 🗓️ Scheduled Meeting\n- **Title**: <Event>Contoso Engineering Standup</Event>\n- **Time**: Tomorrow from **9:00 AM to 9:30 AM**\n- **Organizer**: <Person>John Doe</Person>[^1^]\n- **Location**: Microsoft Teams Meeting\n- **Invitee Status**: No one has accepted the meeting invite yet[^1^]\n\nLet me know if you'd like help preparing for this meeting or checking who else was invited.",
      "createdDateTime": "2025-09-30T22:00:49.7881529Z",
      "adaptiveCards": [
        {
          "type": "AdaptiveCard",
          "version": "1.0",
          "body": [
            {
              "type": "TextBlock",
              "text": "You asked about your meeting scheduled for **9 AM tomorrow**, and I found **1 meeting** on your calendar.\n\n### 🗓️ Scheduled Meeting\n- **Title**: [Contoso Engineering Standup](https://teams.microsoft.com/l/meeting/details?eventId=AAMkADg5ZjdjZGNiLWRiMzItNDA3MC1iNDNlLTdlMGY4ZDc0ZjdlZgBGAAAAAACm2kxZvrUtTa-iv1uzeNCxBwA4nsl0tFf4R7qmHdVqpNbsAAAAAAENAAA4nsl0tFf4R7qmHdVqpNbsAAAVa4BBAAA%3d&EntityRepresentationId=8c968792-ca7a-42d6-8b44-9e5212b2d240)\n- **Time**: Tomorrow from **9:00 AM to 9:30 AM**\n- **Organizer**: [John Doe](https://www.office.com/search?q=John+Doe&EntityRepresentationId=55cdb988-cbf5-44db-b75d-a431ca839c70) [1](https://teams.microsoft.com/l/meeting/details?eventId=AAMkADg5ZjdjZGNiLWRiMzItNDA3MC1iNDNlLTdlMGY4ZDc0ZjdlZgBGAAAAAACm2kxZvrUtTa-iv1uzeNCxBwA4nsl0tFf4R7qmHdVqpNbsAAAAAAENAAA4nsl0tFf4R7qmHdVqpNbsAAAVa4BBAAA%3d)\n- **Location**: Microsoft Teams Meeting\n- **Invitee Status**: No one has accepted the meeting invite yet [1](https://teams.microsoft.com/l/meeting/details?eventId=AAMkADg5ZjdjZGNiLWRiMzItNDA3MC1iNDNlLTdlMGY4ZDc0ZjdlZgBGAAAAAACm2kxZvrUtTa-iv1uzeNCxBwA4nsl0tFf4R7qmHdVqpNbsAAAAAAENAAA4nsl0tFf4R7qmHdVqpNbsAAAVa4BBAAA%3d)\n\nLet me know if you'd like help preparing for this meeting or checking who else was invited.",
              "wrap": true
            }
          ]
        }
      ],
      "attributions": [
        {
          "attributionType": "annotation",
          "providerDisplayName": "",
          "attributionSource": "model",
          "seeMoreWebUrl": "https://teams.microsoft.com/l/meeting/details?eventId=AAMkADg5ZjdjZGNiLWRiMzItNDA3MC1iNDNlLTdlMGY4ZDc0ZjdlZgBGAAAAAACm2kxZvrUtTa-iv1uzeNCxBwA4nsl0tFf4R7qmHdVqpNbsAAAAAAENAAA4nsl0tFf4R7qmHdVqpNbsAAAVa4BBAAA%3d&EntityRepresentationId=8c968792-ca7a-42d6-8b44-9e5212b2d240",
          "imageWebUrl": "",
          "imageFavIcon": "",
          "imageWidth": 0,
          "imageHeight": 0
        },
        {
          "attributionType": "annotation",
          "providerDisplayName": "",
          "attributionSource": "model",
          "seeMoreWebUrl": "https://www.office.com/search?q=John+Doe&EntityRepresentationId=55cdb988-cbf5-44db-b75d-a431ca839c70",
          "imageWebUrl": "",
          "imageFavIcon": "",
          "imageWidth": 0,
          "imageHeight": 0
        },
        {
          "attributionType": "citation",
          "providerDisplayName": "Contoso Engineering Standup",
          "attributionSource": "model",
          "seeMoreWebUrl": "https://teams.microsoft.com/l/meeting/details?eventId=AAMkADg5ZjdjZGNiLWRiMzItNDA3MC1iNDNlLTdlMGY4ZDc0ZjdlZgBGAAAAAACm2kxZvrUtTa-iv1uzeNCxBwA4nsl0tFf4R7qmHdVqpNbsAAAAAAENAAA4nsl0tFf4R7qmHdVqpNbsAAAVa4BBAAA%3d",
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
id:137

data: {
  "id": "d0f6bffa-49d4-43c6-b93b-e7183f92b765",
  "agentId": null,
  "createdDateTime": "2025-09-30T22:01:22.9022796Z",
  "displayName": "Intermediate Conversation Update",
  "state": "active",
  "turnCount": 0,
  "messages": []
}
id:141

data: {
  "id": "d0f6bffa-49d4-43c6-b93b-e7183f92b765",
  "agentId": null,
  "createdDateTime": "2025-09-30T22:00:44.7918493Z",
  "displayName": "What meeting do I have at 9 AM tomorrow morning?",
  "state": "active",
  "turnCount": 1,
  "messages": [
    {
      "@odata.type": "#microsoft.graph.copilotConversationResponseMessage",
      "id": "8c74f6a7-ae3c-4ac6-845e-01e5008c6d87",
      "text": "What meeting do I have at 9 AM tomorrow morning?",
      "createdDateTime": "2025-09-30T22:00:44.7918493Z",
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
      "id": "65781ab5-79ce-4159-950f-edc04c51e909",
      "text": "You asked about your meeting scheduled for **9 AM tomorrow**, and I found **1 meeting** on your calendar.\n\n### 🗓️ Scheduled Meeting\n- **Title**: <Event>Contoso Engineering Standup</Event>\n- **Time**: Tomorrow from **9:00 AM to 9:30 AM**\n- **Organizer**: <Person>John Doe</Person>[^1^]\n- **Location**: Microsoft Teams Meeting\n- **Invitee Status**: No one has accepted the meeting invite yet[^1^]\n\nLet me know if you'd like help preparing for this meeting or checking who else was invited.",
      "createdDateTime": "2025-09-30T22:00:49.7881529Z",
      "adaptiveCards": [
        {
          "type": "AdaptiveCard",
          "version": "1.0",
          "body": [
            {
              "type": "TextBlock",
              "text": "You asked about your meeting scheduled for **9 AM tomorrow**, and I found **1 meeting** on your calendar.\n\n### 🗓️ Scheduled Meeting\n- **Title**: [Contoso Engineering Standup](https://teams.microsoft.com/l/meeting/details?eventId=AAMkADg5ZjdjZGNiLWRiMzItNDA3MC1iNDNlLTdlMGY4ZDc0ZjdlZgBGAAAAAACm2kxZvrUtTa-iv1uzeNCxBwA4nsl0tFf4R7qmHdVqpNbsAAAAAAENAAA4nsl0tFf4R7qmHdVqpNbsAAAVa4BBAAA%3d&EntityRepresentationId=8c968792-ca7a-42d6-8b44-9e5212b2d240)\n- **Time**: Tomorrow from **9:00 AM to 9:30 AM**\n- **Organizer**: [John Doe](https://www.office.com/search?q=John+Doe&EntityRepresentationId=55cdb988-cbf5-44db-b75d-a431ca839c70) [1](https://teams.microsoft.com/l/meeting/details?eventId=AAMkADg5ZjdjZGNiLWRiMzItNDA3MC1iNDNlLTdlMGY4ZDc0ZjdlZgBGAAAAAACm2kxZvrUtTa-iv1uzeNCxBwA4nsl0tFf4R7qmHdVqpNbsAAAAAAENAAA4nsl0tFf4R7qmHdVqpNbsAAAVa4BBAAA%3d)\n- **Location**: Microsoft Teams Meeting\n- **Invitee Status**: No one has accepted the meeting invite yet [1](https://teams.microsoft.com/l/meeting/details?eventId=AAMkADg5ZjdjZGNiLWRiMzItNDA3MC1iNDNlLTdlMGY4ZDc0ZjdlZgBGAAAAAACm2kxZvrUtTa-iv1uzeNCxBwA4nsl0tFf4R7qmHdVqpNbsAAAAAAENAAA4nsl0tFf4R7qmHdVqpNbsAAAVa4BBAAA%3d)\n\nLet me know if you'd like help preparing for this meeting or checking who else was invited.",
              "wrap": true
            }
          ]
        }
      ],
      "attributions": [
        {
          "attributionType": "annotation",
          "providerDisplayName": "",
          "attributionSource": "model",
          "seeMoreWebUrl": "https://teams.microsoft.com/l/meeting/details?eventId=AAMkADg5ZjdjZGNiLWRiMzItNDA3MC1iNDNlLTdlMGY4ZDc0ZjdlZgBGAAAAAACm2kxZvrUtTa-iv1uzeNCxBwA4nsl0tFf4R7qmHdVqpNbsAAAAAAENAAA4nsl0tFf4R7qmHdVqpNbsAAAVa4BBAAA%3d&EntityRepresentationId=8c968792-ca7a-42d6-8b44-9e5212b2d240",
          "imageWebUrl": "",
          "imageFavIcon": "",
          "imageWidth": 0,
          "imageHeight": 0
        },
        {
          "attributionType": "annotation",
          "providerDisplayName": "",
          "attributionSource": "model",
          "seeMoreWebUrl": "https://www.office.com/search?q=John+Doe&EntityRepresentationId=55cdb988-cbf5-44db-b75d-a431ca839c70",
          "imageWebUrl": "",
          "imageFavIcon": "",
          "imageWidth": 0,
          "imageHeight": 0
        },
        {
          "attributionType": "citation",
          "providerDisplayName": "Contoso Engineering Standup",
          "attributionSource": "model",
          "seeMoreWebUrl": "https://teams.microsoft.com/l/meeting/details?eventId=AAMkADg5ZjdjZGNiLWRiMzItNDA3MC1iNDNlLTdlMGY4ZDc0ZjdlZgBGAAAAAACm2kxZvrUtTa-iv1uzeNCxBwA4nsl0tFf4R7qmHdVqpNbsAAAAAAENAAA4nsl0tFf4R7qmHdVqpNbsAAAVa4BBAAA%3d",
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
id:142
```

### Example 2: Using a OneDrive or SharePoint file as context in a chat message to the Microsoft 365 Copilot Chat API

The following example shows how to use a OneDrive or SharePoint file as context when sending a message to the Chat API. Multiple OneDrive and SharePoint files can be used as context when sending a chat message.

#### Request

The following example shows the request.

```http
POST https://graph.microsoft.com/beta/copilot/conversations/d0f6bffa-49d4-43c6-b93b-e7183f92b765/chatOverStream
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

The following example shows the response. Most event streams are redacted from the example for brevity.

```http
HTTP/1.1 200 OK
Content-Type: text/event-stream

data: {
  "id": "d0f6bffa-49d4-43c6-b93b-e7183f92b765",
  "agentId": null,
  "createdDateTime": "2025-09-30T22:22:24.4694391Z",
  "displayName": "Intermediate Conversation Update",
  "state": "active",
  "turnCount": 0,
  "messages": [
    {
      "@odata.type": "#microsoft.graph.copilotConversationResponseMessage",
      "id": "bb926a9c-3b77-4477-b5bd-12abd8ff51e3",
      "text": "You asked for a summary of the document **<File>Business-Model.docx</File>**. Here\u2019s a concise overview based on its content:\n\n---\n\n## **Summary: What Is a Business Model?**\n\n### **Definition & Importance**\n- A **business model** is a holistic framework for creating, delivering, and capturing value. It\u2019s not just about how a company makes money, but how it creates value for customers, partners, and itself over the long term.\n- Business models are essential for startups and established companies alike, as they help unlock sustainable value and guide experimentation in the marketplace.\n\n### **Key Distinctions**\n- **Not a Business Plan:** A business model is different from a business plan. While a business plan is a static document with projections and assumptions, a business model is dynamic and focused on real-world experimentation.\n- **Not Just Revenue Strategy:** Monetization is only one part of a business model. Other components include operations, customer acquisition, retention, supply chain, and more.\n\n### **Design & Experimentation**\n- Business model design is about building a sustainable value chain, starting with a clear value proposition and focusing on a specific niche before scaling.\n- Experimentation is crucial\u2014entrepreneurs must test and iterate on their models to find what works in the real world.\n\n### **Innovation**\n- **Technological vs. Business Model Innovation:** While technology can enable new business models, true innovation often comes from rethinking how value is created and delivered, not just from new tech.\n- **Competitive Moats:** Business model innovation can create lasting competitive advantages, especially in the digital era where network effects and platform models are prevalent.\n\n### **Components of a Business Model**\n- **Business Model Canvas:** A popular framework that includes key partners, activities, value proposition, customer relationships, segments, resources, channels, cost structure, and revenue streams.\n- **Lean Startup Canvas:** Focuses on experimentation, customer feedback, and iterative design, especially for startups.\n\n### **FourWeekMBA Perspective**\n- Emphasizes simplicity, noise reduction, branding, distribution, and profitability.\n- Divides business model components into \u201cpeople\u201d (brand, value proposition, positioning) and \u201cfinancial\u201d (customer segments, channels, profit formula) dimensions.\n\n### **Types of Business Models**\nThe document details **30+ business model types**, including:\n- **Hidden Revenue (Asymmetric):** Monetizing user data (e.g., Company1, Company2)\n- **One-for-One:** Social impact with each sale (e.g., TOMS Shoes)\n- **Razor and Blade:** Selling a core product cheaply, accessories at a premium (e.g., Company3)\n- **Peer-to-Peer:** Platforms connecting users directly (e.g., Company4)\n- **Multi-Sided Platforms:** Serving multiple customer groups (e.g., Company5)\n- **Freemium, Subscription, Affiliate, Consulting, Agency, Vertically Integrated, E-commerce Marketplace, Discount, Attention Merchant, Privacy-focused, Franchise, On-Demand, User-Generated Content, Educational, Chain/Franchise Mix, Instant News, Blockchain-based, Multi-brand, Family-owned, Humanist Enterprise, Direct-to-Consumer, Enterprise Sales, Distribution-based**, and more.\n\n### **Key Takeaways**\n- There\u2019s no single \u201cbest\u201d business model\u2014success depends on context, timing, and market conditions.\n- Business models must evolve as markets and technologies change.\n- Experimentation, clear value propositions, and understanding both people and financial dimensions are critical for building a sustainable business.\n\n---\n\nWould you like a deeper dive into any specific business model type or framework mentioned in the document?",
      "createdDateTime": "2025-09-30T22:18:39.5526475Z",
      "adaptiveCards": [
        {
          "type": "AdaptiveCard",
          "version": "1.0",
          "body": [
            {
              "type": "TextBlock",
              "text": "You asked for a summary of the document **[Business-Model.docx](https://contoso.sharepoint.com/sites/Engineering/_layouts/15/Doc.aspx?sourcedoc=%7B8148C99B-78BD-4969-ABD5-A46862073990%7D&file=Business-Model.docx&action=default&mobileredirect=true&EntityRepresentationId=ce9ee99a-786c-44f5-a809-f6a8166a8502)**. Here's a concise overview based on its content:\n\n---\n\n## **Summary: What Is a Business Model?**\n\n### **Definition & Importance**\n- A **business model** is a holistic framework for creating, delivering, and capturing value. It's not just about how a company makes money, but how it creates value for customers, partners, and itself over the long term.\n- Business models are essential for startups and established companies alike, as they help unlock sustainable value and guide experimentation in the marketplace.\n\n### **Key Distinctions**\n- **Not a Business Plan:** A business model is different from a business plan. While a business plan is a static document with projections and assumptions, a business model is dynamic and focused on real-world experimentation.\n- **Not Just Revenue Strategy:** Monetization is only one part of a business model. Other components include operations, customer acquisition, retention, supply chain, and more.\n\n### **Design & Experimentation**\n- Business model design is about building a sustainable value chain, starting with a clear value proposition and focusing on a specific niche before scaling.\n- Experimentation is crucial—entrepreneurs must test and iterate on their models to find what works in the real world.\n\n### **Innovation**\n- **Technological vs. Business Model Innovation:** While technology can enable new business models, true innovation often comes from rethinking how value is created and delivered, not just from new tech.\n- **Competitive Moats:** Business model innovation can create lasting competitive advantages, especially in the digital era where network effects and platform models are prevalent.\n\n### **Components of a Business Model**\n- **Business Model Canvas:** A popular framework that includes key partners, activities, value proposition, customer relationships, segments, resources, channels, cost structure, and revenue streams.\n- **Lean Startup Canvas:** Focuses on experimentation, customer feedback, and iterative design, especially for startups.\n\n### **FourWeekMBA Perspective**\n- Emphasizes simplicity, noise reduction, branding, distribution, and profitability.\n- Divides business model components into \"people\" (brand, value proposition, positioning) and \"financial\" (customer segments, channels, profit formula) dimensions.\n\n### **Types of Business Models**\nThe document details **30+ business model types**, including:\n- **Hidden Revenue (Asymmetric):** Monetizing user data (e.g., Company1, Company2)\n- **One-for-One:** Social impact with each sale (e.g., TOMS Shoes)\n- **Razor and Blade:** Selling a core product cheaply, accessories at a premium (e.g., Company3)\n- **Peer-to-Peer:** Platforms connecting users directly (e.g., Company4)\n- **Multi-Sided Platforms:** Serving multiple customer groups (e.g., Company5)\n- **Freemium, Subscription, Affiliate, Consulting, Agency, Vertically Integrated, E-commerce Marketplace, Discount, Attention Merchant, Privacy-focused, Franchise, On-Demand, User-Generated Content, Educational, Chain/Franchise Mix, Instant News, Blockchain-based, Multi-brand, Family-owned, Humanist Enterprise, Direct-to-Consumer, Enterprise Sales, Distribution-based**, and more.\n\n### **Key Takeaways**\n- There's no single \"best\" business model—success depends on context, timing, and market conditions.\n- Business models must evolve as markets and technologies change.\n- Experimentation, clear value propositions, and understanding both people and financial dimensions are critical for building a sustainable business.\n\n---\n\nWould you like a deeper dive into any specific business model type or framework mentioned in the document?",
              "wrap": true
            }
          ]
        }
      ],
      "attributions": [
        {
          "attributionType": "annotation",
          "providerDisplayName": "",
          "attributionSource": "model",
          "seeMoreWebUrl": "https://contoso.sharepoint.com/sites/Engineering/_layouts/15/Doc.aspx?sourcedoc=%7B8148C99B-78BD-4969-ABD5-A46862073990%7D&file=Business-Model.docx&action=default&mobileredirect=true&EntityRepresentationId=ce9ee99a-786c-44f5-a809-f6a8166a8502",
          "imageWebUrl": "",
          "imageFavIcon": "",
          "imageWidth": 0,
          "imageHeight": 0
        },
        {
          "attributionType": "citation",
          "providerDisplayName": "529425287-What-Is-a-Business-Model",
          "attributionSource": "grounding",
          "seeMoreWebUrl": "https://contoso.sharepoint.com/sites/Engineering/_layouts/15/Doc.aspx?sourcedoc=%7B8148C99B-78BD-4969-ABD5-A46862073990%7D&file=Business-Model.docx&action=default&mobileredirect=true",
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
id:750

data: {
  "id": "d0f6bffa-49d4-43c6-b93b-e7183f92b765",
  "agentId": null,
  "createdDateTime": "2025-09-30T22:22:26.0001517Z",
  "displayName": "Intermediate Conversation Update",
  "state": "active",
  "turnCount": 0,
  "messages": []
}
id:754

data: {
  "id": "d0f6bffa-49d4-43c6-b93b-e7183f92b765",
  "agentId": null,
  "createdDateTime": "2025-09-30T22:18:31.7402377Z",
  "displayName": "What meeting do I have at 9 AM tomorrow morning?",
  "state": "active",
  "turnCount": 2,
  "messages": [
    {
      "@odata.type": "#microsoft.graph.copilotConversationResponseMessage",
      "id": "a4c65bce-f72d-4511-880c-99264f5c5d16",
      "text": "Summarize this document for me.",
      "createdDateTime": "2025-09-30T22:18:31.7402377Z",
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
      "id": "bb926a9c-3b77-4477-b5bd-12abd8ff51e3",
      "text": "You asked for a summary of the document **<File>Business-Model.docx</File>**. Here\u2019s a concise overview based on its content:\n\n---\n\n## **Summary: What Is a Business Model?**\n\n### **Definition & Importance**\n- A **business model** is a holistic framework for creating, delivering, and capturing value. It\u2019s not just about how a company makes money, but how it creates value for customers, partners, and itself over the long term.\n- Business models are essential for startups and established companies alike, as they help unlock sustainable value and guide experimentation in the marketplace.\n\n### **Key Distinctions**\n- **Not a Business Plan:** A business model is different from a business plan. While a business plan is a static document with projections and assumptions, a business model is dynamic and focused on real-world experimentation.\n- **Not Just Revenue Strategy:** Monetization is only one part of a business model. Other components include operations, customer acquisition, retention, supply chain, and more.\n\n### **Design & Experimentation**\n- Business model design is about building a sustainable value chain, starting with a clear value proposition and focusing on a specific niche before scaling.\n- Experimentation is crucial\u2014entrepreneurs must test and iterate on their models to find what works in the real world.\n\n### **Innovation**\n- **Technological vs. Business Model Innovation:** While technology can enable new business models, true innovation often comes from rethinking how value is created and delivered, not just from new tech.\n- **Competitive Moats:** Business model innovation can create lasting competitive advantages, especially in the digital era where network effects and platform models are prevalent.\n\n### **Components of a Business Model**\n- **Business Model Canvas:** A popular framework that includes key partners, activities, value proposition, customer relationships, segments, resources, channels, cost structure, and revenue streams.\n- **Lean Startup Canvas:** Focuses on experimentation, customer feedback, and iterative design, especially for startups.\n\n### **FourWeekMBA Perspective**\n- Emphasizes simplicity, noise reduction, branding, distribution, and profitability.\n- Divides business model components into \u201cpeople\u201d (brand, value proposition, positioning) and \u201cfinancial\u201d (customer segments, channels, profit formula) dimensions.\n\n### **Types of Business Models**\nThe document details **30+ business model types**, including:\n- **Hidden Revenue (Asymmetric):** Monetizing user data (e.g., Company1, Company2)\n- **One-for-One:** Social impact with each sale (e.g., TOMS Shoes)\n- **Razor and Blade:** Selling a core product cheaply, accessories at a premium (e.g., Company3)\n- **Peer-to-Peer:** Platforms connecting users directly (e.g., Company4)\n- **Multi-Sided Platforms:** Serving multiple customer groups (e.g., Company5)\n- **Freemium, Subscription, Affiliate, Consulting, Agency, Vertically Integrated, E-commerce Marketplace, Discount, Attention Merchant, Privacy-focused, Franchise, On-Demand, User-Generated Content, Educational, Chain/Franchise Mix, Instant News, Blockchain-based, Multi-brand, Family-owned, Humanist Enterprise, Direct-to-Consumer, Enterprise Sales, Distribution-based**, and more.\n\n### **Key Takeaways**\n- There\u2019s no single \u201cbest\u201d business model\u2014success depends on context, timing, and market conditions.\n- Business models must evolve as markets and technologies change.\n- Experimentation, clear value propositions, and understanding both people and financial dimensions are critical for building a sustainable business.\n\n---\n\nWould you like a deeper dive into any specific business model type or framework mentioned in the document?",
      "createdDateTime": "2025-09-30T22:18:39.5526475Z",
      "adaptiveCards": [
        {
          "type": "AdaptiveCard",
          "version": "1.0",
          "body": [
            {
              "type": "TextBlock",
              "text": "You asked for a summary of the document **[Business-Model.docx](https://contoso.sharepoint.com/sites/Engineering/_layouts/15/Doc.aspx?sourcedoc=%7B8148C99B-78BD-4969-ABD5-A46862073990%7D&file=Business-Model.docx&action=default&mobileredirect=true&EntityRepresentationId=ce9ee99a-786c-44f5-a809-f6a8166a8502)**. Here's a concise overview based on its content:\n\n---\n\n## **Summary: What Is a Business Model?**\n\n### **Definition & Importance**\n- A **business model** is a holistic framework for creating, delivering, and capturing value. It's not just about how a company makes money, but how it creates value for customers, partners, and itself over the long term.\n- Business models are essential for startups and established companies alike, as they help unlock sustainable value and guide experimentation in the marketplace.\n\n### **Key Distinctions**\n- **Not a Business Plan:** A business model is different from a business plan. While a business plan is a static document with projections and assumptions, a business model is dynamic and focused on real-world experimentation.\n- **Not Just Revenue Strategy:** Monetization is only one part of a business model. Other components include operations, customer acquisition, retention, supply chain, and more.\n\n### **Design & Experimentation**\n- Business model design is about building a sustainable value chain, starting with a clear value proposition and focusing on a specific niche before scaling.\n- Experimentation is crucial—entrepreneurs must test and iterate on their models to find what works in the real world.\n\n### **Innovation**\n- **Technological vs. Business Model Innovation:** While technology can enable new business models, true innovation often comes from rethinking how value is created and delivered, not just from new tech.\n- **Competitive Moats:** Business model innovation can create lasting competitive advantages, especially in the digital era where network effects and platform models are prevalent.\n\n### **Components of a Business Model**\n- **Business Model Canvas:** A popular framework that includes key partners, activities, value proposition, customer relationships, segments, resources, channels, cost structure, and revenue streams.\n- **Lean Startup Canvas:** Focuses on experimentation, customer feedback, and iterative design, especially for startups.\n\n### **FourWeekMBA Perspective**\n- Emphasizes simplicity, noise reduction, branding, distribution, and profitability.\n- Divides business model components into \"people\" (brand, value proposition, positioning) and \"financial\" (customer segments, channels, profit formula) dimensions.\n\n### **Types of Business Models**\nThe document details **30+ business model types**, including:\n- **Hidden Revenue (Asymmetric):** Monetizing user data (e.g., Company1, Company2)\n- **One-for-One:** Social impact with each sale (e.g., TOMS Shoes)\n- **Razor and Blade:** Selling a core product cheaply, accessories at a premium (e.g., Company3)\n- **Peer-to-Peer:** Platforms connecting users directly (e.g., Company4)\n- **Multi-Sided Platforms:** Serving multiple customer groups (e.g., Company5)\n- **Freemium, Subscription, Affiliate, Consulting, Agency, Vertically Integrated, E-commerce Marketplace, Discount, Attention Merchant, Privacy-focused, Franchise, On-Demand, User-Generated Content, Educational, Chain/Franchise Mix, Instant News, Blockchain-based, Multi-brand, Family-owned, Humanist Enterprise, Direct-to-Consumer, Enterprise Sales, Distribution-based**, and more.\n\n### **Key Takeaways**\n- There's no single \"best\" business model—success depends on context, timing, and market conditions.\n- Business models must evolve as markets and technologies change.\n- Experimentation, clear value propositions, and understanding both people and financial dimensions are critical for building a sustainable business.\n\n---\n\nWould you like a deeper dive into any specific business model type or framework mentioned in the document?",
              "wrap": true
            }
          ]
        }
      ],
      "attributions": [
        {
          "attributionType": "annotation",
          "providerDisplayName": "",
          "attributionSource": "model",
          "seeMoreWebUrl": "https://contoso.sharepoint.com/sites/Engineering/_layouts/15/Doc.aspx?sourcedoc=%7B8148C99B-78BD-4969-ABD5-A46862073990%7D&file=Business-Model.docx&action=default&mobileredirect=true&EntityRepresentationId=ce9ee99a-786c-44f5-a809-f6a8166a8502",
          "imageWebUrl": "",
          "imageFavIcon": "",
          "imageWidth": 0,
          "imageHeight": 0
        },
        {
          "attributionType": "citation",
          "providerDisplayName": "529425287-What-Is-a-Business-Model",
          "attributionSource": "grounding",
          "seeMoreWebUrl": "https://contoso.sharepoint.com/sites/Engineering/_layouts/15/Doc.aspx?sourcedoc=%7B8148C99B-78BD-4969-ABD5-A46862073990%7D&file=Business-Model.docx&action=default&mobileredirect=true",
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
id:755
```

### Example 3: Toggling off web search grounding when sending a chat message to the Microsoft 365 Copilot Chat API

The following example shows how to toggle off web search grounding when sending a chat message to the Chat API. If web search grounding is toggled off, only enterprise search grounding is used to answer a chat message. Toggling web search grounding is a single-turn action.

#### Request

The following example shows the request.

```http
POST https://graph.microsoft.com/beta/copilot/conversations/d0f6bffa-49d4-43c6-b93b-e7183f92b765/chatOverStream
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

The following example shows the response. Most event streams are redacted from the example for brevity.

```http
HTTP/1.1 200 OK
Content-Type: text/event-stream

data: {
  "id": "d0f6bffa-49d4-43c6-b93b-e7183f92b765",
  "agentId": null,
  "createdDateTime": "2025-09-30T23:28:08.0226573Z",
  "displayName": "Intermediate Conversation Update",
  "state": "active",
  "turnCount": 0,
  "messages": [
    {
      "@odata.type": "#microsoft.graph.copilotConversationResponseMessage",
      "id": "f1ed80bd-033a-412a-a228-02c68dd6f4cf",
      "text": "You asked: **What is the highest grossing movie at the global box office this year?**\n\nI do not have access to real-time web search or external box office databases, and there are no internal enterprise resources or files provided that contain up-to-date box office data for movies released this year. The uploaded document, **<File>Business-Model.docx</File>**, does not contain information about movies or box office statistics.\n\n**To find the most current and accurate answer**, I recommend checking reputable entertainment industry sources such as:\n- https://www.source1.com/\n- https://www.source2.com/\n- https://source3.com/\n- https://source4.com/\n\nIf you have a specific internal report or file related to box office performance, please upload it or provide more details, and I'll be happy to summarize or analyze it for you!",
      "createdDateTime": "2025-09-30T23:27:24.5020727Z",
      "adaptiveCards": [
        {
          "type": "AdaptiveCard",
          "version": "1.0",
          "body": [
            {
              "type": "TextBlock",
              "text": "You asked: **What is the highest grossing movie at the global box office this year?**\n\nI do not have access to real-time web search or external box office databases, and there are no internal enterprise resources or files provided that contain up-to-date box office data for movies released this year. The uploaded document, **[Business-Model.docx](https://contoso.sharepoint.com/sites/Engineering/_layouts/15/Doc.aspx?sourcedoc=%7B8148C99B-78BD-4969-ABD5-A46862073990%7D&file=Business-Model.docx&action=default&mobileredirect=true&EntityRepresentationId=ce9ee99a-786c-44f5-a809-f6a8166a8502)**, does not contain information about movies or box office statistics.\n\n**To find the most current and accurate answer**, I recommend checking reputable entertainment industry sources such as:\n- https://www.source1.com/\n- https://www.source2.com/\n- https://source3.com/\n- https://source4.com/\n\nIf you have a specific internal report or file related to box office performance, please upload it or provide more details, and I'll be happy to summarize or analyze it for you!",
              "wrap": true
            }
          ]
        }
      ],
      "attributions": [
        {
          "attributionType": "annotation",
          "providerDisplayName": "",
          "attributionSource": "model",
          "seeMoreWebUrl": "https://contoso.sharepoint.com/sites/Engineering/_layouts/15/Doc.aspx?sourcedoc=%7B8148C99B-78BD-4969-ABD5-A46862073990%7D&file=Business-Model.docx&action=default&mobileredirect=true&EntityRepresentationId=ce9ee99a-786c-44f5-a809-f6a8166a8502",
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
id:207

data: {
  "id": "d0f6bffa-49d4-43c6-b93b-e7183f92b765",
  "agentId": null,
  "createdDateTime": "2025-09-30T23:28:09.270304Z",
  "displayName": "Intermediate Conversation Update",
  "state": "active",
  "turnCount": 0,
  "messages": []
}
id:209

data: {
  "id": "d0f6bffa-49d4-43c6-b93b-e7183f92b765",
  "agentId": null,
  "createdDateTime": "2025-09-30T23:27:21.1084028Z",
  "displayName": "What meeting do I have at 9 AM tomorrow morning?",
  "state": "active",
  "turnCount": 3,
  "messages": [
    {
      "@odata.type": "#microsoft.graph.copilotConversationResponseMessage",
      "id": "d6471430-d4f8-4283-83a2-22a5d9d967a8",
      "text": "What is the highest grossing movie at the global box office this year?",
      "createdDateTime": "2025-09-30T23:27:21.1084028Z",
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
      "id": "f1ed80bd-033a-412a-a228-02c68dd6f4cf",
      "text": "You asked: **What is the highest grossing movie at the global box office this year?**\n\nI do not have access to real-time web search or external box office databases, and there are no internal enterprise resources or files provided that contain up-to-date box office data for movies released this year. The uploaded document, **<File>Business-Model.docx</File>**, does not contain information about movies or box office statistics.\n\n**To find the most current and accurate answer**, I recommend checking reputable entertainment industry sources such as:\n- https://www.source1.com/\n- https://www.source2.com/\n- https://source3.com/\n- https://source4.com/\n\nIf you have a specific internal report or file related to box office performance, please upload it or provide more details, and I'll be happy to summarize or analyze it for you!",
      "createdDateTime": "2025-09-30T23:27:24.5020727Z",
      "adaptiveCards": [
        {
          "type": "AdaptiveCard",
          "version": "1.0",
          "body": [
            {
              "type": "TextBlock",
              "text": "You asked: **What is the highest grossing movie at the global box office this year?**\n\nI do not have access to real-time web search or external box office databases, and there are no internal enterprise resources or files provided that contain up-to-date box office data for movies released this year. The uploaded document, **[Business-Model.docx](https://contoso.sharepoint.com/sites/Engineering/_layouts/15/Doc.aspx?sourcedoc=%7B8148C99B-78BD-4969-ABD5-A46862073990%7D&file=Business-Model.docx&action=default&mobileredirect=true&EntityRepresentationId=ce9ee99a-786c-44f5-a809-f6a8166a8502)**, does not contain information about movies or box office statistics.\n\n**To find the most current and accurate answer**, I recommend checking reputable entertainment industry sources such as:\n- https://www.source1.com/\n- https://www.source2.com/\n- https://source3.com/\n- https://source4.com/\n\nIf you have a specific internal report or file related to box office performance, please upload it or provide more details, and I'll be happy to summarize or analyze it for you!",
              "wrap": true
            }
          ]
        }
      ],
      "attributions": [
        {
          "attributionType": "annotation",
          "providerDisplayName": "",
          "attributionSource": "model",
          "seeMoreWebUrl": "https://contoso.sharepoint.com/sites/Engineering/_layouts/15/Doc.aspx?sourcedoc=%7B8148C99B-78BD-4969-ABD5-A46862073990%7D&file=Business-Model.docx&action=default&mobileredirect=true&EntityRepresentationId=ce9ee99a-786c-44f5-a809-f6a8166a8502",
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
id:210
```

### Example 4: Sending more context with a chat message to the Microsoft 365 Copilot Chat API

The following example shows how to send more context with a chat message to the Chat API. This extra context provides grounding for the Chat API to reason over, like excerpts from documents, articles, or websites.

#### Request

The following example shows the request.

```http
POST https://graph.microsoft.com/beta/copilot/conversations/d0f6bffa-49d4-43c6-b93b-e7183f92b765/chatOverStream
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

The following example shows the response. Most event streams are redacted from the example for brevity.

```http
HTTP/1.1 200 OK
Content-Type: text/event-stream

data: {
  "id": "d0f6bffa-49d4-43c6-b93b-e7183f92b765",
  "agentId": null,
  "createdDateTime": "2025-10-01T00:11:19.747816Z",
  "displayName": "Intermediate Conversation Update",
  "state": "active",
  "turnCount": 0,
  "messages": [
    {
      "@odata.type": "#microsoft.graph.copilotConversationResponseMessage",
      "id": "ab9e1ebc-925c-4d96-900e-d85fb9cb1181",
      "text": "You asked: **\"What is the birthday of my best friend, John Doe?\"**\n\nBased on the information available, **John Doe's birthday is on January 1st**[^external^].\n\nIf you need this recorded for future reference or want to add more details about John Doe, just let me know!",
      "createdDateTime": "2025-10-01T00:10:59.3842333Z",
      "adaptiveCards": [
        {
          "type": "AdaptiveCard",
          "version": "1.0",
          "body": [
            {
              "type": "TextBlock",
              "text": "You asked: **\"What is the birthday of my best friend, John Doe?\"**\n\nBased on the information available, **John Doe's birthday is on January 1st**[^external^].\n\nIf you need this recorded for future reference or want to add more details about John Doe, just let me know!",
              "wrap": true
            }
          ]
        }
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
id:68

data: {
  "id": "d0f6bffa-49d4-43c6-b93b-e7183f92b765",
  "agentId": null,
  "createdDateTime": "2025-10-01T00:11:20.8974283Z",
  "displayName": "Intermediate Conversation Update",
  "state": "active",
  "turnCount": 0,
  "messages": []
}
id:70

data: {
  "id": "d0f6bffa-49d4-43c6-b93b-e7183f92b765",
  "agentId": null,
  "createdDateTime": "2025-10-01T00:10:56.6481261Z",
  "displayName": "What meeting do I have at 9 AM tomorrow morning?",
  "state": "active",
  "turnCount": 4,
  "messages": [
    {
      "@odata.type": "#microsoft.graph.copilotConversationResponseMessage",
      "id": "18bedd46-2de8-4dc7-86ec-5798215832d4",
      "text": "What is the birthday of my best friend, John Doe?",
      "createdDateTime": "2025-10-01T00:10:56.6481261Z",
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
      "id": "ab9e1ebc-925c-4d96-900e-d85fb9cb1181",
      "text": "You asked: **\"What is the birthday of my best friend, John Doe?\"**\n\nBased on the information available, **John Doe's birthday is on January 1st**[^external^].\n\nIf you need this recorded for future reference or want to add more details about John Doe, just let me know!",
      "createdDateTime": "2025-10-01T00:10:59.3842333Z",
      "adaptiveCards": [
        {
          "type": "AdaptiveCard",
          "version": "1.0",
          "body": [
            {
              "type": "TextBlock",
              "text": "You asked: **\"What is the birthday of my best friend, John Doe?\"**\n\nBased on the information available, **John Doe's birthday is on January 1st**[^external^].\n\nIf you need this recorded for future reference or want to add more details about John Doe, just let me know!",
              "wrap": true
            }
          ]
        }
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
id:71
```

## Related content

- [Overview of the Microsoft 365 Copilot Chat API](overview.md)
- [Create Copilot conversations using the Microsoft 365 Copilot Chat API](copilotroot-conversations.md)
- [Continue synchronous conversations with Microsoft 365 Copilot using the Microsoft 365 Copilot Chat API](copilotroot-conversationschat.md)
