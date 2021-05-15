import React from "react";
import axios from "axios";
import { ADD_PRODUCT, ADD_PRODUCT_ERROR } from "./types";

const addProductServer = (formData) => async (dispatch) => {
    const config = {
        headers: { "Content-Type": "application/json" },
    };
    console.log(formData);
    try {
        const res = await axios.post("/products", formData, config);
        console.log(res);
        dispatch({
            type: ADD_PRODUCT,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: ADD_PRODUCT_ERROR,
        });
    }
};
export { addProductServer };
