---
title: "Convert your declarative agent to a custom engine agent"
description: Learn how to convert your declarative agent for Microsoft 365 Copilot to a custom engine agent to gain full control of orchestration, AI models, and data integrations.
author: lauragra
ms.author: lauragra
ms.reviewer: vermaanimesh
ms.topic: article
ms.localizationpriority: medium
ms.date: 03/24/2026
ms.custom: [copilot-learning-hub]
---

# Convert your declarative agent to a custom engine agent

Microsoft 365 Copilot provides a migration capability that allows you to convert declarative agents, including message extensions that were promoted to declarative agents, to custom engine agents. When you convert your declarative agent to a custom engine agent, you have full control of the orchestration, AI models, and data integrations and can take advantage of advanced functionality to create more sophisticated workflows.

This article describes the steps to take to convert a declarative agent to a custom engine agent to take advantage of your own orchestration to better meet the unique needs of your organization.

## Prerequisites

The steps in this article require you to have the following prerequisites:

- An existing declarative agent built with the [Microsoft 365 Agents Toolkit](build-declarative-agents.md).

    > [!Note]
    > Agents built using [Microsoft 365 Copilot](agent-builder.md) aren't currently supported.

- A custom bot and the bot ID. For information about how to create a custom bot, see [Bots and agents](/microsoftteams/platform/bots/build-a-bot).
- Visual Studio Code with the Microsoft 365 Agents Toolkit extension installed.
- The [Microsoft 365 Agents SDK](/microsoft-365/agents-sdk/) or [Teams SDK](/microsoftteams/platform/teams-ai-library/), if you want to implement Copilot-specific features like streaming or citations.
- Permissions to upload app manifests in your environment.

## Convert your declarative agent

To convert your existing declarative agent to a custom engine agent, you make updates to your app manifest and your app package.

### Update your app manifest

To update your app manifest:

1. In Visual Studio Code, open the app manifest file for your declarative agent.
1. Add a **bots** node and include your bot ID in the **id** field. The following example shows the schema for the **bots** node.

    ```json
        "bots": [ 
            { 
                "botId": "${{BOT_ID}}", 
                "scopes": [ 
                    "copilot", 
                    "personal", 
                    "team" 
                ], 
                "supportsFiles": false, 
                "isNotificationOnly": false, 
                "commandLists": [ 
                    { 
                        "scopes": [ 
                            "copilot", 
                            "personal" 
                        ], 
                        "commands": [ 
                            { 
                                "title": "How can you help me?", 
                                "description": "How can you help me?" 
                            } 
                        ] 
                    } 
                ] 
            } 
        ], 
    ```

    For more information about the schema for the bots node, see [bots object](/microsoft-365/extensibility/schema/root-bots).
    
    > [!NOTE]
    > Use app manifest schema version 1.21 or later. Custom engine agents are supported in manifest version 1.21 and later versions.

1. In the **copilotAgents** object, change the **declarativeAgents** node to a **customEngineAgents** node, as shown in the following examples.
    
    **Declarative agents node**

    ```json
    "copilotAgents": { 
        "declarativeAgents": [             
            { 
                "id": "declarativeAgent", 
                "file": "declarativeAgent.json" 
            } 
        ] 
    }, 
    ```

    **Replace with custom engine agents node**

    ```json  
    "copilotAgents": {
        "customEngineAgents": [
            {
                "type": "bot",
                "id": "${{BOT_ID}}"
            }
        ]
    },
    "bots": [
        { 
          "botId": "${{BOT_ID}}",
            "scopes": [
                "copilot",
                "personal",
                "team"
            ], 
            "supportsFiles": false,
            "isNotificationOnly": false,
            "commandLists": [
                {
                    "scopes": [
                        "copilot",
                        "personal"
                    ],
                    "commands": [
                        {
                            "title": "How can you help me?",
                            "description": "How can you help me?"
                        }
                    ]
                }
            ]
        }
    ],
    ```

    For schema reference information, see [copilotAgents object](/microsoft-365/extensibility/schema/root-copilot-agents).

    > [!NOTE]
    > Your app manifest can include either a declarative agent node or a custom engine agent node, but not both.

1. Update the app version number for your app in the **version** property.
1. Make sure that the **id** property uses the same ID that you used in the app manifest for the declarative agent.

## Customize your agent UX

Define your agent experience for users. You can add conversation starters and suggested prompts, implement streaming responses and citations, and more. Note that you need to define and test your custom engine agent capabilities.

For more information, see [Custom engine agent user experience features](ux-custom-engine-agent.md).

### Update and submit your app package

After you update your agent manifest, repackage your app:

1. Add your updated agent manifest, app icon, and any other assets to a new .zip file.
1. Submit the new package to update your existing app. If your agent is internal to your organization, use the Microsoft 365 admin center (requires tenant admin permissions).

    > [!NOTE]
    > You can submit custom engine agents that you converted from a declarative agent to Partner Center. Agent users are prompted to consent to upgrade their agent. For more information, see the [next section](#partner-center-submission-and-consent-behavior).

### Partner Center submission and consent behavior

Custom engine agents that are converted from declarative agents can be submitted to Partner Center for distribution, subject to applicable marketplace validation and tenant policies.

When a converted agent introduces changes that affect capabilities or permissions, the agent doesn't update automatically for existing users. Users are prompted to review and consent to the updated version before using it.

Users see an update prompt in Copilot and Teams and must explicitly approve the update. Whether additional admin approval is required depends on the permissions requested and the tenant's consent configuration.

For details, see [Conditions when an app update requires consent](/microsoftteams/apps-update-experience#conditions-when-an-app-update-requires-consent).

## User experience

The transition from a declarative agent to a custom engine agent is seamless for the user. If the name and logo you use in your app package are the same, users won't see any visible changes.  

If users pinned the agent, they need to pin the agent again after you publish the update.

## Related content

- [Custom engine agent overview](overview-custom-engine-agent.md)
- [Agents overview](agents-overview.md)
- [Upgrade your bot to a custom engine agent](/microsoftteams/platform/bots/how-to/teams-conversational-ai/how-conversation-ai-get-started)
- [App manifest](/microsoftteams/platform/resources/schema/manifest-schema)
