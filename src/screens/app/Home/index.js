import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './Home';
import SearchScreen from './Search';
import NotificationsScreen from './Notifications';
import MessagesScreen from './Messages';

// need to get materialbottomnavigator
//also showing the notifications badge at home icon whenever there are new "unread" tweets are availabe
//will probably need to rewrite the tabBarComponent
const Home = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Search: SearchScreen,
    Notifications: NotificationsScreen,
    Messages: MessagesScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

export default Home;
