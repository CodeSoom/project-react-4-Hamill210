import { render } from '@testing-library/react';

import GamePlayersItem from "./GamePlayersItem";

import PARTICIPANTS from '../../../fixtures/participants';
import PARTICIPANT_IDENTITIES from '../../../fixtures/participantIdentities';

describe('GamePlayersItem', () => {
  it('renders', () => {
    const { container } = render(
      <GamePlayersItem
        participants={PARTICIPANTS}
        participantIdentity={PARTICIPANT_IDENTITIES}
      />
    );

    expect(container).toHaveTextContent('최하누리');
    expect(container).toHaveTextContent('피곤한 문화인');
    expect(container).toHaveTextContent('Returned Player');
    expect(container).toHaveTextContent('Airsalt');
    expect(container).toHaveTextContent('베 2');
  });
});
