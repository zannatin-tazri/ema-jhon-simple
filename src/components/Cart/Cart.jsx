import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    // const cart =props.cart;
    // const{cart}=props;
    console.log(cart);
    let  totapPrice=0;
    let totalShipping=0;
    for(const product of cart){
         totapPrice= totapPrice+product.price;
        totalShipping=totalShipping+product.shipping;
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