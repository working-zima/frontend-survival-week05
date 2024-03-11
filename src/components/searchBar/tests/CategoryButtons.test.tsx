import { render, screen } from '@testing-library/react';

import CategoryButtons from '../CategoryButtons';

describe('CategoryButtons', () => {
  const categories = ['한식, 중식, 일식'];

  const setFilterCategory = jest.fn();

  it('renders all categories', () => {
    render((
      <CategoryButtons
        categories={categories}
        setCategory={setFilterCategory}
      />
    ));

    screen.getByText(/전체/);

    categories.forEach((category) => {
      screen.getByText(category);
    });
  });
});
