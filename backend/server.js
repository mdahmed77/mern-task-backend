const dotenv = require('dotenv').config();
const express = require('express');
const Mongoose = require('mongoose');
const taskRoutes = require('./routes/tasksRoute');
const cors = require('cors')
// const connectDB = require('./config/database');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: ["http://localhost:5000", "http://merntaskmaster.netlify.com"]
}));
app.use("/api/tasks", taskRoutes);

// Routes
app.get('/', (req, res) => {
    res.send('<h1>Crud Express Home</h1><a href="https://www.google.com/">Google</a>')
});


const PORT = process.env.PORT || 7000

const uri = process.env.MONGODB_URI;
Mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server Running on port ${PORT}`)
        });
    })
    .catch((err) => console.log(err))