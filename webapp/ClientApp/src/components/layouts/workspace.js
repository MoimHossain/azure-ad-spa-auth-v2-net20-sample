
import React, { Component } from 'react';


export default class Workspace extends Component {
    displayName = Workspace.name

    render() {
        return (
            <div
                className="workspace">
                {this.props.children}
            </div>
        );
    }
}
