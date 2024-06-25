---
title: API plugin manifest schema for Microsoft Copilot for Microsoft 365
description: Learn about the members and properties you can use in a manifest file for an API plugin in Microsoft Copilot for Microsoft 365
author: captainbrosset
ms.author: pabrosse
ms.topic: reference
---

# API plugin manifest schema for Microsoft Copilot for Microsoft 365

API plugins enable Copilot for Microsoft 365 to interact with REST APIs that are described by an [OpenAPI description](https://www.openapis.org/what-is-openapi). The OpenAPI description in an API plugin describes the REST APIs that Copilot can interact with. In addition, an API plugin includes a plugin manifest file that provides metadata about the plugin, such as the plugin's name, description, and version. The plugin manifest also includes information about the plugin's capabilities, such as the APIs it supports and the operations it can perform.

The following article describes the schema used by API plugin manifest files. For more information about API plugins, see [API plugins for Microsoft Copilot for Microsoft 365](./overview-api-plugins.md).

> [!IMPORTANT]
> API plugins are currently in limited private preview. More details will be published once a public preview is announced.

Here is an example of a plugin manifest file that uses most of the manifest members and object properties described in the article:

[!INCLUDE [Sample plugin manifest for Contoso Real Estate plugin](includes/sample-api-plugin-manifest-file.md)]

## Manifest members

The following members can be used at the root level of a plugin manifest:

| Member | Description | Type | Required? | Localizable? | Guideline |
| --- | --- | --- | --- | --- | --- |
| `schema_version` | Version of the manifest schema that this plugin is using. | String | Yes | No | The value must be "v1", "v2", or "v2.1" |
| `name_for_human` | Name of the plugin, displayed to users in the Microsoft Copilot experience where your plugin is installed. | String | Yes | Yes | Limited to 20 characters. |
| `description_for_human` | Description of the plugin, displayed to users in the Microsoft Copilot experience where your plugin is installed. | String | Yes | Yes | Limited to 100 characters. |
| `description_for_model` | Description of the general capabilities of the plugin, for the model that powers Microsoft Copilot. This description should describe what the plugin is for, and in what circumstances its functions are relevant. | String | Yes | No | Limited to 2048 characters. This is a factual description of your plugin. Describe what your plugin does for users and in what circumstances its functions are relevant. |
| `logo_url` | The URL to your plugin's logo. | String | Yes | No | The URL must point to an image resource. |
| `contact_email` | Email address for support, moderation, and deactivation requests about your plugin. | String | Yes | No | N/A |
| `legal_info_url` | URL of the terms of use, terms of service, or end user license for your plugin.  The terms are directly between you and the end user. | String | Yes | Yes | N/A |
| `privacy_policy_url` | URL of the privacy policy for your plugin. | String | Yes | Yes | N/A |
| `capabilities` | Optional capabilities that the plugin supports. | [Capabilities object](#capabilities-object) | No | No | This member is used to provide translations to strings in your plugin manifest file. |
| `functions` | A list of functions that your plugin supports. Each function object specifies what the function does, and how the model that powers Microsoft Copilot should interact with the function. | Array of [Function object](#function-object) | Yes | No | Each function name must be unique within the array. The order of items in the array is not significant. |
| `runtimes` | A list of runtimes that your plugin uses. Each runtime object describes the mechanics of how a plugin function is invoked. | Array of [Runtime object](#runtime-object) | Yes | No | N/A |

## Capabilities object

Lists the capabilities that the plugin supports. Currently, the only capability that can be specified is localization, which is used to provide translations to strings in your plugin manifest file.

Here is an example of a capabilities object that specifies translations for the `name_for_human` and `description_for_human` members:

```json
{
  "localization": {
    "en-us": {
      "nameForHuman": {
        "message": "Contoso Real Estate",
        "description": "Name for human, in English"
      },
      "descriptionForHuman": {
        "message": "Find up-to-date, detailed real estate properties for sale on the market",
        "description": "Description for human, in English"
      }
    },
    "fr-fr": {
      "nameForHuman": {
        "message": "Contoso Immobilier",
        "description": "Name for human, in French"
      },
      "descriptionForHuman": {
        "message": "Trouvez des propriétés immobilières à vendre sur le marché",
        "description": "Description for human, in French"
      }
    }
  }
}
```

The following properties can be used in a capabilities object:

| Property | Description | Type | Required? | Guideline |
| --- | --- | --- | --- | --- |
| `localization` | Translations for strings in your plugin manifest file. | [Localization object](#localization-object) | No | N/A |

#### Localization object

Object where keys are language tags and values are [Localized properties objects](#localized-properties-object). For example:

```json
{
  "en-us": {
    "nameForHuman": {
      "message": "Contoso Real Estate",
      "description": "Name for human, in English"
    },
    "descriptionForHuman": {
      "message": "Find up-to-date, detailed real estate properties for sale on the market",
      "description": "Description for human, in English"
    }
  }
}
```

Valid language tags are defined in the [Tags for Identifying Languages RFC](https://www.rfc-editor.org/rfc/rfc5646). Examples of valid language tags include `en-us`, `fr-fr`, and `es-es`.

#### Localized properties object

Object where keys are unique identifiers within the manifiest file that can be used to localize strings, and values are [Localized property object](#localized-property-object). For example:

```json
{
  "nameForHuman": {
    "message": "Contoso Real Estate",
    "description": "Name for human, in English"
  },
  "descriptionForHuman": {
    "message": "Find up-to-date, detailed real estate properties for sale on the market",
    "description": "Description for human, in English"
  }
}
```

###### Localized property object

A localized property object describes localized string and provides its translation. For example:

```json
{
  "message": "Contoso Real Estate",
  "description": "Name for human, in English"
}
```

The following properties can be used in a localized property object:

| Property | Description | Type | Required? | Guideline |
| --- | --- | --- | --- | --- |
| `message` | The translation of the string. | String | Yes | N/A |
| `description` | Description of the localized string. | String | No | N/A |

## Function object

Specifies what the function does, and how the model that powers Microsoft Copilot should interact with the function.

Here is an example of a function called `getListings`, which returns a list of properties for sale that match some specified search criteria:

```json
{
  "name": "getListings",
  "description": "Get a list of properties matching the specified criteria",
  "parameters": {
    "type" : "object",
    "properties": {
      "city": {
        "type": "string",
        "description": "The city to search in"
      },
      "bedrooms": {
        "type": "number",
        "description": "The number of bedrooms"
      }
    },
    "required": [ "city" ]
  },
  "returns": {
    "type": "string",
    "description": "A list of properties"
  },
  "states": {
    "reasoning": {
      "description": "\n# `{{ function.declaration }}` returns a list of real estate properties for sale based on the specified criteria.",
      "instructions": [
        "\n* Examine the output of the `{{ function.declaration }}` function.",
        "\n* Determine if the response contains an error field.",
        "\n* If an error is present, provide the error code and error message from the JSON response to the user.",
        "\n* If there is no error, extract and include as much relevant information as possible from the JSON response to meet the users needs.",
      ]
    }
  }
}
```

The following properties can be used in a function object:

| Property | Description | Type | Required? | Guideline |
| --- | --- | --- | --- | --- |
| `name` | Name that uniquely identifies the function. | String | Yes | The string identifier must match the `^[A-Za-z0-9_]+$` regular expression. When this function is run by an `OpenApi` runtime, the name must match the `operationId` value in the OpenAPI description file. |
| `description` | Description of the function that's better tailored to the model, such as token context length considerations or keyword usage for improved plugin prompting. | String | No | N/A |
| `parameters` | Description of the parameters that the function accepts. | [Parameters object](#parameters-object). | Yes | An empty object can be used for functions that have no parameters. When using an `OpenApi` runtime, the parameters defined in the OpenAPI description are used by the model. |
| `returns` | Description of the function's return value. | [Return object](#return-object) | Yes | N/A |
| `states` | An object used to provide specific instructions for when the function is invoked during a specific state of the plugin processing flow. | Object where keys are `reasoning` or `responding` and values are of type [State object](#state-object) | No | Use `reasoning` to provide instructions for when Microsoft Copilot is calling the function and doing computations. Use `responding` for when Microsoft Copilot is generating text to be shown to the user. |

#### Parameters object

The parameters object describes the parameters that the function accepts, and which of those parameters are required.

Here is an example of a parameters object that describes two parameters, `city` and `bedrooms`, and specifies that `city` is required:

```json
{
  "type" : "object",
  "properties": {
    "city": {
      "type": "string",
      "description": "The city to search in"
    },
    "bedrooms": {
      "type": "number",
      "description": "The number of bedrooms"
    }
  },
  "required": [ "city" ]
}
```

The following properties can be used in a function's parameters object:

| Property | Description | Type | Required? | Guideline |
| --- | --- | --- | --- | --- |
| `type` | Type of function parameters | String | Yes | Must be `"object"` |
| `properties` | Object describing the list of function parameters. | Object where keys are parameter names and values are of type [Parameter object](#parameter-object) | Yes | N/A |
| `required` | List of required parameters. | Array of strings | No | N/A |

###### Parameter object

A parameter object describes a single parameter that the function accepts. For example:

```json
{
  "type": "string",
  "description": "The city to search in"
}
```

The following properties can be used in a function's parameter object:

| Property | Description | Type | Required? | Guideline |
| --- | --- | --- | --- | --- |
| `type` | Type of parameter | String | Yes | Must be one of `"string"`, `"array"`, `"boolean"`, `"integer"`, `"number"` |
| `description` | Description of the data that can be passed as the parameter. | String | Yes | N/A |
| `items` | Object describing the type of items in an array. | [Parameter object](#parameter-object) | No | Can only be used when the `type` property is `"array"` |
| `enum` | List of possible values for the parameter. | Array of strings | No | Can only be used when the `type` property is `"string"` |
| `default` | Indicates what value to use when a parameter value for an optional parameter is not provided. | The same type as the `type` property of the parameter | No | N/A |

Here is an additional example of a parameter object that describes an array of strings:

```json
{
  "type": "array",
  "description": "The list of amenities to search for",
  "items": {
    "type": "string",
    "description": "An amenity to search for"
  }
}
```

#### Return object

A return object describes what the function returns. The following properties can be used in a function's return object:

| Property | Description | Type | Required? | Guideline |
| --- | --- | --- | --- | --- |
| `type` | Type of the return value | String | Yes | Must be `"string"` |
| `description` | Description of the data that the function returns. | String | Yes | N/A |

#### State object

The state object of a function can be used to provide specific instructions to Microsoft Copilot at different stages of the plugin processing flow.

Each state object corresponds to a given plugin processing flow state, as described below:

* `reasoning`: to provide instructions for when Microsoft Copilot is calling the function and doing computations.
* `responding`: to provide instructions for when Microsoft Copilot is generating text to be shown to the user.

Here is an example of a state object that describes instructions to be used when Microsoft Copilot is calling the function:

```json
{
  "description": "\n# `{{ function.declaration }}` returns a list of real estate properties for sale based on the specified criteria.",
  "instructions": [
    "\n* If the user mentions a city in their question, only search in that city by using the city parameter.",
    "\n* If the user asks for properties with things like parking space, heating, jacuzzi, or similar amenities, use the amenities parameter to filter the results.",
    "\n* Only use the list of amenities provided in the amenities parameter enum. If the user asked for an amenity that is not in the list, find the closest match from the list, or ignore it if no match can be found.",
    "\n* Determine if the response contains an error field.",
    "\n* If an error is present, provide the error code and error message from the JSON response to the user.",
    "\n* If there is no error, extract and include as much relevant information as possible from the JSON response to meet the users needs."
  ]
}
```

The following properties can be used in a function's state object:

| Property | Description | Type | Required? | Guideline |
| --- | --- | --- | --- | --- |
| `description` | Description of the function when the function is used during a specific plugin processing flow state. | String | Yes | Include ``\n# `{{ function.declaration }}` `` at the beginning of the description and then describe what the function does during the state. |
| `instructions` | List of instructions that Microsoft Copilot should use when running the function during a specific plugin processing flow state. | Array of strings | Yes | Provide a list of instructions that can be used to augment the model's built-in prompt when calling the function. Include `\n* ` at the beginning of each instruction string to help the model use the function. |
| `examples` | List of examples for the model to better understand how the function should be used during a specific plugin processing flow state. | Array of strings | No | N/A |

## Runtime object

A runtime object describes the mechanics of how a plugin function is invoked, and which functions the runtime is used for.

Here is an example of a runtime object that describes how the `getListings` function is invoked using an OpenAPI description:

```json
{ 
  "type": "OpenApi", 
  "auth": { "type": "none" },
  "run_for_functions": [ "getListings" ],
  "spec": { "url": "http://contoso.com/openapi.yaml" }
}
```

The following properties can be used in a runtime object:

| Property | Description | Type | Required? | Guideline |
| --- | --- | --- | --- | --- |
| `type` | Type of runtime. | String | Yes | Must be `OpenApi`. |
| `auth` | Authentication information required to invoke the runtime. | [Runtime authentication object](#runtime-authentication-object) | Yes | N/A |
| `run_for_functions` | The names of the functions that this runtime is used for. | Array of strings | No | If this property is omitted, this runtime is used to run all functions. The list of names can contain wildcard characters. |
| `spec` | Information required to invoke the runtime | [OpenApi Spec object](#openapi-spec-object) | Yes | N/A |

#### Runtime authentication object

Describes the authentication required to invoke the runtime. Currently, authentication isn't supported.

Here is an example of a runtime authentication object:

```json
{
  "type": "none"
}
```

The following properties can be used in a runtime's authentication object:

| Property | Description | Type | Required? | Guideline |
| --- | --- | --- | --- | --- |
| `type` | Type of authentication required to invoke the runtime. | String | Yes | Currently the only supported value is `none`. |

#### OpenApi Spec object

The OpenApi spec object is one of the two types of spec objects that can be used as the value of the `spec` property in a runtime object.

Here is an example of a OpenApi spec object:

```json
{
  "url": "http://contoso.com/openapi.yaml"
}
```

The following properties can be used in a runtime's OpenApi spec object:

| Property | Description | Type | Required? | Guideline |
| --- | --- | --- | --- | --- |
| `url` | URL to fetch the OpenAPI description file. | String | Yes | N/A |
| `progress_style` | The progress style that will be used to display the progress of the function. | String | No | Must be one of `none`, `showUsage`, `showUsageWithInput`, or `showUsageWithInputAndOutput`. |

## See also

* [API plugins for Microsoft Copilot for Microsoft 365](./overview-api-plugins.md)
