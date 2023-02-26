const express = require("express");
const { AdminuserModel } = require("../Model/Adminuser.model");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');


const adminuserRouter = express.Router();


adminuserRouter.post("/register", async(req, res)=>{
    const {name, email, password, state} = req.body;
    try {
      const data = await AdminuserModel.find({email});
      if(data.length>0){
           res.send({"msg":"User already Registered"});
      }  
      else{
        bcrypt.hash(password, 7, async(err, hash)=>{
            if(err) res.send("Wrong Credentials");
            else{
                const user = new AdminuserModel({name, email, password:hash, state});
                await user.save();
                res.send(user);
            }
        });
      }
    } 
    catch(err){
        res.status(400).send({"msg":err.message});
    }
})


adminuserRouter.get("/", async(req, res)=>{
    try {
       const data = await AdminuserModel.find() 
       res.send(data);
    }
    catch(err){
       res.status(400).send({"msg":err.message}); 
    }
})

adminuserRouter.post("/login", async(req, res)=>{
    const {email,password}=req.body;
    try {
        const data = await AdminuserModel.find({email});
        if(data.length>0){
            bcrypt.compare(password, data[0].password, function(err, result) {
                if(result){
                    const token = jwt.sign({ userID: data[0]._id}, 'bblooms');
                    res.send({"msg":"Logon Successful", "token":token, "currentUser":data[0]});
                }
                else{
                    res.send({"msg":"Something went Wrong"});
                }
            });
           
        }
        else{
            res.send({"msg":"Wrong Credentials"});
        }
    } 
    catch(err){
        res.status(400).send({"msg":err.message});
    }
})


adminuserRouter.patch("/update/:id", async (req, res) =>{
    try{
        const ID = req.params.id;
        const payload = req.body;
        await AdminuserModel.findByIdAndUpdate({_id:ID}, payload);
        res.send("User has been updated");
    }
    catch(err){
        res.status(400).send({"msg":err.message});
    }
})

adminuserRouter.delete("/delete/:id", async (req, res) =>{
    try{
        const ID = req.params.id;
        await AdminuserModel.findByIdAndDelete({_id:ID});
        res.send({"msg":"User has been deleted"});
    }
    catch(err){
        res.status(400).send({"msg":err.message});
    }
})

module.exports = {adminuserRouter};