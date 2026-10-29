# Microsoft 365 Copilot Extensibility Documentation

This repository contains the source for Microsoft 365 Copilot extensibility documentation published to [Microsoft Learn](https://learn.microsoft.com/m365copilot/extensibility). This is a documentation-only repository that uses the OpenPublishing system with DocFX for building and publishing.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Bootstrap the environment

* Verify PowerShell Core is available: `pwsh --version`
* Verify Node.js is available: `node --version && npm --version`
* Install required validation tools: `npm install -g markdownlint-cli cspell`

### Essential validation workflow

* Run only `markdownlint` and `cspell`, using the repository configs, immediately before committing.
* Don't run validation commands during drafting, editing, or review, or when handing off uncommitted changes. Report that validation was deferred until commit.
* Don't rerun validation just to create a pull request if the committed content hasn't changed.
* Don't run the unused image cleanup script as part of Copilot or agent work.
* This policy applies to all agents and prompts in this repository. Content review and source verification remain part of authoring; they don't require additional validation tools.

### Content authoring

* Use Visual Studio Code with the Learn Authoring Pack extension for real-time validation
* Follow the [Microsoft Writing Style Guide](https://learn.microsoft.com/style-guide/welcome/)
* All content files use YAML front matter with required metadata fields
* Use dashes (-) for unordered lists, not asterisks (*) to avoid MD004 lint errors

## Validation

### Required validation before every commit

1. `markdownlint docs --config .markdownlint.json` — must pass with zero errors
2. `cspell --config cspell.json "docs/**/*.md"` — fix spelling or add words to cspell.json

These are the only required local validation commands. Don't require a clean VS Code Problems window or run additional validation scripts. Automated CI checks remain unchanged.

### Content quality requirements

* OpenPublishing build must succeed (runs automatically in CI)
* No hard tabs (use spaces for indentation)
* Files must end with a single newline character
* No trailing whitespace
* Proper heading hierarchy (no skipped heading levels)

### Common lint fixes

* MD047: Add single newline at end of file
* MD009: Remove trailing spaces
* MD004: Use dash (-) instead of asterisk (*) for unordered lists
* MD033: Avoid inline HTML unless specifically allowed in .markdownlint.json
* MD032: Add blank lines around lists

## Repository Structure

### Key directories

* `docs/` — Main documentation content (Markdown files)
* `docs/includes/` — Reusable content snippets and shared manifests
* `docs/assets/images/` — All documentation images
* `docs/assets/scripts/` — PowerShell utility scripts
* `docs/api/` — API documentation with zone pivots
* `.github/workflows/` — GitHub Actions (EOL blocker validation)
* `scripts/` — Repository maintenance scripts

### Important configuration files

* `.markdownlint.json` — Markdown linting rules and exceptions
* `cspell.json` — Spell checking dictionary and configuration
* `docs/docfx.json` — DocFX build configuration
* `.openpublishing.publish.config.json` — OpenPublishing build settings
* `docs/TOC.yml` — Table of contents structure

### Content types in this repository

* **Conceptual articles** — Overview and guidance content
* **How-to guides** — Step-by-step tutorials
* **API reference** — Generated and hand-authored API documentation
* **Sample manifests** — JSON examples in `docs/includes/sample-manifests/`
* **Includes** — Reusable content snippets
* **Assets** — Images, scripts, and supporting files

## Common Tasks

### Adding new documentation

1. Create Markdown file in appropriate `docs/` subdirectory
2. Add required YAML front matter (title, description, author, ms.author, ms.topic, ms.localizationpriority, ms.date)
3. Update `docs/TOC.yml` to include new file in navigation
4. Add any new images to `docs/assets/images/` with descriptive names
5. Immediately before committing, run the two commands under **Required validation before every commit**.

### Updating existing documentation

1. When updating technical information in articles, update the `ms.date` value in YAML front matter to the current date
2. This helps track when content was last revised and ensures accurate metadata
3. Use the format: `ms.date: MM/dd/yyyy` (e.g., `ms.date: 01/15/2024`)
4. Defer validation until immediately before committing, then run the two required commands.

### Updating sample manifests

1. Edit JSON files in `docs/includes/sample-manifests/`
2. Ensure JSON is valid and properly formatted
3. Update corresponding documentation that references the manifest
4. Defer validation until immediately before committing, then run the two required commands.

### Managing images

1. Add images to `docs/assets/images/` with descriptive names
2. Reference images using relative paths: `![Alt text](assets/images/filename.png)`
3. Ensure all images are used and properly referenced

### Handling spell check issues

1. Check any unknown words for spelling errors. If the word is spelled incorrectly, correct it
2. If the word is spelled correctly but is unknown, add the word to the "words" array in `cspell.json`
3. Commit cspell.json changes with your content updates

### Working with includes

1. Create reusable content in `docs/includes/`
2. Reference includes using: `[!INCLUDE [include-name](includes/filename.md)]`
3. Keep includes focused and atomic
4. Update include files when content needs to change across multiple articles

## Expected Timing and Tolerances

* **markdownlint validation**: 2-3 seconds for full repository. NEVER CANCEL.
* **cspell validation**: 3-4 seconds for full repository. NEVER CANCEL.
* **VS Code Learn Authoring Pack**: Real-time validation, no waiting required.
* **OpenPublishing build**: Runs in CI, typically 5-10 minutes. Cannot be run locally.

## Troubleshooting

### Common issues and solutions

* **"Unknown word" in cspell**: Add to cspell.json or fix spelling
* **MD004 lint error**: Use dash (-) instead of asterisk (*) for lists
* **Missing newline**: Add single blank line at end of file
* **Hard tabs detected**: Replace tabs with spaces (VS Code: View -> Command Palette -> "Convert Indentation to Spaces")
* **OpenPublishing build failure**: Check error messages in PR status checks

### When validation fails

1. Read error messages carefully
2. Fix issues one at a time
3. Re-run the affected required command after fixes, before committing

## Working with GitHub Copilot in this repository

* Run only `markdownlint` and `cspell` immediately before committing; otherwise defer validation
* Focus on content quality and adherence to Microsoft style guidelines
* Use the repository structure to understand where to place new content
* Leverage includes for reusable content across multiple articles
* Remember this is documentation-only - no application code to build or run
* For every new or substantially revised Copilot API overview, request example, quickstart, Work IQ article, or MCP tool reference, follow `.github/instructions/interactive-demo.instructions.md`. Add an applicable interactive demo link only after verifying it against production, or record why no matching experience exists.
