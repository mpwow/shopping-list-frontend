import { useState, useEffect } from 'react';

export function useBulkActions(deleteItem, completeItem, filteredShoppingItems) {
  // Bulk actions states
  const [isBulkActionsShowed, setIsBulkActionsShowed] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);

  // Bulk actions
  const checkItem = (id) => {
    setCheckedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    setIsBulkActionsShowed(checkedItems.length > 0);
  }, [checkedItems]);

  const closeBulkActions = () => {
    setCheckedItems([]);
    setIsBulkActionsShowed(false);
  };

  const deleteBulkActions = () => {
    checkedItems.forEach(deleteItem);
    setCheckedItems([]);
    setIsBulkActionsShowed(false);
  };

  const checkAllBulkActions = () => {
    checkedItems.forEach(completeItem);
    setCheckedItems([]);
    setIsBulkActionsShowed(false);
  };

  const selectAllBulkActions = () => {
    const ids = filteredShoppingItems.map((item) => item.id);
    setCheckedItems(ids);
  };

  return {
    isBulkActionsShowed,
    checkedItems,
    closeBulkActions,
    deleteBulkActions,
    checkAllBulkActions,
    selectAllBulkActions,
    checkItem,
    setIsBulkActionsShowed,
  };
}
