const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'partner'],
    required: true,
  },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  ratings: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('User', userSchema);
