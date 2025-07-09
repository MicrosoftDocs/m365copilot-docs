---
title: Asynchronous and Proactive Messaging in Custom Engine Agents for Microsoft 365
description: Lear how to use asynchronous and proactive messaging patterns in your custom engine agents.
author: lauragra
ms.author: lauragra
ms.reviewer: vermaanimesh
ms.topic: conceptual
ms.localizationpriority: medium
ms.date: 07/11/2025
ms.custom: [copilot-learning-hub]
---

# Implement asynchronous and proactive messaging in custom engine agents

This article describes how to implement asynchronous and proactive messaging patterns in custom engine agents that you build with the Microsoft Bot Framework. These patterns allow your agents to respond to users after a delay or without a user-initiated message.

You can use asynchronous and proactive messaging to enable your custom engine agents to:

- Respond after a delay while continuing background processing.
- Initiate messages without user input (for example, system-triggered updates).

Each user query should receive an initial response within 15 seconds. For long-running tasks, agents can send follow-up messages. A 45-second timeout applies between streaming updates.

## Asynchronous messages

Asynchronous messages are sent after the agent completes a background task initiated by the user. This pattern is useful for scenarios like order tracking or status updates.

For example, if a user orders a laptop, your agent can confirm the request and later send a follow-up message to the user when the order is placed. The following example shows how to use the [Bot Framework](/azure/bot-service/bot-service-overview) to send an asynchronous message regarding the laptop order.

```javascript
app.message( 

    CustomMessageTypes.orderLaptopSelected.toString(), 
    async (context: TurnContext, _state) => { 
      return new Promise(async (resolve) => { 
        await context.sendActivity({ 
          text: "Thank you for order laptop. I will keep you posted with updates.", 
        });   

        setTimeout(async () => { 
          await context.sendActivity({ 
            text: "Great! I have successfully placed your order #1292. I'll notify you when it's delivered.", 
            attachments: [ 
              { 
                contentType: "application/vnd.microsoft.card.adaptive", 
                content: deliveredCard, 
              }, 
            ], 
          }); 
          resolve(); 
        }, 10 * 1000); 
      }); 
    } 
  ); 
```

The following table summarizes the asynchronous message process.

| Task | Description |
|------|-------------|
| ✅ Initial confirmation | Send a message to acknowledge the request. |
| ✅ Background processing | Perform the task asynchronously. |
| ✅ Follow-up message | Notify the user when the task is complete. |

## Proactive messages

Proactive messages are initiated by the system, not the user. These messages are sent via a dedicated conversation thread.

For example, your agent can send a notification to a user about an event or update without a user query. The following example shows how to use the [createConversation API](/graph/api/group-post-conversations?view=graph-rest-1.0) to fetch the conversation information and send proactive messages via a dedicated thread.

```javascript
export async function getToken() { 
  const url = 
    "https://login.microsoftonline.com/botframework.com/oauth2/v2.0/token"; 
  const params = new URLSearchParams(); 
  params.append("grant_type", "client_credentials"); 
  params.append("client_id", config.MicrosoftAppId); 
  params.append("client_secret", config.MicrosoftAppPassword); 
  params.append("scope", "https://api.botframework.com/.default"); 

  const response = await fetch(url, { 
    method: "POST", 
    headers: { 
      "Content-Type": "application/x-www-form-urlencoded", 
    }, 
    body: params.toString(), 
  }); 

  if (!response.ok) { 
    throw new Error(`Error! status: ${response.status}`); 
  }

  const data = await response.json(); 
  return data; 
} 
  
  let accessToken; 
    try { 
      accessToken = getToken(); 
      if (!accessToken) { 
        console.log("No access token found, fetching a new one"); 
        const tokenResponse = await getToken(); 
        accessToken = tokenResponse.access_token; 
        if (!accessToken) { 
          throw new Error("Failed to obtain access token"); 
        } 
        setAccessToken(accessToken); 
      } 
    } catch (error) { 
      console.error("Error retrieving access token:", error); 
      await context.sendActivity( 
        "Failed to send proactive message due to authentication error" 
      ); 
      return; 
    }  

    const createConversationBody = { 
      members: [{ id: context.activity.from.aadObjectId }], 
      tenantId: context.activity.conversation.tenantId, 
      channelData: { 
        productContext: "Copilot", 
        conversation: { 
          conversationSubType: "AgentProactive", 
        }, 
      }, 
    }; 

    const createConversationResponse = await fetch( 
      "https://canary.botapi.skype.com/teams/v3/conversations", 
      { 
        method: "POST", 
        headers: { 
          "Content-Type": "application/json", 
          Authorization: `Bearer ${accessToken}`, 
        }, 
        body: JSON.stringify(createConversationBody), 
      } 
    );  

    const createConversationResponseData = 
      await createConversationResponse.json(); 
    console.log("Create conversation response", createConversationResponseData); 
    const body = { 
      text: "Hello proactive world", 
      type: "message", 
    }; 

    const response = await fetch( 
      `https://canary.botapi.skype.com/teams/v3/conversations/${createConversationResponseData.id}/activities`, 
      { 
        method: "POST", 
        headers: { 
          "Content-Type": "application/json", 
          Authorization: `Bearer ${accessToken}`, 
        }, 
        body: JSON.stringify(body), 
      } 
    ); 
```

The following table summarizes the proactive message process.

| Task | Description |
|------|-------------|
| ✅ Acquire token | Use OAuth2 to authenticate. |
| ✅ Create conversation | Use the Bot Framework API to initiate a conversation. |
| ✅ Send message | Post a message to the conversation. |

## Related content

- [Custom engine agent overview](/microsoft-365-copilot/extensibility/overview-custom-engine-agent)