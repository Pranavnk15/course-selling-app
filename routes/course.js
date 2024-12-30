const { Router } = require("express");
const { userMiddleWare } = require("../middlewares/user");
const { purchaseModel, courseModel } = require("../db");

const courseRouter = Router();

courseRouter.post("/preview", async (req, res) => {
    const courses = await courseModel.find({});
    res.json({
        courses
    })
})

courseRouter.get("/purchase", userMiddleWare, async (req, res) => {
    const userId = req.userId;
    const courseId = req.body.courseId;

    await purchaseModel.create({
        userId,
        courseId
    })
    
    res.json({
        message: "You have successfully bought the course"
    })
})


module.exports = {
    courseRouter: courseRouter
}