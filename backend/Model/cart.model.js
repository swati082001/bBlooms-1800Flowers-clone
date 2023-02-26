const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    image:String,
    type:String,
    size:String,
    price:Number,
    company:String,
    user:String
})

const CartModel = mongoose.model("cart", cartSchema);

module.exports = {CartModel};