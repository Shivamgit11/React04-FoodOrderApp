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
    const itemIdx = cartItems.findIndex((item) => item.id == id);
    cartItems[itemIdx].quantity += 1;
    updateItems(cartItems);
  };

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    increaseCartItemQty: increaseCartItemQty
  };

  return (
    <CartContext.Provider value={cartContext}>
      {/* {console.log('Inside Cartcontext.Provider', cartContext)} */}
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
