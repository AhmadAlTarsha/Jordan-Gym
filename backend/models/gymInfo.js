const mongoose = require("mongoose");
const comment = require("./comment");

const gymInfo = new mongoose.Schema({
    gymOwner:  { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    name: { type: String, required: true },
    location: { type: String },
    image: {type:String},
    nameOfTriner: [{ type: String }],
    mempershipPrice: [{ type: String }],
    facilities: [{ type: String }],
    comment:  [{ type: mongoose.Schema.Types.ObjectId, ref: "review" }],

});

module.exports = mongoose.model("gymInfo", gymInfo);
