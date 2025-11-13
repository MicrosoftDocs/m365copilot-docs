---
title: Create declarative agents with task-specific large language models tuned with Microsoft 365 Copilot Tuning (preview)
description: Learn how use Copilot Studio to create declarative agents that use task-specific large language models (LLMs) tuned with Microsoft 365 Copilot Tuning.
author: jasonjoh
ms.author: jasonjoh
ms.topic: how-to
ms.localizationpriority: medium
ms.date: 09/11/2025
---

# Create declarative agents with Microsoft 365 Copilot Tuning models (preview)

[Microsoft 365 Copilot Tuning](/copilot/microsoft-365/copilot-tuning-overview) allows organizations to fine-tune large language models (LLMs) by using their own tenant data. These fine-tuned models power agents that can perform domain-specific tasks based on the organization's unique knowledge. This article explains how to use Copilot Studio to create declarative agents that use those fine-tuned models.

> [!NOTE]
> Copilot Tuning is currently available through the **Early Access Preview (EAP)** program. For details about requirements and how to enroll, see the [Microsoft 365 Copilot Tuning admin guide](/copilot/microsoft-365/copilot-tuning-admin-guide).

## Prerequisites

To create a declarative agent based on a fine-tuned model, you need:

- A [Microsoft 365 production environment](/copilot/microsoft-365/microsoft-365-copilot-overview#availability) with a [Microsoft 365 Copilot](https://www.microsoft.com/microsoft-365/copilot/enterprise#FAQ) license.
- Access to a **fine-tuned model**, granted via **security groups**. The model maker assigns security groups to the model when they create it.

## Create the agent

To create the agent:

1. Open **Microsoft 365 Copilot Chat** and select **Create agent** from the left-hand navigation.

1. In the **What is the purpose of your agent?** dialog box, select **Task-specific**, and then choose **Continue**.

    > [!NOTE]
    > If this dialog doesn’t appear,  Copilot Tuning might not be enabled in your organization, or you might not have access to any fine-tuned models. Check with your organization's administrators.

1. In the next dialog box, select a fine-tuned model from the list of models, then select **Done**.

1. Finish customizing your agent by filling in the remaining fields. For more information, see [Build agents using Copilot Studio](copilot-studio-lite-build.md).

## Add knowledge sources

The following table shows the supported knowledge sources for each tuning type.

| Tuning type | Supported knowledge sources |
|-------------|-----------------------------|
| Expert Q&A  | SharePoint, OneDrive, Salesforce, ServiceNow, Confluence, Zendesk, Azure AI Search Index |
| Summarization & Document Generation | Not supported |

> [!TIP]
> Agents tuned for Q&A can now integrate with **multiple unstructured knowledge sources** beyond SharePoint and OneDrive.

## Related content

- [Microsoft 365 Copilot Tuning overview](/copilot/microsoft-365/copilot-tuning-overview)
- [Build agents using Copilot Studio](copilot-studio-lite-build.md)
