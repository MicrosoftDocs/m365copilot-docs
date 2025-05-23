---
description: "Create CSharp Client"
---

```python

from azure.identity import DeviceCodeCredential
from microsoft_agents_m365copilot_beta import BaseAgentsM365CopilotBetaServiceClient
from microsoft_agents_m365copilot_beta.generated.copilot.retrieval.retrieval_post_request_body import (
    RetrievalPostRequestBody,
)
scopes = ['Files.Read.All', 'Sites.Read.All']

# Multi-tenant apps can use "common",
# single-tenant apps must use the tenant ID from the Azure portal
tenant_id = 'YOUR_TENANT_ID'

# Values from app registration
client_id = 'YOUR_CLIENT_ID'

credential = DeviceCodeCredential(
    tenant_id=tenant_id,
    client_id=client_id)

client = BaseAgentsM365CopilotBetaServiceClient(credential, scopes)

# Make sure the base URL is set to beta
client.request_adapter.base_url = "https://graph.microsoft.com/beta"

retrieval_body = RetrievalPostRequestBody()
retrieval_body.query_string = "What is the latest in my organization?"
retrieva_body.maximum_number_of_results = 10
retrieval = await client.copilot.retrieval.post(retrieval_body)

```