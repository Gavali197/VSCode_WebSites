const express = require("express");
const router = express.Router();
const {registerUser} = require("../controller/UserController")
// const app = express();


router.post("/add", registerUser);

module.exports = router;
