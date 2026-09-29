const student = require("../Model/StudentModel")
const bcrypt = require("bcrypt")
const session = require("express-session")

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const isAvaliable = await student.findOne({ email })

        if (isAvaliable) {
            res.status(209).json({
                message: "email is avaliable"
            })
        }

        const hashed = await bcrypt.hash(password, 10)

        const post = await student.create({ name, email, password: hashed })
        if (!post) {
            return res.status(209).json({
                message: "failed post"
            })
        }
        res.json(post)
        //    return res.redirect("/login")
    } catch (err) {
        console.error("error from post side", err)
    }
}


exports.login = async (req, res) => {

    const { email, password } = req.body

    const user = await student.findOne({ email })
    if (!user) {
        return res.status(209).json({
            message: "email is not avaliable"
        })
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(401).json({
            message: "invalid password"
        })
    }else{
        res.status(200).json({
            message : "successfully register"
        })
    }

    req.session.student = { id: user._id, name: user.name, email: user.email };
    res.redirect("/dashboard");

}