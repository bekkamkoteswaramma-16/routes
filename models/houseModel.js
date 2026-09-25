const mongoose = require('mongoose');

const houseSchema = new mongoose.Schema({
  title: { type: String, required: true }, 
  description: String,
  rent: { type: Number, required: true },
  location: { type: String, required: true }, // "Amaravati, AP"
  image: String, // image URL
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  ownerName: String,
  ownerPhone: String
}, { timestamps: true });
 
module.exports = mongoose.model('House', houseSchema);
