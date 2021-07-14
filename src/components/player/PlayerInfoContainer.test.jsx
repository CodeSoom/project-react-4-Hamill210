import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import PlayerInfoContainer from './PlayerInfoContainer';

jest.mock('react-redux');

describe('PlayerInfoContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      summoner: {
        name: '최하누리',
        summonerLevel: '30',
      },
      soloRank: {
        tier: '다이아몬드',
        rank: '2',
        leaguePoints: '75LP',
        wins: '145',
        losses: '132',
      },
      subRank: {
        tier: '플레티넘',
        rank: '4',
        leaguePoints: '1LP',
        wins: '24',
        losses: '16',
      }
    }));
  });

  it('renders player information', () => {
    const { container } = render(
      <PlayerInfoContainer />,
    );

    expect(container).toHaveTextContent('소환사명');
    expect(container).toHaveTextContent('최하누리');

    expect(container).toHaveTextContent('레벨');
    expect(container).toHaveTextContent('30');

    expect(container).toHaveTextContent('솔로랭크');
    expect(container).toHaveTextContent('다이아몬드 2 75LP');

    expect(container).toHaveTextContent('전적');
    expect(container).toHaveTextContent('145승 132패');

    expect(container).toHaveTextContent('자유랭크');
    expect(container).toHaveTextContent('플레티넘 4 1LP');

    expect(container).toHaveTextContent('전적');
    expect(container).toHaveTextContent('24승 16패');
  });
});
