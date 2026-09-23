const user = require("../Models/User");

exports.postUser = async(req, res)=> {
    const post = await user.create(req.body);

    if(!post){
        return res.status(209).json({
            message : "failed to post user"
        })
    }
    res.status(201).json({
        message : "Success to enter data"
    })
    res.json(post)
}

exports.findUser = async(req, res)=> {
    const get = await user.find();

    if(!get){
        return res.status(209).json({
            message : "failed to get user"
        })
    }

    res.json(get);
}




