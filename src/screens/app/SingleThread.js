import React, { Component } from 'react';
import { Root, Text } from '../../components';

class SingleThread extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetId: null,
    };
  }

  async componentDidMount() {
    const tweetId = await this.props.navigation.getParam('tweetId');
    this.setState({ tweetId });
  }

  render() {
    return (
      <Root>
        <Text>
          {this.state.tweetId}
          loading this tweet
        </Text>
      </Root>
    );
  }
}

export default SingleThread;
