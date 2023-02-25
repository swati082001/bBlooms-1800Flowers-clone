const mongoose = require("mongoose");

const adminuserSchema = mongoose.Schema({
    name:{type:String, trim:true},
    email:{type:String, required:true, trim:true},
    password:{type:String, required:true, trim:true},
    state:{type:String, trim:true}
})

const AdminuserModel = mongoose.model("adminuser", adminuserSchema);

module.exports = {AdminuserModel};