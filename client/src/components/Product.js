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

            {products.length ? (
                <BasicTable rows={products} />
            ) : (
                <h2>No products available </h2>
            )}

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
    return {
        products: state.productData.products,
    };
};

export default connect(mapStateToProps, { GetProduct })(Product);
