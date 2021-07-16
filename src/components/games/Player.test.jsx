import { render } from '@testing-library/react';

import Player from './Player';

import PARTICIPANT_IDENTITIES from '../../../fixtures/participantIdentities';

describe('Player', () => {
  it('renders', () => {
    const { container } = render(
      <Player
        participantIdentities={PARTICIPANT_IDENTITIES}
        blueTeam={true}
      />,
    );

    expect(container).toHaveTextContent('최하누리');
    expect(container).toHaveTextContent('피곤한 문화인');
    expect(container).toHaveTextContent('Returned Player');
    expect(container).toHaveTextContent('Airsalt');
    expect(container).toHaveTextContent('베 2');

  });
});
