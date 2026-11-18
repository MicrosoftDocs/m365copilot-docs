---
title: "copilotPackage: approve"
description: Approve one individual access or hiring request for a Copilot package.
author: dmicrosoft
ms.author: digorgaz
ms.topic: reference
ms.date: 11/17/2026
ms.localizationpriority: medium
doc_type: apiPageType
---

<!-- cSpell:ignore dmicrosoft digorgaz -->
<!-- markdownlint-disable MD024 -->

# copilotPackage: approve

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Approve one current individual access or hiring request under the bound package. Use the selected request's opaque `identifier` and exact stored `packageVersion`, not the package's summary `requestType` or current version.

This reference describes the reviewed beta contract. Availability depends on the matching schema and backend release; API-review approval isn't evidence of deployed availability.

The service determines the operation from the stored individual request. A hiring request requires an activated title. An access request requires the title to be unblocked and the administrator-configured settings to permit access. These checks also apply to a request that is already approved.

This action doesn't activate a template, unblock a package, change settings, install an agent, or grant consent. Publication requests are refused with guidance to use [Publish](copilotpackagepublishresult-publish.md). Native template activation is a separate [Activate](copilotpackageactivationresult-activate.md) operation.

[!INCLUDE [package-management-license](../../includes/package-management-license.md)]

## Permissions

[!INCLUDE [permissions-intro](../../includes/permissions-intro.md)]

| Permission type | Least privileged permissions | Higher privileged permissions |
|:----------------|:-----------------------------|:------------------------------|
| Delegated (work or school account) | CopilotPackages.ReadWrite.All | Not available. |
| Delegated (personal Microsoft account) | Not supported. | Not supported. |
| Application | CopilotPackages.ReadWrite.All | Not available. |

Application execution requires the matching application adapter and receiving-service support. Declared permission coverage doesn't establish that an application can successfully execute this action in a particular release.

## HTTP request

```http
POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{packageId}/approve
```

`{packageId}` identifies the package/title, not a user, application, or request. There are no caller-supplied tenant, recipient, request-type, or audience overrides.

## Request headers

| Name | Description |
|:-----|:------------|
| `Authorization` | Bearer token. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |
| `Content-Type` | `application/json`. Required. |

## Request body

Supply a JSON object with the following parameters.

| Parameter | Type | Description |
|:----------|:-----|:------------|
| `packageVersion` | String | Required and nonblank. Copy the exact stored `packageVersion` of the selected individual request. It is compared literally, without trimming, parsing, or a current/latest-version fallback. A request with no usable stored version can't be approved. |
| `requestId` | String | Required and nonblank. The selected request's opaque `identifier`. It isn't a package ID, immutable submission ID, or concurrency token. |
| `reviewerComment` | String | Optional and nullable. Literal review text, limited to 500 well-formed Unicode scalar values. Omitted or null imposes no comment requirement; empty and whitespace-only strings are distinct literal values. Text isn't trimmed or Unicode-normalized. |

The parameter names above are canonical. Unknown fields, logical duplicate names, wrong types, the retired `titleVersion` name, malformed Unicode, and oversized comments are rejected. Unicode scalar values aren't the same as bytes, UTF-16 code units, or displayed graphemes.

A supplied non-null comment must match the observed stored comment before success. A different or unavailable comment on an already-approved request is a conflict, not permission to update or retrofit its comment. Comments aren't returned in request metadata.

Use the metadata-only selection described in [Get package details](copilotpackagedetail-get.md) when its matching release is available. Do not choose a request from a package-level summary or assume the first row is the intended request.

## Response

If successful, this method returns `204 No Content` with no response body. Success means the matching current logical request was observed as approved; an already-approved request can return success without another submission.

Success doesn't establish a newly caused grant, immediate effective access, atomic readiness, or durable idempotency. A later submission can reuse a logical identifier, and readiness can change after the checks.

Failures use a Microsoft Graph error envelope. The root `error.code` is an HTTP-derived camelCase code; the original business reason is retained in `error.innerError.code`. For example, a publication request uses root `conflict` with inner reason `UsePublish`.

| HTTP status | Example inner reason | Meaning |
|:------------|:---------------------|:--------|
| 400 | Validation detail | Invalid input or unsupported request/recipient type. |
| 409 | `RequestVersionMismatch` | The supported individual request's stored version differs from the supplied literal value. |
| 409 | `TitleNotActivated` | The hiring request's title isn't activated. |
| 409 | `TitleBlocked`, `SettingConfiguredDisabled`, `SettingNotEnabledForUsers` | Access prerequisites aren't satisfied. Resolve the relevant existing administrative state separately. |
| 409 | `Conflict` | A supplied comment can't be matched on an already-approved request. |
| 409 | `RequestApprovalIndeterminate` | A possible submission or post-read could not be confirmed. Reconcile the exact request; don't automatically replay the mutation. |
| 424 | `FailedDependency` | Required current-request, readiness, or receiving-service evidence is missing, incomplete, or unavailable. This isn't a successful empty lookup. |

After an uncertain mutation, a timeout, or interrupted transport, reconcile the exact request before deciding whether another attempt is appropriate. A pending row's disappearance alone doesn't prove approval.

## Example

### Request

The following illustrative request uses an identifier and raw version from the same individual access request. Replace the sample package and request identifiers with the intended values.

```http
POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/T_87654321-4321-4321-4321-210987654321/approve
Content-Type: application/json

{
  "packageVersion": "1.0.0",
  "requestId": "stored-access-request-id",
  "reviewerComment": "Reviewed against the organization's requirements."
}
```

### Response

```http
HTTP/1.1 204 No Content
```
