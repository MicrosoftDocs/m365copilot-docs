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