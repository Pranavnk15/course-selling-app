// const express = require("express");
// const router = express.Router;

//or both ways are good

const { Router } = require("express");

const userRouter = Router(); //Router() is a function not a class

userRouter.post("/signup", (req, res) => {

})

userRouter.post("/sign", (req, res) => {

})

userRouter.get("/purchases", (req, res) => {

})

module.exports = {
    userRouter: userRouter
}

