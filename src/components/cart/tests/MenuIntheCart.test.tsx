import { render, screen } from '@testing-library/react';

import fixtures from '../../../../fixtures';
import MenuIntheCart from '../MenuIntheCart';

/**
 * 1. food prop 확인
 * 2. children prop 확인
 */
describe('MenuIntheCart', () => {
  const { food } = fixtures;

  it('renders food information', () => {
    render(<MenuIntheCart food={food} />);

    screen.getByText('짜장면(8,000원)');
  });

  it('renders children', () => {
    const children = '<p>맛있어요!</p>';

    render((
      <MenuIntheCart food={food}>
        {children}
      </MenuIntheCart>
    ));

    screen.getByText(/맛있어요!/);
  });
});
