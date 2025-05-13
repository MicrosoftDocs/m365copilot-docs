---
description: "Create TypeScript Client"
---

```typescript

// @azure/identity
const credential = new DeviceCodeCredential({
  tenantId: 'YOUR_TENANT_ID',
  clientId: 'YOUR_CLIENT_ID',
  userPromptCallback: (info) => {
    console.log(info.message);
  },
});

// @microsoft/kiota-authentication-azure
const authProvider = new AzureIdentityAuthenticationProvider(credential, ["Files.Read.All", "Sites.Read.All"]);

const requestAdapter = new RequestAdapter(authProvider);
const graphServiceClient = createGraphServiceClient(requestAdapter);
```