

import React from 'react';
import { Header, Segment } from 'semantic-ui-react';
import AppTitle from '../common/appTitle';

const PageTitle = (parent) => {
    let props = parent.props;
    const message = `Welcome ${props.user.name}!`;
    return (
        <div>
            <br /><br /><br />
            <AppTitle />

            <Segment attached>
                <Header as="h4" content={message} />
                <p>It looks like you have signed in with your Admin Account. <strong>TEST</strong> expects regular accounts, please sign-out and sign back in with your regular account.</p>
            </Segment>
        </div>
    );
};

export default PageTitle;