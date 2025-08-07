# Microsoft 365 Copilot Extensibility Documentation

This repository contains the source for Microsoft 365 Copilot extensibility documentation published to [Microsoft Learn](https://learn.microsoft.com/m365copilot/extensibility). This is a documentation-only repository that uses the OpenPublishing system with DocFX for building and publishing.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Bootstrap the environment

* Install required validation tools: `npm install -g markdownlint-cli cspell`
* Verify PowerShell Core is available: `pwsh --version`
* Verify Node.js is available: `node --version && npm --version`

### Essential validation workflow

* Run markdown linting: `markdownlint docs --config .markdownlint.json` — takes ~3 seconds. Always fix lint errors before committing.
* Run spell checking: `cspell --config cspell.json "docs/**/*.md"` — takes ~3 seconds. Add unknown but valid words to cspell.json.
* Clean unused images: `pwsh scripts/CleanupUnusedImages.ps1` — takes ~45-50 seconds. NEVER CANCEL this operation.
* ALWAYS run all validation steps before creating a pull request.

### Content authoring

* Use Visual Studio Code with the Learn Authoring Pack extension for real-time validation
* Follow the [Microsoft Writing Style Guide](https://learn.microsoft.com/style-guide/welcome/)
* All content files use YAML front matter with required metadata fields
* Use asterisk (*) for unordered lists, not dashes (-) to avoid MD004 lint errors

## Validation

### Required validation before every commit

1. `markdownlint docs --config .markdownlint.json` — must pass with zero errors
2. `cspell --config cspell.json "docs/**/*.md"` — fix spelling or add words to cspell.json
3. `pwsh scripts/CleanupUnusedImages.ps1` — verify no unused images
4. Visual Studio Code should show no problems in the Problems window

### Content quality requirements

* Acrolinx score must be 80 or higher (runs automatically in PR validation)
* OpenPublishing build must succeed (runs automatically in CI)
* No hard tabs (use spaces for indentation)
* Files must end with a single newline character
* No trailing whitespace
* Proper heading hierarchy (no skipped heading levels)

### Common lint fixes

* MD047: Add single newline at end of file
* MD009: Remove trailing spaces
* MD004: Use asterisk (*) instead of dash (-) for unordered lists
* MD033: Avoid inline HTML unless specifically allowed in .markdownlint.json
* MD032: Add blank lines around lists

## Repository Structure

### Key directories

* `docs/` — Main documentation content (Markdown files)
* `docs/includes/` — Reusable content snippets and shared manifests
* `docs/assets/images/` — All documentation images
* `docs/assets/scripts/` — PowerShell utility scripts
* `docs/api-reference/` — API documentation with zone pivots
* `.github/workflows/` — GitHub Actions (EOL blocker validation)
* `scripts/` — Repository maintenance scripts

### Important configuration files

* `.markdownlint.json` — Markdown linting rules and exceptions
* `cspell.json` — Spell checking dictionary and configuration
* `docs/docfx.json` — DocFX build configuration
* `.openpublishing.publish.config.json` — OpenPublishing build settings
* `.acrolinx-config.edn` — Content quality scoring configuration
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
5. Run validation: `markdownlint docs --config .markdownlint.json && cspell --config cspell.json "docs/**/*.md"`

### Updating existing documentation

1. When updating technical information in articles, update the `ms.date` value in YAML front matter to the current date
2. This helps track when content was last revised and ensures accurate metadata
3. Use the format: `ms.date: MM/dd/yyyy` (e.g., `ms.date: 01/15/2024`)
4. Run validation after updates: `markdownlint docs --config .markdownlint.json && cspell --config cspell.json "docs/**/*.md"`

### Updating sample manifests

1. Edit JSON files in `docs/includes/sample-manifests/`
2. Ensure JSON is valid and properly formatted
3. Update corresponding documentation that references the manifest
4. Test validation workflow

### Managing images

1. Add images to `docs/assets/images/` with descriptive names
2. Reference images using relative paths: `![Alt text](assets/images/filename.png)`
3. Run cleanup script periodically: `pwsh scripts/CleanupUnusedImages.ps1`
4. Ensure all images are used and properly referenced

### Handling spell check issues

1. Right-click unknown words in VS Code Problems window
2. Select "Spelling" -> "Add Words to CSpell Configuration"
3. Alternatively, manually add words to the "words" array in `cspell.json`
4. Commit cspell.json changes with your content updates

### Working with includes

1. Create reusable content in `docs/includes/`
2. Reference includes using: `[!INCLUDE [include-name](includes/filename.md)]`
3. Keep includes focused and atomic
4. Update include files when content needs to change across multiple articles

## Expected Timing and Tolerances

* **markdownlint validation**: 2-3 seconds for full repository. NEVER CANCEL.
* **cspell validation**: 3-4 seconds for full repository. NEVER CANCEL.
* **Image cleanup script**: 45-50 seconds for 142 images. NEVER CANCEL.
* **VS Code Learn Authoring Pack**: Real-time validation, no waiting required.
* **OpenPublishing build**: Runs in CI, typically 5-10 minutes. Cannot be run locally.
* **Acrolinx validation**: Runs in PR validation, typically 2-5 minutes depending on content volume.

## Troubleshooting

### Common issues and solutions

* **"Unknown word" in cspell**: Add to cspell.json or fix spelling
* **MD004 lint error**: Use asterisk (*) instead of dash (-) for lists
* **Missing newline**: Add single blank line at end of file
* **Hard tabs detected**: Replace tabs with spaces (VS Code: View -> Command Palette -> "Convert Indentation to Spaces")
* **Acrolinx score below 80**: Review scorecard feedback and improve writing quality
* **OpenPublishing build failure**: Check error messages in PR status checks

### When validation fails

1. Read error messages carefully
2. Fix issues one at a time
3. Re-run validation after each fix
4. Check VS Code Problems window for real-time feedback
5. Use Learn Authoring Pack features for automated fixes where available

## Working with GitHub Copilot in this repository

* Always run validation commands after making any content changes
* Focus on content quality and adherence to Microsoft style guidelines
* Use the repository structure to understand where to place new content
* Leverage includes for reusable content across multiple articles
* Remember this is documentation-only - no application code to build or run
