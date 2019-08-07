const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  azureId: String
});

mongoose.model("users", userSchema);
