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
  });
});
