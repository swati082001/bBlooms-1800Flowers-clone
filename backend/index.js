const express = require("express");
const {connection} = require("./configs/db");
const {userRouter} = require("./Route/user.route");
const {bestsellingRouter} = require("./Route/Products/Birthday/bestselling.route");
const { authentication } = require("./Middleware/authenticate.middleware");
const { birthflowerRouter } = require("./Route/Products/Birthday/birthflower.route");
const { allflowerRouter } = require("./Route/Products/Flowers/allflower.route");
require("dotenv").config();


const app = express();
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Welcome to Home page");
})


app.use("/users", userRouter);
// app.use(authentication);
app.use("/products/birthday", bestsellingRouter);
app.use("/products/birthflower", birthflowerRouter);
app.use("/products/allflower", allflowerRouter)


app.listen(process.env.port, async()=>{
    try {
        await connection;
        console.log("Connected to DB");
    } catch (err) {
        console.log(err);
    }
    console.log(`Server is running on Port ${process.env.port}`);
})