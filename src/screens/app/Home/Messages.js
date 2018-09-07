import React, { Component } from 'react';
import { Root, Text } from '../../../components';
import { blue, gray } from '../../../components/colors';
import FAIcon from 'react-native-vector-icons/FontAwesome';
class Lists extends Component {
  state = {};
  static navigationOptions = {
    tabBarIcon: ({ focused }) => (
      <FAIcon
        name={focused ? 'envelope' : 'envelope-o'}
        size={26}
        color={focused ? blue : gray}
      />
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
        <Text>Messages</Text>
      </Root>
    );
  }
}

export default Lists;
