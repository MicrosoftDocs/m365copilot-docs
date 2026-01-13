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

Microsoft 365 Copilot Retrieval API Pay-as-you-go for non-Copilot licensed users offers access to the Retrieval API for tenant-level data sources such as SharePoint, SharePoint Embedded (Preview) and Copilot Connectors. See details under the SharePoint Embedded billing changes below. User-level data sources such as OneDrive are not available for non-Copilot licensed users via Pay-as-you-go consumption of the Retrieval API.

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

### Enablement Process

Once the customer has been allowlisted for the Private Preview, they can turn on the service by enabling "Microsoft 365 Copilot Retrieval API" as a Pay-as-you-go service in Microsoft 365 Admin Center, linking a valid Azure subscription and Azure Resource Group for billing purposes. Customer can enable this Pay-as-you-go service for all users in their tenant or for a specific group of users in their tenant. There can be a lag between 2 and 24 hours for the enablement to propagate. Once enablement has propagated, the first API call made after the propagation may fail. On the second API call and beyond, the calls should succeed. This is due to the Billing Policy configuration getting updated.

Once enabled, any app in the customer's tenant which has the required Retrieval API permissions can call the Retrieval API on behalf of a non-Copilot licensed user who has Retrieval API Pay-as-you-go turned on for them. This includes single-tenant apps and multi-tenant apps in the customer's tenant.

#### Steps to enable:

1. Sign in to admin.microsoft.com with an admin account, click the "Copilot" tab on the left, then click "Billing & usage"
2. On the "Billing & usage" page, click "Add a billing policy"
3. Name your billing policy and connect it to an existing Azure Subscription and Azure Resource Group that the signed-in admin has access to
4. Choose to configure the Billing Policy for "All users" in your tenant or a "Specific group" of users in your tenant
5. (Optional) Add a budget alert. Please note that this budget alert does not enforce the budget, it only alerts you when the cost reaches the threshold you specify
6. Review and create the billing policy
7. Navigate to "Pay-as-you-go services", and click "Microsoft 365 Copilot Retrieval API" to connect your Billing Policy
8. For the Billing Policies you want to connect to "Microsoft 365 Copilot Retrieval API", toggle their Connection status to "Connected" and then press "Save"
9. Verify which billing policies are connected to "Microsoft 365 Copilot Retrieval API"

### Disablement Process

The customer can disable the service by disabling "Microsoft 365 Copilot Retrieval API" as a Pay-as-you-go service in Microsoft 365 Admin Center. There can be a lag between 2 and 24 hours for the disablement to take effect. Charges will apply if the API is used during this time frame if the disablement has not propagated fully. In addition, after the disablement finishes propagating, the first API call made after propagation may result in a charge, while the system updates the Billing Policy state. After that point, the disablement would be complete, and no additional charges would be incurred. This is due to the Billing Policy configuration being updated.

#### Steps to disable:

1. Go to "Pay-as-you-go services", click "Microsoft 365 Copilot Retrieval API". For the Billing Policies you want to disable, toggle their Connection status to "Disconnected" and then press "Save"
2. Go to "Pay-as-you-go services", and verify that there are no Billing Policies associated with the "Microsoft 365 Copilot Retrieval API"

### View costs from the feature

#### Steps to view costs:

1. Sign in to portal.azure.com with a relevant admin role, and navigate to "Cost Management + Billing"
2. Click "Cost analysis" in "Cost management" tab, select your time range, set the filter "Meter category" = "Microsoft Copilot Studio". Use the "feature" Tag to see the costs associated with "m365copilotretrievalapi" feature

