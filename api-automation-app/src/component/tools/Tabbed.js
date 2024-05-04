import React from 'react';

const Tabbed = ({ activeTab, handleTabClick, tabs }) => {
  return (
    <div>
      <ul className="nav nav-tabs">
        {tabs.map((tab, index) => (
          <li key={index} className="nav-item">
            <a className={`nav-link ${activeTab === tab.id ? 'active' : ''}`} data-bs-toggle="tab" href={`#${tab.id}`} onClick={() => handleTabClick(tab.id)}>{tab.label}</a>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {tabs.map((tab, index) => (
          <div key={index} className={`tab-pane fade ${activeTab === tab.id ? 'show active' : ''}`} id={tab.id}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabbed;
