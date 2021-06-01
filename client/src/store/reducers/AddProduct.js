import {
    ADD_PRODUCTS,
    ADD_PRODUCTS_ERROR,
    GET_PRODUCTS,
    GET_PRODUCTS_ERROR,
    DEL_PRODUCTS,
    DEL_PRODUCTS_ERROR,
    EDIT_PRODUCTS,
    EDIT_PRODUCTS_ERROR,
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
            
            state.products.push(payload.data[0]);
            return {
                ...state,
                count: state.count + 1,

                isAuthenticated: true,
                loading: false,
            };
        case GET_PRODUCTS_ERROR:
        case ADD_PRODUCTS_ERROR:
        case DEL_PRODUCTS_ERROR:
        case EDIT_PRODUCTS_ERROR:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
            };
        case GET_PRODUCTS:
            return {
                ...state,
                products: payload.data,
                count: payload.data.length,
                isAuthenticated: true,
                loading: false,
            };
        case DEL_PRODUCTS:
       
            const filteredItems = state.products.filter(
                (product) => product.id !== parseInt(payload.data)
            );
           
            return {
                ...state,
                count: state.count - 1,
                products: filteredItems,
                isAuthenticated: true,
                loading: false,
            };
        case EDIT_PRODUCTS:

       const replacedItemIndex = state.products.findIndex((item) => item.id === payload.data.id);
       state.products[replacedItemIndex] = payload.data;
          return {
              ...state,
              //products: 
               isAuthenticated: true,
                loading: false,
          }
        default:
            return state;
    }
};

export default AddProductReducer;
