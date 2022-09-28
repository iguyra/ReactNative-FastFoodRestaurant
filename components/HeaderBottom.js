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

const headerBottomImg = require("../assets/f1.jpg");
const search = require("../assets/s.png");

export default function HeaderBottom({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        {/* <Image
          style={styles.image}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        /> */}
        <ImageBackground
          style={styles.image}
          source={headerBottomImg}
          imageStyle={{
            opacity: 0.4,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}
        >
          <Text style={styles.backgrounfImageTxt}>
            Different{"\n"} Kind Of Food
          </Text>
          {/* <Button
            title="search food"
            onPress={() => navigation.navigate("SearchScreen")}
          /> */}

          {/* <TouchableOpacity
            style={{
              backgroundColor: "white",
              borderRadius: 20,
              padding: 15,
              marginTop: 20,
            }}
            onPress={() =>
              navigation.navigate("SearchScreen", { item: "item container" })
            }
          >
            <Image style={styles.searchIcon} source={search} />
          </TouchableOpacity> */}
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    // marginTop: 20,
    // padding: 10,
    // alignItems: "center",
    height: 300,
  },
  innerContainer: {
    // width: "80%",
    // flexDirection: "row",
    // justifyContent: "space-between",
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  backgrounfImageTxt: {
    color: "white",
    fontSize: 40,
    textAlign: "center",
    fontWeight: "900",
    top: "20%",
  },
  contentText: {
    width: 120,

    fontSize: 23,
    padding: 5,
    marginTop: 11,
    backgroundColor: "white",
    textAlign: "center",
    borderRadius: 10,
  },
  searchIcon: {
    width: 30,
    height: 30,
  },
});
