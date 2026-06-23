const mongoDb = require("mongoose");

const dbConnect = async () =>{
    try{
        const connection = await mongoDb.connect("mongodb://localhost:27017/ICT3A");
        if(!connection){
            console.log("Connection failed, Try Again");
        }
        console.log("Connection successsfully with database");
        
    }catch(err){
        console.error("Connection failed from Server Side");
        process.exit(1);
    }

}

module.exports = dbConnect;