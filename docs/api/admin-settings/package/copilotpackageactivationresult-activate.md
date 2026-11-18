---
title: "copilotPackage: activate"
description: Activate an agent-template package for a manager audience using an existing policy template.
author: dmicrosoft
ms.author: digorgaz
ms.topic: reference
ms.date: 11/17/2026
ms.localizationpriority: medium
doc_type: apiPageType
---

<!-- cSpell:ignore dmicrosoft digorgaz -->
<!-- markdownlint-disable MD024 -->

# copilotPackage: activate

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Activate an already-onboarded agent template for the users or groups allowed to create instances from it, and apply the selected policy template.

This reference describes the reviewed beta contract. Availability depends on the matching schema and backend release; API-review approval isn't evidence of deployed availability.

Native template activation is not [Approve](copilotpackage-approve.md) of an individual access or hiring request, [Publish](copilotpackagepublishresult-publish.md) of a regular package, or creation of an agent instance. It doesn't grant consent to the agent's requested permissions.

Activate resolves fresh saved settings from its required `policyTemplateId`. A prior Publish request's unsaved `policyConfiguration` isn't reused automatically, even with the same template ID. Use an explicit [template Update](copilotpackagepolicytemplate-update.md) or [Copy](copilotpackagepolicytemplate-copy.md) when settings must be saved for later use; a copy returns a new ID to select. This action doesn't accept request-local configuration or an ID-less policy selection.

[!INCLUDE [package-management-license](../../includes/package-management-license.md)]

## Permissions

[!INCLUDE [permissions-intro](../../includes/permissions-intro.md)]

| Permission type | Least privileged permissions | Higher privileged permissions |
|:----------------|:-----------------------------|:------------------------------|
| Delegated (work or school account) | CopilotPackages.ReadWrite.All | Not available. |
| Delegated (personal Microsoft account) | Not supported. | Not supported. |
| Application | Not supported. | Not supported. |

The reviewed native implementation requires a signed-in Global Administrator or AI Administrator and the matching tenant feature admission. Declared application permission metadata does not establish native application-only execution.

## HTTP request

```http
POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/activate
```

`{id}` is the package/title identifier, not an application client ID, user-request ID, or blueprint-instance ID.

## Request headers

| Name | Description |
|:-----|:------------|
| `Authorization` | Bearer token. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |
| `Content-Type` | `application/json`. Required. |

## Request body

Supply a JSON object with the following parameters.

| Parameter | Type | Description |
|:----------|:-----|:------------|
| `activateEvenIfPolicyFails` | Boolean | Optional and nullable; omitted or null means `false`. Allow eligible policy-assignment failures to become warnings. Doesn't bypass unresolved-template, authorization, or target failures. |
| `agentManagerScope` | [copilotPackageAgentManagerScope](resources/copilotpackageagentmanagerscope.md) | Required. The users or groups allowed to create instances from this template. It isn't an installation audience or the recipients of an individual approval request. |
| `approveIfStaged` | Boolean | Optional and nullable; omitted or null means `false`. Permit staged-title approval after consent validation when needed. This is not individual request approval. |
| `packageVersion` | String | Required. Version used for the versioned package preview, in `major.minor[.build[.revision]]` form. Preview can upgrade an acquired version; this input is not an atomic pin of the ultimately activated version, which isn't returned. |
| `policyTemplateId` | String | Required. Opaque identifier of an existing policy template resolved by the service, not a policy-definition object. |

Use the supported manager scope values `everyone`, `specificUsers`, or `noOne`. Supply explicit `principals: []` for `everyone` and `noOne`; supply one or more user/group entries for `specificUsers`. The native adapter's nonblank identifier check does not add the stricter regular-Publish installation GUID contract.

## Response

If successful, this method returns `200 OK` and a [copilotPackageActivationResult](resources/copilotpackageactivationresult.md).

The result records attempted steps in order: `validateRequest`, `loadPackage`, `validatePermissionConsent`, optional `approveTitle`, `assignPolicies`, and `activate`. The overall status is `succeeded` or `succeededWithWarnings`. Inspect per-policy details and warning errors; a tolerated per-policy failure doesn't mean every policy was applied. A skipped consent step isn't a consent verification or grant.

Non-2xx responses use a separate Graph error envelope and do not preserve the composite result's `packageId`, `status`, or `steps`. A declared result type isn't a promise of partial-step details on failure. Workflow error codes remain strings.

The operation is not transactional. Preview, policy, staged-approval, activation, or mapping effects can precede a later failure. The returned `packageId` echoes the route target; it isn't a discovered post-approval identity or proof of an effective activated version. Reconcile current state before another mutation; don't automatically retry after uncertain effects.

## Example

### Request

The following illustrative request activates a template for everyone using an existing policy template. Replace the sample package and template identifiers with the intended values.

```http
POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/T_87654321-4321-4321-4321-210987654321/activate
Content-Type: application/json

{
  "packageVersion": "1.0.0",
  "agentManagerScope": {
    "scope": "everyone",
    "principals": []
  },
  "policyTemplateId": "contoso-agent-policy-template"
}
```

### Response

The following illustrative response omits optional step detail collections. The `approveTitle` step is absent when staged approval wasn't required.

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "packageId": "T_87654321-4321-4321-4321-210987654321",
  "status": "succeeded",
  "steps": [
    { "name": "validateRequest", "status": "succeeded" },
    { "name": "loadPackage", "status": "succeeded" },
    { "name": "validatePermissionConsent", "status": "succeeded" },
    { "name": "assignPolicies", "status": "succeeded" },
    { "name": "activate", "status": "succeeded" }
  ]
}
```
