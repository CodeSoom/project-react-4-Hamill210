import styled from '@emotion/styled';

import Header from './components/Header';
import GameHistoryPage from './components/GameHistoryPage';

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
        <GameHistoryPage />
      </Content>
    </Wrapper>
  );
}

export default App;
