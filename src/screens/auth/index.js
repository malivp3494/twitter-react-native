import GetStartedScreen from './GetStarted';
//email or phone
import Signup1Screen from './Signup1';
//terms and conditions
import Signup2Screen from './Signup2';
//privacy options
import PrivacyOptionsScreen from './PrivacyOptions';
//signup3 is password
import Signup3Screen from './Signup3';
import LoginScreen from './Login';
import { createStackNavigator } from 'react-navigation';
//slide from left transitions
import { fadeIn } from 'react-navigation-transitions';
import { CheckBox } from 'react-native';
const Auth = createStackNavigator(
  {
    GetStarted: {
      screen: GetStartedScreen,
    },
    Signup1: {
      screen: Signup1Screen,
    },
    Signup2: {
      screen: Signup2Screen,
    },
    PrivacyOptions: {
      screen: PrivacyOptionsScreen,
    },
    Signup3: {
      screen: Signup3Screen,
    },
    Login: {
      screen: LoginScreen,
    },
  },
  {
    //GetStarted is default
    initialRouteName: 'GetStarted',
    transitionConfig: () => fadeIn(),
  },
);

export default Auth;
