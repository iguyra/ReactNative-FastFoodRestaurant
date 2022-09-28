import { ScrollView, StyleSheet, Text, View } from "react-native";
import Cartegory from "../components/Cartegory";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderBottom from "../components/HeaderBottom";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Header />

        {/* <ScrollView> */}
        <HeaderBottom navigation={navigation} />
        <Cartegory navigation={navigation} />
        {/* </ScrollView> */}
      </View>

      <Footer navigation={navigation} />
      {/* <Text>Open up App.js to start working on your app!</Text> */}
    </View>
  );
}

// export default function HomeScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Header />
//       <ScrollView>
//         <HeaderBottom navigation={navigation} />
//         <Cartegory navigation={navigation} />
//       </ScrollView>
//       <View>
//         <View style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
//           <Text style={{ color: "red" }}>My fixed footer</Text>
//         </View>
//       </View>

//       {/* <Text>Open up App.js to start working on your app!</Text> */}
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    // height: "100%",
    backgroundColor: "#100f1f",
    flex: 1,
  },
  body: {
    flex: 1,
  },
});
