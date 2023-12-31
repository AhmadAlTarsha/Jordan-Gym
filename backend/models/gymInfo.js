const mongoose = require("mongoose");
const comment = require("./comment");

const gymInfo = new mongoose.Schema({
    gymOwner:  { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    name: { type: String, required: true },
    location: { type: String },
    image:[ {type:String}],
    nameOfTriner:[ { type: String }],
    mempershipPrice:{ type: Object },
    facilities:[{ type: String }],
    numberOfMember:{type:Number},
    openingTime: [{type:Number}],
    ClosingDays:[{type:Object}],

    comment:  [{ type: mongoose.Schema.Types.ObjectId, ref: "review" }],
    Userlike:[{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],


});

module.exports = mongoose.model("gymInfo", gymInfo);
