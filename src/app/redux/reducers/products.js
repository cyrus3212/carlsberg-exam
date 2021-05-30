import { SET_PRODUCTS } from '../actions/actionTypes';

const initialState = {
    data: []
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case SET_PRODUCTS:
            return { ...state, data: action.data }

        default:
            return state;
    }
}

export default rootReducer;