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

class Signup1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: undefined,
      nameLength: 50,
      disableNext: true,
      nameFocus: false,
      phoneOrEmail: undefined,
      email: undefined,
      currentlyActive: 'phone',
      isPhoneFocused: false,
      placeholderPhone: 'Phone number or email address',
      underlineColorPhone: 'gray',
      underlineColorName: 'gray',
    };

    this.handleNameFocus = this.handleNameFocus.bind(this);
    this.handleNameBlur = this.handleNameBlur.bind(this);
    this.handlePhoneFocus = this.handlePhoneFocus.bind(this);
    this.handlePhoneBlur = this.handlePhoneBlur.bind(this);
  }

  static navigationOptions = {
    header: null,
  };

  handleNameFocus() {
    this.setState({
      nameFocus: true,
      underlineColorName: '#1da1f2',
    });
  }

  handleNameBlur() {
    this.setState({
      nameFocus: false,
      underlineColorName: 'gray',
    });
  }

  handlePhoneFocus() {
    this.setState({
      underlineColorPhone: '#1da1f2',
      nameFocus: true,
      isPhoneFocused: true,
      placeholderPhone:
        this.state.currentlyActive === 'phone' ? 'Phone' : 'Email',
    });
  }

  handlePhoneBlur() {
    this.setState({
      underlineColorPhone: 'gray',
      nameFocus: false,
      isPhoneFocused: false,
    });
  }

  render() {
    return (
      <Root
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: this.state.nameFocus ? 60 : 100,
        }}
      >
        <SignupHeader onBackPress={() => this.props.navigation.goBack()} />
        <BigText>Create your Account</BigText>
        <V
          style={{
            flex: 1,
            width: '70%',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            marginHorizontal: '10%',
          }}
        >
          <TextInput
            maxLength={50}
            onFocus={this.handleNameFocus}
            onBlur={this.handleNameBlur}
            ref="PhoneInput"
            placeholder="Name"
            underlineColorAndroid={this.state.underlineColorName}
            onChangeText={text => this.setState({ name: text })}
          />
          <Text style={{ marginLeft: 'auto' }}>
            {this.state.name ? 50 - this.state.name.length : 50}
          </Text>
          <TextInput
            maxLength={50}
            keyboardType={
              this.state.currentlyActive === 'phone'
                ? 'phone-pad'
                : 'email-address'
            }
            value={this.state.phoneOrEmail}
            onFocus={this.handlePhoneFocus}
            onBlur={this.handlePhoneBlur}
            placeholder={this.state.placeholderPhone}
            underlineColorAndroid={this.state.underlineColorPhone}
            onChangeText={text => this.setState({ phoneOrEmail: text })}
          />
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
          {this.state.isPhoneFocused ? (
            <T
              onPress={() => {
                this.setState({
                  currentlyActive:
                    this.state.currentlyActive === 'phone' ? 'email' : 'phone',
                  placeholderPhone:
                    this.state.currentlyActive === 'phone' ? 'Email' : 'Phone',
                  phoneOrEmail: undefined,
                });
              }}
            >
              <Text style={{ color: '#1da1f2', paddingTop: 6 }}>
                {this.state.currentlyActive === 'phone'
                  ? 'Use Email Instead'
                  : 'Use Phone Instead'}
              </Text>
            </T>
          ) : null}
          <Button
            style={{
              marginLeft: 'auto',
              opacity: !this.state.name || !this.state.phoneOrEmail ? 0.6 : 1,
            }}
            disabled={!this.state.name || !this.state.phoneOrEmail}
            onPress={() => {
              this.props.navigation.navigate('Signup2', {
                name: this.state.name,
                phoneOrEmailValue: this.state.phoneOrEmail,
                phoneOrEmail: this.state.currentlyActive,
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

export default Signup1;
