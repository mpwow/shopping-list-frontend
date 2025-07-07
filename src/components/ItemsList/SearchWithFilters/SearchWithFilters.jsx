import styles from './SearchWithFilters.module.scss';
import { useContext, useState, useRef, useEffect } from 'react';
import SearchIcon from '../../UI/Icons/SearchIcon/SearchIcon.jsx';
import SearchIconFilled from '../../UI/Icons/SearchIconFilled/SearchIconFilled.jsx';
import { ShoppingListContext } from '../../../contexts/ShoppingListContext.jsx';

export default function SearchWithFilters() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const {
    filter,
    searchQuery,
    setSearchQuery,
    filterChangeHandler,
    resetHandler,
    isBulkActionsShowed,
    closeBulkActions,
    deleteBulkActions,
    checkAllBulkActions,
    selectAllBulkActions,
  } = useContext(ShoppingListContext);

  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current?.focus();
  });

  return (
    <div className={styles.searchAndFiltersContainer}>
      <div className={styles.searchAndFiltersBar}>
        <div className={styles.filtersBar}>
          <button
            className={filter === 'all' ? styles.activeButton : ''}
            onClick={() => filterChangeHandler('all')}
          >
            <span>All</span>
          </button>
          <button
            className={filter === 'active' ? styles.activeButton : ''}
            onClick={() => filterChangeHandler('active')}
          >
            <span>Active</span>
          </button>
          <button
            className={filter === 'completed' ? styles.activeButton : ''}
            onClick={() => filterChangeHandler('completed')}
          >
            <span>Completed</span>
          </button>
        </div>
        <div>
          <button
            className={styles.searchButton}
            onClick={() => {
              setShowSearchBar(!showSearchBar);
              resetHandler();
            }}
          >
            {showSearchBar ? (
              <SearchIconFilled className={styles.searchBarIcon} />
            ) : (
              <SearchIcon className={styles.searchBarIcon} />
            )}
          </button>
        </div>
      </div>
      {showSearchBar && (
        <div className={styles.searchBar}>
          <input
            ref={searchRef}
            value={searchQuery}
            onChange={(event) => {
              setSearchQuery(event.target.value);
            }}
            type='text'
            placeholder='Search...'
          />
          <button onClick={resetHandler} className={styles.closeButton}>
            ×
          </button>
        </div>
      )}
      <div className={styles.bulkActionsPlaceReserver}>
        {isBulkActionsShowed && (
          <div className={styles.bulkActionsContainer}>
            <div className={styles.bulkActionsControls}>
              <button onClick={selectAllBulkActions}>
                <span>Select All</span>
              </button>
              <button onClick={checkAllBulkActions}>
                <span>Check As Complete</span>
              </button>
              <button onClick={deleteBulkActions}>
                <span>Delete</span>
              </button>
            </div>
            <div className={styles.bulkActionsClose}>
              <button onClick={closeBulkActions}>Close Bulk Actions</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
