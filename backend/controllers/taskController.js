const Task = require("../models/taskModel");

// Create a Task
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}
// Get all Tasks
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find()
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
};
// Get a Single Task
const getSingleTask = async (req, res) => {
    try {
        const { id } = req.params
        const singleTask = await Task.findById(id)
        if (!singleTask) {
            return res.status(404).json(`No Task Found with id: ${id}`)
        }
        res.status(200).json(singleTask)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

// Delete a Task 
const deleteTask = async (req, res) => {
    try {
        const { id } = req.params
        const deletingTask = await Task.findByIdAndDelete(id);
        if (!deletingTask) {
            return res.status(404).json(`No Task Found with id: ${id}`)
        }
        res.status(200).send('Task Deleted');
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}
// Update Task
const updateTask = async (req, res) => {
    try {
        const { id } = req.params
        const taskToUpdate = await Task.findByIdAndUpdate({ _id: id }, req.body, {
            new: true,
            runValidators: true
        }
        )
        if (!taskToUpdate) {
            return res.status(404).json(`No Task Found with ID: ${id}`)
        }
        res.status(200).json(taskToUpdate)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}
module.exports = {
    createTask,
    getTasks,
    getSingleTask,
    deleteTask,
    updateTask
}