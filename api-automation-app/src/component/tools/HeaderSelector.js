import React, { useState } from 'react';

const HeaderSelector = ({ headers, setHeaders }) => {
  const handleHeaderChange = (key, value) => {
    setHeaders({ ...headers, [key]: value });
  };

  return (
    <div>
      <h3>Headers:</h3>
      <div>
        <label htmlFor="Content-Type">Content-Type:</label>
        <input
          type="text"
          id="Content-Type"
          value={headers['Content-Type']}
          onChange={(e) => handleHeaderChange('Content-Type', e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="Authorization">Authorization:</label>
        <select
          id="Authorization"
          value={headers['Authorization']}
          onChange={(e) => handleHeaderChange('Authorization', e.target.value)}
        >
          <option value="None">None</option>
          <option value="Basic">Basic</option>
          <option value="Bearer">Bearer</option>
        </select>
      </div>
      {headers['Authorization'] === 'Basic' && (
        <div>
          <label htmlFor="Username">Username:</label>
          <input
            type="text"
            id="Username"
            value={headers['Username']}
            onChange={(e) => handleHeaderChange('Username', e.target.value)}
          />
          <label htmlFor="Password">Password:</label>
          <input
            type="password"
            id="Password"
            value={headers['Password']}
            onChange={(e) => handleHeaderChange('Password', e.target.value)}
          />
        </div>
      )}
    </div>
  );
};

export default HeaderSelector;
