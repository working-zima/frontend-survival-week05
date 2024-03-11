import { render, screen } from '@testing-library/react';

import SearchBar from '../SearchBar';

describe('SearchBar', () => {
  const categories = ['한식', '중식', '일식'];

  const setText = jest.fn();
  const setCategory = jest.fn();

  function renderSearchBar() {
    render((
      <SearchBar
        categories={categories}
        text=""
        setText={setText}
        setCategory={setCategory}
      />
    ));
  }

  it('renders search label text', () => {
    renderSearchBar();

    screen.getByLabelText(/검색/);
  });

  it('renders all categories', () => {
    renderSearchBar();

    screen.getByText(/전체/);

    categories.forEach((category) => {
      screen.getByText(category);
    });
  });
});
