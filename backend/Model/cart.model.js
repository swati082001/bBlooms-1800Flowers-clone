const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    product_id:{type:String, trim:true},
    price:{type:Number, required:true},
    user_id:{type:String, trim:true}
})

const CartModel = mongoose.model("cart", cartSchema);

module.exports = {CartModel};