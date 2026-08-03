const user = require("../Models/UserModel");

exports.loginUser = async (req, res, next) => {
    try {
      const {email, password} = req.body;

      if(!email || !password){
        return res.status(400).json({
            success : false,
            message : "Email password required"
        })
      }
        const FindUser = await user.findOne({email});

        if(!FindUser){
            return res.status(401).json({
                success : false,
                message : "Invalid email or password"
            })
        }

        const isMatch = await compa

        
    }
}