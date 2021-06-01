const db = require("../config/db");

const addProduct = async (req, res) => {
    const { productName, price } = req.body;

    await db.query(
        `insert into product(Name,price) values ('${productName}','${price}')`
    );

    const productDetails = await db.query(
        `SELECT * FROM product ORDER BY ID DESC LIMIT 1`
    );
   
    res.status(201).json({ success: true, data: productDetails });
};

const getProduct = async (req, res) => {
    const productDetails = await db.query(`select * from product  `);
  
    res.status(200).json({ success: true, data: productDetails });
};

const deleteProduct = async (req, res) => {
    const productDetails = await db.query(
        `DELETE  from product where id=${req.params.id}`
    );
 
    res.status(200).json({ success: true, data: req.params.id });
};

const editProduct = async (req,res) => {

    const { productName, price } = req.body;
    
    const productDetails = await db.query(`update product set Name = '${productName}' , price = '${price}'  where id = ${req.params.id}`)
    
    console.log(req.body)
     res.status(200).json({ success: true, data:req.body});
}

module.exports = {
    addProduct,
    getProduct,
    deleteProduct,
    editProduct
};
