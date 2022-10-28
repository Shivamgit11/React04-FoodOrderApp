import React from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item,quantity) => {},
    removetItem: (id) => {},
    increaseCartItemQty: (id) => {}
});

export default CartContext;