---
title: Microsoft 365 Copilot Retrieval API Pay-as-you-go overview
description: "Learn about Microsoft 365 Copilot Retrieval API Pay-as-you-go billing and enablement for non-Copilot licensed users"
author: JasonFriedman10
ms.author: jfriedman
ms.date: 01/13/2026
ms.topic: overview
ms.localizationpriority: medium
---

## Microsoft 365 Copilot Retrieval API Pay-as-you-go for non-Copilot licensed users (Public Preview)

### Introduction

Microsoft 365 Copilot Retrieval API Pay-as-you-go for non-Copilot licensed users offers access to the Retrieval API for tenant-level data sources such as SharePoint, SharePoint Embedded (Preview) and Copilot Connectors. See details under the SharePoint Embedded billing changes below. User-level data sources such as OneDrive are not available for non-Copilot licensed users via Pay-as-you-go consumption of the Retrieval API. By enabling this service, you also enable users without a Microsoft 365 Copilot license to access the SharePoint tool [SharePoint tool in Azure AI Foundry](https://learn.microsoft.com/en-us/azure/ai-foundry/agents/how-to/tools-classic/sharepoint-samples?view=foundry-classic&pivots=python) in Azure AI Foundry via Pay-as-you-go consumption of the Retrieval API.

#### Billing changes for SharePoint Embedded

In the future, both Copilot-licensed users and non-Copilot licensed users will be charged for access to SharePoint Embedded data source from Retrieval API. Additionally, as part of this change, the enablement and disablement process for Pay-as-you-go access to SharePoint Embedded data source via Retrieval API will use the SharePoint Embedded billing setup and will be communicated in advance.

### Prerequisites

- An Azure subscription and Azure Resource Group with admin access as owner or contributor on the subscription in good standing
- A Microsoft 365 tenancy with M365 admin access
- At least 1 Microsoft 365 Copilot license in the tenant before enablement and during use of the Pay-as-you-go service

If any of these prerequisite requirements are no longer met after enabling this feature, then Microsoft reserves the right to disable the Pay-as-you-go service for the customer. No SLA applies to this Feature Preview.

### Payment details

Microsoft Offering uses pay-as-you-go (PAYG) billing through an Azure subscription. Microsoft Offering billing is determined by how many API calls applications in your tenant make to the Retrieval API on behalf of non-Copilot licensed users with Pay-as-you-go billing enabled for them. Customer will be able to view this usage as meter events through the Azure subscription it chooses.

Microsoft 365 Copilot Retrieval API Pay-as-you-go for non-Copilot licensed users pricing is as follows:

| API | Meter Unit | Price |
|---|---|---|
| Microsoft 365 Copilot Retrieval API | $/API call | $0.10 |

The meter for usage tracking is: **Pay as you go Copilot Credit** under **Microsoft Copilot Studio** with the feature tag **m365copilotretrievalapi**.


## Enablement and Disablement Process
To enable and disable this service, please see [these steps](https://learn.microsoft.com/en-us/copilot/microsoft-365/pay-as-you-go/setup). 

There can be a lag of around 2 hours for enablement to propagate. Once enablement has propagated, the first API call made after the propagation may fail. On the second API call and beyond, the calls should succeed. This is due to the Billing Policy configuration getting updated.

Once enabled, any app in the customer's tenant which has the required Retrieval API permissions can call the Retrieval API on behalf of a non-Copilot licensed user who has Retrieval API Pay-as-you-go turned on for them. This includes single-tenant apps and multi-tenant apps in the customer's tenant.

There can be a lag of around 2 hours for the disablement to take effect. Charges will apply if the API is used during this time frame if the disablement has not propagated fully. In addition, after the disablement finishes propagating, the first API call made after propagation may result in a charge, while the system updates the Billing Policy state. After that point, the disablement would be complete, and no additional charges would be incurred. This is due to the Billing Policy configuration being updated.
