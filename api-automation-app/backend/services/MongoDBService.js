import { connect as _connect, disconnect as _disconnect } from 'mongoose';

const MongoDBService = {
  connect: async () => {
    try {
      // Connect to MongoDB Atlas cluster
      await _connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      });
      console.log('Connected to MongoDB Atlas');
    } catch (error) {
      console.error('Error connecting to MongoDB Atlas:', error.message);
      throw error;
    }
  },

  disconnect: async () => {
    try {
      // Disconnect from MongoDB Atlas
      await _disconnect();
      console.log('Disconnected from MongoDB Atlas');
    } catch (error) {
      console.error('Error disconnecting from MongoDB Atlas:', error.message);
      throw error;
    }
  }
};

export default MongoDBService;
