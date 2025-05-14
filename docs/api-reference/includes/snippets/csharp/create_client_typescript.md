---
description: "Create TypeScript Client"
---

```typescript

import DeviceCodeCrential from '@azure/identity';
import {AgentsM365CopilotBetaServiceClient, AgentsM365CopilotBetaRequestAdapter} from '@microsoft/agents-m365copilot-beta';
import AzureIdentityAuthenticationProvider from '@microsoft/kiota-authentication-azure';

const credential = new DeviceCodeCredential({
  tenantId: 'YOUR_TENANT_ID',
  clientId: 'YOUR_CLIENT_ID',
  userPromptCallback: (info) => {
    console.log(info.message);
  },
});

const authProvider = new AzureIdentityAuthenticationProvider(credential, ["Files.Read.All", "Sites.Read.All"]);

const requestAdapter = new AgentsM365CopilotBetaRequestAdapter(authProvider);
const client = AgentsM365CopilotBetaServiceClient(requestAdapter);

const requestBody: RetrievalPostRequestBody = {
  queryString: 'What is the latest in my organization',
  maximumNumberOfResults: 2
};

const retrieval = await client.api('/copilot/retrieval').post(requestBody);

```