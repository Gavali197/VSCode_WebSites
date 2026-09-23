const express = require("express");
const router = express.Router();

const { postUser, findUser, loginUser } = require("../Controller/UserController")

router.post("/addUser", postUser);
router.get("/findUser", findUser);
router.post("/login", loginUser);


module.exports = router;

