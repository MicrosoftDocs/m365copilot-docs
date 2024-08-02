---
title: API plugin manifest schema for Microsoft Copilot for Microsoft 365
description: Learn about the members and properties you can use in a manifest file for an API plugin in Microsoft Copilot for Microsoft 365
author: jasonjoh
ms.author: jasonjoh
ms.topic: reference
---

# API plugin manifest schema for Microsoft Copilot for Microsoft 365

API plugins enable Copilot for Microsoft 365 to interact with REST APIs described by an [OpenAPI description](https://www.openapis.org/what-is-openapi). The OpenAPI description in an API plugin describes the REST APIs that Copilot can interact with. In addition, an API plugin includes a plugin manifest file that provides metadata about the plugin, such as the plugin's name, description, and version. The plugin manifest also includes information about the plugin's capabilities, such as the APIs it supports and the operations it can perform.

The following article describes the schema used by API plugin manifest files. For more information about API plugins, see [API plugins for Microsoft Copilot for Microsoft 365](./overview-api-plugins.md).

> [!IMPORTANT]
> API plugins are currently in limited private preview. More details will be published once a public preview is announced.

## Plugin manifest object

The root of the plugin manifest document is a JSON object that contains members that describe the plugin.

The plugin manifest object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `schema_version` | String | Required. The schema version. Previous versions are `v1` and `v2`. Must be set to `v2.1`. |
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

### Plugin capabilities object

Describes capabilities of the plugin.

The plugin capabilities object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `localization` | [Localization object](#localization-object) | Optional. Provides mappings for strings in different languages and locales. Certain properties can be localized using a [Liquid][] filter called `localize`. |
| `conversation_starters` | Array of [Conversation starter object](#conversation-starter-object) | Optional. Conversation starters that can be displayed to the user for suggestions on how to invoke the plugin. |

### Function object

Information related to how the model should interact with a function.

The function object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `id` | String | Optional. |
| `name` | String | Required. A string that uniquely identifies this function. Runtime objects MAY reference this identifier to bind the runtime to the function. When the function is bound to an OpenAPI runtime, the value must match an `operationId` value in the OpenAPI description. Value must match the `^[A-Za-z0-9_]+$` regular expression. |
| `description` | String | Optional. A description better tailored to the model, such as token context length considerations or keyword usage for improved plugin prompting. |
| `parameters` | [Function parameters object](#function-parameters-object) | Optional. An object that contains members that describe the parameters of a function in a runtime agnostic way. It mirrors the shape of [json-schema][] but only supports a small subset of the JSON schema capabilities. If the `parameters` property isn't present, functions described by a runtime object of type `OpenApi` use the OpenAPI description to determine the parameters. Each member in the JSON object is a function parameter object that describes the semantics of the parameter. |
| `returns` | [Return object](#return-object) OR [Rich return object](#rich-return-object) | Optional. Describes the semantics of the value returned from the function. |
| `states` | [Function states object](#function-states-object) | Optional. Defines state objects for orchestrator states. |
| `capabilities` | [Function capabilities object](#function-capabilities-object) | Optional. Contains a collection of data used to configure optional capabilities of the orchestrator while invoking the function. |

#### Function states object

Defines state objects for orchestrator states.

The function states object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `reasoning` | [State object](#state-object) | Optional. The state in which the model can call functions and do computations. |
| `responding` | [State object](#state-object) | Optional. The state in which the model can generate text that is shown to the user. The model can't invoke functions in the responding state. |
| `disengaging` | [State object](#state-object) | Optional. |

#### Function capabilities object

Contains a collection of data used to configure optional capabilities of the orchestrator while invoking the function.

The function capabilities object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `confirmation` | [Confirmation object](#confirmation-object) | Optional. Describes a confirmation dialog that SHOULD be presented to the user before invoking the function. |
| `response_semantics` | [Response semantics object](#response-semantics-object) | Optional. Describes how the orchestrator can interpret the response payload and provide a visual rendering. |

### Response semantics object

Contains information to identify semantics of response payload and enable rendering that information in a rich visual experience using [adaptive cards](https://adaptivecards.io/).

The response semantics object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `data_path` | String | Required. A JSONPath [RFC9535][] query that identifies a set of elements from the function response to be rendered using the template specified in each item. |
| `properties` | [Response semantics properties object](#response-semantics-properties-object) | Optional. Allows mapping of JSONPath queries to well-known data elements. Each JSONPath query is relative to a result value. |
| `static_template` | Object | Optional. A JSON object that conforms with the [Adaptive Card Schema](https://adaptivecards.io/schemas/adaptive-card.json) and templating language. This Adaptive Card instance is used to render a result from the plugin response. This value is used if the `template_selector` isn't present or fails to resolve to an adaptive card. |
| `oauth_card_path` | String | Optional. |

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

#### Response semantics static template object

A JSON object that conforms with the [Adaptive Card Schema](https://adaptivecards.io/schemas/adaptive-card.json) and templating language. This Adaptive Card instance is used to render a result from the plugin response. This value is used if the `template_selector` isn't present or fails to resolve to an adaptive card.

### Conversation starter object

An example of a question that the plugin can answer.

The conversation starter object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `text` | String | Required. The text of the conversation starter. This property is localizable. |
| `title` | String | Optional. The title of the conversation starter. This property is localizable. |

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

### Runtime authentication object

Contains information used by the plugin to authenticate to the runtime.

The runtime authentication object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `type` | String | Optional. Specifies the type of authentication required to invoke a function. Possible values are: `None`, `OAuthPluginVault`, `ApiKeyPluginVault`. |
| `reference_id` | String | Optional. A value used when `type` is `OAuthPluginVault` or `ApiKeyPluginVault`. The `reference_id` value is acquired independently when providing the necessary authentication configuration values. This mechanism exists to prevent the need for storing secret values in the plugin manifest. |

### Localization object

Contains mappings for strings in different languages and locales.

The localization object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| Name matching `^(?i)[a-z]{2,3}(-[a-z]{2})?(?-i)$` | [Language-specific localized properties object](#language-specific-localized-properties-object) | Optional. Contains translations of localizable properties for the language represented by the property's name, which is a [BCP47][] language tag. |

#### Language-specific localized properties object

Contains translations of localizable properties for the language represented by the property's name, which is a [BCP47][] language tag.

The language-specific localized properties object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| Name matching `^[A-Za-z_][A-Za-z0-9_]*$` | [Localized property object](#localized-property-object) | Optional. Contains the localized value for the localizable property identified by this property's name. |

##### Localized property object

Contains the localized value for the localizable property identified by this property's name.

The localized property object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `message` | String | Required. A localized, human-readable string that is used for the localizable property's value. |
| `description` | String | Required. A localized description that can be displayed to the model. |

### Function parameters object

An object that is used to identify the set of parameters that can be passed to the function. This object is structured to mirror the shape of a JSON Schema object but it only supports a subset of JSON Schema keywords.

The function parameters object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `type` | String | Optional. The JSON Schema type. Must be set to `object`. |
| `properties` | [Function parameters properties object](#function-parameters-properties-object) | Required. An object that maps parameter names to their definitions. |
| `required` | Array of String | Optional. The names of properties that are required parameters. Unlike in JSON Schema, the values in this array MUST match the names listed in the `properties` property. |

#### Function parameters properties object

An object that maps parameter names to their definitions.

The function parameters properties object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| Name matching `^[A-Za-z0-9_]+$` | [Function parameter object](#function-parameter-object) | Optional. The parameter definition that corresponds to the parameter that matches the property name. |

### Function parameter object

An object that describes the semantics of a function parameter.

The function parameter object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `type` | String | Required. Specifies the parameter's type. Possible values are: `string`, `array`, `boolean`, `integer`, `number`. |
| `items` | [Function parameter object](#function-parameter-object) | Optional. A function parameter object that describes a single element in an array. MUST only be present when `type` is `array`. |
| `enum` | Array of String | Optional. An array of valid values for this parameter. MUST only be present when `type` is `string`. |
| `description` | String | Optional. A description of the parameter. |
| `default` | Array, Boolean, String, Number, Integer | Optional. A value of the type specified by the `type` property that indicates the value the API uses when a value for an optional parameter isn't provided. |

### Return object

Contains the semantics of the value returned from the function.

The return object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `type` | String | Required. Specifies the type of the value returned by the API. Possible values are: `string`. |
| `description` | String | Optional. A description of the value returned by the API. |

### Rich return object

Indicates that the function returns a response that is compatible with the Rich Responses protocol.

The rich return object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `$ref` | String | Required. Must be set to `https://copilot.microsoft.com/schemas/rich-response-v1.0.json`. |

### State object

Contains specific instructions for when a function is invoked in a specific orchestrator state.

The state object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `description` | String | Optional. Describes the purpose of a function when used in a specific orchestrator state. |
| `instructions` | Array, String | Optional. A string or an array of strings that are used to provide instructions to the orchestrator on how to use this function while in a specific orchestrator state. Providing a single string indicates the intent to provide a complete set of instructions that would override any built-in function prompts. Providing an array of strings indicates the intent to augment the built-in function prompting mechanism. |
| `examples` | Array, String | Optional. A string or an array of strings that are used to provide examples to the orchestrator on how this function can be invoked. |

### Confirmation object

Describes how the orchestrator asks the user to confirm before calling a function.

The confirmation object contains the following properties.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `type` | String | Optional. Specifies the type of confirmation. Possible values are: `None`, `AdaptiveCard`. |
| `title` | String | Optional. The title of the confirmation dialog. This property is localizable. |
| `body` | String | Optional. The text of the confirmation dialog. This property is localizable. |

## Example

Here's an example of a plugin manifest file that uses most of the manifest members and object properties described in the article:

[!INCLUDE [Sample plugin manifest for Contoso Real Estate plugin](includes/sample-api-plugin-manifest-file.md)]

## See also

- [API plugins for Microsoft Copilot for Microsoft 365](./overview-api-plugins.md)

[liquid]: https://shopify.github.io/liquid/
[json-schema]: https://datatracker.ietf.org/doc/html/draft-bhutton-json-schema
[rfc9535]: https://www.rfc-editor.org/rfc/rfc9535
[bcp47]: https://www.rfc-editor.org/rfc/rfc5646
