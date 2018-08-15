const mongoose = require('mongoose');
const Schema = mongoose.Schema; //is the schema class
const userSchema = new Schema({
    email: {
      type: String,
      required: true,
      trim: true
    },
    name: {
        type: String,
        trim: false
      },
    preferences: {
      type: String,
      require: false
    },
    otherSuccess: {
        type: String,
        required: false,
        default: "Other Success"
    }
  });

const User = mongoose.model('User', userSchema);

module.exports = User;