import { render } from '@testing-library/react';

import GameList from './GameList';

import GAME_INFOS from '../../../fixtures/gameInfos';

describe('GameList', () => {
  it('renders', () => {
    const { container } = render(
      <GameList
        gameInfos={GAME_INFOS}
      />,
    );

    expect(container).toHaveTextContent('솔랭')
    expect(container).toHaveTextContent('21시간 전')
    expect(container).toHaveTextContent('패배')
    expect(container).toHaveTextContent('34분 11초')

    expect(container).toHaveTextContent('카밀')

    expect(container).toHaveTextContent('12 / 9 / 10')
    expect(container).toHaveTextContent('2.44:1 평점')

    expect(container).toHaveTextContent('레벨')
    expect(container).toHaveTextContent('181 CS')

    expect(container).toHaveTextContent('최하누리')
    expect(container).toHaveTextContent('Returned Player')
    expect(container).toHaveTextContent('피곤한 문화인')
    expect(container).toHaveTextContent('베 2')
    expect(container).toHaveTextContent('Airsalt')

    expect(container).toHaveTextContent('문라딘')
    expect(container).toHaveTextContent('0975310849853211')
    expect(container).toHaveTextContent('머머리협회사현')
    expect(container).toHaveTextContent('흰머리오목눈이3')
    expect(container).toHaveTextContent('단발이 끌리더라')
  });
});
