import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation"; 
import { Home } from '../Screens/Home';

const Screens = {
    Home: {
        screen: {
            Home,
        }
    }
}

const homeStack = createStackNavigator(Screens)