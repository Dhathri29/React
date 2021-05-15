import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

function Products() {
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
        </div>
    );
}

export default Products;
