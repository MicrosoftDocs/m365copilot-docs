---
description: "Create CSharp Client"
---

```python

scopes = ['Files.Read.All', 'Sites.Read.All']

# Multi-tenant apps can use "common",
# single-tenant apps must use the tenant ID from the Azure portal
tenant_id = 'YOUR_TENANT_ID'

# Values from app registration
client_id = 'YOUR_CLIENT_ID'

# azure.identity
credential = DeviceCodeCredential(
    tenant_id=tenant_id,
    client_id=client_id)

client = MicrosoftAgentsM365CopilotServiceClient(credential, scopes)

```