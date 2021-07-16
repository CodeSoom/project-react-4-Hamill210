import { render } from '@testing-library/react';

import PlayerRankInfo from './PlayerRankInfo';

import RANKS from '../../../fixtures/ranks';

describe('PlayerRankInfo', () => {
  it('renders', () => {
    const { container } = render(
      <PlayerRankInfo
        ranks={RANKS[0]}
        title="솔로랭크"
      />,
    );

    expect(container).toHaveTextContent('솔로랭크');
  });

  it('isn"t exist ranks', () => {
    const { container } = render(
      <PlayerRankInfo
        ranks={undefined}
        title="솔로랭크"
      />,
    );

    expect(container).toHaveTextContent('Unranked');
  })
});
