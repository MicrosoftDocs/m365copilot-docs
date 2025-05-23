---
title: Optimize SharePoint Content Retrieval in Your Agent
description: Find best practices to optimize how your agent in Microsoft 365 Copilot retrieves content from SharePoint.
author: lauragra
ms.author: lauragra
ms.topic: best-practice
ms.date: 01/31/2025
---

# Optimize SharePoint content retrieval

Declarative agents extend Microsoft 365 Copilot to customize the experience for users. When you build declarative agents, you can add SharePoint content as a knowledge source. This article describes the best practices to apply to optimize how your agent returns data from SharePoint knowledge sources.

> [!NOTE]
> Agents grounded in SharePoint data are only available to users in tenants that have Copilot Studio metering enabled or users who have Microsoft 365 Copilot licenses. For details, see [Agent capabilities for Microsoft 365 users](prerequisites.md#agent-capabilities-for-microsoft-365-users).

## Reference only relevant SharePoint files

You can reference specific SharePoint files via the `OneDriveAndSharePoint` object in the [agent manifest](declarative-agent-manifest-1.4.md#onedrive-and-sharepoint-object), either by URL or by ID.

When you specify up to 20 files, Copilot searches the full contents of all files. Copilot will have full access to all the file content and returns the appropriate content to the user based on their query. If you specify more than 20 SharePoint files, Copilot chooses content from the most relevant 20 files, rather than searching all the files specified, and only returns content from those files.

To optimize the content that Copilot returns, choose the most relevant SharePoint files to specify in your manifest. For example, if a folder contains eight files and only five are relevant to the users' task, specify the five files individually instead of referencing the folder. As a best practice to ensure that Copilot searches the full file contents, strive to limit the total page count of the relevant files that you specify to no more than 300 pages.

## Limit SharePoint file size

When you reference SharePoint sites or folders by URL in your [agent manifest](declarative-agent-manifest-1.4.md#onedrive-and-sharepoint-object), Copilot might have trouble identifying the right content to return to the user when the files included in the site or folder are large. To reduce the risk that Copilot won't find the right content in the sites or folders you reference, strive to keep your SharePoint files to a maximum of 36,000 characters (approximately 15-20 pages). If your files are larger than 36,000 characters, consider breaking them up into separate shorter files to help Copilot scan the full contents.

Alternatively, you can reference specific SharePoint files by ID. Copilot will search the full contents if you specify five or fewer files, or it will search the five most relevant files if you specify more than five files.

## Remove special formatting

Copilot is currently unable to parse tables and other special formatting in SharePoint content. To ensure that Copilot can consume your SharePoint content, remove tables or other special formatting from the content before you reference it in your agent manifest.

## Related content

- [Declarative agents overview](overview-declarative-agent.md)
- [Known issues](known-issues.md)

