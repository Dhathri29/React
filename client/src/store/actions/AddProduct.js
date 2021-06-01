import axios from "axios";
import {
    ADD_PRODUCTS,
    ADD_PRODUCTS_ERROR,
    GET_PRODUCTS,
    GET_PRODUCTS_ERROR,
    DEL_PRODUCTS,
    DEL_PRODUCTS_ERROR,
    EDIT_PRODUCTS,
    EDIT_PRODUCTS_ERROR
} from "./types";

const AddProduct = (formData, history) => async (dispatch) => {
    const config = {
        headers: { "content-Type": "application/json" },
    };

    try {
        const res = await axios.post("/products", formData, config);
        
        dispatch({
            type: ADD_PRODUCTS,
            payload: res.data,
        });
        console.log("went to products using history");
        history.push("/products");
    } catch (err) {
        dispatch({
            type: ADD_PRODUCTS_ERROR,
        });
    }
};

const GetProduct = () => async (dispatch) => {
    const config = {
        headers: { "content-Type": "application/json" },
    };

    try {
        const res = await axios.get("/products", null, config);

        dispatch({
            type: GET_PRODUCTS,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: GET_PRODUCTS_ERROR,
        });
    }
};

const deleteProduct = (id) => async (dispatch) => {

    const config = {
        headers: { "content-Type": "application/json" },
    };
    try {
        const res = await axios.delete(`/product/${id}/delete`, null, config);

        dispatch({
            type: DEL_PRODUCTS,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: DEL_PRODUCTS_ERROR,
        });
    }
};

const editProduct = (formData,history) => async (dispatch) => {
    const {id} = formData;
    const config = {
        headers: { "content-Type": "application/json" },
    };
    try{
        const res= await axios.put(`/product/${id}/edit`, formData,config);
        console.log(res.data);
        dispatch({
            type: EDIT_PRODUCTS,
            payload: res.data,
        })
        
         history.push(`/products`);
    }
    catch(err){
        dispatch({
            type:EDIT_PRODUCTS_ERROR,
        })
    }
};
export { AddProduct, GetProduct, deleteProduct, editProduct };
