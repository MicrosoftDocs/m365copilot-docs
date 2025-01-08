# Get all files in the images directory and subdirectories
$images = Get-ChildItem -Path "./docs/assets/images" -Recurse | Where-Object { -not $_.PSIsContainer }

Write-Host "Found" $images.Length "image files"

$unusedFileCount = 0

foreach($file in $images)
{
    # This command finds any lines in any text file that contains the file name
    $references = Get-ChildItem -Path "./docs" -Recurse | Select-String $file.Name

    # If there's at least one hit, keep the file
    if ($references.Length -gt 0)
    {
        Write-Host -ForegroundColor Green $file.Name "found in" $references.Length "files"
    }
    else
    {
        Write-Host -ForegroundColor Red $file.Name "found in 0 files"
        $unusedFileCount++
        Remove-Item -Path $file
    }
}

Write-Host -ForegroundColor Cyan "Total unused files:" $unusedFileCount
