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
    match: [/.+@.+\..+/, 'Please enter a valid email address'],
  },
  password: {
    type: String,
    required: true,
    minlength: 8, 
    validate: {
      validator: function(value) {

        return /^(?=.*[a-zA-Z])(?=.*\d).+$/.test(value);
      },
      message: 'Password must include both letters and numbers',
    },
  },
  phoneNumber: {
    type: String,
    required: true,
    validate: {
      validator: function(value) {
    
        return /^[0-9]{10}$/.test(value);
      },
      message: 'Phone number must be a 10-digit number',
    },
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
