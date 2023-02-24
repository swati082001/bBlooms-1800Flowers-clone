const express = require("express");
const { PlantbirthModel } = require("../../../Model/Products/Birthday/plantbirth.model");




const plantbirthRouter = express.Router();

plantbirthRouter.get("/", async(req, res)=>{
    try {
        const data = await PlantbirthModel.find();
        res.send(data)
    } 
    catch(err){
        res.send(err.message);
    }
})

plantbirthRouter.post("/add", async(req, res)=>{
    const payload = req.body;
    try {
        await PlantbirthModel.insertMany(payload);
        res.send("Birthday plants has been added");
    } catch (err) {
        res.send(err.message);
    }
})


plantbirthRouter.patch("/update/:id", async (req, res) =>{
    try{
        const ID = req.params.id;
        const payload = req.body;
        await PlantbirthModel.findByIdAndUpdate({_id:ID}, payload);
        res.send("User has been updated");
    }
    catch(err){
        res.send(err.message);
    }
})

plantbirthRouter.delete("/delete/:id", async (req, res) =>{
        try{
            const ID = req.params.id;
            await PlantbirthModel.findByIdAndDelete({_id:ID});
            res.send("User has been deleted");
        }
        catch(err){
            res.send(err.message);
        }
    })

    plantbirthRouter.get("/delete", (req, res) =>{
        PlantbirthModel.remove({size:"small"}, (err, data)=>{
            if(err) res.status(500).send(err);
            else res.status(200).send(data);
        });
    })



module.exports = {plantbirthRouter}