

import React from 'react';
import { Message } from 'semantic-ui-react';

const AccountUsagePolicyMessage = () => {

    return (
        <Message warning>
            <Message.Header>Important</Message.Header>
            <p>
                Please do NOT use your Admin account 
                                    </p>
        </Message>
    );
};

export default AccountUsagePolicyMessage;