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
const { adminuserRouter } = require("./Route/adminuser.route");


const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res)=>{
    res.send("Welcome to Home page");
})

app.use("/adminusers", adminuserRouter);
app.use("/users", userRouter);

app.use(authentication);

//best Selling Birthday Gift
app.use("/products/birthday", bestsellingRouter);

//birthday flower
app.use("/products/birthflower", birthflowerRouter);

//All flower
app.use("/products/allflower", allflowerRouter);

//All Sympathy
app.use("/products/allsympathy", allsympathyRouter);

//Birthday plants
app.use("/products/plantbirth", plantbirthRouter);

//best selling flowers
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