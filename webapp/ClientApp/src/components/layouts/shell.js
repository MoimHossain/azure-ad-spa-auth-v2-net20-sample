
import React, { Component } from 'react';
import { Route } from 'react-router';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Layout from './layout';
import Navigator from './navigator';
import MenuItems from '../common/app-menu-items';
import Dashboard from '../pages/dashboard';
import Projects from '../pages/projects';

import changeRoute from '../../actions/routing/change-route-action';

class Shell extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navigationItems: MenuItems
        };
    }

    onNavigate(ni, index) {
        this.props.changeRoute(ni.route, this.context.router.history);
    }

    render() {
        return (
            <Layout>
                <Navigator
                    onClick={this.onNavigate.bind(this)}
                    items={this.state.navigationItems}>
                    <Route exact path='/' component={Dashboard} />
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path='/projects' component={Projects} />
                </Navigator>
            </Layout>
        );
    }
}

Shell.contextTypes = {
    router: PropTypes.object
};


function mapStateToProps() {
    return {
        empty: {}
    };
}


function matchDispatchToProps(dispatch) {
    return bindActionCreators({ changeRoute: changeRoute }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(Shell);