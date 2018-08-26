import React, { Component } from 'react';
import { Root, Button, Text } from '../../components';

class Login extends Component {
  render() {
    return (
      <Root>
        <Text>Login</Text>
        <Button onPress={() => this.props.navigation.navigate('Signup3')}>
          Continue
        </Button>
      </Root>
    );
  }
}

export default Login;
