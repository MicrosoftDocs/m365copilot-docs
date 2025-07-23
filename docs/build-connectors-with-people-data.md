---
title: Build Microsoft 365 Copilot connectors for people data (preview)
description: Learn how to build your first Microsoft 365 Copilot connector for people data using the Microsoft Graph SDK (preview).
author: wictorwilen
ms.author: wictorwilen
ms.localizationpriority: medium
ms.date: 07/08/2025
ms.topic: how-to
---

# Build Microsoft 365 Copilot connectors for people data (preview)

<!-- cSpell:ignore wictorwilen -->

[Microsoft 365 Copilot connectors for people data](/graph/peopleconnectors) enable you to ingest people data and knowledge from your source systems (for example human resources, talent management, or other people systems) into Microsoft Graph. Adding people data to Microsoft Graph makes it available to Microsoft 365 Copilot and people experiences such as the profile card and people search. When you ingest your data, Copilot can reason over the data and use it to respond to user questions.

> [!IMPORTANT]
> Microsoft 365 Copilot connectors for people data built using the Microsoft Graph API are currently in public preview with limited functionality. For more information, see [Notes and limitations](#notes-and-limitations).

You build Microsoft 365 Copilot connectors for people data in the same way as other [Copilot connectors](overview-copilot-connector.md) using the Microsoft Graph external connections APIs. To ensure Microsoft 365 recognizes your connection as containing people data, you must follow certain [schema requirements](#connection-schema-requirements) and [register the connection as a source of profile data](#registering-the-connection-as-a-profile-source).

> [!NOTE]
> For an example connector that provides people data, see [Microsoft 365 Copilot connector for people data sample](https://github.com/microsoftgraph/msgraph-people-connector-sample-dotnet).

## Connection schema requirements

Microsoft 365 supports the following properties for enriching people data.

| Property | Description |
| -------- | ----------- |
| [`accounts`](/graph/api/resources/useraccountinformation) | Max 1. Indicates the Microsoft Entra user the item extends. |
| [`addresses`](/graph/api/resources/itemaddress) | Max 3, one each of `Home`, `Work`, and `Other`. Adds addresses to the user. |
| [`awards`](/graph/api/resources/personaward) | Describes awards the user earned. |
| [`certifications`](/graph/api/resources/personcertification) | Describes certifications the user earned. |
| [`emails`](/graph/api/resources/itememail) | Max 3. Adds email addresses to the user. |
| [`names`](/graph/api/resources/personname) | Max 1. Adds names to the user. |
| [`notes`](/graph/api/resources/personannotation) | Max 1. Adds notes to the user. |
| [`phones`](/graph/api/resources/itemphone) | Adds phone numbers to the user. |
| [`positions`](/graph/api/resources/workposition) | Max 1. Adds work positions to the user. |
| [`projects`](/graph/api/resources/projectparticipation) | Describes projects the user participated in. |
| [`skills`](/graph/api/resources/skillproficiency) | Describes skills the user is proficient in. |
| [`webAccounts`](/graph/api/resources/webaccount) | Describes external web accounts the user has. |
| [`webSites`](/graph/api/resources/personwebsite) | Max 1. Describes a website for the user. |

To ensure Microsoft 365 recognizes your connection as containing people data, your schema must include the `accounts` property, with the `userPrincipalName` set to the user principal name and `externalDirectoryObjectId` set to the object ID of the organization user.

```json
{
  "accounts": [
    {
      "userPrincipalName": "adelev@contoso.com",
      "externalDirectoryObjectId": "069f0701-ed79-4ea1-a3c6-e8dc165e2a2a"
    }
  ]
}
```

> [!IMPORTANT]
> We expect changes during the public preview and ahead of general availability of this core schema configuration. Regularly check this page for updates.

## Registering the connection as a profile source

After you create the connection, you must register the connection as a source of profile data and add it to the list of prioritized sources.

You register the connection as a profile source by using the [profile source API](/graph/api/peopleadminsettings-post-profilesources) with `sourceId` set to the connection ID of your connector and the `webUrl` property set to an HTTPS link to either the external system or a page with additional information about the source.

After registration, you must add the connection to the list of prioritized profile sources using the [Profile property settings API](/graph/api/profilepropertysetting-update). Add the URL to the profile source, in the format of `https://graph.microsoft.com/beta/admin/people/profileSources(sourceId='connectionId')`, where `connectionId` is the unique connection ID of the connection, to the `prioritizedSourceUrls` array. This array represents the order in which Microsoft 365 composes the view of a person. If you want your connection to be the highest prioritized source, add it as the first item in the array.

## Notes and limitations

- People data provided via a Copilot connector is visible to all users in the organization. Connector data is stored in the user's Microsoft 365 profile. For more information, see [Microsoft 365 Copilot connectors for people data](/graph/peopleconnectors#compliance-privacy-and-data-usage).
- You must set the access control list (ACL) on items ingested by the connector to grant access to everyone.
- The schema requires that `accounts` property is present to identify the user to be enriched.
- Microsoft Graph discards people data without matching `userPrincipalName` and `externalDirectoryObjectId` in the `accounts` entity collection.
- You must provide valid string encoded JSON objects for profile entities. Microsoft Graph ignores invalid values.
- You must always provide profile entities as an array of entities.
- Microsoft Graph treats any other properties, besides the [reserved profile properties](#connection-schema-requirements) in the connection schema, as a custom property.
- Custom properties show up in profile cards as notes during the preview, but Microsoft will remove them before or at general availability.
- Microsoft 365 might take up to 48 hours after you ingest data about a person before it becomes available in search, people experiences, or Copilot.
- Connections with people data don't support [staged connections](microsoftsearch/staged-rollout-for-graph-connectors).
- Indexed items in connections with people data only appear in people search.

## Related content

- [Copilot connectors API](/graph/connecting-external-content-connectors-api-overview?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext)
- [Community samples](https://github.com/pnp/graph-connectors-samples)
