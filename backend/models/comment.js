const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
 // gym:{ type: mongoose.Schema.Types.ObjectId,ref:"gymInfo"},
  commenter: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  
  comment : { type: String, required: true },
});

module.exports = mongoose.model("review",reviewSchema);
