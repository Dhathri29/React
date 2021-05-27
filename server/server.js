const express = require("express");

require("dotenv").config();

const productRoutes = require("./routes/product");

const app = express();
app.use(express.json());

// User Define Middlewares

app.use("/", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});
