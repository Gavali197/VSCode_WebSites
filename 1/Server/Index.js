const express = require("express");
const app = express();
const dbConnect = require("./Utils/Db");
const errorHandler = require("./Middleware/Error");
const router = require("./Routers/BooksRouters");
const PORT = 4000;
const cors = require("cors");

dbConnect();

app.use(express.json());

app.use(cors({
    origin:"http://localhost:5173",
    credentials: true
})); 
app.use("/api/v2", router);

app.use(errorHandler)


app.listen(PORT, ()=>{
    console.log(`Server Running Successfully On PORT : ${PORT}`);
})