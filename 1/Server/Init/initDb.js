const mongoose = require("mongoose");
const userModel = require("../Models/UserModel");
const SampleListing = require("../userData");
const dbConnect = require("../Utils/Db");

    const initializeDatabase = async() =>{
try{
    await dbConnect();
    console.log("Connection Successfully with database");
    
    await userModel.deleteMany({});
    console.log("cleaning database");

    await userModel.insertMany(SampleListing);
    console.log("successfully store data in database...!");

    mongoose.connection.close();
    process.exit(1);

    
    
}catch(err){
    console.error(err, "Error from server side");
    process.exit(1);
}
}

initializeDatabase();