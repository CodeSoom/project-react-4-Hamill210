import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import Header from './Header';

describe('Header', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      player: {
        player: {
          userName: '',
        },
      }}));
  });

  function renderApp() {
    return render(<Header />);
  }

  it('renders header', () => {
    const { queryByText } = renderApp();
    expect(queryByText('SOOM.GG')).not.toBeNull();
  });

  it('renders search box', () => {
    const { queryByPlaceholderText } = renderApp();
    const inputElement = queryByPlaceholderText('소환사명을 입력하세요.');

    expect(inputElement).not.toBeNull();

    fireEvent.change(inputElement, {
      target: { value: '최하누리' },
    });
  });

  it('renders search button', () => {
    const { queryByText } = renderApp();
    const buttonElement = queryByText('검색');

    expect(buttonElement).not.toBeNull();

    fireEvent.click(buttonElement);
  });
});
