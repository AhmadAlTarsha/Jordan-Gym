const mongoose = require("mongoose");

const gymInfo = new mongoose.Schema({
    gymOwner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    name: { type: String, required: true },
    location: { type: String },
    image: {type:String},
    nameOfTriner: [{ type: String }],
    mempershipPrice: [{ type: Array, "default": [] }],
    facilities: [{ type: String }]


});

module.exports = mongoose.model("gymInfo", gymInfo);
