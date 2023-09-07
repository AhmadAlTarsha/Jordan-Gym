const mongoose = require("mongoose");
const comment = require("./comment");

const gymInfo = new mongoose.Schema({
    gymOwner:  { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    name: { type: String, required: true },
    location: { type: String },
    image:[ {type:String}],
    nameOfTriner:[ { type: String }],
    mempershipPrice:[ { type: Object }],
    facilities:[{ type: String }],
    numberOfMember:{type:Number},
    branches:{type:String}, 
    openingTime: [{type:Number}],
    comment:  [{ type: mongoose.Schema.Types.ObjectId, ref: "review" }],
    Userlike:[{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],


});

module.exports = mongoose.model("gymInfo", gymInfo);
