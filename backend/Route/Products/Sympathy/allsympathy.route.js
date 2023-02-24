const express = require("express");
const { AllsympathyModel } = require("../../../Model/Products/Sympathy/allsympathy.model");



const allsympathyRouter = express.Router();

allsympathyRouter.get("/", async(req, res)=>{
    try {
        const data = await AllsympathyModel.find();
        res.send(data)
    } 
    catch(err){
        res.send(err.message);
    }
})

allsympathyRouter.post("/add", async(req, res)=>{
    const payload = req.body;
    try {
        await AllsympathyModel.insertMany(payload);
        res.send("All sympathy has been added");
    } catch (err) {
        res.send(err.message);
    }
})


allsympathyRouter.patch("/update/:id", async (req, res) =>{
    try{
        const ID = req.params.id;
        const payload = req.body;
        await AllsympathyModel.findByIdAndUpdate({_id:ID}, payload);
        res.send("User has been updated");
    }
    catch(err){
        res.send(err.message);
    }
})

allsympathyRouter.delete("/delete/:id", async (req, res) =>{
        try{
            const ID = req.params.id;
            await AllsympathyModel.findByIdAndDelete({_id:ID});
            res.send("User has been deleted");
        }
        catch(err){
            res.send(err.message);
        }
    })

    allsympathyRouter.get("/delete", (req, res) =>{
            AllsympathyModel.remove({size:"large"}, (err, data)=>{
            if(err) res.status(500).send(err);
            else res.status(200).send(data);
        });
})



module.exports = {allsympathyRouter}