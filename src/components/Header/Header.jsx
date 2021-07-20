import * as Styled from './style';

import SearchBoxContainer from '../search/SearchBoxContainer';

function Header() {
  return (
    <Styled.Div.Container>
      <div>
        <a href="/">SOOM.GG</a>
      </div>
      <SearchBoxContainer />
    </Styled.Div.Container>
  );
}

export default Header;
