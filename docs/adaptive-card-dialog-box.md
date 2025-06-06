---
title: Add a Dialog Box to Your Declarative Agent Adaptive Card Response (preview)
description: Learn how to create a declarative agent in Copilot Studio agent builder by using the Career Coach template.
author: lauragra
ms.author: isrumnon
ms.topic: conceptual
ms.localizationpriority: medium
ms.date: 06/05/2025
---

# Add a modal dialog box to Adaptive Card responses (preview)

You can enhance Adaptive Card responses in declarative agents for Microsoft 365 Copilot by adding modal dialog boxes. These popup dialog boxes can host custom HTML/JavaScript or display iframe-based widgets - such as web pages, YouTube videos, or Microsoft Stream content - within a focused, interactive experience.

This article describes how to use `Action.OpenUrlDialog` (available in Adaptive Card schema version 1.5) to launch modal dialog boxes from Adaptive Card templates and how to configure user authentication.

> [!NOTE]
> The `OpenUrlDialog` action is currently in preview.

## Prerequisites

To use `Action.OpenUrlDialog`, you need the following prerequisites:

- Adaptive Card schema version 1.5
- API plugin manifest version 2.3
- Microsoft TeamsJS library (for authentication scenarios)

## Define the Adaptive Card template

To use the modal dialog box action:

- Add the [Adaptive Card template](/microsoft-365-copilot/extensibility/api-plugin-adaptive-cards) to your [API plugin manifest]( /microsoft-365-copilot/extensibility/api-plugin-manifest-2.3).
- Include the `Action.OpenUrlDialog` schema in the Adaptive Card definition.

The following example shows the schema for Action.OpenUrlDialog.

```json
"actions": [
     {
         "type": "Action.OpenUrlDialog",
         "title": "OpenDialogWithDimension",
         "url": "${url}",
         "dialogHeight": "large",
         "dialogWidth": "600px",
         "dialogTitle": "task module"
     }
    ]
```

For schema reference information, see [Action.OpenUrlDialog]( https://adaptivecards.microsoft.com/?topic=Action.OpenUrlDialog).

## Configure dialog box size

Use the dialogHeight and dialogWidth properties to set the height and width of the dialog box. These values adjust dynamically based on the user’s screen resolution and the size of the window.
You can specify:
Predefined sizes - small, medium, or large.
Custom pixel values – for example, 400px, 600px.
Tip: Use pixel values for precise control. Predefined sizes are relative to the available screen space.

The following image shows an example of a dialog box invoked from an Adaptive Card button returned by an agent.

## Configure authentication

To allow secure access to APIs from within the dialog box, configure authentication using one of the following methods:

- Microsoft Entra ID
- OAuth 2.0 (preview)

### Microsoft Entra ID setup

To use Entra ID authentication for API authentication, use one of the following approaches:
Configure Entra ID, OAuth 2.0, or API Key-based authentication using Microsoft as the identity provider .
Use another identity provider and register your app in Entra ID.

### Configure SSO-based authentication

Configure single sign-on (SSO) to allow users to access APIs without having to sign in multiple times. 

To enable SSO:
Update the Microsoft Entra ID application.
Configure the application ID URI.
Configure scopes and consent settings.
Preauthorize trusted client applications to avoid repeated consent prompts.
Implement token retrieval and validation logic.:
Use the getAuthToken() method from the TeamsJS library to retrieve an access token.
Send the token to your server in the Authorization header.
Validate the token server-side.
Update the app manifest.
Add the webApplicationInfo property to the app manifest to enable SSO.
Add the domain of the dialog box content to the validDomains section of the app manifest.

#### Update Microsoft Entra ID application

To configure scopes and authorize trusted client applications, update your Microsoft Entra ID application as follows:
Add an API URI to the identifierUris section of the app manifest. Use the following format for the URI: api://fully-qualified-domain-name.com/{AppID}.
Define the scope for the API and who can consent to the scope.
In the Scopes defined by this API section of the Microsoft Entra admin center, select + Add a scope.
Enter the scope name. This field is required.
Select the user who can give consent for this scope. The default option is Admins only.
Enter the Admin consent display name. This field is required.
Enter the description for admin consent. This field is required.
Enter the User consent display name.
Enter the description for user consent description.
In the State field, select the Enabled option for state.
Select Add scope.
Create authorized client IDs for applications that you want to preauthorize. This allows the app user to access the app scopes (permissions) you configured without requiring additional consent. Because app users won't have the opportunity to decline consent, preauthorize only client applications that you trust .
In the Authorized client application section of the Microsoft Entra admin center, select + Add a client application.
Enter the Microsoft 365 client ID for the applications that you want to authorize.

#### Implement token retrieval and validation logic

Add code to handle the access token, send the token to your app's server code in the Authorization header, and validate the access token when it's received.
To get app access for the current app user, your client-side code must make a call to Teams to get an access token. Update your client-side code to use getAuthToken() to initiate the validation process, as shown in the following example.

1. // 1. Get auth token
2. // Ask Teams to get us a token from AAD
3. function getClientSideToken() {
4.     return new Promise((resolve, reject) => {
5.         display("1. Get auth token from Microsoft Teams");
6.
7.         microsoftTeams.authentication.getAuthToken().then((result) => {
8.             display(result);
9.             resolve(result);
10.         }).catch((error) => {
11.             reject("Error getting token: " + error);
12.         });
13.     });
14. }
15.
When Teams receives the access token, it cache the token to be reused as needed. The token is used when getAuthToken() is called without the need to make another call to Microsoft Entra ID, until the token expires.
User consent to the dialog box
When you call getAuthToken() and the user's consent is required for user-level permissions, the signed-in user sees a Microsoft Entra dialog box, and the user must give initial consent one time.
After the user consents, they can access the dialog box webpage. The following points apply to user consent:
If the admin granted consent on behalf of the tenant, app users don't need to be prompted for consent. This means that the app users don't see the consent dialog box and can access the app seamlessly.
If your Microsoft Entra app is registered in the same tenant from which you're requesting an authentication in Teams, the app user can't be asked to consent and is granted an access token right away. App users consent to these permissions only if the Microsoft Entra app is registered in a different tenant.
Because users must provide consent for API access, and consent is required only once per user, no additional consent is needed for dialog boxes.

#### Update the app manifest

Configure the webApplicationInfo property in the app manifest file to enable SSO. This helps agent users access your agent seamlessly.

```json
"webApplicationInfo": {
  "id": "7c7c79df-bf9d-43b7-a464-1cb9995eb3b2",
  "resource": "api://67ec-4-213-76-42.ngrok-free.app/7c7c79df-bf9d-43b7-a464-1cb9995eb3b2"
 }
```

Specify the domain of the URL that you want to render in the dialog box in the validDomains section of the app manifest, as shown in the following example.

```json
"validDomains": [
     "contoso.com",
     "mysite.someplace.com",
     "othersite.someplace.com"
 ]
```

### OAuth 2.0 setup (preview)
For agents that use OAuth 2.0 with Microsoft Entra ID or other identity providers, use the authentication.authenticate() function in the TeamsJS library to launch the authentication flow. 


To enable OAuth 2.0 authorization for API plugin dialog boxes:
Configure your app to use Microsoft Entra ID as an identity provider.
Make code changes to nitiate authentication flow and handle token.

#### Configure your app to use Microsoft Entra ID as an identity provider

To configure your app to use Microsoft Entra ID:

- In the Azure portal, go to your app registration.
- Under Authentication, in the Redirect URI section, add the redirect URL to your authentication endpoint. Use the following format for the redirect URL: `https://<hostname>/auth/simple-start`.


#### Initiate the authentication flow and handle the token

Most identity providers don'’'t allow content to be placed in an iframe. This means that you need a page to host the identity provider that Copilot displays inside a pop-up window. Use the authentication.authenticate() function of the TeamsJS library to launch this page when the Adaptive Card button is selected.
Notes:
The URL you pass to authenticate() is the start page of the authentication flow. It should match what you registered in the Azure portal.
The authentication flow must start on a page in your domain. Be sure to list this domain in the validDomains property in the manifest.

1. import { authentication } from "@microsoft/teams-js";
2.
3. authentication.authenticate({
4.     url: window.location.origin + "/auth/simple-start",
5.     width: 600,
6.     height: 535
7. })
8. .then((result) => {
9.     console.log("Login succeeded: " + result);
10.     let data = localStorage.getItem(result);
11.     localStorage.removeItem(result);
12.     let tokenResult = JSON.parse(data);
13.     showIdTokenAndClaims(tokenResult.idToken);
14.     getUserProfile(tokenResult.accessToken);
15. })
16. .catch((reason) => {
17.     console.log("Login failed: " + reason);
18.     handleAuthError(reason);
19. });

The popup page redirects to the identity provider so the user can signin. The agent calls the Microsoft Entra authorization service and passes in user and app information so the user can authenticate to Entra ID. Entra ID then calls the callback page that you provided.

1. app.getContext().then((context) => {
2.     // Generate random state string and store it, so we can verify it in the callback
3.     let state = _guid(); // _guid() is a helper function in the sample
4.     localStorage.setItem("simple.state", state);
5.     localStorage.removeItem("simple.error");
6.
7.     // Go to the Azure AD authorization endpoint
8.     let queryParams = {
9.         client_id: "{{appId}}",
10.         response_type: "id_token token",
11.         response_mode: "fragment",
12.         scope: "https://graph.microsoft.com/User.Read openid",
13.         redirect_uri: window.location.origin + "/auth/simple-end",
14.         nonce: _guid(),
15.         state: state,
16.         // The context object is populated by Teams; the loginHint attribute
17.         // is used as hinting information
18.         login_hint: context.user.loginHint,
19.     };
20.
21.     let authorizeEndpoint = `https://login.microsoftonline.com/${context.user.tenant.id}/oauth2/v2.0/authorize?${toQueryString(queryParams)}`;
22.     window.location.assign(authorizeEndpoint);
23. });


Determine success or failure of the authentication request based on the information returned by Entra ID and call either authentication.notifySuccess() or authentication.notifyFailure(). If the sign in was successful, access to service resources.

## Related content

- [API plugin manifest schema](https://learn.microsoft.com/microsoft-365-copilot/extensibility/api-plugin-manifest-2.3)