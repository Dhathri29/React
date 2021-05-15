import React from "react";
import { Route, Switch } from "react-router-dom";
import addProduct from "../components/addProduct";
import Home from "../components/Home";
import Products from "../components/Products";

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path="/products" component={Products} />
            <Route exact path="/addproduct" component={addProduct} />
            <Route exact path="/home" component={Home} />
        </Switch>
    );
};

export default AppRouter;
