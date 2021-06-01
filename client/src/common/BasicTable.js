import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { deleteProduct,editProduct } from "../store/actions/AddProduct";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const BasicTable = ({ deleteProduct,editProduct, products }) => {
    const history = useHistory();
    const classes = useStyles();

    const handleDelete = (id) => {
        deleteProduct(id);
    };

    const handleEdit = (id) =>{
        
       history.push(`/product/${id}/edit`)
    }

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Edit</TableCell>
                        <TableCell align="right">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products?.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="right">{row.Name}</TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                            <TableCell align="right">
                                <EditIcon onClick ={(e) => handleEdit(row.id)} />
                            </TableCell>
                            <TableCell align="right">
                                <DeleteOutlineIcon
                                    onClick={(e) => handleDelete(row.id)}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.productData.products,
    };
};

export default connect(mapStateToProps, { deleteProduct, editProduct })(BasicTable);
