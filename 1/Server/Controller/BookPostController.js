const book = require("../Models/BookModel");
const user = require("../Models/UserModel");
const Staffs = require("../Models/Staffs")

exports.PostBook = async (req, res, next)=>{
    try{
        const post = await book.create(req.body);
        if(!post){
            return res.status(401).json({
                Message : "NOT FOUND"
            })
        }
        res.json(post);
    }catch(err){
        next(err)
    }
}

exports.GetBook = async(req, res, next)=>{
    try{
        const get = await book.find();
        if(!get){
            return res.status(401).json({
                message : "NOT FOUND"
            })
        }
        res.json(get);
    }catch(err){
        next(err)
    }
}
exports.PostUser = async (req, res, next)=>{
    try{
        const post = await user.create(req.body);
        if(!post){
            return res.status(401).json({
                Message : "NOT FOUND"
            })
        }
        res.json(post);
    }catch(err){
        next(err)
    }
}

exports.PostStaff = async (req, res, next) =>{
    try{
        const post  = await Staffs.create(req.body);

        if(!post){
            return res.status(401).json({
                message :"Not add Staff"
            })
        }

        res.json(post);
    }catch(err) {
        console.log(err);
        console.log("Error from post");
    }
}
