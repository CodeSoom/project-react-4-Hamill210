import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import SearchBoxContainer from './SearchBoxContainer';

jest.mock('react-redux');

describe('SearchBoxContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      player: {
        userName: '',
      },
    }));
  });

  it('renders searchBox and searchBtn', () => {
    const { queryByPlaceholderText, queryByText } = render(
      <SearchBoxContainer />,
    );

    expect(queryByPlaceholderText('소환사명을 입력하세요.')).not.toBeNull();
    expect(queryByText('검색')).not.toBeNull();

    fireEvent.click(queryByText('검색'));

    expect(dispatch).toBeCalled();
  });
});
