const mongoose = require("mongoose");

const bestsellingSchema = mongoose.Schema({
    image:String,
    type:String,
    size:String,
    price:Number,
    company:String,
    user:String
});

const BestsellingModel = mongoose.model("birthday", bestsellingSchema);

module.exports = {BestsellingModel};