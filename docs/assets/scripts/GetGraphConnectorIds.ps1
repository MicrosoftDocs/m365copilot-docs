param(
    [Parameter(Mandatory = $false)]
    [Switch]
    $StayConnected = $false
)

# Requires an admin
Connect-MgGraph -Scopes "ExternalConnection.Read.All" `
    -UseDeviceCode -ErrorAction Stop -NoWelcome

Get-MgExternalConnection -Property "Name", "Id" | Format-Table "Name", "Id"

if ($StayConnected -eq $false) {
    Disconnect-MgGraph | Out-Null
    Write-Host "Disconnected from Microsoft Graph"
}
else {
    Write-Host
    Write-Host -ForegroundColor Yellow `
        "The connection to Microsoft Graph is still active. To disconnect, use Disconnect-MgGraph"
}
