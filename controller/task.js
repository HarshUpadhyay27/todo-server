const Task = require("../model/task");

const taskCtrl = {
  postTask: async (req, res) => {
    try {
      const { title, decrption } = req.body;
      if (!title || !decrption)
        return res.status(500).json({ msg: "please fill the all filed" });
      const task = new Task(req.body);
      const newTask = await task.save();
      return res.status(200).json({
        data: newTask,
        msg: "Task add sucessfully",
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  getTask: async (req, res) => {
    try {
      const allTask = await Task.find({});
      return res.status(200).json({ data: allTask });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  patchTask: async (req, res) => {
    try {
      const _id = req.params.id;
      const updateTask = await Task.findByIdAndUpdate(_id, req.body, {
        new: true,
      });
      return res
        .status(200)
        .json({ data: updateTask, msg: "Task update sucessfully" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  deleteTask: async (req, res) => {
    try {
      const _id = req.params.id;
      const deleteTask = await Task.findByIdAndDelete(_id);
      return res
        .status(200)
        .json({ data: deleteTask, msg: "Delete task sucessfully" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = taskCtrl;
