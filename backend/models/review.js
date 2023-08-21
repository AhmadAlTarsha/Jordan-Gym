const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  commenter: { type:String},
  // theGym: { type: mongoose.Schema.Types.ObjectId, ref: "gymInfo" },
  // comment : { type: String, required: true },
});

module.exports = mongoose.model("review", reviewSchema);
