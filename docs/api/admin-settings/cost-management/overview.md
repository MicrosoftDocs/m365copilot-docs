---
title: Microsoft 365 Copilot Cost Management API overview
description: Learn how to use the Microsoft 365 Copilot Cost Management API to govern and observe tenant consumption of Copilot credits, including usage reports.
author: DanielSaunders
ms.author: dsaunders
ms.topic: overview
ms.localizationpriority: medium
ms.date: 11/17/2026
---

<!-- cSpell:ignore dsaunders -->

# Microsoft 365 Copilot Cost Management API overview

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

The Microsoft 365 Copilot Cost Management API helps administrators govern and observe tenant consumption of Copilot and AI **credits** through Microsoft Graph, rooted at `/copilot/costManagement`. The contract is unit-aware and credit-denominated. It covers the tenant credit balance snapshot, spending policy management, group audience scoping, per-service settings, notify-only threshold alerts and their recipients, per-user consumption balances, the review of users' credit requests, and usage reports that break down consumption by user, security group, governed service, and funding class.

The API is credit-denominated and deliberately excludes purchase forecasts. It doesn't return any currency, invoice, price, or settlement amounts.

## Find the right API

Start with the task you want to accomplish. The reference navigation groups each resource with its operations and related child resources.

| Task | Start here | Related resources and operations |
|:-----|:-----------|:--------------------------------|
| Check the tenant's credit balance | [Cost management root](resources/costmanagementroot.md) | [Get tenant credit balance](costmanagementroot-gettenantcreditbalance.md) returns a snapshot by billing method. |
| Configure spending limits for an audience | [Spending policy](resources/spendingpolicy.md) | Choose a policy type, assign groups, configure service settings, and manage alerts and recipients. |
| Supply an Azure billing target for pay-as-you-go funding | [Billing instrument](resources/costmanagementbillinginstrument.md) | Supply the target through policy create or a non-pay-as-you-go to pay-as-you-go update, then read resource provisioning state through policy get. |
| Diagnose whether a user can consume a service | [User balance](resources/costmanagementuserbalance.md) | Read the user's service balances to inspect the selected policy, remaining quantity, and access decision. |
| Review requests for more credits | [Credit request](resources/creditrequest.md) | List requests, read a request, and approve or reject requests individually or in a batch. |
| Analyze consumption over time | [Usage reports](usage-reports-overview.md) | Read daily user, group, and service records, monthly funding records, or one user's raw service and session detail. |

Use **User balance** for a user's current consumption allowance and **Usage reports** for consumption during a reporting period. They answer different questions and aren't interchangeable.

## Key capabilities

- Read the tenant-wide credit balance snapshot, with one row per billing method.
- Create, read, update, and delete spending policies that cap Copilot Credits consumption for an audience.
- Supply an Azure billing target for pay-as-you-go provisioning and read its resource provisioning state independently of policy status.
- Scope a policy to every user in the tenant (`allUsersSpendingPolicy`) or to selected groups (`selectedGroupsSpendingPolicy`).
- Manage a policy's group audience through `$ref` reference links.
- Configure per-service settings that govern or exclude individual AI services within a policy.
- Configure notify-only threshold alerts and manage their recipients.
- Diagnose a user's per-service consumption balance and understand why a user can or can't consume a service.
- List, review, approve, or reject users' requests for Copilot credits, individually or in bulk.
- Report consumption for one completed UTC day by user, security group, and governed service, with ranking and paging.
- Report a calendar month's consumption by funding class (prepaid, pay-as-you-go, unbilled overage, and non-billable).
- Read one user's raw usage detail over a timestamp window, broken down by service and session.

## Example scenarios

- An administrator sets a monthly credit cap for a pilot group and alerts admins when usage reaches 80 percent.
- An administrator adds or removes a governed service on an existing policy.
- A support administrator diagnoses why a user can no longer consume a service by reading that user's per-service balance.
- A FinOps reader lists the tenant's enabled spending policies and reviews their configured limits.
- An AI administrator reviews pending credit requests for Work IQ and approves them in bulk.
- A FinOps analyst splits yesterday's consumption by service to see where credits went across AI experiences.
- A billing administrator closes a month by reviewing its consumption by funding class, including unbilled overage.
- A FinOps analyst or business unit lead ranks the highest-consuming users or security groups for a day.
- A support administrator inspects one user's raw usage sessions over a time window.

## Personas and roles

Target personas include the AI Administrator and License Administrator for policy management; the FinOps/Global Reader and Billing Administrator for reads; and the Support/Helpdesk administrator for per-user diagnostics. For usage reports, target personas include the FinOps analyst and Billing Administrator for the service and funding reports, and the FinOps analyst and business unit (BU) lead for the user and group rankings. Creating a spending policy also requires the Billing Administrator or Global Administrator directory role at runtime.

Billing Administrators, Global Administrators, AI Administrators, Global Readers, and AI Readers can read credit requests. Global Administrators, Billing Administrators, and AI Administrators can approve or reject them.

## Permissions

This API uses `CopilotCostManagement.Read.All` and the granular `CopilotCostManagement-*` permissions. The Graph permission model maps both delegated (work or school account) and application permissions to tenant credit balance, spending policy, settings, recipient, assignment, user balance, and usage report reads. Personal Microsoft accounts aren't supported. Choose the least privileged permission listed for each operation, and review [permission availability and authorization](#permission-availability-and-authorization) before relying on a mapping.

`CopilotCostManagement.Read.All` is the broadest read permission. It's a higher privileged alternative to the granular permissions on covered GET operations, except for the tenant credit balance operation, where it's the least privileged permission. It doesn't authorize POST, PATCH, or DELETE operations and doesn't cover credit requests. Read the operation's permission table rather than assuming that every Cost Management endpoint accepts it.

Both access schemes require administrator consent. The broad permission includes sensitive organizational data: tenant and user balances, usage reports, spending policies and their configuration, group assignments, and creator, modifier, and alert-recipient identities. Application access reads this data without a signed-in user. Prefer a granular permission when your app needs only one category of data.

### Permission availability and authorization

The permission tables don't guarantee that an operation is available with every listed permission. Availability of `CopilotCostManagement.Read.All` for spending policy, settings, recipient, assignment, and user balance reads isn't yet confirmed for delegated or application access. Confirm availability for your app's access type before relying on this permission for these reads.

Consent doesn't replace API authorization. Delegated calls must still pass the applicable directory-role checks. Application calls must pass application-authorization checks, and both access schemes remain subject to tenant isolation. Beta status doesn't waive these requirements.

> [!IMPORTANT]
> Some Microsoft 365 Copilot Cost Management permissions might not yet appear in the API permission picker in the Microsoft Entra admin center. Normal administrator-consent and API authorization requirements still apply.
>
> For delegated access, request the least-privileged permission listed for the operation by its fully qualified scope name in your app's authentication flow, for example `https://graph.microsoft.com/CopilotCostManagement-Reports.Read.All` for aggregate service or funding reports. An authorized tenant administrator can grant consent through a [tenant-specific administrator consent request](/entra/identity-platform/v2-admin-consent#request-the-permissions-from-a-directory-admin) using your app's client ID, registered redirect URI, and the same scope name, without first selecting the permission in the picker.
>
> This scope-name flow applies only to delegated permissions; it does not configure or grant application permissions.

### Permission reference

| Permission                                      | Operations                                                                      |
|:------------------------------------------------|:--------------------------------------------------------------------------------|
| `CopilotCostManagement.Read.All`                | Read the tenant credit balance snapshot, spending policies and their settings, alert recipients, group assignments, named-user balances and service balances, and all usage reports. The Graph model maps these reads for delegated and application access, subject to the availability and authorization requirements. Doesn't cover credit requests or writes. |
| `CopilotCostManagement-Reports.Read.All`        | Read aggregate service and funding usage reports.                               |
| `CopilotCostManagement-Policy.Read.All`         | Read spending policies, per-service settings, alert thresholds, and recipients. |
| `CopilotCostManagement-Policy.ReadWrite.All`    | Create, update, and delete policies, service settings, alerts, and recipients.  |
| `CopilotCostManagement-Assignment.Read.All`     | Read a policy's group audience.                                                 |
| `CopilotCostManagement-Assignment.ReadWrite.All` | Add and remove a policy's group audience.                                       |
| `CopilotCostManagement-UserData.Read.All`       | Read a named user's balance diagnostics, including consumption and the selected `spendingPolicyId`. Also read user and group usage records and raw per-user usage detail, including services, sessions, native session identifiers, and first and last activity timestamps. |
| `CopilotCostManagement-CreditReq.Read.All`      | Read credit requests.                                                           |
| `CopilotCostManagement-CreditReq.ReadWrite.All` | Read credit requests and approve or reject them.                                |

## API list

The operations are grouped by task, matching the reference navigation. Each resource reference describes its properties and related operations.

### Tenant credit balance

| Operation                                                                                               | HTTP method                                                                                            | Description                                                 |
|:--------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------|:------------------------------------------------------------|
| [Get tenant credit balance](costmanagementroot-gettenantcreditbalance.md)                               | GET `/copilot/costManagement/getTenantCreditBalance`                                                 | Get the tenant-wide credit balance snapshot.                |

### Spending policies and related settings

Manage policies and their assigned groups, service settings, and alerts.

For pay-as-you-go funding, the [billingInstrument](resources/costmanagementbillinginstrument.md) property supplies the Azure subscription, resource group, and supported billing geography in which the service provisions a Power Platform account. It's optional at creation, but a complete target is required when a policy update changes stored non-pay-as-you-go funding to include `payAsYouGo`. It doesn't define replacement of an already-pay-as-you-go instrument.

Read `billingInstrument.provisioningStatus` through the existing policy GET. Resource provisioning is separate from the policy lifecycle: `succeeded` doesn't imply that the policy is enabled. The operation doesn't introduce a separate billing endpoint.

| Operation | HTTP method | Description |
|:----------|:------------|:------------|
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

### User balances

Read a balance by user ID, and then check all service balances or one service's balance. The parent collection `GET /copilot/costManagement/userBalances` isn't listable and returns a `404` response; a permission mapping doesn't make it listable.

| Operation | HTTP method | Description |
|:----------|:------------|:------------|
| [Get costManagementUserBalance](costmanagementuserbalance-get.md)                                       | GET `/copilot/costManagement/userBalances/{userId}`                                                    | Retrieve a user's consumption balance.                      |
| [List costManagementUserServiceBalances](costmanagementuserservicebalance-list.md)                      | GET `/copilot/costManagement/userBalances/{userId}/serviceBalances`                                    | List a user's per-service balance rows.                     |
| [Get costManagementUserServiceBalance](costmanagementuserservicebalance-get.md)                         | GET `/copilot/costManagement/userBalances/{userId}/serviceBalances/{serviceId}`                        | Retrieve one service's balance row for a user.              |

### Credit requests

| Operation | HTTP method | Description |
|:----------|:------------|:------------|
| [List creditRequests](creditrequest-list.md)                                                            | GET `/copilot/costManagement/creditRequests`                                                           | List the tenant's credit requests.                          |
| [Get creditRequest](creditrequest-get.md)                                                               | GET `/copilot/costManagement/creditRequests/{id}`                                                      | Retrieve a credit request.                                  |
| [Update creditRequest](creditrequest-update.md)                                                         | PATCH `/copilot/costManagement/creditRequests/{id}`                                                    | Approve or reject a credit request.                         |
| [Batch record decisions](creditrequest-batchrecorddecisions.md)                                         | POST `/copilot/costManagement/creditRequests/batchRecordDecisions`                                     | Approve or reject credit requests in bulk.                  |

### Usage reports

For the user, group, service, funding, and raw user detail operations, see [Choose a report](usage-reports-overview.md#choose-a-report). The [Usage reports overview](usage-reports-overview.md) explains which report to use and how to query it.

## Concurrency and removal semantics

- To mutate an existing policy and its child resources (service settings and reference links), include an `If-Match` header with the parent policy's ETag. Service settings and reference links don't have their own ETag. The parent policy manages concurrency and appears as `parentEtag` on a service setting. When you create a policy, it has no existing ETag and doesn't use `If-Match`.
- The `serviceSettings` collection doesn't support `DELETE`. Set `state` to `disabled` to remove a service. The entry stays in that state.
- Manage the `assignedGroups` and `recipients` relationships as reference navigation properties with `$ref` add and remove.
- Credit requests carry their own strong ETag, returned as `@odata.etag` and in the `ETag` response header. [Update creditRequest](creditrequest-update.md) requires an `If-Match` header; the [batchRecordDecisions](creditrequest-batchrecorddecisions.md) action takes a per-item `etag` instead.
- A credit request decision that matches the current state is a no-op that preserves the ETag, `decisionBy`, and timestamps. The ETag is still checked, so a same-state decision with a stale ETag fails with `preconditionFailed`.
- Credit requests can't be created or deleted through the API. Users create them outside Microsoft Graph, and the service retains them according to its retention policy.

## Usage report time selectors and paging

Every usage report request requires a time selector: a completed UTC day, a calendar month, or a timestamp window, depending on the report. For the requirements and examples, see [Time selectors](usage-reports-overview.md#time-selectors).

The report-specific guide also covers [paging](usage-reports-overview.md#paging), [filtering and ordering](usage-reports-overview.md#filtering-and-ordering), and [interpreting results and errors](usage-reports-overview.md#interpret-results-and-errors).

## Error conditions

Error responses use the standard OData `error` and `innerError` envelope. The `innerError.code` reports workload-specific conditions, while the standard OData `error.code` reports generic conditions. Row-level security runs before lookup, so an out-of-scope tenant resource returns a `404` response instead of a `403` response.

| Condition                                                                                                        | HTTP | Error code                   |
|:-----------------------------------------------------------------------------------------------------------------|:-----|:-----------------------------|
| Caller lacks the required permission or a qualifying directory role                                              | 403  | `Authorization_RequestDenied` |
| Unsupported query option or malformed request                                                                    | 400  | `invalidRequest`, `unsupportedQuery` |
| Usage report time selector is missing, malformed, or incompatible; a user, group, or service range doesn't select exactly one completed UTC day; `$top` on the user, group, or service usage records is outside 1 through 100; a user usage detail window's start isn't earlier than its end, its end is later than the current time, it's longer than 24 hours, or it crosses a UTC calendar-month boundary; or a continuation token is invalid or mismatched | 400  | `unsupportedQuery`           |
| A keyed usage report read has no represented usage. This response isn't proof of zero consumption or of whether the user or group exists. | 404  | `usageDataUnavailable`       |
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
| Missing `If-Match` on a credit request update                                                                    | 428  | `preconditionRequired`       |
| Malformed, weak (`W/`), or `*` `If-Match` on a credit request update                                             | 400  | `invalidRequest`             |
| Conflicting concurrent state transition                                                                          | 409  | `invalidTransition`          |
| Upstream evaluator failed for every service, so no balance row could be produced                                 | 503  | `sourceUnavailable`          |
| Credit request ID doesn't exist                                                                                  | 404  | `itemNotFound`               |
| Invalid bulk decision payload, such as an empty list, more than 100 items, or duplicate request IDs              | 400  | `invalidRequest`             |
| Unsupported credit request state transition on update                                                            | 400  | `invalidRequest`             |
| Credit request list or count dependency failure                                                                  | 503  | `serviceNotAvailable`        |
| Usage report source failed. Don't treat this response as zero consumption.                                       | 503  | `sourceUnavailable`          |
| API throttling. Honor the `Retry-After` header.                                                                  | 429  | `tooManyRequests`            |

The [batchRecordDecisions](creditrequest-batchrecorddecisions.md) action returns per-item failures in a `200 OK` response, not as HTTP errors.

## Related content

- [spendingPolicy resource type](resources/spendingpolicy.md)
- [costManagementUserBalance resource type](resources/costmanagementuserbalance.md)
- [creditRequest resource type](resources/creditrequest.md)
- [Usage reports overview](usage-reports-overview.md)
- [costManagementRoot resource type](resources/costmanagementroot.md)
