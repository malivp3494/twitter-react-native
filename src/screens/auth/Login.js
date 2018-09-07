import React, { Component } from 'react';
import {
  V,
  Root,
  T,
  Button,
  Text,
  TextInput,
  TwitterIcon,
  LoginHeader,
  BackIcon,
  BigText,
} from '../../components';
import { Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: undefined,
      pass: undefined,
      securePass: true,
      disableNext: true,
      underlineColorUsername: 'gray',
      underlineColorPass: 'gray',
    };

    this.handlePassFocus = this.handlePassFocus.bind(this);
    this.handlePassBlur = this.handlePassBlur.bind(this);
    this.handleUsernameFocus = this.handleUsernameFocus.bind(this);
    this.handleUsernameBlur = this.handleUsernameBlur.bind(this);
  }

  static navigationOptions = {
    header: null,
  };

  handlePassFocus() {
    this.setState({
      underlineColorPass: '#1da1f2',
    });
  }

  handlePassBlur() {
    this.setState({
      underlineColorPass: 'gray',
    });
  }

  handleUsernameFocus() {
    this.setState({
      underlineColorUsername: '#1da1f2',
    });
  }

  handleUsernameBlur() {
    this.setState({
      underlineColorUsername: 'gray',
    });
  }

  render() {
    return (
      <Root
        style={{
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          paddingTop: 60,
        }}
      >
        <LoginHeader
          onSignupPress={() => this.props.navigation.navigate('Signup1')}
        />
        <BigText
          style={{ fontSize: 24, paddingLeft: 40, margin: 0, marginBottom: 10 }}
        >
          Log in to Twitter.
        </BigText>

        <V
          style={{
            flex: 1,
            width: '90%',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            marginHorizontal: '10%',
          }}
        >
          <Text style={{ color: 'gray', marginTop: 10 }}>
            Phone number, email address, or username
          </Text>
          <V
            style={{
              width: '90%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignSelf: 'flex-start',
              alignItems: 'center',
            }}
          >
            <TextInput
              style={{
                margin: 0,
                width: '100%',
                alignSelf: 'flex-start',
              }}
              onFocus={this.handleUsernameFocus}
              onBlur={this.handleUsernameBlur}
              underlineColorAndroid={this.state.underlineColorUsername}
              onChangeText={text =>
                this.setState({
                  username: text,
                  disableNext: !text || !this.state.pass,
                })
              }
            />
          </V>

          <Text style={{ color: 'gray', margin: 4 }}>Password</Text>
          <V
            style={{
              width: '90%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignSelf: 'flex-start',
              alignItems: 'center',
            }}
          >
            <TextInput
              maxLength={50}
              style={{
                margin: 0,
                width: '100%',
                alignSelf: 'flex-start',
              }}
              secureTextEntry={this.state.securePass}
              onFocus={this.handlePassFocus}
              onBlur={this.handlePassBlur}
              underlineColorAndroid={this.state.underlineColorPass}
              onChangeText={text => {
                this.setState({
                  pass: text,
                  disableNext: !text || !this.state.username,
                });
              }}
            />
            <T
              style={{ marginLeft: 'auto' }}
              onPress={() =>
                this.setState({
                  securePass: !this.state.securePass,
                })
              }
            >
              <Icon
                name={this.state.securePass ? 'eye' : 'eye-with-line'}
                color="gray"
                size={24}
              />
            </T>
          </V>
          <Text
            style={{
              textDecorationLine: 'underline',
              color: 'gray',
            }}
            onPress={() =>
              Linking.openURL(
                'https://twitter.com/account/begin_password_reset',
              )
            }
          >
            Forgot password?
          </Text>
        </V>
        <V
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            paddingVertical: 10,
            width: '90%',
            justifyContent: 'center',
            borderTopWidth: 1,
            borderTopColor: '#ededed',
          }}
        >
          <Button
            style={{
              marginLeft: 'auto',
              opacity: this.state.disableNext ? 0.6 : 1,
            }}
            disabled={this.state.disableNext}
            onPress={() => {
              this.props.navigation.navigate('MainApp', {
                password: this.state.passConfirm,
              });
            }} //for now
          >
            Log in
          </Button>
        </V>
      </Root>
    );
  }
}

export default Login;
