

import React, { Component } from 'react';
import { Button, Icon, Grid } from 'semantic-ui-react';
import Copyright from '../common/copyright';
import PageTitle from './pageTitle';
import AccountUsagePolicyMessage from '../common/accountPolicyMessage';
import AuthenticationService from '../../services/authorizationService';

export default class AccountPolicy extends Component {
    displayName = AccountPolicy.name
    constructor(props) {
        super(props);
        this.authService = new AuthenticationService();
        this.logoutHandler = this.logoutHandler.bind(this);
        this.state = {
            user: this.authService.getUser()
        };
    }

    logoutHandler() {
        this.authService.logOut();
        document.location.reload(true);
    }

    render() {
        return (
            <Grid columns='three' >
                <Grid.Row>
                    <Grid.Column />
                    <Grid.Column>
                        <PageTitle props={this.state} />
                    </Grid.Column>
                    <Grid.Column />
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column />
                    <Grid.Column>
                        <AccountUsagePolicyMessage />
                        <Button negative onClick={this.logoutHandler} icon labelPosition='right'>
                            Sign-Out
                            <Icon name='right arrow' />
                        </Button>
                        <br /><br /><br /><br />
                        <Copyright />
                    </Grid.Column>
                    <Grid.Column />
                </Grid.Row>
            </Grid>

        );
    }
}
