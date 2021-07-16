import styled from '@emotion/styled';

import SearchBoxContainer from './components/search/SearchBoxContainer';
import PlayerInfoContainer from './components/player/PlayerInfoContainer';
import GameListContainer from './components/games/GameListContainer';

const Wrapper = styled.div({
  minHeight: '100%',
});

const Content = styled.div({
  width: '1000px',
  margin: 'auto',
});

function App() {
  return (
    <Wrapper>
      <h2>SOOM.GG</h2>
      <SearchBoxContainer />
      <Content>
        <PlayerInfoContainer />
        <br />
        <GameListContainer />
      </Content>
    </Wrapper>
  );
}

export default App;
