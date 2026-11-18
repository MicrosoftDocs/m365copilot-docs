---
title: copilotPackagePublishPrincipal resource type
description: Represents an explicit principal in a Copilot package publication audience.
author: dmicrosoft
ms.author: digorgaz
ms.topic: reference
ms.date: 11/17/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dmicrosoft digorgaz -->

# copilotPackagePublishPrincipal resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Represents an explicit member of the `principals` collection in [copilotPackagePublishScope](copilotpackagepublishscope.md).

The optional [copilotPackageInstallScope](copilotpackageinstallscope.md) reuses this shape but accepts only validated `user` and `group` object GUIDs. Broader publication vocabulary doesn't establish support for other installation recipients.

For a user or group audience, use its source object identifier with the public type `user` or `group`, not a display name or contact address. Publish preserves opaque nonblank identifiers; naming a principal type doesn't convert its ID or establish an application-ID versus object-ID equivalence. The read-side [request principal](copilotpackagerequestprincipal.md) vocabulary is separate.

## Methods

None.

## Properties

| Property | Type | Description |
|:---------|:-----|:------------|
| `id` | String | Required and non-nullable. Opaque nonblank source principal identifier, preserved without rewriting. Installation separately restricts user/group IDs to nonzero hyphenated GUIDs. |
| `type` | copilotPackagePublishPrincipalType | Required and non-nullable. Public principal vocabulary below. Undefined or combined values aren't accepted. |

### copilotPackagePublishPrincipalType enumeration

| Value | Description |
|:------|:------------|
| `unknown` | The source's unclassified principal kind; doesn't establish target support for a particular scenario. |
| `user` | A user principal. |
| `group` | A group principal. |
| `agentIdentity` | An agent-identity principal. Use its existing source identifier; selecting this kind doesn't resolve or replace an identifier. |
| `agentUser` | An agent-user principal kind. |
| `unknownFutureValue` | Reserved for enum evolution; not a valid request value and not the same as `unknown`. |

The separate read-side `agentApplication` value is unchanged. This proposed typed beta input requires matching backend qualification; declaration alone isn't admission.

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotPackagePublishPrincipal",
  "id": "String",
  "type": "String"
}
```
