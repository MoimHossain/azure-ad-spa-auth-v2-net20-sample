import * as Msal from 'msal';

const AzureADV2AppID = "YOUR V2 APP GUID"
const AzureADName = "YOURADTENANT.onmicrosoft.com"

export default class AuthorizationService {
    constructor() {
        let redirectUri = window.location.origin;
        
        this.applicationConfig = {
            clientID: AzureADV2AppID,
            graphScopes: [AzureADV2AppID] 
        };
        this.app = new Msal.UserAgentApplication(
            this.applicationConfig.clientID,
            `https://login.microsoftonline.com/${AzureADName}/`,
            () => {
                // callback for login redirect
            },
            {
                redirectUri
            }
        );
    }

    isAdminAccount = () => {
        let user = this.app.getUser();
        const admRegEx = new RegExp("^XYZ[A-Za-z0-9]{6}\\@TR\\.ZEUS\\.ORG$", "i");

        return user ? admRegEx.test(user.idToken.preferred_username) : false;
    };

    getUser = () => {
        return this.app.getUser();
    };
    logOut = () => {
        this.app.logout();
    };
    login = () => {
        return this.app.loginPopup(this.applicationConfig.graphScopes).then(
            idToken => {
                const user = this.app.getUser();
                if (user) {
                    return user;
                } else {
                    return null;
                }
            },
            () => {
                return null;
            }
        );
    };
    logout = () => {
        this.app.logout();
    };
    getToken = () => {
        return this.app.acquireTokenSilent(this.applicationConfig.graphScopes).then(
            accessToken => {
                return accessToken;
            },
            error => {
                return this.app
                    .acquireTokenPopup(this.applicationConfig.graphScopes)
                    .then(
                        accessToken => {
                            return accessToken;
                        },
                        err => {
                            console.error(err);
                        }
                    );
            }
        );
    };
}