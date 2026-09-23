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

exports.loginUser = async(req, res) => {
    const {email, password } = req.body;
    const findUser = await user.findOne({email});
    
    if(!findUser){
        return res.status(404).json({
            message : "invalid email id"
        })
    }

    if(password !== findUser.password){
        return res.status(404).json({
            message : "Password not match"
        })
    }

    res.status(200).json({
        message : "Login successfully"
    })

}




