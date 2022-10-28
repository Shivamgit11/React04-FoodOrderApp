import classes from './CartItem.module.css';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';


const CartItem = (props) => {
  
  const price = `₹${props.price.toFixed(2)}`;
  console.log("inside CartItem", props);

  const cartCtx = useContext(CartContext);

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.quantity}</span>
          
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={() => cartCtx.DecreaseCartQty(props.id)}>-</button>
        <button onClick={() => cartCtx.increaseCartItemQty(props.id)}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
