---
title: Build a declarative agent using SharePoint
description: Learn to build a local declarative agent within SharePoint.
author: kmkoenen
ms.author: v-koenenkaty
ms.topic: concept-article
ms.localizationpriority: medium
ms.date: 03/15/2025
---

# Build a declarative agent using SharePoint

You can [use SharePoint](https://microsoft.sharepoint.com/sites/CopilotInfo/SitePages/Custom-Copilots.aspx) to build local declarative agents that are integrated into SharePoint. These agents pull information from the sites, libraries, and files that you specify to deliver the targeted information that employees need while preserving your existing security settings and permissions.

## Roles and permissions for agents in SharePoint

The following table summarizes the roles and permissions available for declarative agents built with SharePoint.

| **Role** | **Permissions/Available actions** |
| -------- | -------- |
| **Microsoft 365 Global Administrator** | Can enable agent licenses for SharePoint users in the Microsoft Admin Center. |
| **SharePoint Administrator** | Can create, test, validate, and publish declarative agents from within SharePoint. They can also approve and configure default agents, and manage user permissions for accessing agents. |
| **Site Administrator/Owner** | Can approve, edit, and manage site agents, including specifying a default agent for the site. |
| **Site Members** | Can create and edit documents in the document library and can create and edit agents for the site. |
| **Site Visitor** | Can access existing SharePoint agents and have read-only permissions for content in the document library. |
| **Site Guests** | Can't create or use existing SharePoint agents. |

For more information on how to build a declarative agent from within SharePoint, see [Anyone can create copilots from SharePoint in a few clicks](https://techcommunity.microsoft.com/blog/spblog/microsoft-build-2024-create-custom-copilots-from-sharepoint/4146527#:~:text=Anyone%20can%20create%20copilots%20from%20SharePoint%20in%20a%20few%20clicks)

## Related content

- [Microsoft Build 2024: Create custom copilots from SharePoint](https://techcommunity.microsoft.com/blog/spblog/microsoft-build-2024-create-custom-copilots-from-sharepoint/4146527)
- [Optimize Sharepoint content retrieval](./optimize-sharepoint-content.md)
