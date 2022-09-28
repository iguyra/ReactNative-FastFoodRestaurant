import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const headerBottomImg = require("../assets/lp1.png");

export default function LoginHeader({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image style={styles.image} source={headerBottomImg} />
        <Text style={styles.backgrounfImageTxt}>Food Bank</Text>
        <Text style={styles.description}>special and delicious food</Text>
      </View>

      <View style={styles.content}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <Text
            style={{
              ...styles.contentText,
              backgroundColor: "#fd514e",
              color: "white",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("SearchScreen")}>
          <Text style={styles.contentText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    // marginTop: 20,
    paddingTop: "20%",
    // alignItems: "center",
    height: 300,
  },
  innerContainer: {
    // width: "80%",
    // flexDirection: "row",
    // justifyContent: "space-between",
  },
  description: {
    alignSelf: "center",
    color: "#52526b",
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },

  backgrounfImageTxt: {
    color: "white",
    fontSize: 42,
    textAlign: "center",
    fontWeight: "900",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20%",
  },
  contentText: {
    width: 200,
    fontSize: 23,
    padding: 10,
    marginTop: 11,
    backgroundColor: "white",
    textAlign: "center",
    borderRadius: 15,
  },
});
