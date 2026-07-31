    const mongoose = require("mongoose");

    const StaffSchema = new mongoose.Schema({
        Name : {
            type : String
        },

        Salary :{
            type : String
        },

        Age : {
            type : String
        },

        Phone : {
            type : String
        }
    })

    //Intially handle device

    module.exports = mongoose.model("StaffRecord", StaffSchema);