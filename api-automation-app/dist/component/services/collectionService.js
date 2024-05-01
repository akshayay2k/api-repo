"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// frontend/src/services/collectionService.js
const API_BASE_URL = 'http://localhost:5000/api'; // Update with your backend API URL

const collectionService = {
  getAllCollections: async () => {
    try {
      const response = await fetch("".concat(API_BASE_URL, "/collections"));
      if (!response.ok) {
        throw new Error('Failed to fetch collections');
      }
      return response.json();
    } catch (error) {
      console.error('Error fetching collections:', error);
      throw error;
    }
  }
  // Add more service methods for CRUD operations as needed
};
var _default = exports.default = collectionService;