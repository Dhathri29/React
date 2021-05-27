import axios from "axios";
import {
    ADD_PRODUCTS,
    ADD_PRODUCTS_ERROR,
    GET_PRODUCTS,
    GET_PRODUCTS_ERROR,
} from "./types";

const AddProduct = (formData, history) => async (dispatch) => {
    console.log(formData);
    const config = {
        headers: { "content-Type": "application/json" },
    };

    try {
        const res = await axios.post("/products", formData, config);

        dispatch({
            type: ADD_PRODUCTS,
            payload: res.data,
        });
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
        console.log(res);

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

export { AddProduct, GetProduct };
