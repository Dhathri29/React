const db = require("../config/db");

const addProduct = async (req, res) => {
    const { productName, price } = req.body;

    await db.query(
        `insert into product(Name,price) values ('${productName}','${price}')`
    );

    const productDetails = await db.query(
        `SELECT * FROM product ORDER BY ID DESC LIMIT 1`
    );
    console.log(productDetails);
    res.status(201).json({ success: true, data: productDetails });
};
const getProduct = async (req, res) => {
    const productDetails = await db.query(`select * from product  `);
    console.log(productDetails);
    res.status(200).json({ success: true, data: productDetails });
};

module.exports = {
    addProduct,
    getProduct,
};
