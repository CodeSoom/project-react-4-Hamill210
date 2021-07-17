import { render } from '@testing-library/react';

import GamePlayerKDAInfo from "./GamePlayerKDAInfo";

import STATS from '../../../fixtures/stats';

describe('GamePlayerKDAInfo', () => {
  it('renders', () => {
    const { container } = render(
      <GamePlayerKDAInfo
        stats={STATS}
      />
    );

    expect(container).toHaveTextContent('2 / 7 / 6');
    expect(container).toHaveTextContent('1.14:1 평점');
  });
});
