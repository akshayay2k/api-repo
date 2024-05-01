import Collection from '../models/Collection.js';

const collectionController = {
  getAllCollections: async (req, res) => {
    try {
      const collections = await Collection.find();
      res.json(collections);
    } catch (error) {
      console.error('Error fetching collections:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  createCollection: async (req, res) => {
    try {
      const { name } = req.body;
      const newCollection = await Collection.create({ name });
      res.status(201).json(newCollection);
    } catch (error) {
      console.error('Error creating collection:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  
  // Add more controller methods for other CRUD operations as needed
};

export default collectionController;
