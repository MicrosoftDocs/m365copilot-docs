---
title: Microsoft 365 Copilot Retrieval API Pay-as-you-go Terms of Use (Public Preview)
description: "Microsoft 365 Copilot Retrieval API Pay-as-you-go Terms of Use (Public Preview)"
author: JasonFriedman10
ms.author: jfriedman
ms.date: 01/13/2026
ms.topic: overview
ms.localizationpriority: medium
---

Effective Date: December 12, 2025

Preview Period: The Preview Period continues in effect until December 12, 2026, or 30 days after 
Commercial General Availability of the Preview Feature, whichever is first. You may terminate 
your use of the Preview Feature at any time.

Preview Feature: Microsoft 365 Copilot Retrieval API Pay-as-you-go for non-Copilot licensed 
users (“Microsoft Offering”) offers access to the Retrieval API for tenant-level data sources such 
as SharePoint and Copilot Connectors, with access to SharePoint Embedded coming later during 
the Preview Period. See details under the SharePoint Embedded billing changes below. User-level 
data sources such as OneDrive are not available for non-Copilot licensed users via Pay-as-you-go 
consumption of the Retrieval API.

The Retrieval API is a streamlined solution for Retrieval Augmented Generation (RAG) without 
the need to replicate, index, chunk, and secure your data in a separate index. The API 
understands the user's context and intent and performs query transformations to yield the most 
relevant results, which is more difficult to achieve with lexical search or even basic RAG from 
alternate sources.

For non-Copilot licensed users leveraging the Retrieval API via Pay-as-you-go, the Retrieval API 
accomplishes RAG by extracting up-to-date and relevant text snippets from tenant-level data 
sources such as SharePoint and Copilot connectors, with access to SharePoint Embedded coming 
later during the Preview Period. The Retrieval API keeps your data in place and upholds your 
access and governance controls. The Retrieval API ensures that synthesized responses are 
informed by the latest and most relevant data. This process enhances the reliability and 
usefulness of your generative AI solutions. The Microsoft 365 Copilot Retrieval API allows you to 
ground your generative AI solutions with your Microsoft 365 and non-Microsoft knowledge by 
returning relevant text chunks from the hybrid index that powers Microsoft 365 Copilot.

Customers will be able to sign up for Microsoft Offering by enabling “Microsoft 365 Copilot 
Retrieval API” as a Pay-as-you-go service in Microsoft 365 Admin Center, linking a valid Azure 
subscription and Azure Resource Group for billing purposes. Customer can enable Microsoft 
Offering for all users in their tenant or for a specific group of users in their tenant. 

Once Microsoft Offering is enabled, any app in the customer’s tenant which has the required 
Retrieval API permissions can call the Retrieval API on behalf of a non-Copilot licensed user who 
has Microsoft Offering turned on for them. This includes single-tenant apps and multi-tenant 
apps in the customer’s tenant.

To terminate your use of the Microsoft Offering during the Preview Period, you can disable 
“Microsoft 365 Copilot Retrieval API” as a Pay-as-you-go service in Microsoft 365 Admin Center.

The disablement may take up to 24 hours to propagate in the system. Charges will apply if the 
API is used during this time frame if the disablement has not propagated fully. In addition, after 
the disablement finishes propagating, the first API call made after propagation may result in a
charge, while the system updates the Billing Policy state. After that point, the disablement would 
be complete, and no additional charges would be incurred. Microsoft may change or discontinue 
the Preview Feature at any time with or without notice. Microsoft may also choose not to make 
the Preview Feature generally commercially available.

Prerequisite Requirements to enable Microsoft Offering pay-as-you-go are: 
1. An Azure subscription and Azure Resource Group with admin access as owner or 
contributor on the subscription in good standing. 
2. A Microsoft 365 tenancy with M365 admin access
3. At least 1 Microsoft 365 Copilot license in the tenant before enablement and during use 
of the Microsoft Offering

If any of these prerequisite requirements are no longer met after enabling Microsoft Offering, 
then Microsoft reserves the right to disable Microsoft Offering for the customer.

Billing changes for SharePoint Embedded
In the future, both Copilot-licensed users and non-Copilot licensed users will be charged for 
access to SharePoint Embedded data source from Retrieval API. Additionally, as part of this 
change, the enablement and disablement process for Pay-as-you-go access to SharePoint 
Embedded data source via Retrieval API will use the SharePoint Embedded billing setup and 
will be communicated in advance.

No SLA applies to this Feature Preview.

PAYMENT TERMS
Microsoft Offering uses pay-as-you-go (PAYG) billing through an Azure subscription. Microsoft 
Offering billing is determined by how many API calls applications in your tenant make to the 
Retrieval API on behalf of non-Copilot licensed users with Pay-as-you-go billing enabled for 
them. Customer will be able to view this usage as meter events through the Azure subscription 
it chooses.

Microsoft 365 Copilot Retrieval API Pay-as-you-go for non-Copilot licensed users pricing is as follows:

| API | Meter Unit | Price |
|---|---|---|
| Microsoft 365 Copilot Retrieval API | $/API call | $0.10 |

The meter for usage tracking is: **Pay as you go Copilot Credit** under **Microsoft Copilot Studio** with the feature tag **m365copilotretrievalapi**.
