const mongoose = require('mongoose');

// Database Schema (Data Format Structure)
const taskSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please add a task"],
        },
        description: {
            type: String,
            required: false
        },
        completed: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    {
        timestamps: true
    }
);

// Schema should always be inside a model

const Task = mongoose.model('Task', taskSchema)

module.exports = Task