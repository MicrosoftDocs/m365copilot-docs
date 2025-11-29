---
ms.topic: include
ms.localizationpriority: medium
---

<!-- markdownlint-disable MD041 -->

To find the unique `skill` identifier for the Dataverse knowledge sources you want to include:

1. In Copilot Studio, find the Agent named "Copilot for Microsoft 365" and open it
2. Create a new agent to use to generate the knowledge source section.
3. Follow the instructions in [Add a Dataverse knowledge source](https://learn.microsoft.com/microsoft-copilot-studio/knowledge-add-dataverse) to create a new declarative agent with Dataverse knowledge.
4. Select **Publish** and then download the .zip file.
5. Unzip and open the declarativeAgent.json file.
6. The `skill` value is included in the `knowledge_sources` section, as shown in the following example.

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

