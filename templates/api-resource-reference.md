# API resource reference template

<!-- cSpell:ignore CSDL -->

This template is used for documenting API resources (also known as entities). Resources are the "objects" in a REST API, defined by `EntityType` or `ComplexType` definitions in a CSDL.

## Usage

Example files that use this template are:

- [retrievalHit resource type](/docs/api/ai-services/retrieval/resources/retrievalhit.md)
- [callAiInsight resource type](/docs/api/ai-services/meeting-insights/resources/callaiinsight.md)

## Template

The following Markdown code block defines the template structure.

Any text surrounded by curly braces (`{}`) is a variable and should be replaced with values according to the following table.

| Variable name | Replace with value |
| ------------- | ------------------ |
| `author-github-username` | The author's GitHub username. |
| `author-ms-alias` | The author's Microsoft alias. |
| `date-of-publication` | The current date (or planned date of publication) in `mm/dd/yyyy` format. |
| `resource-name` | The camelCase name of the resource. |
| `resource-description` | A description of the resource. Typically structured as `Represents a...`. MUST end with a period. |

The file name should be an all-lowercase version of the resource name with `.md` file extension.

~~~md
---
title: {resource-name} resource type
description: {resource-description}
author: {author-github-username}
ms.author: {author-ms-alias}
ms.topic: reference
ms.date: {date-of-publication}
ms.localizationpriority: medium
doc_type: resourcePageType
---

# {resource-name} resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

{resource-description}

## Methods

<!--
List supported methods for this resource in table format. Always start with the supported CRUD operations in this specific order, followed by any other supported methods:

List (a GET operation that gets a collection of this resource)
Create (a POST operation that creates a new instance)
Get (a GET operation that gets a single instance)
Update (a PATCH or PUT operation that updates an existing instance)
Delete (a DELETE operation that deletes an instance)

Note that a resource may not support all of the above operations.
-->
| Method                         | Return type                  | Description |
|:-------------------------------|:-----------------------------|:------------|
| [List](link-to-api-topic.md)   | `{resource-name}` collection | Get a list of `{resource-name}` objects. |
| [Create](link-to-api-topic.md) | `{resource-name}`            | Create a new `{resource-name}` object. |
| [Get](link-to-api-topic.md)    | `{resource-name}`            | Retrieve the properties and relationships of a `{resource-name}` object. |
| [Update](link-to-api-topic.md) | `{resource-name}`            | Update `{resource-name}` object. |
| [Delete](link-to-api-topic.md) | None                         | Delete `{resource-name}` object. |

## Properties

<!--
List properties in table format, sorted alphabetically by property name. Properties are defined as `Property` types in CSDL. If a property type is another resource type, link to that resource's reference topic.
-->

| Property    | Type                                 | Description |
|:------------|:-------------------------------------|:------------|
| `property1` | [resource1](resource1.md) collection | An example of a property that is an array of objects. |
| `property1` | [resource2](resource2.md)            | An example of a property that is one single object. |
| `property3` | String                               | An example of a property that is a primitive type. |

<!--
If a property is an enumeration type, include an H3 section after the property table to document the enumeration values.
-->
### enumerationType enumeration

An [evolvable enumeration](/graph/best-practices-concept#handling-future-members-in-evolvable-enumerations) with the following possible values.

| Value                |
|:---------------------|
| `value1`             |
| `value2`             |
| `unknownFutureValue` |

## Relationships

<!--
List relationships in table format, sorted alphabetically by relationship name. Relationships are defined as `NavigationProperty` types in CSDL. If a property type is another resource type, link to that resource's reference topic. If this resource has no relationships, do not add a table. Add a single line: `None.`
-->

| Relationship    | Type                                 | Description |
|:----------------|:-------------------------------------|:------------|
| `relationship1` | [resource1](resource1.md) collection | An example of a property that is an array of objects. |
| `relationship2` | [resource2](resource2.md)            | An example of a property that is one single object. |

## JSON representation

The following JSON representation shows the resource type.

<!--
Include a JSON representation of the object. Include all properties. For primitive types, set the value to the name of the type. For object types, set the value to an object with a single property `@odata.type` with the value set to the type of the object. See the following example.
-->
```json
{
  "@odata.type": "#microsoft.graph.retrievalHit",
  "webUrl": "String",
  "sensitivityLabel": {
    "@odata.type": "microsoft.graph.searchSensitivityLabelInfo"
  },
  "extracts": [
    {
      "@odata.type": "microsoft.graph.retrievalExtract"
    }
  ],
  "resourceType": "String",
  "resourceMetadata": {
    "@odata.type": "microsoft.graph.searchResourceMetadataDictionary"
  }
}
```
~~~
