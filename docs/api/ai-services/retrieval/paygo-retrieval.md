---
title: Microsoft 365 Copilot Retrieval API Pay-as-you-go overview
description: "Learn about Microsoft 365 Copilot Retrieval API Pay-as-you-go billing and enablement for non-Copilot licensed users"
author: JasonFriedman10
ms.author: jfriedman
ms.date: 01/13/2026
ms.topic: overview
ms.localizationpriority: medium
---

# Microsoft 365 Copilot Retrieval API Pay-as-you-go for non-Copilot licensed users (Public Preview)

### Introduction

Microsoft 365 Copilot Retrieval API Pay-as-you-go for non-Copilot licensed users offers access to the Retrieval API for tenant-level data sources such as SharePoint and Copilot Connectors. User-level data sources such as OneDrive are not available for non-Copilot licensed users via Pay-as-you-go consumption of the Retrieval API.

Additionally, non-Copilot licensed users who have Pay-as-you-go enabled for Retrieval API will be able to leverage the SharePoint tool in Microsoft Foundry, via Pay-as-you-go consumption.

### Prerequisites

- An Azure subscription and Azure Resource Group with admin access as owner or contributor on the subscription in good standing
- A Microsoft 365 tenancy with M365 admin access
- At least 1 Microsoft 365 Copilot license in the tenant before enablement and during use of the Pay-as-you-go service

If any of these prerequisite requirements are no longer met after enabling this feature, then Microsoft reserves the right to disable the Pay-as-you-go service for the customer.

No SLA applies to this Feature Preview.

<u>**PAYMENT TERMS**</u>
Microsoft Offering uses pay-as-you-go (PAYG) billing through an Azure subscription. Microsoft Offering billing is determined by how many API calls applications in your tenant make to the Retrieval API on behalf of non-Copilot licensed users with Pay-as-you-go billing enabled for them. Customer will be able to view this usage as meter events through the Azure subscription it chooses.

<br>

**Microsoft Offering Feature Preview pricing is as follows:**

| Microsoft 365 Copilot Retrieval API| Meter Unit | Price |
|---|---|---|
| **Meter:** Pay as you go Copilot Credit<br/>**Meter category:** Microsoft Copilot Studio<br/>**Feature tag:** m365copilotretrievalapi | $/API call | $0.10 |

## Enablement and Disablement Process
To enable and disable this service, you can visit Microsoft 365 Admin Center → Copilot → Billing & usage → Pay-as-you-go → Microsoft 365 Copilot Retrieval API.

There can be a lag of around 2 hours for enablement to propagate. Once enablement has propagated, the first API call made after the propagation may fail. On the second API call and beyond, the calls should succeed. This is due to the Billing Policy configuration getting updated.

Once enabled, any app in the customer's tenant which has the required Retrieval API permissions can call the Retrieval API on behalf of a non-Copilot licensed user who has Retrieval API Pay-as-you-go enabled for them. This includes single-tenant apps and multi-tenant apps in the customer's tenant.

There can be a lag of around 2 hours for the disablement to take effect. Charges will apply if the API is used during this time frame if the disablement has not propagated fully. In addition, after the disablement finishes propagating, the first API call made after propagation may result in a charge, while the system updates the Billing Policy state. After that point, the disablement would be complete, and no additional charges would be incurred. This is due to the Billing Policy configuration being updated.
