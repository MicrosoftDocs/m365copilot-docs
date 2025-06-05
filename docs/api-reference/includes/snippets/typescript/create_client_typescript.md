---
description: "Create TypeScript Client"
---

```typescript

import { createBaseAgentsM365CopilotBetaServiceClient, RetrievalDataSourceObject } from '@microsoft/agents-m365copilot-beta';
import { DeviceCodeCredential } from '@azure/identity';
import { FetchRequestAdapter } from '@microsoft/kiota-http-fetchlibrary';

async function main() {
    // Initialize authentication with Device Code flow
    const credential = new DeviceCodeCredential({
        tenantId: process.env.TENANT_ID,
        clientId: process.env.CLIENT_ID,
        userPromptCallback: (info) => {
          console.log(info.message);
        }
    });
    // Create request adapter with auth
    const adapter = new FetchRequestAdapter(credential, {
        scopes: ["Files.Read.All", "Sites.Read.All"]
    });
    adapter.baseUrl = "https://graph.microsoft.com/beta";

    // Create client instance
    const client = createBaseAgentsM365CopilotBetaServiceClient(adapter);


    // Create the retrieval request body
    const retrievalBody = {
        dataSource: RetrievalDataSourceObject.SharePoint,
        queryString: "What is the latest in my organization?"
    };

    // Make the API call
    const retrieval = await client.copilot.retrieval.post(retrievalBody);
}    

```