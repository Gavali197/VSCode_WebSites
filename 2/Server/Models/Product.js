const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },

        author: {
            type: String,
            required: true,
            trim: true
        },

        description: {
            type: String,
            trim: true
        },

        price: {
            type: Number,
            required: true,
            min: 0
        },

        stock: {
            type: Number,
            required: true,
            min: 0,
            default: 0
        },

        category: {
            type: String,
            required: true,
            trim: true
        },

        image: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
