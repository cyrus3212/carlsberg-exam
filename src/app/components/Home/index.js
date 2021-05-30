import React, { useEffect } from 'react';
import Navigation from '../Navigation';
import { getProducts } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import ProductList from '../Products/List';
import '../Products/product.scss';

const Product = () => {
    const products = useSelector(state => state.products.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return(
        <>
            <Navigation />
            <ProductList products={products} />
        </>
        
    )
};

export default Product;
