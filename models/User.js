const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({ 
   createdAt:{
  type: Date,
  default: Date.now
  },
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  }
});
module.exports = User = mongoose.model("users", UserSchema);