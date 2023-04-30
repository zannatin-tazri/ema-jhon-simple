import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    // const cart =props.cart;
    // const{cart}=props;
    console.log(cart);
    let  totapPrice=0;
    let totalShipping=0;
    let quantity=0;
    for(const product of cart){
        if(product.quantity===0){
            product.quantity=1
        }
        // product.quantity=product.quantity || 1;

         totapPrice= totapPrice+product.price * product.quantity ;
        totalShipping=totalShipping+product.shipping;
        quantity=quantity+product.quantity;
        console.log(quantity)
    }
    const tax = totapPrice*7/100;
    const grandTotal=totapPrice+totalShipping+tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
                <p>Selected items : {cart.length}</p>
                <p>Total price : ${ totapPrice} </p>
                <p>Total shipping : ${totalShipping} </p>
                <p>Tax :${tax.toFixed(2)} </p>
                <h6>Grand Total : ${grandTotal.toFixed(2)} </h6>
        </div>
    );
};

export default Cart;