import AsyncStorage from "@react-native-async-storage/async-storage";

const getCart = async (setCart) => {
  const value = await AsyncStorage.getItem("cart");

  const parsedValue = JSON.parse(value);

  if (parsedValue) {
    setCart(parsedValue);
  }
};

export default getCart;
