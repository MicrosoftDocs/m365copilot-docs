---
description: "Create CSharp Client"
---

```csharp

using Azure.Identity;
using Microsoft.Agents.M365Copilot.Beta;
using Microsoft.Agents.M365Copilot.Beta.Models;
using Microsoft.Agents.M365Copilot.Beta.Copilot.Retrieval;

var scopes = new[] {"Files.Read.All", "Sites.Read.All"}; 
 
// Multi-tenant apps can use "common", 
// single-tenant apps must use the tenant ID from the Azure portal 
var tenantId = "YOUR_TENANT_ID"; 
 
// Value from app registration 
var clientId = "YOUR_CLIENT_ID"; 
 
// using Azure.Identity; 
var deviceCodeCredentialOptions = new DeviceCodeCredentialOptions 
{ 
   ClientId = clientId, 
   TenantId = tenantId, 
   // Callback function that receives the user prompt 
   // Prompt contains the generated device code that user must 
   // enter during the auth process in the browser 
   DeviceCodeCallback = (deviceCodeInfo, cancellationToken) => 
   { 
       Console.WriteLine(deviceCodeInfo.Message); 
       return Task.CompletedTask; 
   }, 
}; 
 
// https://learn.microsoft.com/dotnet/api/azure.identity.devicecodecredential 
var deviceCodeCredential = new DeviceCodeCredential(deviceCodeCredentialOptions); 
 

//Create the client with explicit base URL 
var baseURL = “https://graph.microsoft.com/beta”; 
AgentsM365CopilotBetaServiceClient client = new AgentsM365CopilotBetaServiceClient (deviceCodeCredential, scopes, baseURL); 

var requestBody = new RetrievalPostRequestBody
{
    DataSource = RetrievalDataSource.SharePoint,
    QueryString = "What is the latest in my organization?",
    MaximumNumberOfResults = 10
};


var result = await client.Copilot.Retrieval.PostAsync(requestBody);
 
```