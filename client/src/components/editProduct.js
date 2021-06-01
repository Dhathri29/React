import React from "react";
import { connect } from "react-redux";
import { useHistory,useParams } from "react-router-dom";

import {
    Card,
    CardContent,
    Button,
    makeStyles,
    Grid,
    TextField,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { AddProduct,editProduct } from "../store/actions/AddProduct";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
    },
    cardSpacing: { marginBottom: "2rem" },
    button: {
        margin: theme.spacing(1),
    },
}));

const EditProduct = ({ AddProduct,editProduct,products }) => {
    const {id} = useParams();
   
    const filteredData = products.filter(product => product.id === parseInt(id)); 

    const history = useHistory();
    const classes = useStyles();

    const [formData, setformData] = React.useState({
        id: filteredData[0].id,
        productName: filteredData[0].Name,
        price: filteredData[0].price,
    });

    const { productName, price } = formData;
  
    const handleChange = (event) => {

        setformData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (e) => {
       
        e.preventDefault();
        formData.price = parseInt(formData.price);
       editProduct(formData, history);
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                style={{ minHeight: "100vh" }}
            >
                <Grid item xs={12} md={4} lg={3}>
                    <Card className={classes.cardSpacing}>
                        <CardContent>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <TextField
                                        className={classes.textField}
                                        id="product-name"
                                        label="Product Name"
                                        name="productName"
                                        value={productName}
                                        onChange={(e) => handleChange(e)}
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        className={classes.textField}
                                        id="product-name"
                                        label="Price"
                                        name="price"
                                        value={price}
                                        onChange={(e) => handleChange(e)}
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>

                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                className={classes.button}
                                startIcon={<SaveIcon />}
                                type="submit"
                            >
                                Save
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </form>
    );
};
const mapStateToProps = (state) => {
     
    return {
         products: state.productData.products,
    };
    
};


export default connect(mapStateToProps, { AddProduct, editProduct })(EditProduct);
