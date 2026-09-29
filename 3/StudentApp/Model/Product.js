const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    product:{
        type: String
    }, 
    price :{
        type : Number
    }
})

module.exports = mongoose.model("ProductTable", ProductSchema)