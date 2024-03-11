import { render, screen } from '@testing-library/react';
import fixtures from '../../../../fixtures';
import Cart from '../Cart';

const setFoods = jest.fn();

jest.mock('usehooks-ts', () => ({
  useLocalStorage: () => [fixtures.foods, setFoods],
}));

/**
 * jsx가 렌더링 되는지 확인
 */
describe('Cart', () => {
  const setReceipt = jest.fn();

  function renderCart() {
    render(<Cart setReceipt={setReceipt} />);
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renters title', () => {
    renderCart();

    screen.getByText(/점심 바구니/);
  });

  it('renters order food list', () => {
    renderCart();

    screen.getByText(/짜장면/);
    screen.getByText(/짬뽕/);
  });
});
