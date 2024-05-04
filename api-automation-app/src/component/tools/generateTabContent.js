const generateTabContent = (tabs, activeTab, handleTabClick) => {
    return (
      <>
        <ul className="nav nav-tabs">
          {tabs.map(tab => (
            <li key={tab.id} className="nav-item">
              <a className={`nav-link ${activeTab === `#${tab.id}` ? 'active' : ''}`} href={`#${tab.id}`} onClick={() => handleTabClick(`#${tab.id}`)}>{tab.label}</a>
            </li>
          ))}
        </ul>
        <div className="tab-content">
          {tabs.map(tab => (
            <div key={tab.id} className={`tab-pane fade ${activeTab === `#${tab.id}` ? 'show active' : ''}`} id={tab.id}>
              {tab.content}
            </div>
          ))}
        </div>
      </>
    );
  };

  export default generateTabContent;
  