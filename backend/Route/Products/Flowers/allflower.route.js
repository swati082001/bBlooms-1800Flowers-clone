const express = require("express");
const { AllflowerModel } = require("../../../Model/Products/Flowers/allflower.model");



const allflowerRouter = express.Router();

allflowerRouter.get("/", async(req, res)=>{
    try {
        const data = await AllflowerModel.find();
        res.send(data)
    } 
    catch(err){
        res.send(err.message);
    }
})

allflowerRouter.post("/add", async(req, res)=>{
    const payload = req.body;
    try {
        await AllflowerModel.insertMany(payload);
        res.send("All flower has been added");
    } catch (err) {
        res.send(err.message);
    }
})


allflowerRouter.patch("/update/:id", async (req, res) =>{
    try{
        const ID = req.params.id;
        const payload = req.body;
        await AllflowerModel.findByIdAndUpdate({_id:ID}, payload);
        res.send("User has been updated");
    }
    catch(err){
        res.send(err.message);
    }
})

allflowerRouter.delete("/delete/:id", async (req, res) =>{
        try{
            const ID = req.params.id;
            await AllflowerModel.findByIdAndDelete({_id:ID});
            res.send("User has been deleted");
        }
        catch(err){
            res.send(err.message);
        }
    })

    allflowerRouter.get("/delete", (req, res) =>{
        AllflowerModel.remove({size:"large"}, (err, data)=>{
            if(err) res.status(500).send(err);
            else res.status(200).send(data);
        });
})



module.exports = {allflowerRouter}