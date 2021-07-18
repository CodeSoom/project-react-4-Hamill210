import { render } from '@testing-library/react';

import GamePlayerInventory from "./GamePlayerInventory";

import STATS from '../../../fixtures/stats';

describe('GamePlayerInventory', () => {
  it('renders', () => {
    const { container } = render(
      <GamePlayerInventory
        stats={STATS}
      />
    );

    expect(container).toHaveTextContent('제어 와드');
  });
});
