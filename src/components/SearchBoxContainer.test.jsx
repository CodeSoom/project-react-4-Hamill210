import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import '@testing-library/jest-dom';

import SearchBoxContainer from './SearchBoxContainer';

jest.mock('react-redux');

describe('SearchBoxContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      players: [
        { id: 1, name: '최하누리' },
      ],
    }));
  });

  it('renders searchBox and searchBtn', () => {
    const { container, queryByText } = render(
      <SearchBoxContainer />,
    );

    expect(container).toHaveTextContent('소환사명을 입력하세요.');
    expect(container).toHaveTextContent('검색');

    fireEvent.click(queryByText('검색'));

    expect(dispatch).toBeCalled();
  });
});
