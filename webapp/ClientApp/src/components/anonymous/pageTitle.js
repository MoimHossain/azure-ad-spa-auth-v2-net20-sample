

import React from 'react';
import { Header, Segment } from 'semantic-ui-react';
import AppTitle from '../common/appTitle';

const PageTitle = () => {

    return (
        <div>
            <br /><br /><br />
            <AppTitle />

            <Segment attached>
                <Header as="h4" content="Welcome!" />
                <p>
                    Please sign-in below with your <b>AD</b> account.
                                </p>


            </Segment>
        </div>
    );
};

export default PageTitle;