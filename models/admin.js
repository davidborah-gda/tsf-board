const mongoose = require('mongoose');
const Schema = mongoose.Schema; //is the schema class
const adminEventSchema = new Schema({
    eventTitle: {
        type: String,
        trim: false
      },
    date: {
      type: Date,
      require: false
    },
    time: {
        hours: Number,
        minutes: Number,
        seconds: Number,
        required: false
    }
  });

const adminEvent = mongoose.model('adminEvent', AdminEventSchema);

//Correct below???

module.exports = adminEvent;