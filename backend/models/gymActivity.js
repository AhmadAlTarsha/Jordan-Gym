const mongoose = require("mongoose");

const gymActivitySchema = new mongoose.Schema({
  gymName: { type: mongoose.Schema.Types.ObjectId, ref: "gymInfo" },
  action: { type: String, required: true },
  participants :{ type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("gymActivity", gymActivitySchema);
