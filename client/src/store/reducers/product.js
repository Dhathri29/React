import { ADD_PRODUCT, ADD_PRODUCT_ERROR } from "../actions/types";

const initialState = {
    count: 0,
    products: [],
    isAuthenticated: false,
    loading: true,
};

const productReducer = (state = initialState, action) => {
    const { type, payload } = action;
    console.log(state);
    console.log(payload);
    switch (type) {
        case ADD_PRODUCT:
            state.products.push(payload.data[0]);
            return {
                ...state,
                count: state.count + 1,
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

export default productReducer;
