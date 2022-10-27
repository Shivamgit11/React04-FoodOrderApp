import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const carycntx = useContext(CartContext);

  let totalAmount = 0;
  carycntx.items.map((item) => {
    totalAmount = totalAmount + item.price;
  });

  let checkItem = carycntx.items.length > 0;

  const cartitems = (
    <ul className={classes["cart-items"]}>
      {carycntx.items.map((item) => (
        <li>
          Name: {item.name} Price: {item.price} Quantitiy: {item.quantity}
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartitems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {checkItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
