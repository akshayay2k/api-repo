// backend/services/__tests__/collectionService.test.js

import sinon from 'sinon';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import collectionService from '../collectionService.js';
import Collection from '../../models/Collection.js';

chai.use(chaiAsPromised);
const { expect } = chai;

describe('Collection Service', () => {
  describe('getAllCollections', () => {
    it('should return mock collections', async () => {
      // Mock the Collection.find() method to return dummy collections
      sinon.stub(Collection, 'find').resolves([{ name: 'Collection 1' }, { name: 'Collection 2' }]);

      // Call the getAllCollections function
      const collections = await collectionService.getAllCollections();

      // Assertions
      expect(collections).to.deep.equal([{ name: 'Collection 1' }, { name: 'Collection 2' }]);

      // Restore the stub
      Collection.find.restore();
    });

    it('should throw an error if Collection.find() fails', async () => {
      // Mock the Collection.find() method to throw an error
      sinon.stub(Collection, 'find').rejects(new Error('Database error'));

      // Call the getAllCollections function and expect it to throw an error
      await expect(collectionService.getAllCollections()).to.eventually.be.rejectedWith('Database error');

      // Restore the stub
      Collection.find.restore();
    });
  });

  // Add more test cases for other service methods...
});
