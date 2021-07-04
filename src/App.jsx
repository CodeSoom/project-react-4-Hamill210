import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [appName, setAppName] = useState(null);

  useEffect(() => {
    fetch('api/group')
      .then((res) => res.json())
      .then((data) => setAppName(data.appName));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {appName ? `Hello ${appName}` : 'Hello World'}
      </header>
    </div>
  );
}

export default App;
