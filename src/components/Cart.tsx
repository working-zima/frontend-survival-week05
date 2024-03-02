import { useLocalStorage } from 'usehooks-ts';
import Receipt from '../types/Receipt';
import Food from '../types/Food';
import useCreateOrder from '../hooks/useCreateOrder';

type CartProps = {
  setReceipt: (receipt: Receipt) => void;
}
function Cart({ setReceipt }: CartProps) {
  const [selectedFoods, setFoods] = useLocalStorage<Food[]>('cart', []);
  const { createOrder } = useCreateOrder();

  return (
    <div>
      <h2>주문 바구니</h2>
      <ul />
    </div>
  );
}

export default Cart;
