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
      <Styled.Div.CountryContent>
        <Styled.Span.Country>
          KR
        </Styled.Span.Country>
      </Styled.Div.CountryContent>
      <div>
        <Styled.Input.TextArea
          ref={inputRef}
          type="text"
          placeholder="소환사명을 입력하세요."
          value={userName}
          onChange={handleChange}
          onKeyPress={handleKeyPressEnter}
        />
        <Styled.Button.SearchBtn
          type="button"
          onClick={onClickSearchPlayer}
        >
          <Styled.Img.SearchImg
            src="https://opgg-static.akamaized.net/images/gnb/svg/00-icon-gg.svg"
            alt="Search Button"
          />
        </Styled.Button.SearchBtn>
      </div>
    </Styled.Div.Container>
  );
}

export default memo(SearchBox);
