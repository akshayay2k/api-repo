// mongodbService.test.js

// Import the MongoDB service
import MongoDBService from '../MongoDBService.js';
// Named import
import reporters from '../../../reporters.js';

// Default import



describe('MongoDBService', () => {
  beforeAll(async () => {
    // Connect to MongoDB before running tests
    await MongoDBService.connect();
  });

  afterAll(async () => {
    // Disconnect from MongoDB after running tests
    await MongoDBService.disconnect();
  });

  it('should connect to MongoDB', () => {
    // Ensure that MongoDB is connected
    expect(MongoDBService.connect()).toBe(true);
  });

  it('should disconnect from MongoDB', () => {
    // Ensure that MongoDB is disconnected
    expect(MongoDBService.disconnect()).toBe(true);
  });
});
