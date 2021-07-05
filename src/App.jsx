import React, { useState } from 'react';

function App() {
  const [userName, setUserName] = useState('');

  const handleChangeText = (value) => {
    setUserName(value);
  };

  return (
    <>
      <h2>SOOM.GG</h2>
      <input
        type="text"
        placeholder="소환사명을 입력하세요."
        value={userName}
        onChange={(event) => handleChangeText(event.target.value)}
      />
    </>
  );
}

export default App;
