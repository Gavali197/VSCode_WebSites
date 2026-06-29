const book = require("../Models/BookModel");
const user = require("../Models/UserModel");

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