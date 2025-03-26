---
title: Create an agent to help users learn complex topics 
description: Learn how to create a declarative agent in Copilot Studio agent builder from the Learning Coach template.
author: kmkoenen
ms.author: v-koenenkaty
ms.topic: conceptual
ms.localizationpriority: medium
ms.date: 04/01/2025
---

# Use the Learning Coach template to build an agent

## Overview

The Learning Coach declarative agent template agent is designed to help users understand complex topics by breaking them down into simple, intermediate, and detailed summaries. It creates structured learning plans, and helps users practice skills and prepare for tests. Theses agents provide tailored exercises, guide optimal learning processes, and offer interactive language practices. Key features include creating detailed learning plans, performing knowledge gap analyses, recommending educational resources, and offering study techniques.


## Prerequisites

[!INCLUDE [agent-template-prerequisites](includes/agent-template-prerequisites.md)]

## Capabilities

Learning Coach agents empower users to achieve their learning goals through structured guidance and support. Key agent capabilities include:

- Performing knowledge gap analyses
- Crafting tailored learning plans and exercises based on individual knowledge gaps, study preferences, and learner goals
- Breaking complex topics into digestible summaries at simple, intermediate, and detailed levels for enhanced learner comprehension
- Providing targeted exam preparation guidance, recommendations for educational resources, and interactive language practice
- Suggesting personalized study techniques

## Use cases

These agents are useful in scenarios such as:

| **Scenario** | **Description** |
| ----------   | ----------  |
| Content comprehension | Helps learners comprehend complex topics by breaking them down into simpler chunks. |
| Knowledge reinforcement | Guides learners through exercises on the skills and knowledge that they already have. |
| Learning plan customization | Helps create a tailored learning plan to best fit the needs of the user by assessing the learner's existing knowledge and asking questions about their preferred approach to learning.  |
| Test preparation | Helps learners prepare for academic or certification exams |
| Language education | Facilitates learning new languages based on the user's current knowledge |

## Extension opportunities

You can enhance the functionality of your Learning agents by connecting to additional resources via Microsoft Graph connectors, Power Platform connectors, or API plugins, depending on the source system in use. Here are some ideas:

- **Link with your Learning Management System (LMS):** Link with your preferred LMS or Massive Open Online Course (MOOC) platforms to source up-to-date content, track progress, and streamline certification pathways.
- **Leverage internal knowledge repositories:** Connect your Learning Coach to a SharePoint document library that contains company training materials, research papers, or best practices. This allows the agent to provide contextualized learning recommendations based on your organization’s proprietary content.

<!-- Note about IT involvement -->
[!INCLUDE [agent-template-extension-note](includes/agent-template-extension-note.md)]

<!-- Limitations -->

[!INCLUDE [agent-template-limitations](includes/agent-template-limitations.md)]