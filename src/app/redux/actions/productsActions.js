import http from '../../common/http';
import Product from '../../classes/product';
import { GET_PRODUCTS_URL } from '../../common/api';
import { GET_PRODUCTS } from './actionTypes';

const getProductsFromDB = async () => {
    const { data } = await http.get(GET_PRODUCTS_URL);
    
    const products = data.map(product => {
        const prod = new Product(product);

        return prod;
    });

    return products;
};

export const getProducts = () => async (dispatch) => {
    const data = await getProductsFromDB();
    dispatch({
        type: GET_PRODUCTS,
        payload: data
    });
};