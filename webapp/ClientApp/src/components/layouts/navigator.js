

import React, { Component } from 'react';
import { Sidebar, Segment,  Menu } from 'semantic-ui-react';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: true,
            visible: true
        };
    }

    toggleState() {
        //this.state.expanded = !this.state.expanded;
        //this.setState(this.state);
    }

    renderGroups(navItem, index) {
        return (
            <Menu.Item key={index}>
                <Menu.Header>{navItem.groupHeader}</Menu.Header>
                <Menu.Menu>
                    {
                        navItem.items.map((chNavItem, chIndex) => {
                            return (
                                <Menu.Item
                                    as='a'
                                    key={chIndex}
                                    name={chNavItem.text}
                                    onClick={() => this.props.onClick(chNavItem, chIndex)}
                                />
                            );
                        })
                    }
                </Menu.Menu>
            </Menu.Item>
        )
    }

    render() {
        //onHide={this.handleSidebarHide}
     
        return (
            <Sidebar.Pushable
                as={Segment}>
                <Sidebar
                    className="visible"
                    as={Menu}
  
                    animation="push"
                    
                    vertical 
                    visible
                    width={(this.state.expanded ? "thin" : "very thin")}
                >
                    {this.props.items.map((navItem, index) => {
                        if (navItem.groupHeader) {
                            return this.renderGroups(navItem, index);                            
                        }
                        return (
                            <a className=" item" key={index} onClick={() => this.props.onClick(navItem, index)}>
                                {navItem.text}
                                {navItem.badgeCount && <div className={navItem.badgeColor + " ui left pointing label"}>{navItem.badgeCount}</div>}
                            </a>
                        )}
                    )}            
                </Sidebar>

                <Sidebar.Pusher className="work-area-background">
                    <div className="page-host">
                        {this.props.children}
                    </div>                   
                </Sidebar.Pusher>
            </Sidebar.Pushable>          
        );
    }
}

export default Navigation;
