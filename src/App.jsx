import React, { useState } from 'react';

function App() {
  const [userName, setUserName] = useState('');

  const handleChangeText = (value) => {
    setUserName(value);
  };

  const handleClickSearchUserInfo = () => {
    if (userName === '') {
      return;
    }

    setUserName('');
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
      <button
        type="button"
        onClick={handleClickSearchUserInfo}
      >
        검색
      </button>
    </>
  );
}

export default App;
