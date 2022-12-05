import { ADD_TO_CART } from "../actionTypes/actionTypes";


const initialState = {
    Cart:[]
};

const ProductReducer = (state = initialState , action ) => {
switch (action.type) {
    case ADD_TO_CART:
        
    return {
        ...state ,
        cart:[...state.cart , action.payload]
    }

    default:
        return state;
}

    return state;
}
export default ProductReducer;