import React from 'react';
import './Products.css'

const Product = (props) => {
    console.log(props)
    const {img,name,seller,quantity,price,ratings}=props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='product-info'>
           <h6 className='product-name'>{name}</h6>
            <p className='price'>Price : ${price}</p>
            <p>Manufacturer : {seller}</p>
            <p>Ratings : {ratings}</p>
           </div>
        </div>
    );
};

export default Product;