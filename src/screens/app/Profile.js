import React, { Component } from 'react';
import { Root, Text } from '../../components';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
    };
  }
  async componentDidMount() {
    const username = await this.props.navigation.getParam('username');
    this.setState({ username });
  }
  render() {
    return (
      <Root>
        <Text>
          {this.state.username}
          's Profile
        </Text>
      </Root>
    );
  }
}

export default Profile;
