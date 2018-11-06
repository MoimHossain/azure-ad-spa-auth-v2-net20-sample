

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Menu, Header, Dropdown, Image, Icon } from 'semantic-ui-react';
import signOut from '../../actions/session-management/user-signout-action';

class AppHeader extends Component {
    displayName = AppHeader.name
    avaterTrigger = (<span><Image avatar src="/images/logo.ea41f217.svg" />{this.props.activeUser.name}</span>);
    notificationTrigger = (<span><Icon name="bell" /></span>);

    render() {
        return (
            <Menu
                className="brand-color"
                inverted
                stackable
                color="teal"
                borderless
                style={{
                    flexShrink: 0,
                    borderRadius: 0,
                    margin: 0
                }}>
                <Menu.Item>
                    <Header as='h1' className="app-header">
                        <Image size="medium" circular src='/images/logo.ea41f217.svg' />TEST
                    </Header>
                </Menu.Item>

                <Menu.Menu position='right'>
                    <Dropdown trigger={this.notificationTrigger} item icon={null} >
                        <Dropdown.Menu>
                            <Dropdown.Item><Icon name="bell" />All notifications</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown trigger={this.avaterTrigger} item>
                        <Dropdown.Menu>
                            <Dropdown.Item disabled>Signed in as {this.props.activeUser.name}</Dropdown.Item>
                            <Dropdown.Item><Icon name="settings" />Preferences</Dropdown.Item>
                            <Dropdown.Item
                                onClick={() => this.props.signOut()}>
                                <Icon name="sign-out" />Sign-out
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                </Menu.Menu>
            </Menu>
        );
    }
}


function mapStateToProps(state) {
    return {
        activeUser: state.activeUser
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ signOut: signOut }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(AppHeader);