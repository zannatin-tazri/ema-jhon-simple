import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css';


const Product = (props) => {
    
    const {img,name,seller,quantity,price,ratings}=props.product;
    
    const handleAddToCart=props.handleAddToCart;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='product-info'>
           <h6 className='product-name'>{name}</h6>
            <p className='price'>Price : ${price}</p>
            <p>Manufacturer : {seller}</p>
            <p>Ratings : {ratings} Stars</p>
           </div>
           <button onClick={()=>handleAddToCart(props.product)} className='btn-cart'>
            Add to cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;