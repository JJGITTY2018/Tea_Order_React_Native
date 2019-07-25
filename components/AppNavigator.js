import { createStackNavigator, createAppContainer } from 'react-navigation';

import Startup from '../screens/startup';
import Login from '../screens/login';
import SignUp from '../screens/signup';
import Home from '../screens/home';


const AppNavigator = createStackNavigator(
  {
    Startup: Startup,
    Login: Login,
    SignUp: SignUp,
    Home: Home,
  },
  {
    initialRouteName: 'Startup',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#E66700',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontFamily: "theboldfont",
      }
    }
  }
);

export default createAppContainer(AppNavigator);
