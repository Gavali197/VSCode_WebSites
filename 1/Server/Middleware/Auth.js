
const Auth = (req, res, next) => {
    const token = req.header.authorization;

    if (!token) {
        return res.status(401).json({
            message: "Are You Not authorised to access this "
        });
    }

    next();
}

module.exports = Auth;