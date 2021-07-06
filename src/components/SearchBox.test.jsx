import { render, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom';

import SearchBox from './SearchBox';

describe('SearchBox', () => {
  it('renders search box', () => {
    const { queryByPlaceholderText } = render(
      <SearchBox />
    )
    const inputElement = queryByPlaceholderText('소환사명을 입력하세요.');

    expect(inputElement).not.toBeNull();

    fireEvent.change(inputElement, {
      target: { value: '최하누리' },
    });
  });

  it('renders search button', () => {
    const { queryByText } = render(
      <SearchBox />
    );
    const buttonElement = queryByText('검색');

    expect(buttonElement).not.toBeNull();

    fireEvent.click(buttonElement);
  });
});
