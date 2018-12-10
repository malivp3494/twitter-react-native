import React, { Component } from 'react';
import {
  V,
  Root,
  TextLink,
  Button,
  TextInput,
  TwitterIcon,
  SignupHeader,
  BackIcon,
  BigText,
} from '../../components';
import { Linking } from 'react-native';
import styled from 'styled-components';
import { CheckBox, AsyncStorage } from 'react-native';
const Text = styled.Text`
  text-align: justify;
  line-height: 20;
  flex-wrap: wrap;
`;

class PrivacyOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowFindByPhone: true,
      allowFindByEmail: true,
    };
    this.handleBackPress = this.handleBackPress.bind(this);
  }

  static navigationOptions = {
    header: null,
  };

  handleBackPress = async () => {
    let privacyOptions = {
      allowFindByPhone: this.state.allowFindByPhone,
      allowFindByEmail: this.state.allowFindByEmail,
    };
    await AsyncStorage.setItem(
      'privacyOptions',
      JSON.stringify(privacyOptions),
    );
    alert('saved to localstorage.');
    this.props.navigation.goBack();
  };

  componentDidMount() {}
  render() {
    return (
      <Root
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: 100,
          justifyContent: 'flex-start',
        }}
      >
        <SignupHeader onBackPress={() => this.handleBackPress()} />
        <V
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            width: '70%',
            marginVertical: 40,
            alignSelf: 'center',
            justifyContent: 'center',
          }}
        >
          <V
            style={{
              flexDirection: 'row',
              alignSelf: 'flex-start',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <Text style={{ fontSize: 16, color: 'black', flexWrap: 'wrap' }}>
              Let others find me by my phone number
            </Text>
            <CheckBox
              onValueChange={() =>
                this.setState({
                  allowFindByPhone: !this.state.allowFindByPhone,
                })
              }
              value={this.state.allowFindByPhone}
            />
          </V>
          <Text>
            People who have your phone number will be able to connect with you
            on Twitter.
          </Text>
        </V>
        <V
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            width: '70%',
            alignSelf: 'center',
            justifyContent: 'center',
          }}
        >
          <V
            style={{
              flexDirection: 'row',
              alignSelf: 'flex-start',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <Text style={{ fontSize: 16, color: 'black', flexWrap: 'wrap' }}>
              Let others find me by my email address
            </Text>
            <CheckBox
              onValueChange={() =>
                this.setState({
                  allowFindByEmail: !this.state.allowFindByEmail,
                })
              }
              value={this.state.allowFindByEmail}
            />
          </V>
          <Text>
            People who have your email address will be able to connect with you
            on Twitter.
          </Text>
        </V>
      </Root>
    );
  }
}

export default PrivacyOptions;
