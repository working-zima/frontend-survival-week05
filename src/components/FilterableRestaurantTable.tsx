import Restaurant from '../types/Restaurant';
import RestaurantTable from './RestaurantTable';

type FilterableRestaurantTableProps = {
  restaurants: Restaurant[]
}

function FilterableRestaurantTable(
  { restaurants }: FilterableRestaurantTableProps,
) {
  return (
    <div><RestaurantTable restaurants={restaurants} /></div>
  );
}

export default FilterableRestaurantTable;
