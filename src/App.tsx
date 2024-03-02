import FilterableRestaurantTable from './components/FilterableRestaurantTable';
import useFetchRestaurants from './hooks/useFetchRestaurants';

export default function App() {
  const restaurants = useFetchRestaurants();

  return (
    <div>
      <FilterableRestaurantTable
        restaurants={restaurants}
      />
    </div>
  );
}
