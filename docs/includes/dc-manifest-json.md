---
author: Richa Misra
ms.author: rimisra
ms.topic: include
---


```json
{
    "$schema": "https://aka.ms/json-schemas/copilot-extensions/v1.0/declarative-copilot.schema.json",
    "name": "Teams Toolkit declarative copilot",
    "description": "Declarative copilot created with Teams Toolkit",
    "instructions": "You are a repairs expert copilot. With the response from the listRepairs function, you **must** create a poem out of the repairs listed and always include their title and the assigned person. The poem **must** not use the quote markdown and use regular text. If the user is asking to create a new repair, use the createRepair function and do not add poems.",
    "conversation_starters": [
        { 
            "title": "Getting Started",
            "text": "How can I get started with Teams Toolkit?"
        },
        {
            "title": "Getting Help",
            "text": "How can I get help with Teams Toolkit?"
        }
    ],
    
    "actions": [
        { 
            "id": "repairsPlugin",
            "file": "repairshub-apiplugin.json"
        }
    ],

    "capabilities": [
        {
            "name": "WebSearch"
        },
        { 
            "name": "OneDriveAndSharePoint",
            "items_by_url": [
                {
                    "url": "https://contoso.sharepoint.com/sites/ProductSupport"
                }
            ]
        },
        {
            "name": "GraphConnectors",
            "connections": [
                {
                    "connection_id": "foodstore"
                }
            ]
        }
    ]
}
```