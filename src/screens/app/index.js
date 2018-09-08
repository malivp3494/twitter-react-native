import { createDrawerNavigator, createSwitchNavigator } from 'react-navigation';
import { fadeIn } from 'react-navigation-transitions';
import HomeScreen from './Home';
import ListsScreen from './Lists';
import BookmarksScreen from './Bookmarks';
import MomentsScreen from './Moments';
import TwitterAdsScreen from './TwitterAds';
import SettingsScreen from './Settings';
import HelpCenterScreen from './HelpCenter';
import ProfileScreen from './Profile';
import Drawer from './Drawer';
import React from 'react';
import SingleThreadScreen from './SingleThread';

const DrawerStack = createSwitchNavigator(
  {
    Profile: ProfileScreen,
    Lists: ListsScreen,
    Bookmarks: BookmarksScreen,
    Moments: MomentsScreen,
    TwitterAds: TwitterAdsScreen,
    SingleThread: SingleThreadScreen,
    Settings: SettingsScreen,
    HelpCenter: HelpCenterScreen,
  },
  {
    transitionConfig: () => fadeIn(),
  },
);

const MyApp = createDrawerNavigator(
  {
    Home: HomeScreen,
    DrawerStack: DrawerStack,
  },
  {
    initialRouteName: 'Home',
    contentComponent: props => <Drawer {...props} />,
    drawerWidth: 320,
  },
);

export default MyApp;
