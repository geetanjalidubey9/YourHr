const mongoose = require('mongoose');

//schema for the user
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  resumeUrl: {
 type :String,
require:true

  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


const User = mongoose.model('User', UserSchema);
module.exports = User;
