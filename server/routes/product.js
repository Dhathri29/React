const router = require("express").Router();

const {
    addProduct,
    getProduct,
    deleteProduct,
    editProduct,
} = require("../controllers/product");

router.route("/products").post(addProduct).get(getProduct);
router.route("/product/:id/delete").delete(deleteProduct);
router.route("/product/:id/edit").put(editProduct);
module.exports = router;
