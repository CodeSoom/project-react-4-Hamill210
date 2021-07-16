import { render } from '@testing-library/react';

import PlayerInfo from './PlayerInfo';

describe('PlayerInfo', () => {
  it('renders', () => {
    const summoner = {
      name: '최하누리',
      summonerLevel: '30',
    }

    const soloRank = {
      tier: '다이아몬드',
      rank: '2',
      leaguePoints: '75',
      wins: '145',
      losses: '132',
    }

    const subRank = {
      tier: '플레티넘',
      rank: '4',
      leaguePoints: '1',
      wins: '24',
      losses: '16',
    }

    const { container } = render(
      <PlayerInfo
        summoner={summoner}
        soloRank={soloRank}
        subRank={subRank}
      />,
    );

    expect(container).toHaveTextContent('최하누리');

    expect(container).toHaveTextContent('솔로랭크');
    expect(container).toHaveTextContent('다이아몬드 2');
    expect(container).toHaveTextContent('75 LP');
    expect(container).toHaveTextContent('145승 132패');

    expect(container).toHaveTextContent('자유 5:5 랭크');
    expect(container).toHaveTextContent('플레티넘 4');
    expect(container).toHaveTextContent('1 LP');
    expect(container).toHaveTextContent('24승 16패');
  });
});
