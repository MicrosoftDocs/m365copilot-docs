---
title: costManagementBillingInstrument resource type
description: The Azure billing target and resource provisioning state of a spending policy.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 11/17/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dsaunders -->

# costManagementBillingInstrument resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Represents the Azure billing target and resource provisioning state in the **billingInstrument** property of a [spendingPolicy](spendingpolicy.md). Both [allUsersSpendingPolicy](allusersspendingpolicy.md) and [selectedGroupsSpendingPolicy](selectedgroupsspendingpolicy.md) inherit this property.

The service automatically creates the Azure resource needed for pay-as-you-go billing in the subscription and resource group you specify. You also supply the billing geography; you don't pre-create a billing resource or supply an existing one to attach. This complex type is returned inline on the policy and isn't an independently addressable Microsoft Graph resource.

## Properties

| Property | Type | Description |
|:---------|:-----|:------------|
| `billingRegion` | String | A supported billing-geography key, for example `UnitedStates`, not an arbitrary Azure region name. Required and non-null whenever an input object is supplied. No default geography is selected. |
| `billingResourceGroup` | String | The Azure resource group in which the service provisions the billing resource. Required and non-null whenever an input object is supplied. No default resource group is selected. |
| `billingResourceId` | String | The full Azure Resource Manager ID of the service-generated `Microsoft.PowerPlatform/accounts` resource, in the form `/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.PowerPlatform/accounts/{accountName}`. Available after the resource is provisioned. Not an existing-account attachment selector or a `Microsoft.Billing/billingAccounts` identifier. Read-only. Omitted when unavailable; non-null when present. |
| `billingSubscriptionId` | String | The Azure subscription identifier in which the service provisions the billing resource. Required and non-null whenever an input object is supplied. |
| `provisioningStatus` | [costManagementBillingInstrumentProvisioningStatus](#costmanagementbillinginstrumentprovisioningstatus-enumeration) | The service-reported provisioning state of the same billing instrument's Azure resource. Independent of the policy's `status`. Read-only. Omitted when unavailable or unrecorded; non-null when present. Absence doesn't indicate success. |

### costManagementBillingInstrumentProvisioningStatus enumeration

An [evolvable enumeration](/graph/best-practices-concept#handling-future-members-in-evolvable-enumerations) with the following possible values.

| Value | Description |
|:------|:------------|
| `succeeded` | Azure resource provisioning completed. This value doesn't imply policy enablement, permanent authorization, or ongoing resource health. |
| `inProgress` | Azure resource provisioning is in progress. |
| `failed` | Azure resource provisioning failed. |
| `unknownFutureValue` | Evolvable enumeration sentinel value. |

## Supply a billing target

Use the existing [Create spendingPolicy](../spendingpolicy-create.md) and [Update spendingPolicy](../spendingpolicy-update.md) operations.

For guidance on choosing a billing region, see [Set up usage-based billing for Copilot Credits](/copilot/implement/usage-based-billing-copilot-credits-setup).

For examples of Power Platform location names and codes, see the **Location** columns in [Power Platform's regional availability table](/power-platform/admin/unified-experience/unified-environment-types-and-templates#regional-availability-for-finance-and-operations-apps). That table describes environment availability, not the complete set of supported billing regions for this API.

- At creation, **billingInstrument** is optional. You can create a policy without supplying an explicit Azure billing target in the request. To specify a pay-as-you-go provisioning target, supply all three writable coordinates.
- Every supplied object must contain all three writable coordinates: **billingSubscriptionId**, **billingResourceGroup**, and **billingRegion**, including on `PATCH`. Empty or partial objects and null coordinates are invalid. An explicit null wrapper doesn't clear the instrument or select defaults.
- The target applies only when the resulting **billingMethods** includes `payAsYouGo`, including `prepaidCredits,payAsYouGo`. For other billing methods, the coordinates are ignored after schema validation.
- When `PATCH` changes stored funding from non-pay-as-you-go to pay-as-you-go, supply a complete target. Unrelated policy updates don't require it.
- The object isn't a nested partial-update mechanism and doesn't define instrument-only updates or replacement of an already-pay-as-you-go instrument.

Don't supply **billingResourceId** or **provisioningStatus** in requests. These computed properties are service-owned. Otherwise-valid supplied computed values are ignored, not persisted; malformed or explicit-null values fail schema validation.

## Read provisioning state

Use [Get spendingPolicy](../spendingpolicy-get.md) to read **billingInstrument**, or select **billingInstrument/provisioningStatus** to read its resource provisioning state. The instrument and its members aren't filterable or sortable.

The coordinates, resource ID, and provisioning state describe the same tracked instrument. Don't combine metadata for a pending instrument with a different active instrument. Don't infer resource provisioning state from the policy's **status**, the presence of a resource ID, or acceptance of an Azure Resource Manager deployment. For example, a disabled policy can have an instrument whose provisioning state is `succeeded`.

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.costManagementBillingInstrument",
  "billingRegion": "String",
  "billingResourceGroup": "String",
  "billingResourceId": "String",
  "billingSubscriptionId": "String",
  "provisioningStatus": "String"
}
```
