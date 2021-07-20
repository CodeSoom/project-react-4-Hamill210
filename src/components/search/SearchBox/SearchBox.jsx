import { memo } from 'react';
import * as Styled from './style';

function SearchBox({ userName, onChangeValue, onClickSearchPlayer }) {
  const handleChange = (event) => {
    const { target: { value } } = event;
    onChangeValue(value);
  };

  return (
    <Styled.Div.Container>
      <input
        type="text"
        placeholder="소환사명을 입력하세요."
        value={userName}
        onChange={handleChange}
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
