// models/Doctor.js
const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  specialization: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  contactNumber: {
    type: String
  },
  experience: {
    type: Number
  },
  availableDays: {
    type: [String] // e.g., ['Monday', 'Wednesday']
  },
  availableTimeFrom: {
    type: String // e.g., "10:00 AM"
  },
  availableTimeTo: {
    type: String // e.g., "5:00 PM"
  },
  isApproved: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Doctor', doctorSchema);
