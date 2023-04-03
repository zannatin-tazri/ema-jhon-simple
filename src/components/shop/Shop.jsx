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
        const savedCart=[];
        for(const id in storedCart){
            // console.log(id);
            const addedProduct=products.find(product=>product.id
                ===id);
                if(addedProduct){
                     // get quantity of the products
                const quantity=storedCart[id];
                addedProduct.quantity=quantity;
                savedCart.push(addedProduct);
                }  
        }
        setCart(savedCart);
    },[products])

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