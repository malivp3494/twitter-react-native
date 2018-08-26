import React from 'react';
import Auth from './screens/auth';

//ignore isMounted warning cause RN 0.56 is broken on windows. wtf
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
]);

const MyApp = Auth;

export default MyApp;
