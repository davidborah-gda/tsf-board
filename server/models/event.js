const mongoose = require('mongoose');
const Schema = mongoose.Schema; //is the schema class
const eventSchema = new Schema({
    email: {
      type: String,
      required: true,
      trim: true
    },
    title: {
        type: String,
        trim: false
      },
    date: {
      type: Date,
      require: false
    },
    count: {
        type: Number,
        required: false
    }
  });

const Event = mongoose.model('Event', eventSchema);

//Event in Green???

module.exports = Event;