const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

console.log("Conecting to db...");

mongoose.connect(process.env.MONGO_URL);
const ObjectId = mongoose.ObjectId;

const userSchema = new mongoose.Schema({
    email: {type: String, unique: true},
    password: String,
    firtName: String, 
    lastName: String
})

const adminSchema = new mongoose.Schema({
    email: {type: String, unique: true},
    password: String,
    firtName: String, 
    lastName: String
})

const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId
})

const purchaseSchema = new mongoose.Schema({
    courseId: ObjectId,
    userId: ObjectId
})

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}