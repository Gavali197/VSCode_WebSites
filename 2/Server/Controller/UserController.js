const user = require("../Models/User");
const bcrypt = require("bcrypt");

exports.postUser = async (req, res, err) => {
    try {
        const { email } = req.body;
        const isEmail = await user.findOne({ email })

        if (isEmail) {
            return res.status(401).json({
                message: "This email was all ready Register"
            })
        }

        const hashPass = await bcrypt.hash(req.body.password, 12);

        const userData = {
            ...req.body,
            password: hashPass
        };

        const post = await user.create(userData);
        if (!post) {
            return res.status(401).json({
                message: "NOT ABLE TO POST"
            })
        }
        res.json(post);
    } catch (err) {
        console.error("Facing error from Usercontroller " + err);
    }
};

exports.getUser = async (req, res, next) => {
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "require email or password"
            })
        }

        const findUser = await user.findOne({ email });

        if (!findUser) {
            return res.status(401).json({
                message: "invalid email password"
            })
        }
        const isMatch = await bcrypt.compare(password, findUser.password);

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }


        res.status(200).json({
            message: "Login Successfully"
        })
    } catch (err) {
        console.log(err);

    }
}