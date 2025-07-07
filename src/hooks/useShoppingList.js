import { useCallback, useState, useEffect } from 'react';
import { loadFromLocalStorage, saveToLocalStorage } from '../services/localStorageService.js';

export function useShoppingList() {
  const [shoppingList, setShoppingList] = useState(() => {
    return loadFromLocalStorage('shoppingList', []);
  });

  // Сохраняем в локалсторадже список айтемов при их изменении
  useEffect(() => {
    saveToLocalStorage('shoppingList', shoppingList);
  }, [shoppingList]);

  // Добавление айтема
  const addItem = useCallback((item) => {
    setShoppingList((prev) => [
      {
        id: Date.now(),
        value: item.trim(),
        completed: false,
      },
      ...prev,
    ]);
  }, []);

  // Функции айтема - отметить как выполенный и удаление
  const completeItem = useCallback((id) => {
    setShoppingList((prev) => {
      return prev
        .map((item) => (item.id === id ? { ...item, completed: !item.completed } : item))
        .sort((a, b) => a.completed - b.completed);
    });
  }, []);

  const deleteItem = useCallback((id) => {
    setShoppingList((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  }, []);

  return {
    shoppingList,
    addItem,
    completeItem,
    deleteItem,
    setShoppingList,
  };
}
