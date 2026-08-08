const express = require("express");
const app = express();
const dbConnect = require("./Utils/Db");
const errorHandler = require("./Middleware/Error");
const router = require("./Routers/BooksRouters");
const PORT = 4000;
const auth =require("./Middleware/Auth");
const cors = require("cors");
require("dotenv").config();

dbConnect();

app.use(express.json());

app.use(cors({
    origin:"http://localhost:5173",
    credentials: true
})); 
app.use("/api/v2", auth, router);

app.use(errorHandler)

app.listen(process.env.PORT, ()=>{
    console.log(`Server Running Successfully On PORT : ${PORT}`);
})