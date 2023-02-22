const express = require("express");
const {connection} = require("./configs/db");
const {userRouter} = require("./Route/user.route");
require("dotenv").config();


const app = express();
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Welcome to Home page");
})


app.use("/users", userRouter);


app.listen(process.env.port, async()=>{
    try {
        await connection;
        console.log("Connected to DB");
    } catch (err) {
        console.log(err);
    }
    console.log(`Server is running on Port ${process.env.port}`);
})