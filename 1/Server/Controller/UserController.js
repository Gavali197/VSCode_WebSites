const user = require("../Models/UserModel");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");


exports.loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email password required"
            })
        }
        const FindUser = await user.findOne({ email });

        // const id = req.params.id;

        // const findEmail = await user.findById()


        if (!FindUser) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            })
        }else{
            return res.status(401).json({
                message : "Email is all ready Exits"
            })
        }



        // const isMatch = await bcrypt.compare(password, FindUser.password);

        if (password !== FindUser.password) {
            return res.status(401).json({
                success: false,
                message: "Invalid Email or password"
            })
        }

        const token = jwt.sign(
            {
                id : FindUser._id,
                email : FindUser.email
            },

            process.env.JWT_SECRET, {
            expiresIn: "1h",
        }
        )

        res.status(200).json({
            message : "Login Successfully",
            token
        })

    }catch(err){
        next(err);
    }
}