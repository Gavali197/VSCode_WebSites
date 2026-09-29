const express = require("express")
const router = express.Router();

const { register, login, productAdd, productGet } = require("../Controller/StudentController")

router.get("/register", (req, res)=> res.render("register"))
router.post("/register", register);
router.get("/login", (req, res)=> res.render("login"))
router.post("/login", login)

router.post("/api/product", productAdd)
router.get("/api/product", productGet)

module.exports = router