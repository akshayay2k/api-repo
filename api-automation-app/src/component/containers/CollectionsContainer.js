// containers/CollectionsContainer.js
import React, { useState, useEffect } from 'react';
import CollectionService from '../../component/services/collectionService.js';
import CollectionList from '../../component/CollectionList.js';

const CollectionsContainer = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      const data = await CollectionService.getAllCollections();
      setCollections(data);
    };
    fetchCollections();
  }, []);

  return <CollectionList collections={collections} />;
};

export default CollectionsContainer;
