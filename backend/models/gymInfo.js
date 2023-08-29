const mongoose = require("mongoose");

const gymInfo = new mongoose.Schema({
    gymOwner: { type:String },
    name: { type: String, required: true },
    location: { type: String },
    image: {type:String},
    nameOfTriner: [{ type: String }],
    mempershipPrice: [{ type: String }],
    facilities: [{ type: String }]


});

module.exports = mongoose.model("gymInfo", gymInfo);
