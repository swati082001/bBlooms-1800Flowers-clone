const express = require("express");
const { UserModel } = require("../Model/User.model");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

const userRouter = express.Router();


userRouter.post("/register", async(req, res)=>{
    const {name, email, password, city} = req.body;
    try {
      const data = await UserModel.find({email});
      if(data.length>0){
           res.send("User already Registered");
      }  
      else{
        bcrypt.hash(password, 7, async(err, hash)=>{
            if(err) res.send("Wrong Credentials");
            else{
                const user = new UserModel({name, email, password:hash, city});
                await user.save();
                res.send(user);
            }
        });
      }
    } 
    catch(err){
        res.send(err);
    }
})


userRouter.get("/", async(req, res)=>{
    try {
       const data = await UserModel.find() 
       res.send(data);
    }
    catch(err){
       res.send(err.message); 
    }
})

userRouter.post("/login", async(req, res)=>{
    const {email,password}=req.body;
    try {
        const data = await UserModel.find({email});
        if(data.length>0){
            bcrypt.compare(password, data[0].password, function(err, result) {
                if(result){
                    const token = jwt.sign({ "product": "flowers"}, 'bblooms');
                    res.send({"msg":"Logon Successful", "token":token});
                }
                else{
                    res.send("Something went Wrong");
                }
            });
           
        }
        else{
            res.send("Wrong Credentials");
        }
    } 
    catch(err){
        res.send(err);
    }
})


// userRouter.patch("/update/:id", async (req, res) =>{
//     try{
//         const ID = req.params.id;
//         const payload = req.body;
//         await UserModel.findByIdAndUpdate({_id:ID}, payload);
//         res.send("User has been updated");
//     }
//     catch(err){
//         res.send(err.message);
//     }
// })

// userRouter.delete("/delete/:id", async (req, res) =>{
//     try{
//         const ID = req.params.id;
//         await UserModel.findByIdAndDelete({_id:ID});
//         res.send("User has been deleted");
//     }
//     catch(err){
//         res.send(err.message);
//     }
// })

module.exports = {userRouter};