import { ADD_PRODUCT, ADD_PRODUCT_ERROR } from "../actions/types";

const initialState = {
    count: 0,
    products: [],
    isAuthenticated: false,
    loading: true,
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_PRODUCT:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
            };
        case ADD_PRODUCT_ERROR:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
            };
        default:
            return state;
    }
};
