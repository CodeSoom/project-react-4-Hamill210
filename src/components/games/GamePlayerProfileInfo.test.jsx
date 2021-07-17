import { render } from '@testing-library/react';

import GamePlayerProfileInfo from './GamePlayerProfileInfo';

describe('GamePlayerProfileInfo', () => {
  it('renders', () => {
    const championId = 164;
    const spell1Id = 3;
    const spell2Id = 4;
    const perk0 = 8010;
    const perkSubStyle = 8300;
    const perkPrimaryStyle = 8000;

    const { container } = render(
      <GamePlayerProfileInfo
        championId={championId}
        leftSpell={spell1Id}
        rightSpell={spell2Id}
        perk0={perk0}
        perkSubStyle={perkSubStyle}
        perkPrimaryStyle={perkPrimaryStyle}
      />,
    );

    expect(container).toHaveTextContent('카밀');
  });
});
