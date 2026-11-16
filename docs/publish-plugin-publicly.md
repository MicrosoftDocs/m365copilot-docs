---
title: Publish your Microsoft 365 Copilot plugin to Microsoft Marketplace
description: Prepare and submit your Microsoft 365 Copilot plugin to Microsoft Marketplace with Work IQ Dev Tools or Partner Center, then track certification and publication.
author: erikadoyle
ms.author: edoyle
ms.topic: how-to
ms.localizationpriority: medium
ms.date: 11/16/2026
ai-usage: ai-assisted
---

# Publish your plugin to Microsoft Marketplace

Publish your Microsoft 365 Copilot plugin through Microsoft Marketplace so customers outside your organization can discover it. Use Work IQ Dev Tools (WIQD) to prepare and submit your offer through Partner Center, or submit it directly in the Partner Center portal.

This article covers **Publish & distribute**: prepare the package and listing, submit for certification, and track the result. Microsoft controls certification and live publication. After publication, customers complete installation and access setup for their organization.

## Before you begin

Have the following ready:

- A [tested and validated plugin](validate-plugin.md), with its package version, included capabilities, intended experiences, and known limitations recorded.
- An enrolled, verified publisher account in the Microsoft 365 and Copilot program in Partner Center, and a seller role authorized to create and submit offers. See [Open a developer account](/partner-center/marketplace-offers/open-a-developer-account).
- Listing content, icons, screenshots, support and privacy links, terms, and any licensing or purchase requirements.
- Certification testing instructions and access details, provided through the supported submission process rather than committed to source.
- An owner for certification responses, customer support, updates, and retirement.

## Choose a publishing route

| Route | Use it to |
|---|---|
| [Work IQ Dev Tools](#submit-with-work-iq-dev-tools) (recommended pro-code route) | Create the offer, populate the draft listing, upload the package and images, submit with explicit authorization, and track status through `wiqd publish pc`. |
| [Partner Center portal](#submit-in-the-portal) | Create and manage the offer, upload the package, complete the listing, and submit directly in the browser. |

This article covers plugin packages, which can include skills, connectors, and declarative agents. If you're certifying a standalone MCP server rather than publishing a plugin package, follow [Microsoft MCP server certification](/microsoft-copilot-studio/mcp-certification) for its separate intake and submission requirements.

## Prepare the package and listing

1. [Build the plugin package](package-plugin.md) and validate the exact ZIP file you want to submit.

    For WIQD, validate the saved source before packaging, then require `wiqd plugin validate --mode package --package-file <validated-zip>` to pass on the final ZIP. Keep that ZIP unchanged through upload; if it changes, validate it again. Package validation uploads the existing ZIP and can require sign-in.

    Marketplace policy and evidence findings are advisory, not the package-validation gate. Neither package validation nor a Marketplace-readiness report guarantees certification.

1. Prepare listing content that accurately describes capabilities, supported experiences, setup, limitations, and external services. Add the required icons, screenshots, support link, privacy policy, and terms. State whether the plugin requires additional purchases.

    Confirm that the listing matches the tested package and that its public links work.

1. Prepare certification notes that explain installation, authentication, representative tasks, expected results, external dependencies, and how reviewers get required test access.

    Confirm that reviewers can reproduce the intended behavior. Provide sensitive access information only through the supported certification channel.

## Submit through Partner Center

Use one of the following routes to submit your plugin.

### Submit with Work IQ Dev Tools

The following steps summarize a new-offer submission from your plugin project folder. For full command examples and configuration requirements, see [Publish to Partner Center with WIQD](https://microsoft.github.io/wiqd/getting-started/publish-to-partner-center/).

1. Sign in to the seller tenant with `wiqd auth login --interactive --tenant <seller-tenant-guid>`. Confirm that the selected seller and publisher are correct.

1. Run `wiqd publish pc init`, and then complete the placeholders in `partner-center.json`, including the listing, legal and support information, images, and purchase requirements.

1. After the final ZIP passes package validation, run `wiqd publish pc preflight` with `--package <validated-zip>` and `--release-notes "<reviewer-notes>"`. Resolve reported errors before continuing. Preflight doesn't change the offer.

1. Review and authorize the draft changes. Run `wiqd publish pc prepare` with the same unchanged ZIP and release notes, and `--yes` to authorize offer creation and upload. Save the returned `productId` and review the prepared draft.

1. Submit for certification with `wiqd publish pc submit --product-id product/<GUID> --yes --interactive`, using the product ID returned by prepare. Type `submit` when prompted. Draft preparation and certification submission require separate authorization.

1. Save the returned `jobId` and track progress with `wiqd publish pc status --job-id <job-id> --watch`.

`wiqd plugin publish` submits to the **organization catalog**, and `wiqd plugin share` grants direct access to a shared deployment. Use `wiqd publish pc` for the supported public Partner Center route.

### Submit in the portal

For the portal procedure, follow the [Microsoft Marketplace step-by-step submission guide](/partner-center/marketplace-offers/add-in-submission-guide):

1. Sign in to [Partner Center](https://partner.microsoft.com/dashboard/v2/home), open **Marketplace offers**, and select the **Microsoft 365 and Copilot** program. Confirm the publisher before creating the offer; you can't change it later.

1. Create the offer, reserve its name, and complete product setup. Use the offer type and accepted package format specified for your plugin, not the Office Add-in example shown in the common submission guide.

1. Upload the validated package and resolve reported package errors. Confirm that Partner Center shows the expected version.

1. Complete properties, legal and support information, localized listings, availability, and certification notes.

1. Review the completed draft and submit for certification. Record the offer ID, submitted version, date, and owner.

## Track certification and address findings

Monitor the offer in Partner Center or use `wiqd publish pc status` for a WIQD submission. Record the package version and current status with your release evidence.

Keep draft, submitted, rejected, certified, and live states distinct. A successful upload or submission isn't certification, and certification alone doesn't establish that the listing is live.

If certification identifies issues, correct the listing or package, retest affected behavior, and validate any changed ZIP before upload.

For WIQD, follow [Update an existing or rejected offer](https://microsoft.github.io/wiqd/getting-started/publish-to-partner-center/#update-an-existing-or-rejected-offer). Check status before making changes, preview the selected updates with `wiqd publish pc update --dry-run`, and authorize the changes before applying them. Review and submit the updated draft in Partner Center. Don't rerun the new-offer prepare or submit commands as an update shortcut, or retry an uncertain operation before checking its status.

## After listing: Complete customer availability

Once the offer is live, give customers the listing link, publisher, package version, and acquisition and setup instructions. Explain any required licenses, permissions, consent, sign-in, connections, or external services.

Listing doesn't complete customer installation or grant access in every organization. Direct administrators to [Install a plugin or skill](/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers#install-a-plugin-or-skill) and [Make your plugin available](deploy-plugin.md) for installation, audience, and publisher-access controls. Confirm that an intended customer can complete a representative task in the supported experience.

## Next step

Enter **Make available & govern** with [Make your plugin available](deploy-plugin.md). After availability is confirmed, continue to **Monitor, update & retire** with [Monitor your plugin](monitor-plugin.md).
