const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{type:String, trim:true},
    email:{type:String, required:true, trim:true},
    password:{type:String, required:true, trim:true},
    city:{type:String, trim:true}
})

const UserModel = mongoose.model("user", userSchema);

module.exports = {UserModel};