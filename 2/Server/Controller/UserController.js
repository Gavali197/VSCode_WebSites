const user = require("../Models/User");

exports.postUser = async(req, res, err) => {
    try{
        const post = await user.create(req.body);
        if(!post){
            return res.status(401).json({
                message : "NOT ABLE TO POST"
            })
        }
        res.json(post);
    }catch(err){
        console.error("Facing error from Usercontroller " + err);
    }
}