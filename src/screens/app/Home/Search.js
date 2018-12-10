import React, { Component } from 'react';

import { Root, Text } from '../../../components';
import { blue, gray } from '../../../components/colors';
import OIcon from 'react-native-vector-icons/Octicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
class Search extends Component {
  state = {};
  static navigationOptions = {
    tabBarIcon: props => (
      <OIcon name="search" size={26} color={props.focused ? blue : gray} />
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
        <Text>Search</Text>
      </Root>
    );
  }
}

export default Search;
