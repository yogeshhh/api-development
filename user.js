const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: String,
        email: String,                          //schema
        phno: Number,
        userType: String,
    }
);

const userModel = mongoose.model("User", userSchema);           //collection

module.exports = userModel;