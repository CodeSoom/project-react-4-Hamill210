import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import GameListContainer from './GameListContainer';

import SUMMONER from '../../../fixtures/summoner';
import MATCH_INFOS from '../../../fixtures/matchInfos';
import GAME_INFOS from '../../../fixtures/gameInfos';

jest.mock('react-redux');

describe('GameListContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      games: {
        matchInfos: MATCH_INFOS,
        gameInfos: GAME_INFOS,
      },
      player: {
        summoner: SUMMONER,
      },
    }));
  });

  it('renders game list', () => {
    const { container } = render(
      <GameListContainer />,
    );

    expect(container).toHaveTextContent('솔랭');
    expect(container).toHaveTextContent('패배');
    expect(container).toHaveTextContent('34분 11초');

    expect(container).toHaveTextContent('카밀');

    expect(container).toHaveTextContent('12 / 9 / 10');
    expect(container).toHaveTextContent('2.44:1 평점');

    expect(container).toHaveTextContent('레벨');
    expect(container).toHaveTextContent('181 (5.3) CS');

    expect(container).toHaveTextContent('최하누리');
    expect(container).toHaveTextContent('Returned Player');
    expect(container).toHaveTextContent('피곤한 문화인');
    expect(container).toHaveTextContent('베 2');
    expect(container).toHaveTextContent('Airsalt');

    expect(container).toHaveTextContent('문라딘');
    expect(container).toHaveTextContent('0975310849853211');
    expect(container).toHaveTextContent('머머리협회사현');
    expect(container).toHaveTextContent('흰머리오목눈이3');
    expect(container).toHaveTextContent('단발이 끌리더라');
  });
});
