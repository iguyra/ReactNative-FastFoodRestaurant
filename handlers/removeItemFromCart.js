import AsyncStorage from "@react-native-async-storage/async-storage";

const removeItemFromCart = async (item, setCart) => {
  console.log(item, "REMOVING ITEM");
  const oldCart = await AsyncStorage.getItem("cart");

  const jsonCart = JSON.parse(oldCart);

  const newCart = jsonCart.filter((cart) => {
    return cart.key !== item.key;
  });

  const stringCart = JSON.stringify(newCart);

  setCart(newCart);
  await AsyncStorage.setItem("cart", stringCart);
};

export default removeItemFromCart;
