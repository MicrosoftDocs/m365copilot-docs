# Contributing

This project welcomes contributions and suggestions. Most contributions require you to
agree to a Contributor License Agreement (CLA) declaring that you have the right to,
and actually do, grant us the rights to use your contribution. For details, visit
[https://cla.microsoft.com](https://cla.microsoft.com).

When you submit a pull request, a CLA-bot will automatically determine whether you need
to provide a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the
instructions provided by the bot. You will only need to do this once across all repositories using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

Most of the documentation in this repository is written in Markdown. Reference for Markdown, including the Learn-specific Markdown extensions, is found in the [Learn Markdown reference](https://review.learn.microsoft.com/help/platform/markdown-reference).

Writing should follow the [Microsoft Writing Style Guide](https://learn.microsoft.com/style-guide/welcome/).

## Editor

You can use any text editor to edit Markdown files. However, we recommend using Visual Studio Code with the Learn Authoring Pack. Visual Studio Code should prompt you to install this extension the first time you open this workspace. The extension include a number of capabilities that will make contributing easier.

## Validations

This repository runs a number of validations on all pull requests that must pass before the PR can be merged.

### OpenPublishing.Build validation

This validation is run by the Open Publishing system and identifies any build errors or warnings. The Learn Authoring Pack validates your documents in real time so you can fix problems before submitting a pull request. Issues will show in the **Problems** window, which you can enable via the **View** menu.

### Lint and spell check

This validation runs to ensure that your Markdown conforms to the Markdown linting rules defined by [markdownlint](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md). The Learn Authoring Pack validates these rules in real time, showing issues in the **Problems** window.

This validation also runs spell check via [CSpell](https://github.com/streetsidesoftware/cspell). Misspelled or unrecognized words are reported in the **Problems** window.

#### Fixing lint errors

Ideally, you would fix all issues reported by the Markdown linter. However, there are some Learn features that require violating certain rules. For example, repeated tabbed sections in documents will introduce duplicated headers in the document, which violates [MD024](https://github.com/DavidAnson/markdownlint/blob/main/doc/md024.md). In these cases, you can disable the rule for portions of a document by using `markdownlint-disable` and `markdownlint-enable` comments.

```markdown
<!-- markdownlint-disable MD024 -->

## Heading

## Heading
<!-- markdownlint-enable MD024 -->
```

#### Fixing spell check issues

It's not uncommon for the spell checker to find a word it doesn't recognize, especially when writing about code. For example, by default, the keyword `struct` is not recognized by the spell checker. In the case where the spell checker does not recognize a valid word, add the word to [cspell.json](cspell.json), either manually, or by right-clicking the word in Visual Studio Code (either in the Markdown file or in the **Problems** window) and select **Spelling** -> **Add Words to CSpell Configuration**. Be sure to include **cspell.json** in your pull request.
