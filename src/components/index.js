import React from 'react';
import styled from 'styled-components';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const TwitterIcon = props => (
  <EntypoIcon name="twitter" color="#1da1f2" {...props} />
);

export const BackIcon = props => (
  <FeatherIcon name="arrow-left" color="#1da1f2" {...props} />
);

export const V = styled.View``;

export const SignupHeader = props => (
  <V
    style={{
      flexDirection: 'row',
      position: 'absolute',
      width: '100%',
      paddingLeft: 20,
      top: 20,
    }}
  >
    <T onPress={() => props.onBackPress()}>
      <BackIcon size={32} style={{ flex: 1 }} />
    </T>
    <TwitterIcon size={32} style={{ position: 'absolute', left: '50%' }} />
    <V style={{ flex: 1 }} />
  </V>
);

export const BigText = styled.Text`
  font-size: 32px;
  font-weight: bold;
  text-align: left;
  color: black;
  margin-bottom: 30px;
`;

export const TextInput = styled.TextInput`
  width: 100%;
  margin: 4px;
  font-size: 18px;
`;

const StretchedButtonContainer = styled.TouchableOpacity`
  background-color: #1da1f2;
  flex-direction: row;
  border-radius: 30px;
  align-self: stretch;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled.TouchableOpacity`
  background-color: #1da1f2;
  flex-direction: row;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text``;
export const Root = styled.View`
  flex: 1;
  background-color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SCRoot = styled.ScrollView`
  flex: 1;
  background-color: white;
`;

const StretchedButtonText = styled.Text`
  color: white;
  font-size: 22px;
  font-weight: bold;
  padding: 8px;
`;

const ButtonText = styled.Text`
  color: white;
  margin: 6px 30px;
  font-size: 16px;
  font-weight: bold;
`;

export const Button = props => {
  return (
    <ButtonContainer {...props}>
      <ButtonText>{props.children}</ButtonText>
    </ButtonContainer>
  );
};

export const T = styled.TouchableOpacity``;

export const StretchedButton = props => {
  return (
    <StretchedButtonContainer {...props}>
      <StretchedButtonText>{props.children}</StretchedButtonText>
    </StretchedButtonContainer>
  );
};