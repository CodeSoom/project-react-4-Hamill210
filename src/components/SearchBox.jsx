function SearchBox({ userName, onChangeText, onClickSearchUserInfo }) {
  return (
    <>
      <input
        type="text"
        placeholder="소환사명을 입력하세요."
        value={userName}
        onChange={(event) => onChangeText(event.target.value)}
      />
      <button
        type="button"
        onClick={onClickSearchUserInfo}
      >
        검색
      </button>
    </>
  );
}

export default SearchBox;