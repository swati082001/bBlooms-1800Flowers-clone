const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const { CheckoutModel } = require("../Model/checkout.model");


const checkoutRouter = express.Router();


checkoutRouter.get("/", async(req, res)=>{
    try {
        const data = await CheckoutModel.find();
        res.send(data)
    } 
    catch(err){
        res.status(400).send({"msg":err.message});
    }
})


checkoutRouter.get("/get/:id", async(req, res)=>{
    const ID = req.params.id;
    try {
        const data = await CheckoutModel.findById({_id:ID})
        res.send(data)
    } 
    catch(err){
        res.status(400).send({"msg":err.message});
    }
})


checkoutRouter.post("/add", async(req, res)=>{
    try {
        const payload = req.body;
        const data = new CheckoutModel(payload);
        const checkoutdata = await data.save();
        res.send(checkoutdata);
    } 
    catch(err){
        res.status(400).send({"msg":err.message});
    }
})


module.exports = {checkoutRouter};
