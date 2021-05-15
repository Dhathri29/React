import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/config/configureStore";
import Dashboard from "./components/Dashboard";

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Dashboard />
            </BrowserRouter>
        </Provider>
    );
};

export default App;
