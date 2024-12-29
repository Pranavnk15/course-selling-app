const {Router} = require("express");
const { model } = require("mongoose");
const adminRouter = Router();
const {adminModel} = require("../db")


adminRouter.post("/signin", (req, res) => {

})

adminRouter.post("/signup", (req, res) => {

})

adminRouter.post("/create-course", (req, res) => {

})

adminRouter.post("/add-course", (req, res) => {

})

adminRouter.put("/course", (req, res) => {

})

adminRouter.get("/course/bulk", (req, res) => {

})

adminRouter.delete("/delete-course", (req, res) => {

})

module.exports = {
    adminRouter: adminRouter
}
