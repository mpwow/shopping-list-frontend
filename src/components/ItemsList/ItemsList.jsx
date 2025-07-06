import styles from "./ItemsList.module.scss";
import ShoppingItem from "./ShoppingItem/ShoppingItem";
import SearchWithFilters from "./SearchWithFilters/SearchWithFilters";
import {useContext} from "react";
import {ShoppingListContext} from "../../contexts/ShoppingListContext.jsx";

export default function ItemsList() {
    const {filteredShoppingItems} = useContext(ShoppingListContext);

    return (
        <div className={styles.shoppingItem}>
            <SearchWithFilters/>
            <ul>
                {filteredShoppingItems.map((item) => (
                    <ShoppingItem
                        key={item.id}
                        shoppingItem={item}
                    />
                ))}
            </ul>
        </div>
    );
}
