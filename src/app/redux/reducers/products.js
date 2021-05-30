import { GET_PRODUCTS } from '../actions/actionTypes';

const initialState = {
    data: []
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case GET_PRODUCTS:
            return { ...state, data: action.payload }

        default:
            return state;
    }
}

export default rootReducer;