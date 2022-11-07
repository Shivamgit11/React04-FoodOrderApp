import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";



const Cart = (props) => {
  const carycntx = useContext(CartContext);
  
  // let quantity = 0;
  let totalAmount = 0;
  carycntx.items.map((item) => {
    // if(item.quantity < 0) {
    //   alert('Quantity should more than one')
    // }
    totalAmount = totalAmount + item.price*item.quantity;
    // quantity += quantity + item.quantity;
  });

  if(totalAmount < 0) {
    alert("Amount should be in positive formate");
  }

  let checkItem = carycntx.items.length > 0;

  



  const cartitems = (
    <ul className={classes["cart-items"]}>
      {carycntx.items.map((item) => (
        // <li>
        //   Name: {item.name} Price: {item.price} Quantitiy: {item.quantity}
        // </li>
        <li>
          <CartItem 
          id={item.id}
          key={item.id}
          name={item.name}
          // amount={item.amount}
          price={item.price}
          quantity={item.quantity}
          />
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartitems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>₹{totalAmount}</span>
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
