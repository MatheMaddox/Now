const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  task: { type: String, required: true },
  dueDate: { type: String, required: true },
});

module.exports = mongoose.model('Task', TaskSchema);
