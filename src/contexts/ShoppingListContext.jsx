import {createContext, useState, useEffect} from 'react';
import {useFilteredItems} from "../hooks/useFilteredItems";
import {useShoppingList} from "../hooks/useShoppingList.js";
import {useFilter} from "../hooks/useFilter.js";
import {useBulkActions} from "../hooks/useBulkActions.js";

export const ShoppingListContext = createContext();

export function ShoppingListProvider({children}) {
    // Кастомный хук для работы с шопинг листом (список айтемов и действия с ними)
    const {
        shoppingList,
        addItem,
        completeItem,
        deleteItem,
    } = useShoppingList();

    // Хук для фильтров и строки поиска
    const {
        filter,
        searchQuery,
        resetHandler,
        filterChangeHandler,
        setFilter,
        setSearchQuery
    } = useFilter();

    // Кастомный хук для работы с фильтрами
    const filteredShoppingItems = useFilteredItems(shoppingList, filter, searchQuery);

    // Хук для массовых действий с карточками
    const {
        isBulkActionsShowed,
        setIsBulkActionsShowed,
        checkedItems,
        closeBulkActions,
        deleteBulkActions,
        checkAllBulkActions,
        selectAllBulkActions,
        checkItem
    } = useBulkActions(deleteItem, completeItem, filteredShoppingItems);


    return (
        <ShoppingListContext.Provider
            value={{
                shoppingList,
                addItem,
                completeItem,
                deleteItem,
                filteredShoppingItems,
                filter,
                setFilter,
                searchQuery,
                setSearchQuery,
                filterChangeHandler,
                resetHandler,
                isBulkActionsShowed,
                setIsBulkActionsShowed,
                checkItem,
                checkedItems,
                closeBulkActions,
                deleteBulkActions,
                checkAllBulkActions,
                selectAllBulkActions
            }}>
            {children}
        </ShoppingListContext.Provider>
    )
}