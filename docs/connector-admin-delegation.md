---
title: Grant administrative rights to AI Administrators to manage Microsoft 365 Copilot connectors
description: Learn how to delegate permissions to AI administrators so they can configure and administer Copilot connectors without a Global Administrator.
author: bala5765
ms.author: bak
ms.topic: concept-article
ms.localizationpriority: medium
ms.date: 07/24/2025
---

# Grant administrative rights to AI Administrators to manage connectors

Microsoft 365 Copilot connectors enable organizations to build tailored integrations to enhance their AI systems and services. Generally, AI Administrators are responsible for setting up and managing Copilot connectors. However, certain tasks like application registration and consenting to specific Microsoft Graph API permissions often require a Global Administrator. Delegating administrative rights to AI Administrators can reduce dependencies and allow AI Administrators to set up Copilot connectors independently. This article describes how to delegate administrative rights while maintaining organizational control.

> [!NOTE]
> Delegating administrative rights to AI Administrators is an optional step for Copilot connector management.

## What administrative rights can be delegated?

To enable AI Administrators to independently manage the setup and operation of custom connectors, delegate the following administrative rights:

- Application registration permission - Granting this permission allows AI Administrators to register applications from the Microsoft Entra admin center to set up custom connectors. Application registration permissions are enabled by default for all users in an organization. Grant this permission only if the permission is disabled for the organization.

- Consent privileges - Granting this privilege allows AI Administrators to grant consent for connector-related [Microsoft Graph API permissions](/graph/permissions-reference) such as ExternalItem.ReadWrite.OwnedBy and ExternalConnection.ReadWrite.OwnedBy, which are specific to creating connections and ingesting items.

## Grant application registration permissions

If application registration permissions are enabled for all users within the organization, no extra configuration is required. However, if these permissions are restricted, Global Administrators can grant them to AI Administrators by using a custom role. For more information, see [Delegate app registration permissions in Microsoft Entra ID](/entra/identity/role-based-access-control/delegate-app-roles).

## Grant consent privileges

To grant consent privileges to AI Administrators, create a custom policy and role tailored to the required permissions:

1. Define a policy that specifically grants permissions for ExternalItem.\* and ExternalConnection.\*.
1. Create a custom role and assign the newly created consent policy to this role.
1. Assign the custom role to users with the AI Administrator role to enable them to manage consent for the specified permissions.

## Use PowerShell to grant administrative rights

You can use a [PowerShell script](https://www.powershellgallery.com/packages/Connector.Cmd) to grant administrative rights to AI Administrators. The PowerShell script performs the following actions:

- Grants application registration permissions to users who are currently assigned the **AI Administrator** role.
- Grants consent privileges by:
  - Creating a custom consent policy named **Grant Consent Permissions To AI Admins** that allows the users to consent to ExternalItem.\* and ExternalConnection.\*.
  - Establishing a custom role named **Custom Connector Management for Copilot** and assigning the consent policy to this role.
  - Assigning the custom role to existing AI Administrators.

To use the PowerShell script:

1. Use the `Install-Module` command in PowerShell to install the script.

    ```powershell
    Install-Module Connector.Cmd
    ```

    > [!IMPORTANT]
    > These steps require Connector.Cmd version 1.4 or later.

1. Use the following command to invoke the script.

    ```powershell
    GrantAppConsentAndManagementPermissionToAiAdmin
    ```

1. Sign in as a Global Administrator and approve the requested permissions.

After the script runs, existing users with the **AI Administrator** role have administrative rights to set up and manage Copilot connectors.

## Confirm results

To ensure that administrative rights were granted successfully:

1. Sign in to the Microsoft Entra admin center as an AI Administrator.
1. Go to the **App registrations** section and create a new application.
1. Add ExternalItem.ReadWrite.OwnedBy and ExternalConnection.ReadWrite.OwnedBy permissions to the application.
1. Consent to these permissions directly within the portal.

If successful, the configuration is complete.

## Frequently asked questions

### Does the PowerShell script grant consent to all Microsoft Graph API permissions?

No, the script limits consent privileges to ExternalItem.\* and ExternalConnection.\*. This ensures minimal required permissions are granted without risking broader access.

### What if the connector application requires permissions beyond ExternalItem.\* and ExternalConnection.\*?

In this case, Global Administrators must manually grant consent for other permissions. To extend AI Administrator privileges:

1. Manually create or update a custom consent policy as described in [Grant consent privileges](#grant-consent-privileges).
1. Add the other permissions required for the application.
1. Assign the updated policy to the custom role created earlier.

### How can I revoke privileges granted to AI Administrators?

To remove privileges, go to the **Roles & admins** page in the Microsoft Entra admin center or Microsoft 365 admin center. Locate the custom role created during setup and delete it.

:::image type="content" source="assets/images/connector-admin-delegation-role.png" alt-text="A screenshot of the Roles & admins page in Microsoft Entra admin center":::

### Do privileges automatically apply to newly assigned AI Administrators?

No, privileges granted through the PowerShell script only apply to current AI Administrators. For new AI Administrators, rerun the script or manually assign the custom role to newly assigned admins from the Microsoft Entra admin center.

:::image type="content" source="assets/images/connector-admin-delegation-assignments.png" alt-text="A screenshot of the Assignments page in Microsoft Entra admin center":::

### Is it mandatory to grant these privileges to AI Administrators?

No, granting these privileges is optional. Organizations can choose whether to delegate permissions based on their internal processes. If centralized control is preferred, Global Administrators can retain responsibility for these tasks.

## Related content

- [Delegate app registration permissions in Microsoft Entra ID](/entra/identity/role-based-access-control/delegate-app-roles)
- [Application registration permissions for custom roles in Microsoft Entra ID](/entra/identity/role-based-access-control/custom-available-permissions)
