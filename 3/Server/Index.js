const express = require("express");
const app = express();
const database = require("./Utils/dbConnect");
const router = require("./Routers/UserRoute");

database();

app.use(express.json());

app.use("/api", router);

app.listen(3030, ()=>{
    console.log("running 3030");
})