---
title: Optimize SharePoint Content Retrieval in Your Agent
description: Find best practices to optimize how your agent in Microsoft 365 Copilot retrieves content from SharePoint.
author: lauragra
ms.author: lauragra
ms.topic: best-practice
ms.date: 01/21/2025
---

# Optimize SharePoint content retrieval

Declarative agents extend Microsoft 365 Copilot to customize the experience for users. When you build declarative agents, you can add SharePoint content as a knowledge source. This article describes the best practices to apply to optimize how your agents returns data from SharePoint knowledge sources.

> [!NOTE]
> Agents grounded in SharePoint data are only available to users in tenants that have Copilot Studio metering enabled or users who have Microsoft 365 Copilot licenses. For details, see [Agent capabilities for Microsoft 365 users](prerequisites.md#agent-capabilities-for-microsoft-365-users).

## Limit the number of specific files you reference

You can reference specific SharePoint files in your agent manifest via the `OneDriveAndSharePoint` object in the [agent manifest](declarative-agent-manifest-1.2.md), either by URL or by ID. As a best practice, specify no more than five specific files to ensure that Copilot searches the full contents of all files. Copilot will have full access to all the content in all five files and is able to return the right contents to the user based on their query.

When you specify more than five SharePoint files, Copilot chooses content from the most relevant five files, and as a result it might not return all relevant content to the user.

## Limit SharePoint file size

When you reference SharePoint sites, folders, or files in your agent, Copilot might have trouble identifying the right content to return to the user when the files are large. To reduce the risk that Copilot won't find the right content in the resources you reference, strive to keep your SharePoint sources to a maximum of 36,000 characters (approximately 15-20 pages). If your files are larger than 36,000 characters, consider breaking them up into separate shorter files to help Copilot scan the full contents.

## Remove special formatting

Copilot is currently unable to parse tables and other special formatting in SharePoint content. To ensure that Copilot can consume your SharePoint content, remove tables or other special formatting from the content before you reference it in your agent manifest.

## Related content

- [Declarative agents overview](overview-declarative-agent.md)
- [Known issues](known-issues.md)

