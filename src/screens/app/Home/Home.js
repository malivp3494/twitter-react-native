import React, { Component } from 'react';
import { Root, Text, TN } from '../../../components';
import { gray, blue } from '../../../components/colors';
import FAIcon from 'react-native-vector-icons/FontAwesome';
class Lists extends Component {
  state = {};
  static navigationOptions = {
    tabBarIcon: props => (
      <FAIcon name="home" size={26} color={props.focused ? blue : gray} />
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
        <Text>HomeScreen</Text>
      </Root>
    );
  }
}

export default Lists;
