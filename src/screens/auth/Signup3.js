import React, { Component } from 'react';
import {
  V,
  Root,
  T,
  Button,
  Text,
  TextInput,
  TwitterIcon,
  SignupHeader,
  BackIcon,
  BigText,
} from '../../components';

import Icon from 'react-native-vector-icons/Entypo';

class Signup3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameLength: 50,
      pass: undefined,
      confirmPass: undefined,
      securePass: true,
      securePassConfirm: true,
      disableNext: true,
      currentlyActive: 'phone',
      underlineColorPass: 'gray',
      underlineColorPassConfirm: 'gray',
    };

    this.handlePassFocus = this.handlePassFocus.bind(this);
    this.handlePassBlur = this.handlePassBlur.bind(this);
    this.handlePassConfirmFocus = this.handlePassConfirmFocus.bind(this);
    this.handlePassConfirmBlur = this.handlePassConfirmBlur.bind(this);
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

  handlePassConfirmFocus() {
    this.setState({
      underlineColorPassConfirm: '#1da1f2',
    });
  }

  handlePassConfirmBlur() {
    this.setState({
      underlineColorPassConfirm: 'gray',
    });
  }

  render() {
    return (
      <Root
        style={{
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          paddingTop: 80,
        }}
      >
        <SignupHeader onBackPress={() => this.props.navigation.goBack()} />
        <BigText
          style={{ fontSize: 24, paddingLeft: 40, margin: 0, marginBottom: 10 }}
        >
          You'll need a password
        </BigText>
        <Text style={{ paddingLeft: 40 }}>
          Make sure it's 6 characters or longer
        </Text>
        <V
          style={{
            flex: 1,
            width: '90%',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            marginHorizontal: '10%',
          }}
        >
          <V
            style={{
              width: '90%',
              flexDirection: 'row',
              marginTop: 20,
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
              placeholder="Password"
              underlineColorAndroid={this.state.underlineColorPass}
              onChangeText={text => this.setState({ pass: text })}
            />
            <T
              style={{ marginLeft: 'auto' }}
              onPress={() =>
                this.setState({ securePass: !this.state.securePass })
              }
            >
              <Icon
                name={this.state.securePass ? 'eye' : 'eye-with-line'}
                color="gray"
                size={24}
              />
            </T>
          </V>

          {this.state.pass ? (
            <V
              style={{
                width: '90%',
                flexDirection: 'row',
                marginTop: 20,
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
                secureTextEntry={this.state.securePassConfirm}
                onFocus={this.handlePassConfirmFocus}
                onBlur={this.handlePassConfirmBlur}
                placeholder="Confirm password"
                underlineColorAndroid={this.state.underlineColorPassConfirm}
                onChangeText={text => {
                  this.setState({
                    passConfirm: text,
                    disableNext: !(this.state.pass === text),
                  });
                }}
              />
              <T
                style={{ marginLeft: 'auto' }}
                onPress={() =>
                  this.setState({
                    securePassConfirm: !this.state.securePassConfirm,
                  })
                }
              >
                <Icon
                  name={this.state.securePassConfirm ? 'eye' : 'eye-with-line'}
                  color="gray"
                  size={24}
                />
              </T>
            </V>
          ) : null}
        </V>
        <V
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            paddingVertical: this.state.nameFocus ? 0 : '4%',
            width: '90%',
            justifyContent: 'center',
            bottom: this.state.nameFocus ? 0 : 10,
            borderTopWidth: this.state.nameFocus ? 0 : 1,
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
              this.props.navigation.navigate('Signup2', {
                password: this.state.passConfirm,
              });
            }} //for now
          >
            Next
          </Button>
        </V>
      </Root>
    );
  }
}

export default Signup3;
