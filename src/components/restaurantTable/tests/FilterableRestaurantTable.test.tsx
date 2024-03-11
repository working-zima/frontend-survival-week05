import { render, screen } from '@testing-library/react';

import fixtures from '../../../../fixtures';
import FilterableRestaurantTable from '../FilterableRestaurantTable';

describe('FilterableRestaurantTable', () => {
  const { restaurants } = fixtures;

  it('renders restaurants', () => {
    render(<FilterableRestaurantTable restaurants={restaurants} />);

    screen.getByText(/짜장면/);
    screen.getByText(/짬뽕/);
  });
});
