const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;

function userMiddleWare(req, res, next) {
    const token = req.headers.token;
    const decoded = jwt.verify(token, JWT_USER_PASSWORD);

    if(decoded) {
        req.userId = decoded.id;
        next();
    } else {
        res.status(403).json({
            message:"You are not signed in"
        })
    }
}

module.exports = {
    userMiddleWare
}