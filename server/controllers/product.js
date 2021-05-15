const db = require("../config/db");

const addProductServer = async (req, res) => {
    const { productName, price } = req.body;

    const productDetails = await db.query(
        `insert into product(Name,price) values ('${productName}','${price}')`
    );
    res.status(201).json({ success: true, data: productDetails });
};

module.exports = {
    addProductServer,
};
