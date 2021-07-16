import styled from '@emotion/styled';

import SearchBoxContainer from './search/SearchBoxContainer';

const HeaderContainer = styled.div({
  display: 'grid',
  gridTemplateColumns: 'auto 300px',
  backgroundColor: '#5383e8',
  padding: '20px 40px 20px 40px',
  alignItems: 'center',
});

const HeaderLink = styled.a({
  fontSize: '1.8em',
  fontWeight: 'bold',
  display: 'block',
  margin: '1em 0',
  float: 'left',
  textAlign: 'center',
  color: '#FFF',
  textDecoration: 'none',
});

function Header() {
  return (
    <HeaderContainer>
      <div>
        <HeaderLink href="/">SOOM.GG</HeaderLink>
      </div>
      <SearchBoxContainer />
    </HeaderContainer>
  );
}

export default Header;
