import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import {addToDb, getShoppingCart} from '../../../utilities/fakedb';
import './Shop.css';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts]=useState([]);
    const[cart, setCart]=useState([]) 

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[]);

    useEffect(()=>{
        const storedCart=getShoppingCart();
        console.log(storedCart)
    },[])

    const handleAddToCart=(product)=>{
        // cart.push
        const newCart=[...cart,product];
        setCart(newCart);
       addToDb(product.id);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=> <Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;