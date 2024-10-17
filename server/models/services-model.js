const mongoose = require("mongoose");

// Define the service schema
const serviceSchema = new mongoose.Schema({
  service: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: String,  // You can change this to Number if price is always numeric.
    required: true,
    trim: true
  },
  provider: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true  // Automatically adds createdAt and updatedAt fields
});

// Create the Service model from the schema
const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
