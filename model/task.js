const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  decrption: {
    type: String,
    required: true,
    trim: true,
  },
});

const Task = mongoose.model("task", taskSchema);
module.exports = Task;