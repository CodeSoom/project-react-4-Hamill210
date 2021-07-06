import React, { useState } from 'react';
import SearchBox from "./components/SearchBox";

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
      <SearchBox
        userName={userName}
        onChangeText={handleChangeText}
        onClickSearchUserInfo={handleClickSearchUserInfo}
      />
    </>
  );
}

export default App;
