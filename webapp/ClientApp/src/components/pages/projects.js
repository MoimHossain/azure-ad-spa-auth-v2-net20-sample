
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';

import loadProjects from '../../actions/projects/load-projects';

class Projects extends Component {
    displayName = Projects.name

    componentDidMount() {
        this.props.loadProjects();
    }

    renderList() {
        if (!this.props.projects) {
            return;
        };
        return this.props.projects.map((dataItem) => {
            return (
                <Table.Row key={dataItem.id}>
                    <Table.Cell>
                        {dataItem.name}
                    </Table.Cell>
                    <Table.Cell singleLine>{dataItem.brand}</Table.Cell>
                    <Table.Cell singleLine>{dataItem.program}</Table.Cell>
                    
                </Table.Row>
            );
        });
    }

    render() {
        return (
            <Table celled padded>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Brand</Table.HeaderCell>
                        <Table.HeaderCell>Program</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {this.renderList()}
                </Table.Body>
            </Table>
        );
    }
}


function mapStateToProps(state) {
    return {
        projects: state.projects
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ loadProjects: loadProjects }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Projects);