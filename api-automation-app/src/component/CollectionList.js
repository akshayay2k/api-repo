// components/CollectionList.js
import React from 'react';

const CollectionList = ({ collections }) => {
  return (
    <div>
      <h2>Collections</h2>
      <ul>
        {collections.map(collection => (
          <li key={collection.id}>{collection.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CollectionList;
