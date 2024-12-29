const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const { userRouter } = require("./routes/user")
const { courseRouter } = require("./routes/course")
const { adminRouter } = require("./routes/admin")
const app = express();

app.use(express.json());



//express routing, helps in stucturing, routes are clearly mentioned at top level file
app.use("/user", userRouter); //all the routes starting with /user is handle by userRouter
app.use("/course", courseRouter);
app.use("/admin", adminRouter);









//we have shifted this mongoose connect from the db file to index
//because if the backend fails to connect the db then no use.
//we will know here if the db is connected or not.
async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(3000, () => {
        console.log("Server started at port 3000");
    })
}

main();

