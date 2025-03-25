Skip to content
Navigation Menu
MicrosoftDocs
m365copilot-docs-pr

Type / to search
Code
Issues
73
Pull requests
9
Actions
Projects
1
Wiki
Security
Insights
Issue 683-Agent builder templates #713
 Open
KatyKoenen wants to merge 4 commits into MicrosoftDocs:main from KatyKoenen:kmkoenen-copilot-issue-683  
+146 −3 
 Conversation 6
 Commits 4
 Checks 2
 Files changed 5
 Open
Issue 683-Agent builder templates
#713
 
File filter 
 
0 / 5 files viewed
Filter changed files
 21 changes: 21 additions & 0 deletions21  
docs/agent-builder-template-career-coach.md
Viewed
Original file line number	Diff line number	Diff line change
@@ -0,0 +1,21 @@
---
title: Create an agent to help users learn and grow in their careers
description: Learn how to create a declarative agent from the Career Coach template in Copilot Studio agent builder
author: kmkoenen
ms.author: v-koenenkaty
ms.topic: conceptual
ms.localizationpriority: medium
ms.date: 004/01/2025
---

# Use the Career Coach template to build an agent

## Overview

## Prerequisites

[!INCLUDE [agent-template-prerequisites](includes/gent-template-prerequisites.md)]


## Capabilities

 67 changes: 67 additions & 0 deletions67  
docs/agent-builder-template-meeting-coach.md
Viewed
Original file line number	Diff line number	Diff line change
@@ -0,0 +1,67 @@
---
title: Create an agent to help meeting organizers
description: Learn how to create a declarative agent from the Meeting Coach template in Copilot Studio agent builder
author: kmkoenen
ms.author: v-koenenkaty
ms.topic: conceptual
ms.localizationpriority: medium
ms.date: 004/01/2025
---

# Use the Meeting Coach template to build an agent

## Overview

The Meeting Coach template is designed to assist meeting organizers in creating and running effective meetings. It can help you:
- set clear objectives
- create structured agendas
- assign meeting roles
- prepare meeting invitations
- keep meetings on track
- encouraging participation
- assigning action items

 Agents built from this template help ensure that meetings are productive, engaging, and well-organized. You can even customize the agent's knowledge base to fit your needs with internal knowledge sources and publicly available websites.

Watch [this video](https://microsofteur.sharepoint.com/teams/OneCLS/Extensibility%20Quick%20Starts/Copilot%20for%20All%20Scenarios/Meeting%20Prep%20Agent/Videos/MeetingCoach_Build_ULUM_Rev.mp4) for an overview on how to use the Meeting Coach agent template:

## Prerequisites

[!INCLUDE [agent-template-prerequisites](includes/gent-template-prerequisites.md)]

## Capabilities

Agents built on the Meeting Coach template can help meeting organizers:

- create an agenda
- assign meeting roles
- prepare invite emails

Additionally, organizers can use these agents during meetings to keep a meeting on track and encourage people to participate.

## Use cases

Meeting Coach agents are useful in scenarios that:

| **Meeting type** | **Purpose** |
| ----------   | ----------  |
| Strategic planning   | Define an organization's strategic direction  |
| Stakeholder engagement   | Gather stakeholder input and make critical organizational decisions  |
| Innovation workshops   | Brainstorm new ideas and innovative strategies  |
| Review sessions   | Ensure open and honest communication about successes and areas of improvement, even for challenging topics  |
| Sales pitches   | Present an organization's products and services to make sales |

## Extension opportunities

If you have a metered subscription or the appropriate license, you can enhance the functionality of your Meeting Coach agents by:

- **Connecting to your (CRM) solution:** Use a Power Platform Connector an API plugin to provide your agent access to details about your key account and customer contacts as well as to relevant products and projects. (Typically, CRM integration requires collaboration with your organizations service owners and IT department.)
- **Connecting to SharePoint:** Connecting your agents is particularly useful for the following use cases:
    - **Customer engagement:** By connecting SharePoint sites that include meeting materials (sales pitches, customer information, etc.) you can create an agent specialized for customer follow-up.
    - **Standardizing meetings across teams:** By connecting SharePoint sites that include template files (agendas, meeting minutes, etc.), you can standardize how meetings are organized. You can also standardize how action items and results are recorded and reported at the end of the meeting.

## Limitations

- **Interacting with the agent:** Agents created with the Meeting Coach template are designed to answer just one question at time. For best results, don't ask multiple or compound questions in a single prompt.
- **Handling sensitive information:** When building agents with this template, it is your responsibility to ensure that any personal or sensitive information used in the agent is handled according to your organization's data privacy policies.
- **Incorrect or harmful responses:** Although the agent is designed to prevent the output of incorrect and harmful content, it utilizes generative AI technology, which it can sometimes make mistakes. A disclaimer is included to remind users to verify accuracy before making decisions, especially financial decisions. Customers are responsible for conducting due diligence on AI-generated content. You can edit the disclaimer to align with your organization’s policies, but we don't recommend removing it. For more information, review the [supplemental terms](https://www.microsoft.com/en-us/business-applications/legal/supp-powerplatform-preview/).
 45 changes: 45 additions & 0 deletions45  
docs/copilot-studio-agent-builder-build-from-template.md
Copied!
Viewed
Original file line number	Diff line number	Diff line change
@@ -0,0 +1,45 @@
---
title: Use a prebuilt agent as a template to create an agent in Copilot Studio agent builder
description: Learn how to use a prebuilt agent as a template when creating agents in Copilot Studio agent builder
author: kmkoenen
ms.author: v-koenenkaty
ms.localizationpriority: medium
ms.date: 04/04/2025
ms.topic: conceptual
---

# Create a declarative agent from a template

To help you get started creating agents, Copilot Studio agent builder supports several prebuilt agents you can use as templates. You can customize these agents to fit your needs.

The following table provides information on the prebuilt agents available within Copilot Studio agent builder.

| Agent name       | Type        | Where available |
| ---------------- | ----------- | --------------- |
| Career Coach | Declarative agent  | ---  |
| Customer Insights Assistant. | Declarative agent  | ---  |
| Idea Coach | Declarative agent  | ---  |
| Interview Questions Assistant | Declarative agent  | ---  |
| Learning Coach | Declarative agent  | ---  |
| Meeting Coach | Declarative agent  | ---  |
| Prompt Coach | Declarative agent  | ---  |
| Quiz Tutor | Declarative agent  | ---  |
| Scrum Master | Declarative agent  | ---  |
| Writing Coach | Declarative agent  | ---  |

To get started, log into [Copilot Studio agent builder](https://m365.cloud.microsoft/chat). From there:

1. In the right rail, choose **Create an agent**.
1. Select the template you want to start with.
1. Choose **Configure**.
1. **Name** your new agent and update the **description** to match your specific version of the template.
1. For the **Instructions**, edit the pre-filled information for **Purpose**, **Goals**, and **Overall Direction**. For help with this, see [Write effective instructions for declarative agents](/declarative-agent-instructions).
1. In the **Knowledge** section, add the folders, files, and websites your agent will use in creating its responses.
1. If needed, [add capabilities to your declarative agent](/add-agent-capabilities).
1. Review the [starter prompts](/microsoft-copilot-extend-copilot-extensions#starter-prompts) and modify or add to them as needed.
1. Choose **Create**.


## Related content

- [Build a declarative agent from scratch with Copilot Studio agent builder](copilot-studio-agent-builder-build.md)
 6 changes: 3 additions & 3 deletions6  
docs/copilot-studio-agent-builder-build.md
Viewed
Original file line number	Diff line number	Diff line change
@@ -1,14 +1,14 @@
---
title: Use the Copilot Studio Agent Builder to Build Agents
title: Use the Copilot Studio Agent Builder to Build Agents from Scratch
description: Learn how to build agents by using Copilot Studio agent builder in Microsoft 365 Copilot.
author: jasonxian-msft
ms.author: jasonxian
ms.localizationpriority: medium
ms.date: 02/25/2025
ms.date: 04/01/2025
ms.topic: conceptual
---

# Build agents with Copilot Studio agent builder
# Build agents from scratch with Copilot Studio agent builder

The Copilot Studio agent builder provides a simple interface that you can use to quickly and easily build declarative agents, either by using natural language or manually.

 10 changes: 10 additions & 0 deletions10  
docs/includes/agent-template-prerequisites.md
Viewed
Original file line number	Diff line number	Diff line change
@@ -0,0 +1,10 @@
---
author: kmkoenen
ms.author: v-koenenkaty
ms.topic: include
ms.localizationpriority: medium
---

<!-- markdownlint-disable MD041-->
- A working knowledge of how to [build agents with Copilot Studio agent builder](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/copilot-studio-agent-builder-build)
- An understanding of how to [write effective instructions for declarative agents](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/declarative-agent-instructions)
FooterMicrosoft Open Source
Microsoft Open Source avatar
Microsoft Open Source
Docs
Portal
GitHub @ MSFT
Support Options
Data Protection Notice
Docs
Portal
GitHub @ MSFT
Support Options
Data Protection Notice
© 2025 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact
Manage cookies
Do not share my personal information
Copied!