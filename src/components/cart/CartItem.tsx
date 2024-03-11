import Food from '../../types/Food';
import MenuIntheCart from './MenuIntheCart';

type CartItemProps = {
  food: Food;
  index: number;
  handleClickCancel: (index: number) => void;
}

export default function CartItem(
  { food, index, handleClickCancel }: CartItemProps,
) {
  return (
    <MenuIntheCart food={food}>
      <button
        style={{ marginLeft: '0.5rem' }}
        name={`#${food.name}`}
        type="button"
        onClick={() => handleClickCancel(index)}
      >
        취소
      </button>
    </MenuIntheCart>
  );
}
