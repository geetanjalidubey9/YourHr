const User = require('../models/user');
const bcrypt = require('bcryptjs');
const crypto = require('crypto-js');
const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });

// Use a static encryption key from your environment variables
const encryptionKey = process.env.JWT_SECRET;

console.log('Encryption Key:', encryptionKey);  // Debugging line  // Debugging line

exports.signup = async (req, res) => {
  const { firstName, lastName, email, password, phoneNumber, resumeUrl } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }
 // Hash the password
 const hashedPassword = await bcrypt.hash(password, 10);

 // Encrypt the resume URL
 const encryptedResumeUrl = crypto.AES.encrypt(resumeUrl, encryptionKey).toString();
    user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phoneNumber,
      resumeUrl: encryptedResumeUrl, 
    });

    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getUserDetails = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password'); 
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const bytes = crypto.AES.decrypt(user.resumeUrl, encryptionKey);
    const decryptedResumeUrl = bytes.toString(crypto.enc.Utf8);

    res.status(200).json({ ...user._doc, resumeUrl: decryptedResumeUrl });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
