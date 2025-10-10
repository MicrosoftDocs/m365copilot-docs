---
ms.topic: include
ms.localizationpriority: medium
---

<!-- markdownlint-disable MD041 -->

## Conventions

### Relative references in URLs

Unless specified otherwise, all properties that are URLs can be relative references. Relative references in the manifest document are relative the location of the manifest document.

### String length

Unless specified otherwise, limit all string properties to 4,000 characters. This string length doesn't set an acceptable size for the entire document. Implementations can set their own practical limits on manifest length.

### Unrecognized properties

JSON objects defined in this document support only the described properties. Unrecognized or extraneous properties in any JSON object make the entire document invalid.

### String localization

Localizable strings can use a localization key instead of a literal value. The syntax is `[[key_name]]`, where `key_name` is the key name in the `localizationKeys` property in your localization files. For details on localization, see [Localize your agent](../localize-agents.md).
