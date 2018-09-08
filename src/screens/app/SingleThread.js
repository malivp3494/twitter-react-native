import React, { Component } from 'react';
import { Root, Text } from '../../components';

class SingleThread extends Component {
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
          {this.state.tweetId}
          's Profile
        </Text>
      </Root>
    );
  }
}

export default SingleThread;
