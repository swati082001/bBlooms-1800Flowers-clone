const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const { CartModel } = require("../Model/cart.model");

const cartRouter = express.Router();


cartRouter.post("/add-to-cart", async(req, res)=>{
    try {
        const payload = req.body;
        const data = new CartModel(payload);
        const cartdata = await data.save();
        res.send(cartdata);
    } 
    catch(err){
        res.status(400).send({"msg":err.message});
    }
})


module.exports = {cartRouter};
