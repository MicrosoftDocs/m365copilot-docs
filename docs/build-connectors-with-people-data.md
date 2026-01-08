---
title: Build Microsoft 365 Copilot connectors for people data (preview)
description: Learn how to build your first Microsoft 365 Copilot connector for people data using the Microsoft Graph SDK (preview).
author: wictorwilen
ms.author: wictorwilen
ms.localizationpriority: medium
ms.date: 01/08/2026
ms.topic: how-to
---

# Build Microsoft 365 Copilot connectors for people data (preview)

<!-- cSpell:ignore wictorwilen -->

[Microsoft 365 Copilot connectors for people data](/graph/peopleconnectors) enable you to ingest people data and knowledge from your source systems (for example human resources, talent management, or other people systems) into Microsoft Graph. Adding people data to Microsoft Graph makes it available to Microsoft 365 Copilot and people experiences such as the profile card and people search. When you ingest your data, Copilot can reason over the data and use it to respond to user questions.

> [!IMPORTANT]
> Microsoft 365 Copilot connectors for people data built using the Microsoft Graph API are currently in public preview with limited functionality. For more information, see [Notes and limitations](#notes-and-limitations).

> [!IMPORTANT]
> The preview for people connectors has been updated with these requirements:
> * Requires configuration of the `contentCategory` property on the `externalConnection` entity.
> * Switch from using attribute named mapping for properties to the use of people domain specific labels.
> * A user can now be identified either via `userPrincipalName` or `externalDirectoryObjectId`.

You build Microsoft 365 Copilot connectors for people data in the same way as other [Copilot connectors](overview-copilot-connector.md) using the Microsoft Graph external connections APIs. To ensure Microsoft 365 recognizes your connection as a connection containing people data, you must follow the [connection configuration](#connection-configuration-requirements) and [schema](#connection-schema-requirements) requirements, as well as [register the connection as a source of profile data](#registering-the-connection-as-a-profile-source).

> [!NOTE]
> For an example connector that provides people data, see [Microsoft 365 Copilot connector for people data sample](https://aka.ms/peopleconnectors/sample).

## Connection configuration requirements

Copilot connectors that contains people data must set the [`externalConnections`](/graph/api/resources/externalconnectors-externalconnection) `contentCategory` property to have the value `people`.

## Connection schema requirements

Microsoft 365 Copilot connectors for people data supports enrichment for following Microsoft 365 user profile entities, with a correct mapped to a label.

* The schema must have one property with the `personAccount` label to be able to map the `externalItem` to a person.
* Properties without a label are considered *custom properties*. 

| Property label| Property type | Profile entity | Description |
| ---- | ---- | -------------- | ----------- |
| `personAccount` | `string`| [`userAccountInformation`](/graph/api/resources/useraccountinformation) | Indicates the Microsoft Entra ID user the item targets. |
| `personName`| `string` | [`personName`](/graph/api/resources/personname) | Adds names to the user. |
| `personCurrentPosition`| `string` | [`workPosition`](/graph/api/resources/workposition) | Describes the current position of the person. |
| `personAddresses` | `stringCollection` | [`itemAddress`](/graph/api/resources/itemaddress) | Max 3, one each of `Home`, `Work`, and `Other`. Adds addresses to the user. |
| `personEmails`| `stringCollection` | [`itemEmail`](/graph/api/resources/itememail) | Max 3. Adds email addresses to the user. |
| `personPhones`| `stringCollection` | [`itemPhone`](/graph/api/resources/itemphone) | Adds phone numbers to the user. |
| `personAwards`| `stringCollection` | [`personAward`](/graph/api/resources/personaward) | Describes awards the user earned. |
| `personCertifications`| `stringCollection` | [`personCertification`](/graph/api/resources/personcertification) | Describes certifications the user earned. |
| `personProjects`| `stringCollection` | [`projectParticipation`](/graph/api/resources/projectparticipation) | Describes projects the user participated in. |
| `personSkills`| `stringCollection` | [`skillProficiency`](/graph/api/resources/skillproficiency) | Describes skills the user is proficient in. |
| `personWebAccounts`| `stringCollection` | [`webAccount`](/graph/api/resources/webaccount) | Describes external web accounts the user has. |
| `personWebSite`| `string` | [`webSite`](/graph/api/resources/personwebsite) | Describes a website for the user. |
| `personAnniversaries`| `stringCollection` | [`personAnniversary`](/graph/api/resources/personanniversary) | Adds one or more anniversaries tot he person |
| `personNote`| `string` | [`personAnnotation`](/graph/api/resources/personannotation) | Adds a note to the user. |


Example schema:

```json
{
  "baseType": "microsoft.graph.externalItem",
  "properties": [
    {
      "name": "accountInformation",
      "type": "string",
      "labels": ["personAccount"]
    },
    {
      "name": "position",
      "type": "string",
      "labels": ["personCurrentPosition"]
    },
    {
      "name": "skills",
      "type": "stringCollection",
      "labels": ["personSkills"]
    },
    {
      "name": "requisitionId",
      "type": "string"
    }
  ]
}
```

## Serialization of JSON entities

Each property, with a label, are either of type `string` or `stringCollection`, and represents a JSON serialized string representation of the Microsoft 365 profile entity being enriched.

```json
{
  ...
  "properties:" {
    "accountInformation": "{\"userPrincipalName\": \"adelev@contoso.com\"}",
    "position": "{\"detail\":{\"jobTitle\":\"ProductManager\"}}",
    "skills@odata.type": "Collection(String)",
    "skills": [
      "{\"displayName\":\"Product requirements\",}",
      "{\"displayName\":\"Customer research\"}"
    ],
    "requisitionId": "REQ-12345678
  }
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
- You must provide valid string encoded JSON objects for profile entities. Microsoft Graph ignores invalid values.
- Non matched user accounts (`userPrincipalName` or `externalDirectoryObjectId`) will be ignored.
- Microsoft Graph treats any property without a label as a custom property.
- Custom properties might show up in profile cards as notes during the preview, but Microsoft will remove them before or at general availability.
- Microsoft 365 might take up to 6 hours after the connection is created before it becomes available in search, people experiences, or Copilot.
- Connections with people data don't support [staged connections](/microsoftsearch/staged-rollout-for-graph-connectors).
- The following labels are not yet supported `personManager`, `personAssistants`, `personColleagues`, `personAlternateContacts` and `personEmergencyContacts`.

## Related content

- [Copilot connectors API](/graph/connecting-external-content-connectors-api-overview?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext)
- [Community samples](https://github.com/pnp/graph-connectors-samples)
