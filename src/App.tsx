import { useLocalStorage } from 'usehooks-ts';

import Receipt from './types/Receipt';
import useFetchRestaurants from './hooks/useFetchRestaurants';
import Cart from './components/Cart';
import FilterableRestaurantTable from './components/FilterableRestaurantTable';

const emptyReceipt = {} as Receipt;

export default function App() {
  const [receipt, setReceipt] = useLocalStorage('receipt', emptyReceipt);
  const restaurants = useFetchRestaurants();

  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      <Cart setReceipt={setReceipt} />
      <FilterableRestaurantTable
        restaurants={restaurants}
      />
    </div>
  );
}
