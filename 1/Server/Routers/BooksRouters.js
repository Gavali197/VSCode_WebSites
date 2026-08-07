const express = require("express");
const router = express.Router();
const bookController = require("../Controller/BookPostController");

const { PostBook, 
    GetBook, 
    PostUser, 
    PostStaff, 
    getStaff, 
    updateStaff, 
    GetUsers,
    UserFindById } = require("../Controller/BookPostController");
const { loginUser } = require("../Controller/UserController");

router.put("/updateStaff", updateStaff);
router.post("/bookpost", PostBook);
router.get("/bookget", GetBook);
router.post("/register", PostUser);
router.post("/staffpost", PostStaff);
router.get("/viewstaff", getStaff)
router.get("/userlist", GetUsers);
router.get("/userlist/:id", UserFindById);
router.post("/login", loginUser);



module.exports = router