---
description: "Create TypeScript Client"
---

```typescript

import { createBaseAgentsM365CopilotBetaServiceClient, RetrievalDataSourceObject } from '@microsoft/agents-m365copilot-beta';
import { DeviceCodeCredential } from '@azure/identity';
import { FetchRequestAdapter } from '@microsoft/kiota-http-fetchlibrary';
import { AzureIdentityAuthenticationProvider } from '@microsoft/kiota-authentication-azure';

async function main() {
    // Initialize authentication with Device Code flow
    const credential = new DeviceCodeCredential({
        tenantId: "YOUR_TENANT_ID",
        clientId: "YOUR_CLIENT_ID",
        userPromptCallback: (info) => {
            console.log(`\nTo sign in, use a web browser to open the page ${info.verificationUri}`);
            console.log(`Enter the code ${info.userCode} to authenticate.`);
            console.log(`The code will expire at ${info.expiresOn}`);          
        }
    });
    // Create request adapter with auth
    const authProvider = new AzureIdentityAuthenticationProvider(credential, ["Files.Read.All", "Sites.Read.All"]);
    const adapter = new FetchRequestAdapter(authProvider);
    adapter.baseUrl = "https://graph.microsoft.com/beta";

    // Create client instance
    const client = createBaseAgentsM365CopilotBetaServiceClient(adapter);

    try {
        console.log(`Using API base URL: ${adapter.baseUrl}\n`);
        // Create the retrieval request body
        const retrievalBody = {
            dataSource: RetrievalDataSourceObject.SharePoint,
            queryString: "What is the latest in my organization?"
        };

        // Make the API call
        console.log("Making retrieval API request...");
        const retrieval = await client.copilot.retrieval.post(retrievalBody);

        // Process the results
        if (retrieval?.retrievalHits) {
            console.log(`\nReceived ${retrieval.retrievalHits.length} hits`);
            for (const hit of retrieval.retrievalHits) {
                console.log(`\nWeb URL: ${hit.webUrl}`);
                for (const extract of hit.extracts || []) {
                    console.log(`Text:\n${extract.text}\n`);
                }
            }
        }
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}  
 
main().catch((error) => {
    console.error('An error occurred:', error);
});
```