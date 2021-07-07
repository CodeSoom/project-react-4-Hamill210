import { render } from '@testing-library/react';

import PlayerInfo from './PlayerInfo';

describe('PlayerInfo', () => {
  it('renders', () => {
    const { container } = render(
      <PlayerInfo
        name="최하누리"
        summonerLevel={30}
      />,
    );

    expect(container).toHaveTextContent('소환사명');
    expect(container).toHaveTextContent('레벨');
  });
});
