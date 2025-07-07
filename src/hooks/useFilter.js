import { useState, useCallback } from 'react';

export function useFilter() {
  const [filter, setFilter] = useState('all'); // 'all' | 'active' | 'completed'
  const [searchQuery, setSearchQuery] = useState('');

  // Фильтрация и поиск в списке айтемов
  const filterChangeHandler = useCallback((filterValue) => {
    setFilter(filterValue);
  }, []);

  const resetHandler = useCallback(() => {
    setSearchQuery('');
  }, []);

  return {
    filter,
    searchQuery,
    resetHandler,
    filterChangeHandler,
    setFilter,
    setSearchQuery,
  };
}
