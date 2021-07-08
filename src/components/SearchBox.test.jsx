import { render, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom';

import SearchBox from './SearchBox';

describe('SearchBox', () => {
  const handleChangeText = jest.fn();
  const handleClickSearchUserInfo = jest.fn();

  function renderSearchBox() {
    return render(
      <SearchBox
        userName="최하누리"
        onChangeText={handleChangeText}
        onClickSearchUserInfo={handleClickSearchUserInfo}
      />,
    );
  }

  it('renders search box', () => {
    const { queryByPlaceholderText } = renderSearchBox();
    const inputElement = queryByPlaceholderText('소환사명을 입력하세요.');

    expect(inputElement).not.toBeNull();

    fireEvent.change(inputElement, {
      target: { value: '최하누리' },
    });
  });

  it('renders search button', () => {
    const { queryByText } = renderSearchBox();
    const buttonElement = queryByText('검색');

    expect(buttonElement).not.toBeNull();

    fireEvent.click(buttonElement);
  });
});
