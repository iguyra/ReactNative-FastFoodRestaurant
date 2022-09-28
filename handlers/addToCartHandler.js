import AsyncStorage from "@react-native-async-storage/async-storage";

const AddToCartHandler = async (item, setCart) => {
  // await AsyncStorage.removeItem("cart");

  const { name, price, image, key } = item;

  const cartObject = {
    name,
    price,
    image,
    key,
    quantity: 1,
  };

  try {
    const oldCart = await AsyncStorage.getItem("cart");

    const parsedCart = JSON.parse(oldCart);

    console.log(parsedCart, "parsEED");

    //if cart dont exist then create new cart
    if (!parsedCart) {
      const cartArr = [];

      cartArr.push(cartObject);

      const jsonValue = JSON.stringify(cartArr);

      console.log(jsonValue, jsonValue.length);

      await AsyncStorage.setItem("cart", jsonValue);
      setCart(cartArr);

      return;
    }

    // if cart exist and item exist in cart then update item in cart
    const itemIndex = parsedCart.findIndex((item) => {
      return item.key === key;
    });

    if (itemIndex !== -1) {
      console.log(itemIndex, "item");

      const item = parsedCart[itemIndex];

      item.quantity += 1;

      const jsonValue = JSON.stringify(parsedCart);
      setCart(parsedCart);
      await AsyncStorage.setItem("cart", jsonValue);
      return;
    }

    //if cart exist and item dont exist in cart then add item to cart

    parsedCart.push(cartObject);

    const jsonValue = JSON.stringify(parsedCart);

    await AsyncStorage.setItem("cart", jsonValue);

    setCart(parsedCart);
  } catch (err) {
    console.log(err, "ERROR");
  }
};
export default AddToCartHandler;
