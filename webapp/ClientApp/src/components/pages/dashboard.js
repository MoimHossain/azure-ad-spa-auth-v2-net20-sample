
import React, { Component } from 'react';
import { Grid, Statistic, Icon, Image, Segment, Header } from 'semantic-ui-react';

export default class Dashboard extends Component {
    displayName = Dashboard.name

    render() {
        return (
            <Grid columns='equal'>
                <Grid.Row stretched>
                    <Grid.Column>
                        <Segment>
                            <Header  as='h2' icon='plug' content='Cost' />
                            <Statistic.Group>
                                <Statistic>
                                    <Statistic.Value>22</Statistic.Value>
                                    <Statistic.Label>Saves</Statistic.Label>
                                </Statistic>

                                <Statistic>
                                    <Statistic.Value text>
                                        Three<br />
                                        Thousand
      </Statistic.Value>
                                    <Statistic.Label>Signups</Statistic.Label>
                                </Statistic>

                            </Statistic.Group>
                        </Segment>
                        <Segment>
                            <Header as='h2' icon='plug' content='Cost' />
                            <Statistic.Group>
                                <Statistic>
                                    <Statistic.Value>22</Statistic.Value>
                                    <Statistic.Label>Saves</Statistic.Label>
                                </Statistic>

                                <Statistic>
                                    <Statistic.Value text>
                                        Three<br />
                                        Thousand
      </Statistic.Value>
                                    <Statistic.Label>Signups</Statistic.Label>
                                </Statistic>

                            </Statistic.Group>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Segment>
                            <Header as='h2' icon='plug' content='Recommendations' />
                            <Statistic.Group>
                                

                                <Statistic>
                                    <Statistic.Value>
                                        <Icon name='plane' />
                                        5
      </Statistic.Value>
                                    <Statistic.Label>Flights</Statistic.Label>
                                </Statistic>

                                <Statistic>
                                    <Statistic.Value>
                                        <Image src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' inline circular />
                                        42
      </Statistic.Value>
                                    <Statistic.Label>Team Members</Statistic.Label>
                                </Statistic>
                            </Statistic.Group>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>
                            <Header as='h2'>
                                <Icon name='settings' />
                                <Header.Content>
                                    Account Settings
      <Header.Subheader>Manage your preferences</Header.Subheader>
                                </Header.Content>
                            </Header>
                        </Segment>
                        <Segment><Header as='h2'>
                            <Icon name='settings' />
                            <Header.Content>
                                Account Settings
      <Header.Subheader>Manage your preferences</Header.Subheader>
                            </Header.Content>
                        </Header></Segment>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Segment><Header as='h2'>
                            <Icon name='settings' />
                            <Header.Content>
                                Account Settings
      <Header.Subheader>Manage your preferences</Header.Subheader>
                            </Header.Content>
                        </Header></Segment>
                        <Segment><Header as='h2'>
                            <Icon name='settings' />
                            <Header.Content>
                                Account Settings
      <Header.Subheader>Manage your preferences</Header.Subheader>
                            </Header.Content>
                        </Header></Segment>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Segment>
                            <Header as='h2' icon='plug' content='Recommendations' />
                            <Statistic.Group>


                                <Statistic>
                                    <Statistic.Value>
                                        <Icon name='plane' />
                                        5
      </Statistic.Value>
                                    <Statistic.Label>Flights</Statistic.Label>
                                </Statistic>

                                <Statistic>
                                    <Statistic.Value>
                                        <Image src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' inline circular />
                                        42
      </Statistic.Value>
                                    <Statistic.Label>Team Members</Statistic.Label>
                                </Statistic>
                            </Statistic.Group>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment><Header as='h2'>
                            <Icon name='settings' />
                            <Header.Content>
                                Account Settings
      <Header.Subheader>Manage your preferences</Header.Subheader>
                            </Header.Content>
                        </Header></Segment>
                        <Segment><Header as='h2'>
                            <Icon name='settings' />
                            <Header.Content>
                                Account Settings
      <Header.Subheader>Manage your preferences</Header.Subheader>
                            </Header.Content>
                        </Header></Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}
