// backend/models/Task.js
import { Schema, model } from 'mongoose';

const taskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

export default model('Task', taskSchema);
