const User = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.postUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        // Check email
        const isEmail = await User.findOne({ email });

        if (isEmail) {
            return res.status(409).json({
                message: "This email is already registered"
            });
        }

        // Hash password
        const hashPass = await bcrypt.hash(password, 12);

        // Keep other req.body fields
        const userData = {
            ...req.body,
            password: hashPass
        };

        const post = await User.create(userData);

        res.status(201).json({
            message: "User registered successfully",
            user: {
                id: post._id,
                email: post.email
            }
        });

    } catch (err) {
        next(err);
    }
};


exports.getUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        // Find user
        const findUser = await User.findOne({ email });

        if (!findUser) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        // Compare password
        const isMatch = await bcrypt.compare(
            password,
            findUser.password
        );

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const role = findUser.role;
        // Create JWT
        const token = jwt.sign(
            {
                id: findUser._id,
                email: findUser.email,
                
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h"
            }
        );

        res.status(200).json({
            message: "Login successful",
            token,
            role
        });

    } catch (err) {
        next(err);
    }
};
