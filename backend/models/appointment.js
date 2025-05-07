// models/Appointment.js
const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true,
    trim: true
  },
  patientEmail: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  doctorName: {
    type: String,
    required: true,
    trim: true
  },
  appointmentDate: {
    type: Date,
    required: true
  },
  reason: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['Scheduled', 'Completed', 'Cancelled'],
    default: 'Scheduled'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Appointment', appointmentSchema);
