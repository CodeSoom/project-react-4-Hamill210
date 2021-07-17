import { render } from '@testing-library/react';

import GamePlayerStatsInfo from "./GamePlayerStatsInfo";

import PARTICIPANTS from '../../../fixtures/participants';
import STATS from '../../../fixtures/stats';

describe('GamePlayerStatsInfo', () => {
  it('renders', () => {
    const gameDuration = 1595;
    const gameTime = gameDuration * 1000;

    const { container } = render(
      <GamePlayerStatsInfo
        participants={PARTICIPANTS}
        stats={STATS}
        gameTime={gameTime}
        teamId={100}
      />
    );

    expect(container).toHaveTextContent('레벨 14');
    expect(container).toHaveTextContent('168 (6.5) CS');
    expect(container).toHaveTextContent('킬관여 47%');
  });
});
