import React, { Component } from 'react';
import { Root, Button, Text } from '../../components';

class Signup2 extends Component {
  render() {
    return (
      <Root>
        <Text>Signup2</Text>
        <Button onPress={() => this.props.navigation.navigate('Signup3')}>
          Continue
        </Button>
      </Root>
    );
  }
}

export default Signup2;
