import React, { Component } from 'react';
import { StretchedButton, T, TwitterIcon, BigText } from '../../components';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Entypo';
import { blue } from '../../components/colors';

const Root = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 10px 40px;
`;

const C1 = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const C2 = styled.View`
  flex-direction: row;
  margin-right: auto;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Login = styled.Text`
  color: #1da1f2;
`;
const LoginText = styled.Text`
  color: black;
`;
class GetStartedScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <Root>
        <TwitterIcon size={40} style={{ marginRight: 'auto', margin: 6 }} />
        <C1>
          <BigText>See what's happening in the world right now.</BigText>
          <StretchedButton
            onPress={() => this.props.navigation.navigate('Signup1')}
          >
            Get Started
          </StretchedButton>
        </C1>
        <C2>
          <LoginText>Have an Account Already? </LoginText>
          <T onPress={() => this.props.navigation.navigate('Login')}>
            <Login>Log in</Login>
          </T>
        </C2>
      </Root>
    );
  }
}

export default GetStartedScreen;
