const express = require("express");
const {connection} = require("./configs/db");
const {userRouter} = require("./Route/user.route");
const {bestsellingRouter} = require("./Route/Products/Birthday/bestselling.route");
const { authentication } = require("./Middleware/authenticate.middleware");
const { birthflowerRouter } = require("./Route/Products/Birthday/birthflower.route");
const { allflowerRouter } = require("./Route/Products/Flowers/allflower.route");
const { allsympathyRouter } = require("./Route/Products/Sympathy/allsympathy.route");
const { plantbirthRouter } = require("./Route/Products/Birthday/plantbirth.route");
const { bestflowerRouter } = require("./Route/Products/Flowers/bestflower.route");
require("dotenv").config();
const cors = require("cors");


const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res)=>{
    res.send("Welcome to Home page");
})


app.use("/users", userRouter);
// app.use(authentication);
app.use("/products/birthday", bestsellingRouter);
app.use("/products/birthflower", birthflowerRouter);
app.use("/products/allflower", allflowerRouter);
app.use("/products/allsympathy", allsympathyRouter);
app.use("/products/plantbirth", plantbirthRouter);
app.use("/products/bestflower", bestflowerRouter);


app.listen(process.env.port, async()=>{
    try {
        await connection;
        console.log("Connected to DB");
    } catch (err) {
        console.log(err);
    }
    console.log(`Server is running on Port ${process.env.port}`);
})