// src/routes/collectionRoutes.js
import express from 'express';
import  collectionController from '../controllers/collectionController.js';

const router = express.Router();

// Routes for collections
router.get('/', collectionController.getAllCollections);
router.post('/', collectionController.createCollection);
// Add more routes as needed

export default router;
