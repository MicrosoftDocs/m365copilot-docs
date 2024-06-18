---
author: captainbrosset
ms.author: captainbrosset
ms.topic: include
---

```json
{
  "schema_version": "v2",
  "name_for_human": "{{ 'nameForHuman' | localize: 'en-us' }}",
  "description_for_human": "{{ 'descriptionForHuman' | localize: 'en-us' }}",
  "description_for_model": "Plugin for finding properties for sale. Use it whenever a user asks about real estate properties for sale on the market. This plugin can be used to search for properties in a particular city, and with a given number of bedrooms, bathrooms, and amenities.",
  "capabilities": {
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
  },
  "functions": [
    {
      "name": "getListings",
      "description": "Get a list of properties matching the specified criteria",
      "parameters": {
        "type": "object",
        "properties": {
          "city": {
            "type": "string",
            "description": "The city to search properties in"
          },
          "bedrooms": {
            "type": "number",
            "description": "The number of bedrooms the property should have"
          },
          "bathrooms": {
            "type": "number",
            "description": "The number of bathrooms the property should have"
          },
          "amenities": {
            "type": "array",
            "description": "The list of amenities the property should have",
            "items": {
              "type": "string",
              "description": "One amenity the property should have",
              "enum": [
                "air conditioning",
                "balcony",
                "dishwasher",
                "elevator",
                "fireplace",
                "furniture",
                "garden",
                "gym",
                "heating",
                "jacuzzi",
                "laundry room",
                "microwave",
                "no furniture",
                "parking",
                "patio",
                "sauna",
                "swimming pool",
                "terrace",
                "wi-fi"
              ]
            }
          }
        }
      },
      "returns": {
        "type": "string",
        "description": "A list of properties"
      },
      "states": {
        "reasoning": {
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
      }
    },
    {
      "name": "saveSearch",
      "description": "Save a search for properties for sale",
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
        "description": "The unique ID for the saved search"
      },
      "states": {
        "responding": {
          "description": "\n# `{{ function.declaration }}` returns a unique ID that identifies the newly saved search.",
          "instructions": [
            "\n* Examine the output of the `{{ function.declaration }}` function.",
            "\n* Extract the unique ID integer from the output and include it in your response to the user."
          ]
        }
      }
    },
    {
      "name": "deleteSavedSearch",
      "description": "Delete a previously saved search",
      "parameters": {
        "type" : "object",
        "properties": {
          "id": {
            "type": "integer",
            "description": "The unique ID of the saved search"
          }
        },
        "required": [ "id" ]
      },
      "returns": {
        "type": "string",
        "description": "True if the saved search was deleted, false otherwise"
      }
    }
  ],
  "runtimes": [
    { 
      "type": "OpenApi", 
      "auth": { "type": "none" },
      "run_for_functions": [ "getListings", "saveSearch", "deleteSavedSearch" ],
      "spec": { "url": "http://contoso.com/openapi.yaml" }
    }
  ],
  "logo_url": "http://contoso.com/logo.png",
  "contact_email": "contact@contoso.com",
  "legal_info_url": "https://contoso.com/legal/",
}
```
