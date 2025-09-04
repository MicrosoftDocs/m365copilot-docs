---
description: "Create Python Client"
---

```python

import asyncio
import os
from datetime import datetime

from azure.identity import DeviceCodeCredential
from kiota_abstractions.api_error import APIError
from microsoft_agents_m365copilot_beta.agents_m365_copilot_beta_service_client import AgentsM365CopilotBetaServiceClient
from microsoft_agents_m365copilot_beta.generated.copilot.retrieval.retrieval_post_request_body import RetrievalPostRequestBody
from microsoft_agents_m365copilot_beta.generated.models.retrieval_data_source import RetrievalDataSource

scopes = ['Files.Read.All', 'Sites.Read.All']

# Multi-tenant apps can use "common",
# single-tenant apps must use the tenant ID from the Azure portal
TENANT_ID = 'YOUR_TENANT_ID'

# Values from app registration
CLIENT_ID = 'YOUR_CLIENT_ID'

# Define a proper callback function that accepts all three parameters
def auth_callback(verification_uri: str, user_code: str, expires_on: datetime):
    print(f"\nTo sign in, use a web browser to open the page {verification_uri}")
    print(f"Enter the code {user_code} to authenticate.")
    print(f"The code will expire at {expires_on}")

# Create device code credential with correct callback
credentials = DeviceCodeCredential(
    client_id=CLIENT_ID,
    tenant_id=TENANT_ID,
    prompt_callback=auth_callback
)

client = AgentsM365CopilotBetaServiceClient(credentials=credentials, scopes=scopes)

# Make sure the base URL is set to beta
client.request_adapter.base_url = "https://graph.microsoft.com/beta"

async def retrieve():
    try:
        # Print the URL being used
        print(f"Using API base URL: {client.request_adapter.base_url}\n")
        
        # Create the retrieval request body
        retrieval_body = RetrievalPostRequestBody()
        retrieval_body.data_source = RetrievalDataSource.SharePoint
        retrieval_body.query_string = "What is the latest in my organization?"
        
        # Try more parameters that might be required
        # retrieval_body.maximum_number_of_results = 10
        
        # Make the API call
        print("Making retrieval API request...")
        retrieval = await client.copilot.retrieval.post(retrieval_body)
        
        # Process the results
        if retrieval and hasattr(retrieval, "retrieval_hits"):
            print(f"Received {len(retrieval.retrieval_hits)} hits")
            for r in retrieval.retrieval_hits:
                print(f"Web URL: {r.web_url}\n")
                for extract in r.extracts:
                    print(f"Text:\n{extract.text}\n")
        else:
            print(f"Retrieval response structure: {dir(retrieval)}")
    except APIError as e:
        print(f"Error: {e.error.code}: {e.error.message}")
        if hasattr(e, 'error') and hasattr(e.error, 'inner_error'):
            print(f"Inner error details: {e.error.inner_error}")
        raise e


# Run the async function
asyncio.run(retrieve())

```