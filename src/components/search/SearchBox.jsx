import styled from '@emotion/styled';

const SearchContainer = styled.div({
  display: 'grid',
  gridTemplateColumns: 'auto 50px',
  position: 'relative',
  height: '30px',
  borderRadius: '4px',
});

function SearchBox({ userName, onChangeValue, onClickSearchPlayer }) {
  const handleChange = (event) => {
    const { target: { value } } = event;
    onChangeValue(value);
  };

  return (
    <SearchContainer>
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
    </SearchContainer>
  );
}

export default SearchBox;
