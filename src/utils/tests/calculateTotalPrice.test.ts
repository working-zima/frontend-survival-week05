import menuAndTotalPrice from '../../../fixtures/menu';
import calculateTotalPrice from '../calculateTotalPrice';
import Food from '../../types/Food';

describe('calculateTotalPrice', () => {
  it('', () => {
    const [menu, totalPrice] = menuAndTotalPrice;

    const calculatedTotalPrice = calculateTotalPrice(
      menu as Food[],
    );

    expect(calculatedTotalPrice).toBe(totalPrice);
  });
});
