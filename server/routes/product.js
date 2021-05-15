const router = require("express").Router();

const { addProductServer } = require("../controllers/product");

router.route("/products").post(addProductServer);

module.exports = router;
