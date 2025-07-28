```csharp
using Microsoft.Graph;
using Microsoft.Graph.Models;

var graphServiceClient = new GraphServiceClient(credentialProvider);

var requestBody = new SearchPostRequestBody
{
    Query = "quarterly budget analysis",
    PageSize = 5,
    DataSources = new SearchDataSources
    {
        OneDrive = new OneDriveDataSourceConfiguration
        {
            FilterExpression = "path:\"https://contoso-my.sharepoint.com/personal/megan_contoso_com/Documents/Finance/\"",
            ResourceMetadataNames = new List<string>
            {
                "title",
                "author"
            }
        }
    }
};

var result = await graphServiceClient.Copilot.Search.PostAsync(requestBody);
```
