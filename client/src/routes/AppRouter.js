import React from "react";
import { Route, Switch } from "react-router-dom";
import addProduct from "../components/addProduct";

import Product from "../components/Product";

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path="/products" component={Product} />
            <Route exact path="/addproduct" component={addProduct} />
        </Switch>
    );
};

export default AppRouter;
