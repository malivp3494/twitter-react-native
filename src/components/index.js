import React, { Component } from 'react';
import styled from 'styled-components';
import { gray, gray2, blue, green, pink } from './colors';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';
import LineIcon from 'react-native-vector-icons/SimpleLineIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { touch } from './constants';

const M = styled.Modal``;
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
      backgroundColor: 'white',
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

export const Menu = styled.ScrollView`
  padding-left: 20px;
  padding-vertical: 5px;
`;

export const MenuItem = props => (
  <TN onPress={props.onPress}>
    <V
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        width: 300,
        justifyContent: 'flex-start',
      }}
    >
      <MCIcon
        name={props.icon}
        size={32}
        color={gray}
        style={{ marginRight: 20 }}
      />
      <Text>{props.name}</Text>
    </V>
  </TN>
);

export const FloatingButton = props => {
  return (
    <TN
      useForeground={true}
      hitSlop={touch}
      onPress={() => props.handlePress()}
    >
      <V
        style={{
          backgroundColor: blue,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          width: 56,
          height: 56,
          borderRadius: 56,
          right: 14,
          bottom: 14,
          elevation: 2,
          zIndex: 4,
        }}
      >
        <MCIcon name="feather" color="white" size={28} />
      </V>
    </TN>
  );
};

//christ Tweet is stateful
export class Tweet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likeColor: gray2,
      retweetColor: gray2,
      showModal: false,
    };
    this.handleOptionsPress = this.handleOptionsPress.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
  }
  onModalClose() {}

  handleOptionsPress(id) {
    //open modal?
    this.setState({ showModal: true });
  }

  render() {
    const { props } = this;
    return (
      <HV
        onPress={() => props.handlePress(props.data.id)}
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
          onPress={() => props.handleUsernamePress(props.data.username)}
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
          }}
        />
        <V
          style={{
            flexDirection: 'column',
            width: '80%',
            marginLeft: 10,
          }}
        >
          {props.data.type === 'retweet' && (
            <Text style={{ color: gray, fontSize: 12 }}>
              <MCIcon name="twitter-retweet" color={gray} size={14} />
              <Text style={{ color: gray, marginLeft: 20 }}>
                {props.data.name}
              </Text>{' '}
              retweeted this
            </Text>
          )}
          <HV>
            <Text style={{ color: 'black', fontWeight: 'bold' }}>
              {props.data.name}{' '}
            </Text>
            <Text style={{ marginLeft: 3 }}>{props.data.username}</Text>
            <Text style={{ marginLeft: 3 }}>
              {props.data.createdAt.slice(5)}
            </Text>
            <T
              hitSlop={touch}
              onPress={() => this.handleOptionsPress(props.data.id)}
            >
              <MCIcon
                name="chevron-down"
                color={gray}
                size={20}
                style={{ marginLeft: 'auto' }}
              />
            </T>
          </HV>
          {props.data.type === 'reply' && (
            <Text>
              Replying to{' '}
              <Text
                style={{ color: blue }}
                onPress={() => props.handleUsernamePress(props.data.username)}
              >
                {props.data.username}
              </Text>
            </Text>
          )}
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
              width: '96%',
            }}
          >
            <T
              hitSlop={touch}
              onPress={() => props.handleReplyPress(props.data.id)}
            >
              <HV>
                <LineIcon name="bubble" color={gray} size={18} />
                <Text style={{ marginLeft: 4 }}>{props.data.replies}</Text>
              </HV>
            </T>
            <T
              hitSlop={touch}
              onPress={() => {
                this.setState({
                  retweetColor:
                    this.state.retweetColor === gray2 ? green : gray2,
                });
                props.handleRetweetPress(props.data.id);
              }}
            >
              <HV>
                <MCIcon
                  name="twitter-retweet"
                  color={this.state.retweetColor}
                  size={24}
                />
                <Text style={{ marginLeft: 4, color: this.state.retweetColor }}>
                  {props.data.retweets}
                </Text>
              </HV>
            </T>
            <T
              hitSlop={touch}
              onPress={() => {
                this.setState({
                  likeColor: this.state.likeColor === gray2 ? pink : gray2,
                });
                props.handleLikePress(props.data.id);
              }}
            >
              <HV>
                <MCIcon
                  name={
                    this.state.likeColor === gray2 ? 'heart-outline' : 'heart'
                  }
                  color={this.state.likeColor}
                  size={18}
                />
                <Text style={{ marginLeft: 4, color: this.state.likeColor }}>
                  {props.data.likes}
                </Text>
              </HV>
            </T>
            <T hitslop={touch} onPress={() => props.handleSharePress()}>
              <FeatherIcon name="share-2" color={gray2} size={18} />
            </T>
          </HV>
        </V>
        <M
          animationType="slide"
          onRequestClose={this.onModalClose}
          transparent={false}
          visible={this.state.showModal}
        >
          <Menu>
            <MenuItem>Add Tweet To Moment</MenuItem>
            <MenuItem>Copy link to Tweet</MenuItem>
            <MenuItem>I don't like this Tweet</MenuItem>
            <MenuItem>Follow {props.data.username}</MenuItem>
            <MenuItem>Mute {props.data.username}</MenuItem>
            <MenuItem>Block {props.data.username}</MenuItem>
            <MenuItem>Report Tweet</MenuItem>
          </Menu>
        </M>
      </HV>
    );
  }
}
