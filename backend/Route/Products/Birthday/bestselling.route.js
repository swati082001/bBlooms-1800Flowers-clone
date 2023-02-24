const express = require("express");
const { BestsellingModel } = require("../../../Model/Products/Birthday/bestselling.model");

const bestsellingRouter = express.Router();

bestsellingRouter.get("/", async(req, res)=>{
    try {
        const data = await BestsellingModel.find();
        res.send(data)
    } 
    catch(err){
        res.send(err.message);
    }
})


bestsellingRouter.get("/get/:id", async(req, res)=>{
    const ID = req.params.id;
    try {
        const data = await BestsellingModel.findById({_id:ID})
        res.send(data)
    } 
    catch(err){
        res.send(err.message);
    }
})

bestsellingRouter.post("/add", async(req, res)=>{
    const payload = req.body;
    try {
        await BestsellingModel.insertMany(payload);
        res.send("Best Selling Birthday Gift has been added");
    } catch (err) {
        res.send(err.message);
    }
})


bestsellingRouter.patch("/update/:id", async (req, res) =>{
    try{
        const ID = req.params.id;
        const payload = req.body;
        const data = await BestsellingModel.findByIdAndUpdate({_id:ID}, payload);
        res.send(data);
    }
    catch(err){
        res.send(err.message);
    }
})

bestsellingRouter.delete("/delete/:id", async (req, res) =>{
        try{
            const ID = req.params.id;
            await BestsellingModel.findByIdAndDelete({_id:ID});
            res.send("User has been deleted");
        }
        catch(err){
            res.send(err.message);
        }
    })

    // bestsellingRouter.get("/delete", (req, res) =>{
    //         BestsellingModel.remove({size:"medium"}, (err, data)=>{
    //             if(err) res.status(500).send(err);
    //             else res.status(200).send(data);
    //         });
    // })





module.exports = {bestsellingRouter}