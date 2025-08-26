---
description: "Create CSharp Client"
---

<!-- markdownlint-disable MD041 -->

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
var baseURL = "https://graph.microsoft.com/beta";
AgentsM365CopilotBetaServiceClient client = new AgentsM365CopilotBetaServiceClient (deviceCodeCredential, scopes, baseURL);

try
{
  var requestBody = new RetrievalPostRequestBody
  {
      DataSource = RetrievalDataSource.SharePoint,
      QueryString = "What is the latest in my organization?",
      MaximumNumberOfResults = 10
  };

  var result = await client.Copilot.Retrieval.PostAsync(requestBody);
  Console.WriteLine($"Retrieval post: {result}");

  if (result != null)
  {
    Console.WriteLine("Retrieval response received successfully");
    Console.WriteLine("\nResults:");
    Console.WriteLine(result.RetrievalHits.Count.ToString());
    if (result.RetrievalHits != null)
    {
       foreach (var hit in result.RetrievalHits)
       {
         Console.WriteLine("\n---");
         Console.WriteLine($"Web URL: {hit.WebUrl}");
         Console.WriteLine($"Resource Type: {hit.ResourceType}");
         if (hit.Extracts != null && hit.Extracts.Any())
         {
            Console.WriteLine("\nExtracts:");
            foreach (var extract in hit.Extracts)
            {
              Console.WriteLine($"  {extract.Text}");
            }
          }
          if (hit.SensitivityLabel != null)
          {
            Console.WriteLine("\nSensitivity Label:");
            Console.WriteLine($"  Display Name: {hit.SensitivityLabel.DisplayName}");
            Console.WriteLine($"  Tooltip: {hit.SensitivityLabel.Tooltip}");
            Console.WriteLine($"  Priority: {hit.SensitivityLabel.Priority}");
            Console.WriteLine($"  Color: {hit.SensitivityLabel.Color}");
            if (hit.SensitivityLabel.IsEncrypted.HasValue)
            {
              Console.WriteLine($"  Is Encrypted: {hit.SensitivityLabel.IsEncrypted.Value}");
            }
          }
        }
      }
      else
      {
        Console.WriteLine("No retrieval hits found in the response");
      }
  }
}
catch (Exception ex)
{
    Console.WriteLine($"Error making retrieval request: {ex.Message}");
    Console.Error.WriteLine(ex);
}
```
