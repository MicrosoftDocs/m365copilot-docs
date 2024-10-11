---
title: Known issues
description: Find information about current known issues related to Microsoft 365 Copilot extensibility and the recommended workarounds.
author: lauragra
ms.author: lauragra
ms.topic: concept-article
ms.date: 10/11/2024
---

# Known issues

This article provides information about known issues related to Microsoft 365 Copilot extensibility and any available workarounds.

## Newly installed Copilot agents might not show in the Teams client right away

In some cases, a Copilot agent installed from the store doesn't immediately show up in Business Chat (BizChat) in the Teams client.

### Workaround

As a workaround, the user can switch to another chat and then return to BizChat.

## Power Automate Flows are not fully supported as actions in declarative agents

Power Automate Flows as actions in declarative copilots might not run reliably and might not return results.

### Workaround

Currently, no workaround for the issue that the flows might not return results is available. You can improve the trigger success for the flow by editing the description on the flow details page outside of Copilot Studio.

## Links are removed from Copilot responses

Copilot responses don't show links in the response body. Links are replaced with the following message: An external link was removed to protect your privacy. 

This issue applies to links from any content source, including SharePoint, Microsoft Graph connectors, and Plugins.

<!-- This issue is specific only to 3S partner?>

## Language setting updates respected only from Teams clients

3S has an index of extensions that is used by Sydney to get the list of eligible plugins for a given prompt, and also to list the plugins and DCs in the picker / right rail experiences. This index does not support multiple locales. It snaps to the language sent from client at the time of acquisition. This locale is updated only there is a language update received from a Teams client. If Copilot is used from a non-Teams client on a different language, the index is not updated and will process the requests against plugin information in the locale used previously. 
-->

## Prompts to get a list based on custom metadata are not supported 

Prompts to get a list of items based on custom metadata are not supported. For example, a prompt such as "Get me a list of ServiceNow tickets assigned to Me" where "Assigned To" is based on custom metadata, doesn't work because it isn't mapped to label properties of the connection schema.

### Workaround

This issue doesn't currently have a workaround. You can get items based on matches with the title or description of the connectior item.

