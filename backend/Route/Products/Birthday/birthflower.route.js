const express = require("express");
const { BirthflowerModel } = require("../../../Model/Products/Birthday/birthflower.model");


const birthflowerRouter = express.Router();

birthflowerRouter.get("/", async(req, res)=>{
    try {
        const data = await BirthflowerModel.find();
        res.send("Get all products")
    } 
    catch(err){
        res.send(err.message);
    }
})

birthflowerRouter.post("/add", async(req, res)=>{
    const payload = req.body;
    try {
        await BirthflowerModel.insertMany(payload);
        res.send("Birthday flower has been added");
    } catch (err) {
        res.send(err.message);
    }
})


birthflowerRouter.patch("/update/:id", async (req, res) =>{
    try{
        const ID = req.params.id;
        const payload = req.body;
        await BirthflowerModel.findByIdAndUpdate({_id:ID}, payload);
        res.send("User has been updated");
    }
    catch(err){
        res.send(err.message);
    }
})

birthflowerRouter.delete("/delete/:id", async (req, res) =>{
        try{
            const ID = req.params.id;
            await BirthflowerModel.findByIdAndDelete({_id:ID});
            res.send("User has been deleted");
        }
        catch(err){
            res.send(err.message);
        }
    })





module.exports = {birthflowerRouter}