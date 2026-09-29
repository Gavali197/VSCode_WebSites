const user = require("../Models/Game");

exports.registerUser = async(req, res)=>{
    const post = await user.create(req.body);

    if(!post){
        return res.status(209).json({
            message : "failed"
        })

    }
    res.json(post);
}


exports.DeleteGames = async(req, res)=>{
    const post = await user.create(req.body);

    if(!post){
        return res.status(209).json({
            message : "failed"
        })

    }
    res.json(post);
}

exports.registerUser = async(req, res)=>{
    const post = await user.create(req.body);

    if(!post){
        return res.status(209).json({
            message : "failed"
        })

    }
    res.json(post);
}