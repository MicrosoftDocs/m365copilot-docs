---
title: Enable feedback for your declarative agents for Microsoft 365 Copilot
description: Learn how to configure your declarative agent to enable user feedback.
author: lauragra
ms.author: lauragra
ms.topic: concept-article
ms.localizationpriority: medium
ms.date: 09/09/2025
---

# Enable feedback for your agent

You can help improve the performance and accuracy of your declarative agents by enabling the feedback settings across all Microsoft 365 apps. When you do so, users can rate the responses your agents generate and provide logs, screenshots, and contact email addresses when they submit their feedback. 

This article explains how to configure the feedback settings for Microsoft 365 apps, how to review and set policies to manage how users submit and interact with feedback, and how to send diagnostic logs for Copilot issues on behalf of users.

## Review specific policies you can configure

The following table identifies the relevant feedback policies you can configure.

| Policy name | Default state | Control summary |
| ----------- | ------------- | --------------- |
| Allow users access to feedback portal  | On | Manage user access to the feedback portal where users can follow up on their feedback and participate in community feedback. |
| Allow users to submit feedback to Microsoft | On | Controls feedback entry points across applications. |
| Allow users to receive and respond to in-product surveys from Microsoft | On | Controls survey prompts within product. |
| Allow users to include screenshots and attachments when they submit feedback to Microsoft | On | Allows users to choose relevant files, screen recordings, and screenshots to help Microsoft better understand and troubleshoot their feedback. |
| Allow Microsoft to follow up on feedback submitted by users | On | Determines if user can share contact info with feedback/survey for follow-up by Microsoft. Also allows users to get notified of feedback status changes. Users can manage communications settings in the feedback portal. |
| Allow users to include log files and content samples when feedback is submitted to Microsoft | On | Allows users to include Microsoft generated files such as additional log files and content samples when relevant to feedback they're submitting. Examples might include Microsoft 365 Copilot prompt and response interactions. |

> [!IMPORTANT]
> The **Allow users to access the feedback portal** policy requests the policies for the person who signs in. It is classed as a cloud policy because the feedback portal is a web application that makes a call to the cloud policy service, and the cloud policy service is also a web application. If the **Allow users to access the feedback portal** policy is configured, the feedback portal receives the configured policy value in the response from the cloud policy service.
>
> The **Allow users to access the feedback portal** policy isn’t defined in the Administrative Template (.ADMX) files used in Windows environments to define Group Policy settings and doesn’t have a corresponding registry key available to set the policy. To improve security, you should create a cloud policy to enforce it.

## Send diagnostic logs for Mirosoft 365 Copilot

To send diagnostic logs for Copilot on behalf of individual users who are having issues, an admin must:

1. Sign in to the Microsoft 365 admin center as a Global Admin.
1. On the left pane, select **Copilot**.
1. Review the information on the **Overview** page.
    - Assess the active users and identify which apps are using Copilot.
    - Review the assigned licenses and message center information.
1. Select the **Settings** tab.
1. Review the setting names and descriptions.
1. Select **Copilot diagnostic logs**.
    :::image type="content" source="assets/images/copilot-diagnostic-logs.jpg" alt-text="Screenshot of the Copilot diagnostic logs setting in the Microsoft 365 admin center.":::
1. In the **Copilot for Microsoft 365 diagnostic logs** pane, review the information and then select **Start**.
1. On the **Collect data** pane, review the information and enter your email into the **Search for and select the user you want to submit Copilot feedback logs for** box and select **Next**.
1. On the **Review and send Copilot feedback to Microsoft** pane, enter a comment, and then select **Submit**.

## Related content

- [Manage Microsoft feedback for your organization](https://learn.microsoft.com/microsoft-365/admin/manage/manage-feedback-ms-org?view=o365-worldwide&preserve-view=true)
- [Declarative agents overview](overview-declarative-agent.md)