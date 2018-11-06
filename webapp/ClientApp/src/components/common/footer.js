
import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import Copyright from './copyright';

export default class Footer extends Component {
    displayName = Footer.name

    render() {
        return (
            <Menu
                //className="brand-color"
                //inverted
                borderless
                style={{
                    flexShrink: 0,
                    borderRadius: 0,
                    margin: 0
                }}>
                <Menu.Item position='right'>
                    <Copyright position='right' />
				</Menu.Item>
            </Menu>
        );
    }
}
