param(
    [Parameter(Mandatory = $true,
    HelpMessage = "The URL path to the file or folder to search for")]
    [String]
    $FilePath,

    [Parameter(Mandatory = $false)]
    [Switch]
    $StayConnected = $false
)

Connect-MgGraph -Scopes "Sites.Read.All Files.Read.All" `
    -UseDeviceCode -ErrorAction Stop -NoWelcome

$searchQuery = @{
    requests = @(
        @{
            entityTypes = @("driveItem")
            query = @{
                queryString = "Path:""" + $FilePath +  """"
            }
            fields = @(
                "fileName"
                "listId"
                "webId"
                "siteId"
                "uniqueId"
            )
        }
    )
}

$results = Invoke-MgQuerySearch -Body $searchQuery

foreach($hitContainer in $results.HitsContainers)
{
    foreach($hit in $hitContainer.Hits)
    {
        Write-Output $hit.Resource.AdditionalProperties["listItem"]["fields"] | Format-Table
    }
}

if ($StayConnected -eq $false) {
    Disconnect-MgGraph | Out-Null
    Write-Host "Disconnected from Microsoft Graph"
}
else {
    Write-Host
    Write-Host -ForegroundColor Yellow `
        "The connection to Microsoft Graph is still active. To disconnect, use Disconnect-MgGraph"
}
