import React, { Component } from 'react';
import {
  V,
  Root,
  TextLink,
  StretchedButton,
  TextInput,
  TwitterIcon,
  SignupHeader,
  BackIcon,
  BigText,
} from '../../components';
import { Linking } from 'react-native';
import styled from 'styled-components';

const Text = styled.Text`
  text-align: justify;
  line-height: 20;
  flex-wrap: wrap;
`;
//to do - create static html sites for terms of service and stuff like that and replace the links.
// link should open inside the app only. ---later
class Signup2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: undefined,
      phoneOrEmail: undefined,
      phoneOrEmailValue: undefined,
      underlineColorPhone: 'gray',
      underlineColorName: 'gray',
    };
  }

  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    const name = this.props.navigation.getParam('name');
    const phoneOrEmail = this.props.navigation.getParam('phoneOrEmail');
    const phoneOrEmailValue = this.props.navigation.getParam(
      'phoneOrEmailValue',
    );
    this.setState({ name, phoneOrEmail, phoneOrEmailValue });
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
            value={this.state.name}
            style={{ color: 'black' }}
            onFocus={() => this.props.navigation.goBack()}
            underlineColorAndroid={this.state.underlineColorName}
          />
          <TextInput
            value={this.state.phoneOrEmailValue}
            style={{ color: 'black' }}
            onFocus={() => this.props.navigation.goBack()}
            placeholder={this.state.placeholderPhone}
            underlineColorAndroid={this.state.underlineColorPhone}
          />
          <V
            style={{
              flex: 0.8,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Text>
              By signing up, you agree to the
              <TextLink
                onPress={() => Linking.openURL('https://twitter.com/en/tos')}
              >
                Terms of Service
              </TextLink>
              <Text> and </Text>
              <TextLink
                onPress={() =>
                  Linking.openURL('https://twitter.com/en/privacy')
                }
              >
                Privacy Policy
              </TextLink>
              <Text>, including </Text>
              <TextLink
                onPress={() =>
                  Linking.openURL(
                    'https://help.twitter.com/en/rules-and-policies/twitter-cookies',
                  )
                }
              >
                Cookie Use
              </TextLink>
              <Text>
                . Others will be able to find you by email or phone number when
                provided.
              </Text>
            </Text>
            <TextLink
              style={{ marginRight: 'auto' }}
              onPress={() => this.props.navigation.navigate('PrivacyOptions')}
            >
              Privacy Options
            </TextLink>
          </V>
        </V>
        <StretchedButton
          style={{ marginBottom: 120, marginHorizontal: 50, marginTop: 20 }}
          onPress={() => this.props.navigation.navigate('Signup3')} //for now
        >
          Sign up
        </StretchedButton>
      </Root>
    );
  }
}

export default Signup2;
