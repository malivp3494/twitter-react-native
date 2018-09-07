import React from 'react';
import styled from 'styled-components';
import { gray, gray2 } from './colors';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';
import LineIcon from 'react-native-vector-icons/SimpleLineIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export const I = styled.Image``;
export const TwitterIcon = props => (
  <EntypoIcon name="twitter" color="#1da1f2" {...props} />
);

export const BackIcon = props => (
  <FeatherIcon name="arrow-left" color="#1da1f2" {...props} />
);

export const V = styled.View``;
export const TN = styled.TouchableNativeFeedback``;

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
  </V>
);

export const LoginHeader = props => (
  <V
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      position: 'absolute',
      width: '100%',
      paddingLeft: 20,
      top: 20,
    }}
  >
    <T
      style={{
        marginLeft: 'auto',
      }}
      onPress={() => props.onSignupPress()}
    >
      <Text
        style={{
          color: '#1da1df',
          fontWeight: 'bold',
          fontSize: 16,
          paddingHorizontal: 20,
        }}
      >
        Sign up
      </Text>
    </T>

    <T onPress={() => props.onSignupPress()} style={{ marginRight: 14 }}>
      <EntypoIcon name="dots-three-vertical" color="#1da1df" size={22} />
    </T>
  </V>
);

export const HomeHeader = props => (
  <V
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      elevation: 3,
      minHeight: 60,
      maxHeight: 60,
      width: '100%',
      paddingLeft: 20,
    }}
  >
    <T onPress={() => props.onBackPress()}>
      {
        //<Image style={{ width:32, height:32, borderRadius:32 }} source={{uri:user.avatar}} />}
      }
      <EntypoIcon name="menu" size={32} color={'#1da1df'} />
    </T>
    <Text
      style={{
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
        marginLeft: 20,
      }}
    >
      {props.title}
    </Text>
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
export const TextLink = styled.Text`
  color: #1da1f2;
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

const HV = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Tweet = props => {
  // alert(props.data.avatar);
  return (
    <HV
      style={{
        paddingVertical: 10,
        borderBottomWidth: 0.4,
        borderBottomColor: gray,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      }}
    >
      <I
        source={{ uri: props.data.avatar }}
        style={{
          width: 50,
          height: 50,
          borderRadius: 50,
        }}
      />
      <V
        style={{ flexDirection: 'column', width: '80%', paddingHorizontal: 10 }}
      >
        <HV>
          <Text style={{ color: 'black', fontWeight: 'bold' }}>
            {props.data.name}{' '}
          </Text>
          <Text style={{ marginLeft: 3 }}>{props.data.username}</Text>
        </HV>
        <Text
          style={{
            textAlign: 'left',
            marginVertical: 16,
            color: 'black',
            flexWrap: 'wrap',
          }}
        >
          {props.data.text}
        </Text>
        <HV
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <HV>
            <LineIcon name="bubble" color={gray} size={20} />
            <Text style={{ marginLeft: 4 }}>{props.data.replies}</Text>
          </HV>
          <HV>
            <MCIcon name="twitter-retweet" color={gray2} size={28} />
            <Text style={{ marginLeft: 4 }}>{props.data.retweets}</Text>
          </HV>
          <HV>
            <MCIcon name="heart-outline" color={gray2} size={24} />
            <Text style={{ marginLeft: 4 }}>{props.data.likes}</Text>
          </HV>
        </HV>
      </V>
    </HV>
  );
};
