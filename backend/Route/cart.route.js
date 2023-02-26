const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const { CartModel } = require("../Model/cart.model");

const cartRouter = express.Router();


cartRouter.get("/", async(req, res)=>{
    try {
        const data = await CartModel.find();
        res.send(data)
    } 
    catch(err){
        res.status(400).send({"msg":err.message});
    }
})


cartRouter.get("/get/:id", async(req, res)=>{
    const ID = req.params.id;
    try {
        const data = await CartModel.findById({_id:ID})
        res.send(data)
    } 
    catch(err){
        res.status(400).send({"msg":err.message});
    }
})


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


cartRouter.delete("/delete/:id", async (req, res) =>{
    try{
        const ID = req.params.id;
        await CartModel.findByIdAndDelete({_id:ID});
        res.send({"msg":"Product has been deleted"});
    }
    catch(err){
        res.status(400).send({"msg":err.message});
    }
})


module.exports = {cartRouter};
