const express = require("express");
const router = express.Router();

const { PostBook, GetBook, PostUser, PostStaff, getStaff, updateStaff, GetUsers } = require("../Controller/BookPostController");

router.put("/updateStaff", updateStaff)
router.post("/bookpost", PostBook);
router.get("/bookget", GetBook);
router.post("/register", PostUser);
router.post("/staffpost", PostStaff);
router.get("/viewstaff", getStaff)
router.get("/userlist", GetUsers);

module.exports = router