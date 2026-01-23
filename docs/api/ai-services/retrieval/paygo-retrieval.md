---
title: Microsoft 365 Copilot Retrieval API pay-as-you-go consumption (preview)
description: "Learn about Microsoft 365 Copilot Retrieval API pay-as-you-go billing and enablement for users without a Microsoft 365 Copilot add-on license."
author: JasonFriedman10
ms.author: jfriedman
ms.date: 01/13/2026
ms.topic: overview
ms.localizationpriority: medium
---

# Microsoft 365 Copilot Retrieval API pay-as-you-go consumption (preview)

The Microsoft 365 Copilot Retrieval API is available to users without a Microsoft 365 Copilot add-on license via pay-as-you-go consumption (preview). The pay-as-you-go model offers access to the Retrieval API for tenant-level data sources such as SharePoint and Microsoft 365 Copilot connectors. User-level data sources such as OneDrive aren't available via Retrieval API pay-as-you-go consumption.

Users without Copilot licenses who have pay-as-you-go enabled for the Retrieval API can use the SharePoint tool in Microsoft Foundry via Pay-as-you-go consumption.

## Prerequisites

To use pay-as-you-go consumption for the Retrieval API, you need:

- An Azure subscription and Azure Resource Group with admin access as owner or contributor on the subscription in good standing
- A Microsoft 365 tenancy with Microsoft 365 admin access.
- At least one Microsoft 365 Copilot license in the tenant before enablement and during use of the pay-as-you-go service.

If any of these prerequisite requirements are no longer met after you enable pay-as-you-go consumption, Microsoft reserves the right to disable the pay-as-you-go service for the customer.

No service-level agreement (SLA) applies to this feature preview.

## Payment terms

Microsoft Offering uses pay-as-you-go billing through an Azure subscription. Microsoft Offering billing is determined by how many API calls applications in your tenant make to the Retrieval API on behalf of non-Copilot licensed users with pay-as-you-go billing enabled. Customer can view this usage as meter events through the Azure subscription it chooses.

Microsoft Offering Feature Preview pricing is as follows.

| Microsoft 365 Copilot Retrieval API| Meter unit | Price |
|---|---|---|
| **Meter:** Pay as you go Copilot Credit<br/>**Meter category:** Microsoft Copilot Studio<br/>**Feature tag:** m365copilotretrievalapi | $/API call | $0.10 |

## Enable and disable pay-as-you-go

To enable and disable the pay-as-you-go consumption service, in the Microsoft 365 admin center, go to **Copilot** > **Billing & usage** > **Pay-as-you-go** > **Microsoft 365 Copilot Retrieval API**.

It can take about two hours for enablement to propagate. After the enablement propagates, the first API call might fail. On the second API call and beyond, the calls should succeed. This issue occurs because the Billing Policy configuration is updating.

After the service is enabled, any app in the customer's tenant that has the required Retrieval API permissions can call the Retrieval API on behalf of a user who has pay-as-you-go enabled. These apps include single-tenant and multitenant apps in the customer's tenant.

If you disable pay-as-you-go consumption, it can take about two hours for the disablement to take effect. Charges apply if the API is used during the time that the disablement isn't fully propagated. After the disablement propagates, the first API call made might result in a charge, while the system updates the Billing Policy state. After that, the disablement is complete, and no other charges are incurred. 

## Related content

- [Overview of the Microsoft 365 Copilot Retrieval API](/microsoft-365-copilot/extensibility/api/ai-services/retrieval/overview)