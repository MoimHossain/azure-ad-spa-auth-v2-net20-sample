

import React, { Component } from 'react';
import { Button, Icon, Grid } from 'semantic-ui-react';
import Copyright from '../common/copyright';
import PageTitle from './pageTitle';
import AccountUsagePolicyMessage from '../common/accountPolicyMessage';
import AuthenticationService from '../../services/authorizationService';

export default class Anonymous extends Component {
    displayName = Anonymous.name
    constructor(props) {
        super(props);
        this.authService = new AuthenticationService();
        this.loginHandler = this.loginHandler.bind(this);
    }

    loginHandler() {
        const user = this.authService.getUser();
        if (!user) {
            this.authService.login().then(
                user => {
                    if (user) {
                        document.location.reload(true);
                    } else {
                        console.error('Login was failed');
                    }
                },
                () => {
                    console.error('Login was failed');
                }
            );
        }
    }

    render() {
        return (
            <Grid columns='three' >
                <Grid.Row>
                    <Grid.Column/>
                    <Grid.Column>
                        <PageTitle/>
                    </Grid.Column>
                    <Grid.Column/>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column/>
                    <Grid.Column>
                        <AccountUsagePolicyMessage/>
                        <Button positive onClick={this.loginHandler} icon labelPosition='right'>
                            Sign-In
                            <Icon name='right arrow' />
                        </Button>
                        <br /><br /><br /><br />
                        <Copyright/>
                    </Grid.Column>
                    <Grid.Column/>
                </Grid.Row>
            </Grid>

        );
    }
}
