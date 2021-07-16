import styled from '@emotion/styled';

import Header from './components/Header';
import PlayerInfoContainer from './components/player/PlayerInfoContainer';
import GameListContainer from './components/games/GameListContainer';

const Wrapper = styled.div({
  minHeight: '100%',
  fontSize: '16px',
});

const Content = styled.div({
  width: '1000px',
  margin: 'auto',
});

function App() {
  return (
    <Wrapper>
      <Header />
      <Content>
        <PlayerInfoContainer />
        <br />
        <GameListContainer />
      </Content>
    </Wrapper>
  );
}

export default App;
