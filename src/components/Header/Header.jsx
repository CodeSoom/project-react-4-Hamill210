import * as Styled from './style';

import SearchBoxContainer from '../search/SearchBoxContainer';

function Header() {
  return (
    <Styled.Div.Container>
      <Styled.Div.Content>
        <Styled.Div.HeaderContent>
          <a href="/">SOOM.GG</a>
        </Styled.Div.HeaderContent>
        <SearchBoxContainer />
      </Styled.Div.Content>
    </Styled.Div.Container>
  );
}

export default Header;
