---
ms.topic: include
ms.localizationpriority: medium
---

<!-- markdownlint-disable MD041 -->

To find the unique `skill` identifier for the Dataverse knowledge sources you want to include:

1. In Copilot Studio, follow the instructions in [Add a Dataverse knowledge source](https://learn.microsoft.com/microsoft-copilot-studio/knowledge-add-dataverse) to create a new declarative agent with Dataverse knowledge.
1. Select **Publish** and then download the .zip file.
1. Unzip and open the declarativeAgent.json file.
1. The `skill` value is included in the `knowledge_sources` section, as shown in the following example.

```json
{
  "name": "Dataverse",
  "knowledge_sources": [
    {
      "host_name": "org0f612cfc.crm.dynamics.com",
      "skill": "AIBuilderFileAttachedData_e7eTReDbkX_1t4X1oGoCF",
      "tables": [
        {
          "table_name": "msdyn_aibfileattacheddata"
        }
      ]
    }
  ]
}
```

