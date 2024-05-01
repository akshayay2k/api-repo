import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const collectionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  // Add more fields as needed
});

export default model('Collection', collectionSchema);
