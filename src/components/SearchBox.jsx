function SearchBox({ userName, onChangeValue, onClickSearchPlayer }) {
  const handleChange = (event) => {
    const { target: { value } } = event;
    onChangeValue(value);
  };

  return (
    <>
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
    </>
  );
}

export default SearchBox;
