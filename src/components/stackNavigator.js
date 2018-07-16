import { createStackNavigator } from 'react-navigation';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';

const navigator = createStackNavigator({
        Home: Home,
        userProfile: Profile
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none'
    }
);

export default navigator;