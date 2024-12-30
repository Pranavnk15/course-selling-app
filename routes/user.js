// const express = require("express");
// const router = express.Router;

//or both ways are good

const { Router } = require("express");
const bcrypt = require("bcrypt");
const { userModel, purchaseModel } = require("../db");
const jwt = require('jsonwebtoken');
const { userMiddleWare } = require("../middlewares/user");
const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;

const userRouter = Router(); //Router() is a function not a class

userRouter.post("/signup", async (req, res) => {
    const { email, password, firstName, lastName } = req.body;

    const hashedPassword = (await bcrypt.hash(password, 10)).toString();
    try {
        await userModel.create({
            email,
            password: hashedPassword,
            firstName,
            lastName
        })
    } catch (e) {
        res.json({
            message: "Error Signing up.."
        })
    }


    res.json({
        message: "Signup Successfull"
    })

})

userRouter.post("/signin", async (req, res) => {
    const {email, password} = req.body;

    const user = await userModel.findOne({
        email, 
    })

    const hashedPassword = await bcrypt.compare(password, user.password);
    // console.log(hashedPassword);
    
    if(user && hashedPassword) {
        const token = jwt.sign({
            id: user._id
        }, JWT_USER_PASSWORD)

        //if we user usgin cookie, we would use it here

        res.json({
            token: token
        })
    } else {
        res.status(403).json({
            message:"Incorrect credentials"
        })
    }
})

userRouter.get("/purchases", userMiddleWare, async (req, res) => {
    const userId = req.userId;
    const purchases = await purchaseModel.find({
        userId
    })
    res.json({
        purchases
    })
})



module.exports = {
    userRouter: userRouter
}

