const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StarSchema = new Schema({
  count: { type: Number, required: true, default: 0 },
});

module.exports = mongoose.model('Star', StarSchema);
