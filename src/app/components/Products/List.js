import React, { useState, useEffect } from 'react';
import http from '../../common/http';
import ProductComponent from './Product';
import Navigation from '../Navigation';
import './product.scss';
import { GET_PRODUCTS } from '../../common/api';
import Product from '../../classes/product';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        http.get(GET_PRODUCTS).then(result => {
            if (result && result.status === 200) {
                const products = result.data;
                products.map(product => {
                    product.quantity = 1;
                    const prod = new Product(product)

                    return prod;
                })
                setProducts(products);
            }
        });

        
    }, []);

    const productList = products.map(product => {
        return <ProductComponent key={product.id} cart={cart} product={product} setCart={setCart} />
    })

    return(
        <>
            <Navigation cart={cart} setCart={setCart}/>
            <div className="products">{productList}</div>
        </>
        
    )
};

export default ProductList;
