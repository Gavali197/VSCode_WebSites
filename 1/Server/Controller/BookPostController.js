const book = require("../Models/BookModel");
const user = require("../Models/UserModel");
const Staffs = require("../Models/Staffs");



exports.PostBook = async (req, res, next) => {
    try {
        const post = await book.create(req.body);
        if (!post) {
            return res.status(401).json({
                Message: "NOT FOUND"
            })
        }
        res.json(post);
    } catch (err) {
        next(err)
    }
}

exports.updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const updatedUsesr = await book.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true
        })

        if (!updatedUsesr) {
            return res.status(404).json({
                message: "User NOt Found"
            });
        }

        return res.status(401).json({
            message: "User Data Updated Success",
            data: updateData
        })

    } catch (err) {
        // const errorHandler = "User Is noT maintable"
        console.error(err)
        next(err)
    }
}


exports.GetBook = async (req, res, next) => {
    try {
        const get = await book.find();
        if (!get) {
            return res.status(401).json({
                message: "NOT FOUND"
            })
        }
        res.json(get);
    } catch (err) {
        next(err)
    }
}


exports.PostUser = async (req, res, next) => {
    try {
        const { email } = req.body;

        // Check if email already exists
        const existingUser = await user.findOne({ email });

        if (existingUser) {
            console.log("exit form reach");

            return res.status(409).json({
                success: false,
                message: "Email already exists"
            });
        }

        // Create new user
        const newUser = await user.create(req.body);

        return res.status(201).json({
            success: true,
            message: "User created successfully",
            data: newUser
        });

    } catch (err) {
        next(err);
    }
};

exports.GetUsers = async (req, res, next) => {
    try {

        const post = await user.find();


        if (!post) {
            return res.status(404).json({
                Message: "NOT FOUND"
            })
        }
        res.json(post);
    } catch (err) {
        next(err)
    }
}


exports.UserFindById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const foundId = await user.findById(id);

        if (!foundId) {
            return res.status(404).json({
                message: "User Not Found"
            })
        }

        res.status(200).json(foundId);
    } catch (err) {
        next(err)
    }
}


exports.PostStaff = async (req, res, next) => {
    try {
        const post = await Staffs.create(req.body);

        if (!post) {
            return res.status(404).json({
                message: "Not add Staff"
            })
        }

        res.json(post);
    } catch (err) {
        console.log(err);
        console.log("Error from post");
    }
}


exports.getStaff = async (req, res, next) => {
    try {
        const Get = await Staffs.find();
        if (!Get) {
            return res.status(404).json({
                message: "Not Found"
            })
        }
        res.json(Get)
    } catch (err) {
        next(err)
    }
}


exports.updateStaff = async (req, res, next) => {
    try {
        const staffId = req.params.id;
        const updatedStaff = await Staffs.findByIdAndUpdate(
            staffId.
                req.body,
            { new: true, runValidators: true }
            // 'new: true' returns the updated document instead of the old one
        );
        if (!updatedStaff) {
            return res.status(404).json({
                message: "Not found"
            })
        }
        res.json(updatedStaff);
    } catch (err) {
        next(err)
    }
}