---
title: copilotPackageInstallScope resource type
description: Represents the optional acquisition audience supplied when publishing a regular Copilot package.
author: dmicrosoft
ms.author: digorgaz
ms.topic: reference
ms.date: 11/17/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dmicrosoft digorgaz -->

# copilotPackageInstallScope resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Represents the optional `installScope` parameter of [Publish](../copilotpackagepublishresult-publish.md) for a pending regular-package publication request. This audience is separate from the publication availability described by [copilotPackagePublishScope](copilotpackagepublishscope.md).

Omit `installScope`, or supply `null`, to retain publication without an acquisition call or a `deploy` result step. This doesn't remove an existing acquisition audience.

A non-null value requires delegated access with a signed-in administrator. The service validates the complete installation choice, the bound title and version, and a known regular-package type before mutations. Blueprint and unknown package types aren't supported by this installation choice.

For a package known to be not yet acquired, acquisition sets the administrator-acquisition audience for that version. It replaces that audience rather than adding members. Propagation is asynchronous; success doesn't guarantee installation in a client host or effective user access.

If either the initial requested-detail state or the exact-version runtime read after approval positively indicates existing deployment, publication continues but `deploy` is `skipped`. The supplied installation audience isn't applied, and no acquisition call is made. Use the existing beta [Update package](../copilotpackagedetail-update.md) deployment-audience properties to request an audience change separately.

An initial positive already-deployed decision is retained even if the selected-version runtime read later reports that version as not acquired or doesn't provide a computed upgrade-consent status. After approval, an exact-version administrator runtime read verifies the canonical tenant title, regular type, acquisition state, and required stored identity before availability or acquisition writes. It isn't an added preview read. If verification fails, the caller receives a non-2xx Graph error without step results; approval may already have taken effect. No later availability or acquisition call, rollback, or automatic retry follows. These observations aren't atomic concurrency guarantees.

## Methods

None.

## Properties

| Property | Type | Description |
|:---------|:-----|:------------|
| `principals` | [copilotPackagePublishPrincipal](copilotpackagepublishprincipal.md) collection | Required and non-nullable. Explicit `[]` for `everyone`; one or more `user`/`group` principals for `specificUsers`, using nonzero hyphenated object GUIDs without surrounding whitespace. Every entry is validated before set-based duplicate normalization. Order or repeated effects aren't implied. |
| `scope` | [copilotPackageAudienceScope](copilotpackagepublishscope.md#copilotpackageaudiencescope-enumeration) | Required and non-nullable. Only `everyone` and `specificUsers` are accepted for installation. `noOne`, unknown/sentinel values, unsupported numeric tokens, and nonempty `everyone` principals are rejected. |

This type doesn't accept `policyType`. Missing/null `principals`, empty `specificUsers`, malformed identifiers, and unsupported principal kinds are rejected before publication mutations, including when deployment would be skipped. This proposed typed beta contract requires the matching backend and schema cutover.

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotPackageInstallScope",
  "principals": [
    {
      "@odata.type": "microsoft.graph.copilotPackagePublishPrincipal"
    }
  ],
  "scope": "String"
}
```
