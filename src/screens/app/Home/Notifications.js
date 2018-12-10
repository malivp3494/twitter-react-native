import React, { Component } from 'react';
import { Root, Text } from '../../../components';
import { blue, gray } from '../../../components/colors';
import FeatherIcon from 'react-native-vector-icons/Feather';
import OIcon from 'react-native-vector-icons/Octicons';
class Lists extends Component {
  state = {};
  static navigationOptions = {
    tabBarIcon: ({ focused }) =>
      focused ? (
        <OIcon name={'bell'} size={26} color={blue} />
      ) : (
        <FeatherIcon name={'bell'} size={26} color={gray} />
      ),
    tabBarOptions: {
      activeTintColor: blue,
      style: {
        backgroundColor: blue,
        minHeight: 60,
      },
      showLabel: false,
      inactiveTintColor: gray,
      inactiveBackgroundColor: 'white',
      activeBackgroundColor: 'white',
    },
  };
  render() {
    return (
      <Root>
        <Text>Notifications</Text>
      </Root>
    );
  }
}

export default Lists;
