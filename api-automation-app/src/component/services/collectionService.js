const API_BASE_URL = 'http://localhost:5000/api'; // Update with your backend API URL

const collectionService = {
  getAllCollections: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/collections`);
      if (!response.ok) {
        throw new Error('Failed to fetch collections');
      }
      return response.json();
    } catch (error) {
      console.error('Error fetching collections:', error);
      throw error;
    }
  },
  // Add more service methods for CRUD operations as needed
};

export default collectionService;
