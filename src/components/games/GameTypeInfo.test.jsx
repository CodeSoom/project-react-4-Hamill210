import { render } from '@testing-library/react';

import GameTypeInfo from './GameTypeInfo';

describe('GameTypeInfo', () => {
  it('renders', () => {
    const gameCreation = 1626192244309;
    const gameTime = 2051 * 1000;
    const queueId = 420;
    const win = 'Fail';

    const { container } = render(
      <GameTypeInfo
        gameCreation={gameCreation}
        gameTime={gameTime}
        queueId={queueId}
        win={win}
      />,
    );

    expect(container).toHaveTextContent('솔랭');
    expect(container).toHaveTextContent('패배');
    expect(container).toHaveTextContent('34분 11초');
  });
});
