import { render } from '@testing-library/react';

import GamePlayers from "./GamePlayers";

import PARTICIPANTS from '../../../fixtures/participants';
import PARTICIPANT_IDENTITIES from '../../../fixtures/participantIdentities';

describe('GamePlayers', () => {
  it('renders', () => {
    const { container } = render(
      <GamePlayers
        participants={PARTICIPANTS}
        participantIdentities={PARTICIPANT_IDENTITIES}
      />
    );

    expect(container).toHaveTextContent('최하누리');
    expect(container).toHaveTextContent('피곤한 문화');
    expect(container).toHaveTextContent('Returned Player');
    expect(container).toHaveTextContent('Airsalt');
    expect(container).toHaveTextContent('베 2');
  });
});
