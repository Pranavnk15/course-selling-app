const express = require("express");
const { userRouter } = require("./routes/user")
const { courseRouter } = require("./routes/course")
const { adminRouter } = require("./routes/admin")
const app = express();



//express routing, helps in stucturing, routes are clearly mentioned at top level file
app.use("/user", userRouter); //all the routes starting with /user is handle by userRouter
app.use("/course", courseRouter);
app.use("/admin", adminRouter);


app.listen(3000, () => {
    console.log("Server started at port 3000");
})
