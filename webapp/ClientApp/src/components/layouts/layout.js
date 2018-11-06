
import React, { Component } from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import Workspace from './workspace';

export default class Layout extends Component {
    displayName = Layout.name

    render() {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%"
                }}>
                { /* the following section is fixed to the top */}
                <Header />
                { /* the following section is in the middle, and it can scroll */}
                <Workspace>
                    {this.props.children}
                </Workspace>
                { /* the following section is fixed to the bottom */}
                <Footer />
            </div>
        );
    }
}
