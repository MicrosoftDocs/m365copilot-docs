# Documenting Microsoft Graph APIs in this repo

## Versioning APIS

Instead of the approach in the Microsoft Graph docs, where there are separate files for v1 and beta, in this repo we keep both versions in the same file and use a zone pivot to wrap the version-specific content.

> [!IMPORTANT]
> The API version zone pivot is only available to Markdown files in this folder (and subfolders).

To add this to a file:

1. Add `zone_pivot_groups: graph-api-versions` to the YAML frontmatter in the file.

1. Add beta-specific content with the following syntax:

    ```md
    :::zone pivot="graph-preview"
    [!INCLUDE [beta-disclaimer](../includes/beta-disclaimer.md)]
    :::zone-end
    ```

1. Add v1-specific content with the following syntax:

    <!-- markdownlint-disable MD048 -->
    ~~~md
    :::zone pivot="graph-v1"

    ```http
    POST https://graph.microsoft.com/v1.0/copilot/retrieval
    Content-Type: application/json

    {
      "queryString": "How to setup corporate VPN?",
      "filterExpression": "path:\"https://contoso.sharepoint.com/sites/HR1/\" OR path:\"https://contoso.sharepoint-df.com/sites/HR2\"",
      "resourceMetadata": [
        "title",
        "author"
      ],
      "maximumNumberOfResults": "4"
    }
    ```

    :::zone-end
    ~~~
