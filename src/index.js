import React from 'react';
import Auth from './screens/auth';
import MainApp from './screens/app';
import { createSwitchNavigator } from 'react-navigation';
import './config/config';

//ignore isMounted warning cause RN 0.56 is broken on windows. wtf
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
]);

const MyApp = createSwitchNavigator(
  {
    Auth: Auth,
    MainApp: MainApp,
  },
  {
    initialRouteName: 'MainApp',
  },
);

export default MyApp;
