---
title: Declarative Copilot schema for Microsoft Copilot for Microsoft 365
description: Learn about the members and properties you can use in a manifest file for Declarative Copilot in Microsoft Copilot for Microsoft 365
author: Richa Misra
ms.author: rimisra
ms.topic: reference
---

## Introduction

This following article describes a specification that establishes the Declarative Copilot (DC) manifest, a machine-readable document whcih provides a Large Language Model (LLM) with the necessary instructions, knowledge, and actions to specialize in addressing a select set of user problems. 

Declarative Copilots (DCs) are valuable in understanding and generating human-like text, making them versatile for tasks like writing and answering questions. This specification is focused on the DC manifest which acts as a structured framework to specialize and enhance functionalities a specific user needs. 

## Conventions

### Relative references in URLs

Unless specified otherwise, all members that are URLs MAY be relative references. Relative references in the manifest document are relative the location of the manifest document.

### String Length

Unless specified otherwise, all string members SHOULD be limited to 4K characters. This string length does not confer any acceptable size for the entire document. Implementations are free to impose their own practical limits on manifest length.

### Unrecognized Members

JSON objects defined in this document support only the described members. Unrecognized or extraneous members in any JSON object SHOULD make the entire document invalid.

## Declarative Copilot Manifest Object

The Declarative Copilot (DC) manifest document is a JSON object. It covers required fields, capabilities, conversation starters, and actions.

### Example

The following example of required fields within a Copilot DC manifest:

```json
{
    "name" : "Repairs DC",
    "description": "This DC is meant to help track any tickets and repairs",
    "instructions": "This DC needs to look at my Service Now and Jira tickets/instances to help me keep track of open items"
}
```

### Members

#### name

A JSON string containing a name for the DC. It is a required member, MUST NOT be null and MUST contain at least 1 non-whitespace character. Characters MUST be 100 or less. `name` follows a regex containing `^[A-Za-z0-9]+$``.

#### description

A JSON string containing the description for the DC that the user inputs. It is a required member, MUST NOT be null and MUST contain at least 1 non-whitespace character. Characters must be 1000 or less. `description` follows a regex containing `^[A-Za-z0-9]+$``.

<!--
#### id

A JSON string value containing a unique and required id of the DC. This is a developer provided value. It MUST NOT be null and MUST contain at least 1 non-whitespace character. Id MAY be a GUID.

#### author_name 

A JSON string containing a human-readable name for the DC that will be displayed to the user. It must not be null and must be at least 1 non-whitespace character. Characters beyond 20 may be ignored. The character values in the string must be lower or uppercase alphabets can span through a regex containing `^[A-Za-z]+$`.

#### privacy_policy_url

A JSON string containing an absolute URL that locates a document containing the privacy policy for the DC.
-->
#### instructions

A JSON string containing the instructions inputted by the user for the DC to provide detailed instructions or guidelines on how the DC should behave, its functionalities, and any particular behaviors to avoid. This MUST NOT be null and MUST contain at least 1 non-whitespace character. Characters MUST be 8000 or less.

#### conversation starters

This member is a JSON array that contains a list of Conversation Starter objects. There MUST NOT be more than 6 objects in this array.  See [[[#conversation-starter-object]]]. 

#### actions

This member is a JSON array that contains plugin objects that identify a Plugin Manifest [[Plugins]] that will be used to provide actions accessible to the DC. See [[[#action-object]]].

#### capabilities

This member is a JSON array that MUST NOT contain more than 5 capability objects: Web Search, Graphic Art, Code Interpreter, OneDriveAndSharePoint, Graph Connectors. Each item is an individual capability object within the JSON array and has its own unique name. See [[[#capability-types]]].

## Conversation Starter Object

A JSON object that contains hints that can be displayed to the user to demonstrate how they can get started using the DC.

### Example {#conversation-starter-example}

```json
{
    "conversation_starters": [{ 
        "title": "My Open Repairs",
        "text": "What open repairs are assigned to me?" 
    }],
}
```

### Members {#conversation-starter-members}

#### title

A member of the conversation starters object. `title` is a JSON string which provides a unique title for the conversation_starter. The string MUST NOT be null and MUST contain at least 1 non-whitespace character

#### text

A member of the conversation starters object. `text` is a required JSON string contains a suggestion that the user can use to obtain the desired result from the DC. The string MUST NOT be null and MUST contain at least 1 non-whitespace character

## Action Object

A JSON object that contains members which are developer input. [[Plugins]] can be considered to be actions.

### Example {#action-example}

``` json
{
    "actions": [{  
        "id": "repairsPlugin",   
        "file": "plugin.json" 
    }] 
}
```

### Members {#action-members}

#### id {#action-id}

A member of the actions object (plugin) considered to be developer input. `id` is a unique and required JSON string which MAY be represented as a GUID.

#### file

A member of the actions object (plugin) considered to be developer input. `file` is a unique and required JSON string that MUST NOT be null and MUST contain at least 1 non-whitespace character.

## Capability Types

A JSON object whose presence indicates that the DC will support some kind of built in capability. It has a member called `name` that is required. The `name` member MUST be one of the following values:

| Value | Details |
|---|---|
| WebSearch | Enables capability to search the Web for relevant content |
| GraphicArt | Enables capability to create images and art based on the text input from the user|  
| CodeInterpreter | Enables capability to generate and execute code. | 
| OneDriveAndSharePoint | [[[#onedrive-and-sharepoint-object]]] |
| GraphConnector | [[[#graph-connectors-object]]] |

### Example {#example-capabilities}

```json
{
    "capabilities": [
        {
            "name": "WebSearch"
        },
        {
            "name": "GraphicArt"
        },
        {
            "name": "CodeInterpreter"
        },
        {
            "name": "OneDriveAndSharePoint",
            "items_by_sharepoint_ids": [
                {
                    "site_id": "bc54a8cc-8c2e-4e62-99cf-660b3594bbfd",
                    "web_id": "a5377427-f041-49b5-a2e9-0d58f4343939",
                    "list_id": "78A4158C-D2E0-4708-A07D-EE751111E462",  
                    "unique_id": "304fcfdf-8842-434d-a56f-44a1e54fbed2"
                }
             ],
             "items_by_url": [ {
                    "url": "https://microsoft.sharepoint-df.com/teams/taiger/Documents/Folders1"
                } 
             ]
        },
        {
            "name": "GraphConnectors",
            "connections": [
                {
                    "connection_id": "jiraTickets"
                }
            ]
        }
    ]
}
```

## OneDrive And SharePoint Object

A JSON object whose presence indicates that the DC will search a user's SharePoint and OneDrive for grounding info.

### Members {#onedrive-and-sharepoint-members}

#### name {#onedrive-and-sharepoint-name}

`name` is a unique and required JSON string that MUST NOT be null and MUST contain at least 1 non-whitespace character. 

#### items by sharepoint ids

`items_by_sharepoint_ids` is a JSON array of `items_by_sharepoint_ids` objects. Each object has optional members. See [[[#items-by-sharepoint-ids-object]]]

#### items by url

`items_by_url` is a JSON array of `items_by_url` objects. Each object has an optional member. See [[[#items-by-url-object]]]

## Items by Sharepoint Ids Object

`items_by_sharepoint_ids` is a JSON object within the `items_by_sharepoint_ids` (see [[[#items-by-sharepoint-ids]]]) JSON array and has 4 members.

### Members {#items-by-sharepoint-ids-members}

#### site_id

`site_id` is a unique JSON string which is a GUID pointing to a SharePoint or OneDrive site. It is an optional member that MUST NOT be null and MUST contain at least 1 non-whitespace character.

#### web_id

`web_id` is an optional member and a unique JSON string which is a GUID. 

#### list_id

`list_id` is an optional member and a unique JSON string which is a GUID.  

#### unique_id

`unique_id` is an optional member and a unique JSON string which is a GUID. 

## Items by URL Object

`items_by_url` is a JSON object within the `items_by_url` (see [[[#items-by-url]]]) JSON array and has one members.

### Members {#items-by-url-members}

#### path

`path` is a JSON string and an optional member that MUST NOT be null and MUST contain at least 1 non-whitespace character. It must be an absolute URL.

## Graph Connectors Object

A JSON object whose presence indicates that the DC will search for selected graph connectors for grounding info.

### Members {#graph-connectors-members}

#### name {#graph-connectors-name}

`name` is a unique and required JSON string that MUST NOT be null and MUST contain at least 1 non-whitespace character.

#### connections

`connections` is a JSON array containing `connection` JSON objects. See [[[#connection-object]]].

## Connection Object

A JSON object within the [[[#connections]]] JSON array.

### Members {#connection-members}

#### connection_id

`connection_id` is a unique and required JSON string. It MUST NOT be null and MUST contain at least 1 non-whitespace character.
