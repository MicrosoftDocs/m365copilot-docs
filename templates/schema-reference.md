# Manifest schema reference template

The manifest schema reference template is used for documenting a manifest schema described by [JSON Schema](https://json-schema.org/). It consists of a single document that documents all of the properties contained in the schema.

## Usage

This template is used to document two manifest schemas.

- Declarative agent manifest schema (example: [Schema version 1.5](/docs/declarative-agent-manifest-1.5.md))
- API plugin manifest schema (example: [Schema version 2.3](/docs/api-plugin-manifest-2.3.md))

## Template

The following Markdown code block defines the template structure.

Any text surrounded by curly braces (`{}`) is a variable and should be replaced with values according to the following table.

| Variable name | Replace with value |
| ------------- | ------------------ |
| `schema type` | The type of manifest, either `Declarative agent` or `API plugin manifest`. |
| `version`     | The version of the schema. Should be formatted like `1.5` or `2.3`. |
| `previous-version`     | The previous version of the schema (if any). Should be formatted like `1.5` or `2.3`. |
| `author-github-username` | The author's GitHub username. |
| `author-ms-alias` | The author's Microsoft alias. |
| `date-of-publication` | The current date (or planned date of publication) in `mm/dd/yyyy` format. |

~~~md
---
title: {schema type} manifest schema {version} for Microsoft 365 Copilot
description: Learn about the {version} schema for a manifest file for a {schema type} in Microsoft 365 Copilot.
author: {author-github-username}
ms.author: {author-ms-alias}
ms.localizationpriority: medium
ms.date: {date-of-publication}
ms.topic: reference
---

<!-- markdownlint-disable MD024 MD059 -->

# {schema type} manifest schema {version} for Microsoft 365 Copilot

<!-- For declarative agent manifest reference, use the following introduction -->

This article describes the {version} schema used by the declarative agent manifest. The manifest is a machine-readable document that provides a Large Language Model (LLM) with the necessary instructions, knowledge, and actions to specialize in addressing a select set of user problems. Declarative agent manifests are referenced by the Microsoft 365 app manifest inside an [app package](agents-are-apps.md#app-package). For details, see the [Microsoft 365 app manifest reference](/microsoft-365/extensibility/schema/declarative-agent-ref).

Declarative agents are valuable in understanding and generating human-like text, making them versatile for tasks like writing and answering questions. This specification is focused on the declarative agent manifest that acts as a structured framework to specialize and enhance functionalities a specific user needs.

<!-- If the version in this document is not the latest version, add the following line -->

[!INCLUDE [latest-declarative-agent-manifest](includes/latest-declarative-agent-manifest.md)]

<!-- For API plugin manifest reference, use the following introduction -->

API plugins enable Microsoft 365 Copilot to interact with REST APIs described by an [OpenAPI description](https://www.openapis.org/what-is-openapi). The OpenAPI description in an API plugin describes the REST APIs that Copilot can interact with. In addition, an API plugin includes a plugin manifest file that provides metadata about the plugin, such as the plugin's name, description, and version. The plugin manifest also includes information about the plugin's capabilities, such as the APIs it supports and the operations it can perform.

The following article describes the {version} schema used by API plugin manifest files. For more information about API plugins, see [API plugins for Microsoft 365 Copilot](./overview-api-plugins.md).

<!-- If the version in this document is not the latest version, add the following line -->

[!INCLUDE [latest-plugin-manifest](includes/latest-plugin-manifest.md)]

<!-- If there is a previous version of this schema, add the following section -->

## Changes from previous version

This schema version introduces the following changes from [version {previous-version}](link-to-previous-version):

<!-- Provide a list of major changes -->

- Description of change
- Description of change

## JSON schema

The schema described in this document can be found in [JSON Schema](https://json-schema.org/) format [here](link-to-published-json-schema).

## Conventions

### Relative references in URLs

Unless specified otherwise, all properties that are URLs MAY be relative references. Relative references in the manifest document are relative the location of the manifest document.

### String length

Unless specified otherwise, all string properties SHOULD be limited to 4K characters. This string length doesn't confer any acceptable size for the entire document. Implementations are free to impose their own practical limits on manifest length.

### Unrecognized properties

JSON objects defined in this document support only the described properties. Unrecognized or extraneous properties in any JSON object SHOULD make the entire document invalid.

### String localization

Localizable strings can use a localization key instead of a literal value. The syntax is `[[key_name]]`, where `key_name` is the key name in the `localizationKeys` property in your localization files. For details on localization, see [Localize your agent](localize-agents.md).

## {schema-type} manifest object

<!-- The rest of this H2 section documents the object types from the schema in a
     hierarchical fashion. -->

Start with a description of what this object represents. If there is a previous version of this schema, you SHOULD use the same description as the previous version for consistency. Only change the description if absolutely necessary.

The declarative agent manifest object contains the following properties.

<!-- List properties in table format -->

| Property        | Type          | Description |
| --------------- | ------------- | ----------- |
| `property-name` | property-type | Description should start by stating if the property is required or optional, then give a description of the property. Finally, if there are any constraints on the property value, state them at the end. Example: Required. The schema version. Must be set to `v1.5`. |


### Object name example

<!--
This section is optional and should be used sparingly. A full example manifest is included at the bottom of the page. If you add an example, the title of this section should be the same as the parent section, with "example" added to the end. So if the parent section is named "Foo object", the example section would be "Foo object example". The heading level should be one greater than the parent.
-->

The following code is an example of required fields within a object name.

<!-- For declarative agents, give a JSON and TypeSpec example in a tabbed section -->

#### [JSON](#tab/json)

```json
{
  "name" : "Repairs agent",
  "description": "This declarative agent is meant to help track any tickets and repairs",
  "instructions": "This declarative agent needs to look at my Service Now and Jira tickets/instances to help me keep track of open items"
}
```

#### [TypeSpec](#tab/tsp)

```typescript
@agent(
  "Repairs agent",
  "This declarative agent needs to look at my Service Now and Jira tickets/instances to help me keep track of open items"
)
@instructions(
  "This declarative agent needs to look at my Service Now and Jira tickets/instances to help me keep track of open items"
)
namespace MyAgent {

}
```

---

<!-- For API plugins, only supply a JSON example without any tabbed section markup. -->

```json
{
  "functions": [
    {
      "name": "add_todo",
      "description": "Adds a new Todo",
      "parameters": {
        "type": "object",
        "properties": {
          "description": {
            "type": "string"
          }
        },
        "required": [
          "description"
        ]
      },
      "returns": {
        "type": "string"
      }
    }
  ]
}
```

<!--
For any properties that are of an object type (or array of object type), add a section for that object using the same format. The section heading level should be one greater than the parent object. Continue this iteratively until all object types have been documented.

For example, if the first object's property table looks like this:

## Simple manifest object

| Property | Type | Description |
| -------- | ---- | ----------- |
| `name`   | String | ... |
| `config` | Configuration object | ... |

The `name` property is a simple type (String). The `config` object is an object type and needs a documentation section. It would be added as an H3 (since the parent "Simple manifest object" section is H2):

### Configuration object

If the Configuration object has any object type properties, those would be documented in H4 sections.
-->

## {schema-type} manifest example

The following example shows a {schema-type} manifest file that uses most of the manifest properties described in this article.

<!-- Be sure to generate a new sample for this version. -->

:::code language="json" source="includes/sample-manifests/version-specific-sample-manifest-file":::

## Related content

<!-- For declarative agent manifest reference, use the following -->

- [Write effective instructions for declarative agents](declarative-agent-instructions.md)
- [Microsoft 365 app manifest reference](/microsoft-365/extensibility/schema)

<!-- For API plugin manifest reference, use the following -->

- [API plugins for Microsoft 365 Copilot](./overview-api-plugins.md)

[json-schema]: https://datatracker.ietf.org/doc/html/draft-bhutton-json-schema
[rfc9535]: https://www.rfc-editor.org/rfc/rfc9535
~~~
