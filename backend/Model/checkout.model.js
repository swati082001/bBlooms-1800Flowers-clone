const mongoose = require("mongoose");

const checkoutSchema = mongoose.Schema({
    first:{type:String, trim:true, required:true},
    last:{type:String, trim:true, required:true},
    location:{type:String, trim:true, required:true},
    address:{type:String, trim:true, required:true},
    zip:{type:String, trim:true, required:true},
    city:{type:String, trim:true, required:true},
    state:{type:String, trim:true, required:true},
    country:{type:String, trim:true, required:true}
})

const CheckoutModel = mongoose.model("checkout", checkoutSchema);

module.exports = {CheckoutModel};