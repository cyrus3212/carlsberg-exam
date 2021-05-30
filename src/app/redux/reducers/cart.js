import { SET_CART_PRODUCTS } from '../actions/actionTypes';

const initialState = {
    data: []
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case SET_CART_PRODUCTS:
            return { ...state, data: action.payload }

        default:
            return state;
    }
}

export default rootReducer;