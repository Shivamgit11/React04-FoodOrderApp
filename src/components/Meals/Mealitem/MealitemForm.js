import React, { useContext } from 'react';
import classes from './MealitemForm.module.css';
import Input from '../../UI/Input';
import CartContext from '../../../store/cart-context';


const MealItemForm = props => {
    const cartctnx = useContext(CartContext);
    console.log('reinitialized cartctnx', cartctnx);
    const AddItemToCard = (event) => {
        event.preventDefault();
        // update the cartcontext.item
        //cartctnx.items.push(props.item);
        const quantity = document.getElementById('amount_'+props.id).value
        console.log('checking quantity'+ quantity)
        cartctnx.addItem(props.item, quantity);
        console.log('after additemtocart', cartctnx)
    }

    return (
        <form className={classes.form}>
            {console.log('insider render',cartctnx.items)}
            <Input label="Amount" input={{
                id: 'amount_'+props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaulvalue: '1'
            }} />
            <button onClick={AddItemToCard}>+ Add</button>
        </form>
    )
};

export default MealItemForm;

