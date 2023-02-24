const express = require("express");
const { BestflowerModel } = require("../../../Model/Products/Flowers/bestflower.model");




const bestflowerRouter = express.Router();

bestflowerRouter.get("/", async(req, res)=>{
    try {
        const data = await BestflowerModel.find();
        res.send(data)
    } 
    catch(err){
        res.send(err.message);
    }
})

bestflowerRouter.post("/add", async(req, res)=>{
    const payload = req.body;
    try {
        await BestflowerModel.insertMany(payload);
        res.send("Best flower has been added");
    } catch (err) {
        res.send(err.message);
    }
})


bestflowerRouter.patch("/update/:id", async (req, res) =>{
    try{
        const ID = req.params.id;
        const payload = req.body;
        await BestflowerModel.findByIdAndUpdate({_id:ID}, payload);
        res.send("User has been updated");
    }
    catch(err){
        res.send(err.message);
    }
})

bestflowerRouter.delete("/delete/:id", async (req, res) =>{
        try{
            const ID = req.params.id;
            await BestflowerModel.findByIdAndDelete({_id:ID});
            res.send("User has been deleted");
        }
        catch(err){
            res.send(err.message);
        }
    })

    bestflowerRouter.get("/delete", (req, res) =>{
        BestflowerModel.remove({size:"large"}, (err, data)=>{
            if(err) res.status(500).send(err);
            else res.status(200).send(data);
        });
})



module.exports = {bestflowerRouter}