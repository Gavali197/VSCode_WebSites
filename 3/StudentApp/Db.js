const mongoose = require("mongoose")

const dbConnect = async()=>{
    try{
        const connect = await mongoose.connect("mongodb://localhost:27017/ICT3A")
        if(!connect){
            console.log("failed to connection")
        }

        console.log("connection success")
    }catch(err){
        console.error("server error" +err)
    }
}

module.exports = dbConnect