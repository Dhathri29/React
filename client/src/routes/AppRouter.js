import React from "react";
import { Route, Switch } from "react-router-dom";
import addProduct from "../components/addProduct";
import editProduct from "../components/editProduct";

import Product from "../components/Product";

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path="/products" component={Product} />
            <Route exact path="/addproduct" component={addProduct} />
            <Route exact path="/product/:id/edit" component={editProduct} />
        </Switch>
    );
};

export default AppRouter;
