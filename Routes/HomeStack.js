import { createStackNavigator } from "@react-navigation/stack";
import { createAppContainer } from "react-navigation";
import SearchScreen from "../screens/SearchScreen";

const screens = {
  Search: {
    screen: SearchScreen,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
