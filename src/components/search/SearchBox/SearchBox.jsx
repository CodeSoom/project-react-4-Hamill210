import { memo, useRef } from 'react';
import * as Styled from './style';

function SearchBox({ userName, onChangeValue, onClickSearchPlayer }) {
  const inputRef = useRef(null);

  const handleChange = (event) => {
    const { target: { value } } = event;
    onChangeValue(value);
  };

  const handleKeyPressEnter = (event) => {
    if (event.key === 'Enter') {
      onClickSearchPlayer();
      inputRef.current.blur();
    }
  };

  return (
    <Styled.Div.Container>
      <input
        ref={inputRef}
        type="text"
        placeholder="소환사명을 입력하세요."
        value={userName}
        onChange={handleChange}
        onKeyPress={handleKeyPressEnter}
      />
      <button
        type="button"
        onClick={onClickSearchPlayer}
      >
        검색
      </button>
    </Styled.Div.Container>
  );
}

export default memo(SearchBox);
