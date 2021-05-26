import {
    ADD_PRODUCTS,
    ADD_PRODUCTS_ERROR,
    GET_PRODUCTS,
    GET_PRODUCTS_ERROR,
} from "../actions/types";

const initialState = {
    count: 0,
    products: [],
    isAuthenticated: false,
    loading: true,
};

const AddProductReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_PRODUCTS:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
            };
        case GET_PRODUCTS_ERROR:
        case ADD_PRODUCTS_ERROR:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
            };
        case GET_PRODUCTS:
            return {
                ...state,
                products: payload.data,
                isAuthenticated: true,
                loading: false,
            };
        default:
            return state;
    }
};

export default AddProductReducer;
