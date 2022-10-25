import { useState } from "react";
import CartContext from "./cart-context";


const CartProvider = (props) => {
  
  const [ items, updateItems] = useState([]);


  const addItemToCartHandler = (item,quantity) => {
    //console.log(item,quantity)
    //item.quantity = 1;
    updateItems([...items, { ...item, quantity: parseInt(quantity) || 0 }]);
    //console.log('inside addItemTocartHandler', cartContext)
  };

  const removeItemFromCartHandler = (id) => {

  };

  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {console.log('Inside Cartcontext.Provider', cartContext)}
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
