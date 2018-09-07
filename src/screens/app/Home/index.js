import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './Home';
import SearchScreen from './Search';
import NotificationsScreen from './Notifications';
import MessagesScreen from './Messages';

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
