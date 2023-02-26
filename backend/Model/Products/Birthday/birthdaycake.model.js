const mongoose = require("mongoose");

const birthdaycakeSchema = mongoose.Schema({
    image:String,
    type:String,
    size:String,
    price:Number,
    company:String,
    user:String
});

const BirthdaycakeModel = mongoose.model("birthdaycake", birthdaycakeSchema);

module.exports = {BirthdaycakeModel};