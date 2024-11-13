const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  username: {
    type: String,
    // required: true,
    trim: true,
    lowercase: true
  },
  email: {
    type: String,
    // required: true,
    trim: true,
    lowercase: true
  },
  message: {
    type: String,
    // required: true
  },
  imagePath: {
    type: String, // Can be a URL or path to the image file
    required: false // Not required if image upload is optional
  },
  createdAt: {
    type: Date,
    default: Date.now // Automatically set the date of complaint submission
  }
});

const Complaint = mongoose.model('Complain', complaintSchema);

module.exports = Complaint;
