import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  const addItemToCartHandler = (item, quantity) => {
    //console.log(item,quantity)
    //item.quantity = 1;
    updateItems([...items, { ...item, quantity: parseInt(quantity) || 0 }]);
    //console.log('inside addItemTocartHandler', cartContext)
  };

  const increaseCartItemQty = (id) => {
    console.log("increaseCartItemQty", id);
    const cartItems = [...items];
    const itemIdx = cartItems.findIndex((item) => item.id === id);
    cartItems[itemIdx].quantity += 1;
    updateItems(cartItems);
  };

  const DecreaseCartQty = (id) => {
    console.log("increaseCartItemQty", id);
    const cartItems2 = [...items];
    const itemIdx = cartItems2.findIndex((item) => item.id === id);
    cartItems2[itemIdx].quantity -= 1;
    updateItems(cartItems2);
  };

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    increaseCartItemQty: increaseCartItemQty,
    DecreaseCartQty: DecreaseCartQty
  };

  return (
    <CartContext.Provider value={cartContext}>
      {/* {console.log('Inside Cartcontext.Provider', cartContext)} */}
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
