const mongoose = require("mongoose");

const plantbirthSchema = mongoose.Schema({
    image:{type:String, required:true},
    type:{type:String, required:true},
    size:{type:String, required:true},
    price:{type:Number, required:true},
    company:{type:String, required:true},
    user:String
});

const PlantbirthModel = mongoose.model("plantbirth", plantbirthSchema);

module.exports = {PlantbirthModel};