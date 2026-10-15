---
title: Microsoft 365 Copilot Cost Management API overview
description: Learn how to use the Microsoft 365 Copilot Cost Management API to govern and observe tenant consumption of Copilot credits.
author: DanielSaunders
ms.author: dsaunders
ms.topic: overview
ms.localizationpriority: medium
ms.date: 10/02/2026
---

<!-- cSpell:ignore dsaunders -->

# Microsoft 365 Copilot Cost Management API overview

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

The Microsoft 365 Copilot Cost Management API lets administrators govern and observe tenant consumption of Copilot and AI **credits** through Microsoft Graph, rooted at `/copilot/costManagement`. The contract is unit-aware and credit-denominated. It covers the tenant credit balance snapshot, spending-policy management, group audience scoping, per-service settings, notify-only threshold alerts and their recipients, and per-user consumption balances.

The API is credit-denominated and deliberately excludes rated currency, invoices, prices, and purchase forecasts.

## Key capabilities

- Read the tenant-wide credit balance snapshot, with one row per billing method.
- Create, read, update, and delete spending policies that cap Copilot Credits consumption for an audience.
- Scope a policy to every user in the tenant (`allUsersSpendingPolicy`) or to selected groups (`selectedGroupsSpendingPolicy`).
- Manage a policy's group audience through `$ref` reference links.
- Configure per-service settings that govern or exclude individual AI services within a policy.
- Configure notify-only threshold alerts and manage their recipients.
- Diagnose a user's per-service consumption balance and understand why a user can or can't consume a service.

## Example scenarios

- An administrator sets a monthly credit cap for a pilot group and alerts admins when usage reaches 80 percent.
- An administrator adds or removes a governed service on an existing policy.
- A support administrator diagnoses why a user can no longer consume a service by reading that user's per-service balance.
- A FinOps reader lists the tenant's enabled spending policies and reviews their configured limits.

## Personas and roles

Target personas include the AI Administrator and License Administrator for policy management; the FinOps/Global Reader and Billing Administrator for reads; and the Support/Helpdesk administrator for per-user diagnostics. Creating a spending policy also requires the Billing Administrator or Global Administrator directory role at runtime.

## Permissions

This API uses the `CopilotCostManagement-*` permission family. Most operations support only delegated (work or school account) permissions; the tenant credit balance read ([getTenantCreditBalance](costmanagementroot-gettenantcreditbalance.md)) also supports the `CopilotCostManagement.Read.All` application permission. Personal Microsoft accounts aren't supported. Choose the least privileged permission for each operation.

| Permission                                      | Operations                                                                      |
|:------------------------------------------------|:--------------------------------------------------------------------------------|
| `CopilotCostManagement.Read.All`                | Read the tenant credit balance snapshot.                                        |
| `CopilotCostManagement-Policy.Read.All`         | Read spending policies, per-service settings, alert thresholds, and recipients. |
| `CopilotCostManagement-Policy.ReadWrite.All`    | Create, update, and delete policies, service settings, alerts, and recipients.  |
| `CopilotCostManagement-Assignment.Read.All`     | Read a policy's group audience.                                                 |
| `CopilotCostManagement-Assignment.ReadWrite.All` | Add and remove a policy's group audience.                                       |
| `CopilotCostManagement-UserData.Read.All`       | Read a named user's balance diagnostics, including consumption and the selected `spendingPolicyId`. |

## API list

| Operation                                                                                               | HTTP method                                                                                            | Description                                                 |
|:--------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------|:------------------------------------------------------------|
| [Get tenant credit balance](costmanagementroot-gettenantcreditbalance.md)                               | GET `/copilot/costManagement/getTenantCreditBalance`                                                 | Get the tenant-wide credit balance snapshot.                |
| [List spendingPolicies](spendingpolicy-list.md)                                                         | GET `/copilot/costManagement/spendingPolicies`                                                         | Get a list of spending policies.                            |
| [Create spendingPolicy](spendingpolicy-create.md)                                                       | POST `/copilot/costManagement/spendingPolicies`                                                        | Create a new spending policy.                               |
| [Get spendingPolicy](spendingpolicy-get.md)                                                             | GET `/copilot/costManagement/spendingPolicies/{id}`                                                    | Retrieve a spending policy.                                 |
| [Update spendingPolicy](spendingpolicy-update.md)                                                       | PATCH `/copilot/costManagement/spendingPolicies/{id}`                                                  | Update a spending policy.                                   |
| [Delete spendingPolicy](spendingpolicy-delete.md)                                                       | DELETE `/copilot/costManagement/spendingPolicies/{id}`                                                 | Delete a spending policy.                                   |
| [List assignedGroups](selectedgroupsspendingpolicy-list-assignedgroups.md)                              | GET `/copilot/costManagement/spendingPolicies/{id}/microsoft.graph.selectedGroupsSpendingPolicy/assignedGroups` | List the groups assigned to a policy.             |
| [Add assignedGroup](selectedgroupsspendingpolicy-post-assignedgroups.md)                                | POST `/copilot/costManagement/spendingPolicies/{id}/microsoft.graph.selectedGroupsSpendingPolicy/assignedGroups/$ref` | Add a group reference to a policy.          |
| [Remove assignedGroup](selectedgroupsspendingpolicy-delete-assignedgroups.md)                           | DELETE `/copilot/costManagement/spendingPolicies/{id}/microsoft.graph.selectedGroupsSpendingPolicy/assignedGroups/{groupId}/$ref` | Remove a group reference. |
| [List spendingPolicyServiceSettings](spendingpolicyservicesetting-list.md)                              | GET `/copilot/costManagement/spendingPolicies/{id}/serviceSettings`                                    | List the service settings of a policy.                      |
| [Create spendingPolicyServiceSetting](spendingpolicyservicesetting-create.md)                           | POST `/copilot/costManagement/spendingPolicies/{id}/serviceSettings`                                   | Add a service to a policy.                                  |
| [Get spendingPolicyServiceSetting](spendingpolicyservicesetting-get.md)                                 | GET `/copilot/costManagement/spendingPolicies/{id}/serviceSettings/{serviceId}`                        | Retrieve a service setting.                                 |
| [Update spendingPolicyServiceSetting](spendingpolicyservicesetting-update.md)                           | PATCH `/copilot/costManagement/spendingPolicies/{id}/serviceSettings/{serviceId}`                      | Update a service setting.                                   |
| [Get costManagementAlertSetting](costmanagementalertsetting-get.md)                                     | GET `/copilot/costManagement/spendingPolicies/{id}/emailThresholdSettings`                             | Retrieve the alert configuration of a policy.               |
| [Update costManagementAlertSetting](costmanagementalertsetting-update.md)                               | PATCH `/copilot/costManagement/spendingPolicies/{id}/emailThresholdSettings`                           | Create or update the alert configuration.                   |
| [Delete costManagementAlertSetting](costmanagementalertsetting-delete.md)                               | DELETE `/copilot/costManagement/spendingPolicies/{id}/emailThresholdSettings`                          | Delete the alert configuration.                             |
| [List recipients](costmanagementalertsetting-list-recipients.md)                                        | GET `/copilot/costManagement/spendingPolicies/{id}/emailThresholdSettings/recipients`                  | List the alert recipients.                                  |
| [Add recipient](costmanagementalertsetting-post-recipients.md)                                          | POST `/copilot/costManagement/spendingPolicies/{id}/emailThresholdSettings/recipients/$ref`            | Add an alert recipient.                                     |
| [Remove recipient](costmanagementalertsetting-delete-recipients.md)                                     | DELETE `/copilot/costManagement/spendingPolicies/{id}/emailThresholdSettings/recipients/{userId}/$ref` | Remove an alert recipient.                                  |
| [Get costManagementUserBalance](costmanagementuserbalance-get.md)                                       | GET `/copilot/costManagement/userBalances/{userId}`                                                    | Retrieve a user's consumption balance.                      |
| [List costManagementUserServiceBalances](costmanagementuserservicebalance-list.md)                      | GET `/copilot/costManagement/userBalances/{userId}/serviceBalances`                                    | List a user's per-service balance rows.                     |
| [Get costManagementUserServiceBalance](costmanagementuserservicebalance-get.md)                         | GET `/copilot/costManagement/userBalances/{userId}/serviceBalances/{serviceId}`                        | Retrieve one service's balance row for a user.              |

## Concurrency and removal semantics

- To mutate an existing policy and its child resources (service settings and reference links), include an `If-Match` header with the parent policy's ETag. Service settings and reference links don't have their own ETag. The parent policy manages concurrency and appears as `parentEtag` on a service setting. When you create a policy, it has no existing ETag and doesn't use `If-Match`.
- The `serviceSettings` collection doesn't support `DELETE`. Set `state` to `disabled` to remove a service. The entry stays in that state.
- Manage the `assignedGroups` and `recipients` relationships as reference navigation properties with `$ref` add and remove.

## Error conditions

Error responses use the standard OData `error` and `innerError` envelope. The `innerError.code` reports workload-specific conditions, while the standard OData `error.code` reports generic conditions. Row-level security runs before lookup, so an out-of-scope tenant resource returns a `404` response instead of a `403` response.

| Condition                                                                                                        | HTTP | Error code                   |
|:-----------------------------------------------------------------------------------------------------------------|:-----|:-----------------------------|
| Caller lacks the required permission or a qualifying directory role                                              | 403  | `Authorization_RequestDenied` |
| Unsupported query option or malformed request                                                                    | 400  | `invalidRequest`, `unsupportedQuery` |
| Removing the last assigned group would leave the policy with no assigned audience                                | 409  | `lastAssignedGroup`          |
| Another non-disabled tenant-wide policy already governs the same service                                         | 409  | `allUsersServiceConflict`    |
| A group-scoped policy shares both an assigned group and an enabled service with another non-disabled policy      | 409  | `groupServiceConflict`       |
| Disabling the last enabled service on a policy that has service settings                                         | 409  | `atLeastOneServiceRequired`  |
| Alert threshold value out of range (percentage thresholds must be an integer 1-100)                              | 400  | `invalidAlertThreshold`      |
| PATCHing any field on a policy that isn't in an editable state                                                   | 400  | `policyNotEditableWhilePending` |
| Unknown or invalid service ID                                                                                    | 400  | `invalidService`             |
| Alerting enabled with no recipient linked, or removing the last recipient while alerting is enabled              | 400  | `alertRecipientsRequired`    |
| Alert recipient reference doesn't resolve to a real user in the tenant directory                                 | 400  | `alertRecipientNotFound`     |
| Supplying a server-managed field on PATCH                                                                        | 400  | `invalidRequest`             |
| Stale `If-Match` on a mutating operation                                                                         | 412  | `preconditionFailed`         |
| Conflicting concurrent state transition                                                                          | 409  | `invalidTransition`          |
| Upstream evaluator failed for every service, so no balance row could be produced                                 | 503  | `sourceUnavailable`          |
| API throttling                                                                                                   | 429  | `tooManyRequests`            |

## Related content

- [spendingPolicy resource type](resources/spendingpolicy.md)
- [costManagementUserBalance resource type](resources/costmanagementuserbalance.md)
