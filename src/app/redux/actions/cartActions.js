import { SET_CART_PRODUCTS } from './actionTypes';

export const setCartProducts = (data) => (dispatch) => {
    dispatch({
        type: SET_CART_PRODUCTS,
        payload: data
    });
};