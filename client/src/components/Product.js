import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Button, makeStyles } from "@material-ui/core";
import BasicTable from "../common/BasicTable";

import { Link } from "react-router-dom";
import { GetProduct } from "../store/actions/AddProduct";

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));
const Product = ({ GetProduct, products }) => {
    console.log(products);
    //console.log(products[0]);
    useEffect(() => {
        GetProduct();
    }, [GetProduct]);

    const classes = useStyles();

    return (
        <div>
            <Button
                component={Link}
                to="/addProduct"
                variant="contained"
                size="large"
                color="primary"
                className={classes.margin}
            >
                Add Product
            </Button>
            <BasicTable rows={products} />
            {/* <p>
                {products.map((eachProduct) => (
                    <li key={eachProduct.id}>
                        {eachProduct.Name} {eachProduct.price}
                    </li>
                ))}
            </p> */}
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log(state);
    console.log(state.productData);
    return {
        products: state.productData.products,
    };
};

export default connect(mapStateToProps, { GetProduct })(Product);
