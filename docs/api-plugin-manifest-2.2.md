---
title: API plugin manifest schema 2.2 for Microsoft 365 Copilot
description: Learn about the 2.2 schema for a manifest file for an API plugin in Microsoft 365 Copilot
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 11/13/2024
ms.topic: reference
---

# API plugin manifest schema 2.2 for Microsoft 365 Copilot

API plugins enable Microsoft 365 Copilot to interact with REST APIs described by an [OpenAPI description](https://www.openapis.org/what-is-openapi). The OpenAPI description in an API plugin describes the REST APIs that Copilot can interact with. In addition, an API plugin includes a plugin manifest file that provides metadata about the plugin, such as the plugin's name, description, and version. The plugin manifest also includes information about the plugin's capabilities, such as the APIs it supports and the operations it can perform.

The following article describes the 2.2 schema used by API plugin manifest files. For more information about API plugins, see [API plugins for Microsoft 365 Copilot](./overview-api-plugins.md).

## Changes from previous version

This schema version introduces the following changes from [version 2.1](api-plugin-manifest-2.1.md).

- Added the `security_info` property to the [Function capabilities object](#function-capabilities-object). This property allows you to attest to the behavior of the plugin in order to assess the risks of calling the function.
- Removed the deprecated `localization` property from the [plugin capabilities object](#plugin-capabilities-object). Manifests generated with Teams Toolkit using the 2.1 schema included the deprecated `localization` property. Manifests using the 2.2 schema fail validation if this property is included.

## JSON schema

The schema described in this document can be found in [JSON Schema](https://json-schema.org/) format [here](https://aka.ms/json-schemas/copilot/plugin/v2.2/schema.json).

## Conventions

### Relative references in URLs

Unless specified otherwise, all properties that are URLs MAY be relative references. Relative references in the manifest document are relative the location of the manifest document.

### String length

Unless specified otherwise, all string properties SHOULD be limited to 4K characters. This string length doesn't confer any acceptable size for the entire document. Implementations a free to impose their own practical limits on manifest length.

### Unrecognized properties

JSON objects defined in this document support only the described properties. Unrecognized properties in any JSON object SHOULD make the entire document invalid.

### String localization

Localizable strings can use a localization key instead of a literal value. The syntax is `[[key_name]]`, where `key_name` is the key name in the `localizationKeys` property in your localization files. For details on localization, see [Localize your agent](localize-agents.md).

#### Localized string example

```json
{
    "schema_version": "v2.2",
    "name_for_human": "[[plugin_name]]",
    "description_for_human": "[[plugin_description]]"
}
```

## Plugin manifest object

The root of the plugin manifest document is a JSON object that contains properties that describe the plugin.

The plugin manifest object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `schema_version` | String | Required. The schema version. Previous versions are `v1` and `v2`. Must be set to `v2.2`. |
| `name_for_human` | String | Required. A short, human-readable name for the plugin. It MUST contain at least one nonwhitespace character. Characters beyond 20 MAY be ignored. This property is localizable. |
| `namespace` | String | Deprecated. Optional. |
| `description_for_model` | String | Optional. The description for the plugin that is provided to the model. This description should describe what the plugin is for, and in what circumstances its functions are relevant. Characters beyond 2048 MAY be ignored. This property is localizable. |
| `description_for_human` | String | Required. A human-readable description of the plugin. Characters beyond 100 MAY be ignored. This property is localizable. |
| `logo_url` | String | Optional. A URL used to fetch a logo that MAY be used by the orchestrator. Implementations MAY provide alternative methods to provide logos that meet their visual requirements. This property is localizable. |
| `contact_email` | String | Optional. An email address of a contact for safety/moderation, support, and deactivation. |
| `legal_info_url` | String | Optional. An absolute URL that locates a document containing the terms of service for the plugin. This property is localizable. |
| `privacy_policy_url` | String | Optional. An absolute URL that locates a document containing the privacy policy for the plugin. This property is localizable. |
| `functions` | Array of [Function object](#function-object) | Optional. A set of function objects describing the functions available to the plugin. Each function object name MUST be unique within the array. The order of the array isn't significant. If the `functions` property isn't present and there's an OpenAPI runtime, the functions are inferred from the OpenAPI operations. |
| `runtimes` | Array of [OpenAPI runtime object](#openapi-runtime-object) | Optional. A set of runtime objects describing the runtimes used by the plugin. |
| `capabilities` | [Plugin capabilities object](#plugin-capabilities-object) | Optional. Describes capabilities of the plugin. |

### Function object

Information related to how the model should interact with a function.

The function object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `id` | String | Optional. |
| `name` | String | Required. A string that uniquely identifies this function. Runtime objects MAY reference this identifier to bind the runtime to the function. When the function is bound to an OpenAPI runtime, the value must match an `operationId` value in the OpenAPI description. Value must match the `^[A-Za-z0-9_]+$` regular expression. |
| `description` | String | Optional. A description better tailored to the model, such as token context length considerations or keyword usage for improved plugin prompting. |
| `parameters` | [Function parameters object](#function-parameters-object) | Optional. An object that contains properties that describe the parameters of a function in a runtime agnostic way. It mirrors the shape of [json-schema][] but only supports a small subset of the JSON schema capabilities. If the `parameters` property isn't present, functions described by a runtime object of type `OpenApi` use the OpenAPI description to determine the parameters. Each member in the JSON object is a function parameter object that describes the semantics of the parameter. |
| `returns` | [Return object](#return-object) OR [Rich return object](#rich-return-object) | Optional. Describes the semantics of the value returned from the function. |
| `states` | [Function states object](#function-states-object) | Optional. Defines state objects for orchestrator states. |
| `capabilities` | [Function capabilities object](#function-capabilities-object) | Optional. Contains a collection of data used to configure optional capabilities of the orchestrator while invoking the function. |

#### Function object example

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

#### Function parameters object

An object that is used to identify the set of parameters that can be passed to the function. This object is structured to mirror the shape of a JSON Schema object but it only supports a subset of JSON Schema keywords.

The function parameters object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `type` | String | Optional. The JSON Schema type. Must be set to `object`. |
| `properties` | [Function parameters properties object](#function-parameters-properties-object) | Required. An object that maps parameter names to their definitions. |
| `required` | Array of String | Optional. The names of properties that are required parameters. Unlike in JSON Schema, the values in this array MUST match the names listed in the `properties` property. |

##### Function parameters object example

```json
{
  "type": "object",
  "properties": {
    "param1": {
      "type": "string"
    },
    "param2": {
      "type": "number"
    }
  },
  "required": [
    "param1"
  ]
}
```

#### Function parameters properties object

An object that maps parameter names to their definitions.

The function parameters properties object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| Name matching `^[A-Za-z0-9_]+$` | [Function parameter object](#function-parameter-object) | Optional. The parameter definition that corresponds to the parameter that matches the property name. |

#### Function parameter object

An object that describes the semantics of a function parameter.

The function parameter object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `type` | String | Required. Specifies the parameter's type. Possible values are: `string`, `array`, `boolean`, `integer`, `number`. |
| `items` | [Function parameter object](#function-parameter-object) | Optional. A function parameter object that describes a single element in an array. MUST only be present when `type` is `array`. |
| `enum` | Array of String | Optional. An array of valid values for this parameter. MUST only be present when `type` is `string`. |
| `description` | String | Optional. A description of the parameter. |
| `default` | Array, Boolean, String, Number, Integer | Optional. A value of the type specified by the `type` property that indicates the value the API uses when a value for an optional parameter isn't provided. |

##### Function parameter example

```json
{
  "type": "string",
  "description": "The color of the item",
  "enum": [
    "green",
    "blue",
    "orange"
  ]
}
```

#### Return object

Contains the semantics of the value returned from the function.

The return object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `type` | String | Required. Specifies the type of the value returned by the API. Possible values are: `string`. |
| `description` | String | Optional. A description of the value returned by the API. |

#### Rich return object

Indicates that the function returns a response that is compatible with the Rich Responses protocol.

The rich return object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `$ref` | String | Required. Must be set to `https://copilot.microsoft.com/schemas/rich-response-v1.0.json`. |

#### Function states object

Defines state objects for orchestrator states.

The function states object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `reasoning` | [State object](#state-object) | Optional. The state in which the model can call functions and do computations. |
| `responding` | [State object](#state-object) | Optional. The state in which the model can generate text that is shown to the user. The model can't invoke functions in the responding state. |
| `disengaging` | [State object](#state-object) | Optional. |

#### State object

Contains specific instructions for when a function is invoked in a specific orchestrator state.

The state object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `description` | String | Optional. Describes the purpose of a function when used in a specific orchestrator state. |
| `instructions` | Array, String | Optional. A string or an array of strings that are used to provide instructions to the orchestrator on how to use this function while in a specific orchestrator state. Providing a single string indicates the intent to provide a complete set of instructions that would override any built-in function prompts. Providing an array of strings indicates the intent to augment the built-in function prompting mechanism. |
| `examples` | Array, String | Optional. A string or an array of strings that are used to provide examples to the orchestrator on how this function can be invoked. |

##### State object example

```json
{
  "functions": [
    {
      "name": "searchEmails",
      "description": "search for Emails from using 3S search Service",
      "states": {
        "responding": {
          "description": "",
          "instructions": [
            "Examine the output of searchEmails",
            "Do not include any information that is not present in the JSON results.",
            "Exclude any irrelevant data from the JSON results",
            "Determine if the response contains an error field.",
            "If an error is present, provide the error code and error message extracted from the response JSON.",
            "If there is no error, extract and include as much relevant information as possible from the JSON result to meet the user's needs."
          ],
          "examples": []
        }
      }
    }
  ]
}
```

#### Function capabilities object

Contains a collection of data used to configure optional capabilities of the orchestrator while invoking the function.

The function capabilities object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `confirmation` | [Confirmation object](#confirmation-object) | Optional. Describes a confirmation dialog that SHOULD be presented to the user before invoking the function. |
| `response_semantics` | [Response semantics object](#response-semantics-object) | Optional. Describes how the orchestrator can interpret the response payload and provide a visual rendering. |
| `security_info`      | [Security info object](#security-info-object)           | Optional. Contains attestations about the behavior of the plugin in order to assess the risks of calling the function. If this property is omitted, the function is unable to interact with other plugins or capabilities of the containing agent. |

#### Confirmation object

Describes how the orchestrator asks the user to confirm before calling a function.

The confirmation object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `type` | String | Optional. Specifies the type of confirmation. Possible values are: `None`, `AdaptiveCard`. |
| `title` | String | Optional. The title of the confirmation dialog. This property is localizable. |
| `body` | String | Optional. The text of the confirmation dialog. This property is localizable. |

#### Response semantics object

Contains information to identify semantics of response payload and enable rendering that information in a rich visual experience using [adaptive cards](https://adaptivecards.io/).

The response semantics object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `data_path` | String | Required. A JSONPath [RFC9535][] query that identifies a set of elements from the function response to be rendered using the template specified in each item. |
| `properties` | [Response semantics properties object](#response-semantics-properties-object) | Optional. Allows mapping of JSONPath queries to well-known data elements. Each JSONPath query is relative to a result value. |
| `static_template` | Object | Optional. A JSON object that conforms with the [Adaptive Card Schema](https://adaptivecards.io/schemas/adaptive-card.json) and templating language. This Adaptive Card instance is used to render a result from the plugin response. This value is used if the `template_selector` isn't present or fails to resolve to an adaptive card. |
| `oauth_card_path` | String | Optional. |

##### Static template example

```json
{
  "functions": {
    "capabilities": {
      "response_semantics": {
        "data_path": "$.resources",
        "properties": {
          "title": "$.name",
          "subtitle": "$.location",
          "url": "$.href",
          "information_protection_label": "$.ipLabel"
        },
        "static_template": {
          "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
          "type": "AdaptiveCard",
          "version": "1.5",
          "body": [
            {
              "type": "TextBlock",
              "text": "${name}",
              "weight": "Bolder"
            },
            {
              "type": "TextBlock",
              "text": "${description}"
            }
          ],
          "action": [
            {
              "type": "Action.OpenUrl",
              "title": "View",
              "text": "${href}"
            }
          ]
        }
      }
    }
  }
}
```

##### Dynamic template example

```json
{
  "functions": {
    "capabilities": {
      "response_semantics": {
        "data_path": "$.attachments",
        "properties": {
          "title": "$.title",
          "subtitle": "$.subtitle",
          "url": "$.url",
          "thumbnail_url": "$.thumbnailUrl",
          "template_selector": "$.template"
        }
      }
    }
  }
}
```

#### Response semantics properties object

Allows mapping of JSONPath queries to well-known data elements. Each JSONPath query is relative to a result value.

The response semantics properties object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `title` | String | Optional. Title of a citation for the result. |
| `subtitle` | String | Optional. Subtitle of a citation for the result. |
| `url` | String | Optional. URL of a citation for the result. |
| `thumbnail_url` | String | Optional. URL of a thumbnail image for the result. |
| `information_protection_label` | String | Optional. Data sensitivity indicator of the result contents. |
| `template_selector` | String | Optional. A JSONPath expression to an Adaptive Card instance to be used for rendering the result. |

#### Security info object

Contains information use to determine the relative risk of invoking the function.

The security info object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `data_handling` | Array of String | Required. An array of strings that describe the data handling behavior of the function. Valid values are `GetPublicData`, `GetPrivateData`, `DataTransform`, `DataExport`, and `ResourceStateUpdate`. |

##### Data handling values

| Value                 | Description | Example |
| --------------------- | ----------- | ------- |
| `GetPublicData`       | Indicates the function retrieves data from an external source that doesn't require authentication. | A function that makes a service call to retrieve data from a public website. |
| `GetPrivateData`      | Indicates the function retrieves data from an external source that requires authentication or from the user's current application. | A function that gets data from a private database or from the user's currently open document. |
| `DataTransform`       | Indicates that the function only returns an output based on the input, without introducing any new data or causing a resource update. | A function that converts a number to a word or formats a date. |
| `DataExport`          | Indicates that the function sends or writes data to a location outside of the function itself. | A function that saves data to a local or cloud file. |
| `ResourceStateUpdate` | Indicates that the function affects a resource by initiating a transaction, changing a process in the real world, granting or denying permissions, or performing any other action that would require explicit user confirmation. | A function that books a hotel room or changes the state of a work item from `active` to `resolved`. |

### OpenAPI runtime object

Describes how the plugin invokes OpenAPI functions.

The OpenAPI runtime object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `type` | String | Required. Identifies this runtime as an OpenAPI runtime. Must be set to `OpenApi`. |
| `auth` | [Runtime authentication object](#runtime-authentication-object) | Required. Authentication information required to invoke the runtime. |
| `run_for_functions` | Array of String | Optional. The names of the functions that are available in this runtime. If this property is omitted, all functions described by the runtime are available. Provided string values can contain wildcards. More than one runtime MUST NOT declare support for the same function either implicitly or explicitly. |
| `spec` | [OpenAPI specification object](#openapi-specification-object) | Required. Contains the OpenAPI information required to invoke the runtime. |

#### OpenAPI specification object

Contains the OpenAPI information required to invoke the runtime.

The OpenAPI specification object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `url` | String | Optional. The URL to fetch the OpenAPI specification, called with a GET request. This member is required unless `api_description` is present. |
| `api_description` | String | Optional. A string that contains an OpenAPI description. If this member is present, `url` isn't required and is ignored if present. |
| `progress_style` | String | Optional. The progress style that is used to display the progress of the function. Possible values are: `None`, `ShowUsage`, `ShowUsageWithInput`, `ShowUsageWithInputAndOutput`. |

##### OpenAPI specification object example

```json
{
  "runtimes":
  [
    {  
      "type": "OpenApi",
      "auth": {
        "type": "None"
      },
      "spec": {
        "url": "https://example.org/api/openapi.yaml",  
      }
    }
  ]
}  
```

#### Runtime authentication object

Contains information used by the plugin to authenticate to the runtime.

The runtime authentication object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `type` | String | Optional. Specifies the type of authentication required to invoke a function. Possible values are: `None`, `OAuthPluginVault`, `ApiKeyPluginVault`. |
| `reference_id` | String | Optional. A value used when `type` is `OAuthPluginVault` or `ApiKeyPluginVault`. The `reference_id` value is acquired independently when providing the necessary authentication configuration values. This mechanism exists to prevent the need for storing secret values in the plugin manifest. |

##### Runtime authentication object example

```json
{
  "type": "OAuthPluginVault",
  "reference_id": "0123456-abcdef"
}
```

### Plugin capabilities object

Describes capabilities of the plugin.

The plugin capabilities object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `conversation_starters` | Array of [Conversation starter object](#conversation-starter-object) | Optional. Conversation starters that can be displayed to the user for suggestions on how to invoke the plugin. |

#### Conversation starter object

An example of a question that the plugin can answer.

The conversation starter object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `text` | String | Required. The text of the conversation starter. This property is localizable. |
| `title` | String | Optional. The title of the conversation starter. This property is localizable. |

##### Conversation starter object example

```json
{
  "conversation_starters": [
    {
      "title": "Developer tasks",
      "text": "What issues are assigned to me?"
    }
  ]
}
```

## Manifest example

Here's an example of a plugin manifest file that uses most of the manifest properties and object properties described in the article:

:::code language="json" source="includes/sample-manifests/plugin-sample-manifest-2.2.json":::

## Related content

- [API plugins for Microsoft 365 Copilot](./overview-api-plugins.md)

[json-schema]: https://datatracker.ietf.org/doc/html/draft-bhutton-json-schema
[rfc9535]: https://www.rfc-editor.org/rfc/rfc9535
