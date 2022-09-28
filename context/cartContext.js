import React, { useState, useEffect } from "react";
import getCart from "../handlers/getCart";

export const cartContext = React.createContext([{}, () => {}]);

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  //   const value = useMemo(() => [user, setUser], [user]);

  useEffect(() => {
    getCart(setCart);
  }, []);

  return (
    <cartContext.Provider value={[cart, setCart]}>
      {props.children}
    </cartContext.Provider>
  );
};

export default CartProvider;
