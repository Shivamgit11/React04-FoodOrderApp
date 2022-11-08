import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  const addItemToCartHandler = (item, quantity) => {
    const itemToUpdate = items.find((cartItem) => cartItem.id === item.id);

    if (itemToUpdate) {
      const updatedItemObj = {
        ...itemToUpdate,
        quantity: itemToUpdate.quantity + 1
      };

      const newItemArray = items.map((cartItem) =>
        cartItem.id === updatedItemObj.id ? updatedItemObj : cartItem
      );

      updateItems(newItemArray);
    } else {
      updateItems([...items, { ...item, quantity: parseInt(quantity) || 0 }]);
    }
  };

  const increaseCartItemQty = (id) => {
    const cartItems = [...items];
    const itemIdx = cartItems.findIndex((item) => item.id === id);
    cartItems[itemIdx].quantity += 1;
    updateItems(cartItems);
  };

  const DecreaseCartQty = (id) => {
    const cartItems2 = [...items];
    const itemIdx = cartItems2.findIndex((item) => item.id === id);

    if (cartItems2[itemIdx].quantity === 1) {
      const newItemArray = cartItems2.filter(
        (cartItem) => cartItem.id !== cartItems2[itemIdx].id
      );

      updateItems(newItemArray);
    } else {
      cartItems2[itemIdx].quantity -= 1;
      updateItems(cartItems2);
    }
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
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
