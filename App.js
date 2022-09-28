import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Cartegory from "./components/Cartegory";
import Header from "./components/Header";
import HeaderBottom from "./components/HeaderBottom";
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import LoginScreen from "./screens/LoginScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FoodScreen from "./screens/FoodScreen";
import CartScreen from "./screens/CartScreen";
import CartProvider from "./context/cartContext";
import { HeaderTitle } from "react-navigation-stack";

const menu = require("./assets/menu.png");

const Stack = createStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              title: "Homepage",
              headerShown: false,
              // headerTitle: () => <Header />,
              // headerStyle: { backgroundColor: "#100f1f" },
              // headerRight: () => (
              //   <View
              //     style={{
              //       marginRight: 30,
              //     }}
              //   >
              //     <Image source={menu} />
              //   </View>
              // ),
              // headerLeft: () => (
              //   <Text
              //     style={{
              //       fontSize: 18,
              //       color: "white",
              //       backgroundColor: "#fd514e",
              //       padding: 10,
              //       // paddingLeft: 30,
              //       marginLeft: 30,
              //       borderTopRightRadius: 15,
              //       borderBottomLeftRadius: 15,
              //     }}
              //   >
              //     cuisone
              //   </Text>
              // ),
            }}
          />
          <Stack.Screen
            name="SearchScreen"
            component={SearchScreen}
            options={{ title: "Search screen" }}
          />

          <Stack.Screen name="FoodScreen" component={FoodScreen} options />
          <Stack.Screen name="CartScreen" component={CartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#100f1f",
  },
});
