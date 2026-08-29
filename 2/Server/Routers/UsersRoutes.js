const express = require("express");
const router = express.Router();

const {postUser, getUser} = require("../Controller/UserController")

const Auth = require("../Middleware/Auth");

router.post("/register", postUser);
router.post("/login", getUser);

router.get("/profile", Auth, (req, res) => {
    res.json({
        message: "You are authenticated",
        user: req.user
    });
});

module.exports = router;
