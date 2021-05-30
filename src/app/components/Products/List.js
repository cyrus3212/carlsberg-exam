import React from 'react';
import Product from './Product';
import './product.scss';

const ProductList = ({ products }) => {
    const productList = products.map(product => {
        return <Product key={product.id} product={product} />
    })

    return <div className="products">{productList}</div>
};

export default ProductList;
