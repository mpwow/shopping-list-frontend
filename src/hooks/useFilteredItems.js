import { useMemo } from 'react';

export function useFilteredItems(shoppingList, filter, searchQuery) {
  return useMemo(() => {
    return shoppingList.filter((item) => {
      if (!item.value.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      if (filter === 'completed') {
        return item.completed;
      } else if (filter === 'active') {
        return !item.completed;
      } else {
        return true;
      }
    });
  }, [shoppingList, filter, searchQuery]);
}
