import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import http from 'http';
import mongoose from 'mongoose';
import TaskuserDB from './models/Tasks.js';
import tasksRouter from './routes/tasks.js';
// Load environment variables
dotenv.config();

// Create an Express app
const app = express();

// Create an HTTP server instance
const server = http.createServer(app);

// MongoDB connection details
//const { MONGODB_USERNAME, MONGODB_PASSWORD, MONGODB_CLUSTER, MONGODB_DATABASE } = process.env;
//const mongoURI = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@${MONGODB_CLUSTER}/${MONGODB_DATABASE}?retryWrites=true&w=majority`;

// Connect to MongoDB Atlas
mongoose.connect("mongodb+srv://testuser:StF9AcSpkXXnRGtN@cluster0.ykc091i.mongodb.net/")
.then(() => {
  console.log('Connected to MongoDB Atlas');
})
.catch((err) => {
  console.error('MongoDB Atlas connection error:', err); 
});

// Middleware
app.use(cors());
app.use(express.json());
//app.use('/tasks', tasksRouter);

//Routes
app.use('/tasks', tasksRouter); // Use tasksRouter for '/tasks' endpoints

// Example route to create and save a task
app.post('/tasks', async (req, res) => {
  try {
    // Create a new task object based on request body
    const newTask = new Task({
      title: req.body.title,
      description: req.body.description
    });

    // Save the task to the database
    const savedTask = await newTask.save();

    // Respond with the saved task
    res.status(201).json(savedTask);
  } catch (err) {
    console.error('Error creating task:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});
//const taskuserDB= require('./models/Tasks.js');

// Start server
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
