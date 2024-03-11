import { render, screen } from '@testing-library/react';

import fixtures from '../../../../fixtures';
import OrderItem from '../OrderItem';

describe('OrderItem', () => {
  const { food } = fixtures;

  function renderOrderItem() {
    render(<OrderItem food={food} />);
  }

  it('render food name', (() => {
    renderOrderItem();

    screen.getByText('짜장면(8,000원)');
  }));
});
