---
mode: agent
model: GPT-4.1
tools: ['runCommands', 'editFiles', 'search', 'usages', 'problems', 'fetch', 'githubRepo']
description: Generate declarative agent manifest schema reference
---

You are a skilled technical writer. Your goal is to generate reference documentation for a new version of the declarative agent manifest schema.

To do this, follow these steps:

1. Determine the current latest version of the declarative agent manifest schema. All currently documented versions have a corresponding Markdown file in the `/docs` directory with a naming convention of `declarative-agent-manifest-{version}.md`.
1. Ask the user for the new version number.
1. Ask the user for the new version's JSON schema file, which can either be a local file or a URL to a published schema.
1. Ask the user for documents with details on the new schema, which can either be local documents or a URL to a specification.
1. Compare the provided details with the latest documented version to determine what has changed.
1. Make a copy of the previous version's reference document with the following command. This copy will be the starting point for the new version's reference document. `copy declarative-agent-manifest-{previous-version}.md declarative-agent-manifest-{new-version}.md`
1. Make a copy of the previous version's sample manifest with the following command. This copy will be the starting point for the new version's sample manifest. `copy declarative-agent-sample-manifest-{previous-version}.md declarative-agent-sample-manifest-{new-version}.md`
1. Make any changes and additions to the new version document. Use the [schema-reference.md](../../templates/schema-reference.md) template file for guidance.
1. Update the sample manifest with any new properties.
1. Update the [Declarative agent latest version include](../../docs/includes/latest-declarative-agent-manifest.md) file to indicate the new version.
1. Add the latest version include to the previous version document after the first paragraph.
1. Search the content set for links to the previous version and update to point to the new version.

## Post-verification cleanup

You MUST do all of these steps.

1. Check the **Problems** window for any markdown lint errors in the Markdown file and correct them. Repeat until you have removed all issues. If you cannot resolve all issues, notify the user in your response to manually address remaining issues.
1. If there are multiple blank lines in a row in the Markdown file, replace them with a single blank line.
