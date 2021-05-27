const router = require("express").Router();

const { addProduct, getProduct } = require("../controllers/product");

router.route("/products").post(addProduct).get(getProduct);

module.exports = router;
