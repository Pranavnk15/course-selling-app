const { Router } = require("express");
const { model } = require("mongoose");
const adminRouter = Router();
const { adminModel, courseModel } = require("../db")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { adminMiddleWare } = require("../middlewares/admin");
const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD;

adminRouter.post("/signin", async (req, res) => {
    const { email, password } = req.body;

    const admin = await adminModel.findOne({
        email,
    })

    const hashedPassword = await bcrypt.compare(password, admin.password);
    // console.log(hashedPassword);

    if (admin && hashedPassword) {
        const token = jwt.sign({
            id: admin._id
        }, JWT_ADMIN_PASSWORD)

        //if we user usgin cookie, we would use it here

        res.json({
            token: token
        })
    } else {
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
})

adminRouter.post("/signup", async (req, res) => {
    const { email, password, firstName, lastName } = req.body;

    const hashedPassword = (await bcrypt.hash(password, 10)).toString();
    try {
        await adminModel.create({
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



adminRouter.post("/course", adminMiddleWare, async (req, res) => {
    const adminId = req.adminId;
    const { title, description, imageUrl, price } = req.body;

    const course = await courseModel.create({
        title,
        description,
        price,
        imageUrl,
        creatorId: adminId
    })
    res.json({
        message: "Course creates",
        courseId: course._id
    })

})


adminRouter.put("/course", adminMiddleWare, async (req, res) => {
    const adminId = req.body.adminId;
    const { title, description, price, imageUrl, courseId } = req.body;

    await courseModel.updateOne({
        _id: courseId,
        creatorId: adminId
    }, {
        title: title,
        description: description,
        imageUrl: imageUrl,
        price: price
    })

    res.json({
        message: "Updated Sucessfully"
    })
})

adminRouter.get("/bulk", adminMiddleWare, async(req, res) => {
    const adminId = req.adminId;
    const course = await courseModel.find({
        creatorId: adminId
    })
    res.json({
        courses: course
    })
})


module.exports = {
    adminRouter: adminRouter
}
