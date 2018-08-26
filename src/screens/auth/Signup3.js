import React, { Component } from 'react';
import { Root, Button, Text } from '../../components';

class Signup3 extends Component {
  render() {
    return (
      <Root>
        <Text>Signup3</Text>
        <Button onPress={() => alert('success')}>Continue</Button>
      </Root>
    );
  }
}

export default Signup3;
