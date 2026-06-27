const express = require("express");
const router = express.Router();

const { PostBook, GetBook, PostUser, PostStaff, getStaff } = require("../Controller/BookPostController");

router.post("/bookpost", PostBook);
router.post("/staffpost", PostStaff);
router.get("/viewstaff", getStaff)

module.exports = router