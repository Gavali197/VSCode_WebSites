const express = require("express");
const dbConnect = require("./Db");
const router = require("./Routes/Routes");
const app = express();
const session = require("express-session");


app.set("view engine", "ejs");
app.use(express.urlencoded({extended : true}));
dbConnect();
app.use(express.json());
app.use(session({
    secret : "hello123",
    resave : false,
    saveUninitialized: true
}))

app.get("/add", (req, res)=> res.render('add'));

app.use("/", router);


app.listen(3000, ()=>{
    console.log("server running 3000");
})