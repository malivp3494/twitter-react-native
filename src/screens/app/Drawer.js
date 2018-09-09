import React, { Component } from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { gray, blue } from '../../components/colors';
import { V, Root, TN, Menu, MenuItem } from '../../components';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import faker from 'faker';
import { Image } from 'react-native';

//convert userData to this form later
const fakeUserData = {
  name: '1up3down',
  username: 'malivp3494'[0] === '@' ? 'malivp3494' : '@malivp3494',
  avatar: faker.internet.avatar(),
  following: 144,
  followers: 29,
};
const Text = styled.Text`
  color: black;
  font-size: 16px;
`;

//all icons are MaterialCommunityIcons
const Header = ({ user }) => (
  <Root
    style={{
      flexDirection: 'column',
      width: 320,
      paddingHorizontal: 20,
      paddingTop: 10,
      alignItems: 'flex-start',
      minHeight: 180,
      borderBottomWidth: 0.2,
      borderBottomColor: gray,
      justifyContent: 'flex-start',
    }}
  >
    <Image
      style={{
        width: 50,
        height: 50,
        borderRadius: 50,
      }}
      source={{ uri: user.avatar }}
    />

    <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 12 }}>
      {user.name}
    </Text>
    <Text style={{ color: 'gray' }}>{user.username}</Text>
    <V
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'flex-start',
      }}
    >
      <Text
        style={{ color: 'gray', marginRight: 20 }}
        onPress={() => alert('navigate to list of followings')}
      >
        <Text style={{ fontWeight: 'bold' }}>{user.following}</Text> Following
      </Text>
      <Text
        style={{ color: 'gray' }}
        onPress={() => alert('navigate to list of followers')}
      >
        <Text style={{ fontWeight: 'bold' }}>{user.followers}</Text> Followers
      </Text>
    </V>
  </Root>
);

const Footer = () => (
  <V
    style={{
      minHeight: 48,
      borderTopWidth: 0.4,
      paddingHorizontal: 30,
      paddingVertical: 4,
      width: 320,
      borderTopColor: 'gray',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}
  >
    <TN onPress={() => alert('Toggle dark/night theme')}>
      <FAIcon name="moon-o" color={blue} size={26} />
    </TN>
    <TN onPress={() => alert('Scan QR')}>
      <FAIcon name="qrcode" color={blue} size={26} />
    </TN>
  </V>
);

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.handleOnPress = this.handleOnPress.bind(this);
  }

  handleOnPress(name) {
    this.props.navigation.navigate(name);
  }

  render() {
    return (
      <Root style={{ width: 320, alignItems: 'flex-start' }}>
        <Header user={fakeUserData} />
        <Menu contentContainerStyle={{ paddingBottom: 30 }}>
          <MenuItem
            name="Profile"
            icon="account-outline"
            onPress={() => this.handleOnPress('Profile')}
          />
          <MenuItem
            name="Lists"
            icon="file-document-box-outline"
            onPress={() => this.handleOnPress('Lists')}
          />
          <MenuItem
            name="Bookmarks"
            icon="bookmark-outline"
            onPress={() => this.handleOnPress('Bookmarks')}
          />
          <MenuItem
            name="Moments"
            icon="flash-outline"
            onPress={() => this.handleOnPress('Moments')}
          />
          <MenuItem
            name="Twitter Ads"
            onPress={() => this.handleOnPress('TwitterAds')}
          />
          <MenuItem
            name="Settings And Privacy"
            onPress={() => this.handleOnPress('Settings')}
          />
          <MenuItem
            name="Help Centre"
            onPress={() => this.handleOnPress('HelpCenter')}
          />
        </Menu>
        <Footer />
      </Root>
    );
  }
}

export default Drawer;
