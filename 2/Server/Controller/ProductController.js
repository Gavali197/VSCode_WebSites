const Product = require("../Models/Product");

// CREATE PRODUCT
exports.createProduct = async (req, res, next) => {
    try {
        const product = await Product.create(req.body);

        res.status(201).json({
            message: "Product created successfully",
            product
        });

    } catch (err) {
        next(err);
    }
};


// GET ALL PRODUCTS
exports.getProducts = async (req, res, next) => {
    try {
        const products = await Product.find();

        res.status(200).json({
            message: "Products fetched successfully",
            products
        });

    } catch (err) {
        next(err);
    }
};
