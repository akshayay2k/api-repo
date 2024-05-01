import Collection from '../models/Collection.js';

const collectionService = {
  getAllCollections: async () => {
    try {
      const collections = await Collection.find();
      return collections;
    } catch (error) {
      console.error('Error fetching collections:', error);
      throw error;
    }
  },

  createCollection: async (name) => {
    try {
      const newCollection = new Collection({ name });
      await newCollection.save();
      return newCollection;
    } catch (error) {
      console.error('Error creating collection:', error);
      throw error;
    }
  },

  // Add more service methods for other CRUD operations as needed
};

export default collectionService;
