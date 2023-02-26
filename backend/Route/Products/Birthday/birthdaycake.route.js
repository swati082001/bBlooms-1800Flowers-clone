const express = require("express");
const { BirthdaycakeModel } = require("../../../Model/Products/Birthday/birthdaycake.model");


const birthdaycakeRouter = express.Router();

birthdaycakeRouter.get("/", async(req, res)=>{
    try {
        const data = await BirthdaycakeModel.find();
        res.send(data)
    } 
    catch(err){
        res.send(err.message);
    }
})


birthdaycakeRouter.get("/get/:id", async(req, res)=>{
    const ID = req.params.id;
    try {
        const data = await BirthdaycakeModel.findById({_id:ID})
        res.send(data)
    } 
    catch(err){
        res.send(err.message);
    }
})

birthdaycakeRouter.post("/add", async(req, res)=>{
    const payload = req.body;
    try {
        await BirthdaycakeModel.insertMany(payload);
        res.send("Best Selling Birthday Gift has been added");
    } catch (err) {
        res.send(err.message);
    }
})


birthdaycakeRouter.patch("/update/:id", async (req, res) =>{
    try{
        const ID = req.params.id;
        const payload = req.body;
        const data = await BirthdaycakeModel.findByIdAndUpdate({_id:ID}, payload);
        res.send(data);
    }
    catch(err){
        res.send(err.message);
    }
})

birthdaycakeRouter.delete("/delete/:id", async (req, res) =>{
        try{
            const ID = req.params.id;
            await BirthdaycakeModel.findByIdAndDelete({_id:ID});
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





module.exports = {birthdaycakeRouter}