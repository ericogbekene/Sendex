const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'in progress', 'completed'],
    default: 'pending',
  },
  partner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Order', orderSchema);