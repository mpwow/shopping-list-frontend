import styles from "./ShoppingItem.module.scss";
import DeleteIcon from "../../UI/Icons/DeleteIcon/DeleteIcon.jsx";
import CheckIcon from "../../UI/Icons/CheckIcon/CheckIcon.jsx";
import {useContext} from "react";
import {ShoppingListContext} from "../../../contexts/ShoppingListContext.jsx";

export default function ShoppingItem({shoppingItem}) {

    const {completeItem, deleteItem, checkItem, checkedItems} = useContext(ShoppingListContext);

    const completeHandler = () => {
        completeItem(shoppingItem.id);
    };

    const deleteHandler = () => {
        deleteItem(shoppingItem.id);
    };
    const valueStyles = shoppingItem.completed ? styles.itemDone : null; // отвечает за добавление класса стилизации с зачеркнутым текстом или обычным

    const checkItemHandler = () => {
        checkItem(shoppingItem.id);
    }

    return (
        <li className={styles.item}>
            <input className={`${styles.actionCheckbox} ${checkedItems.includes(shoppingItem.id) ? styles.actionCheckboxVisible : ''} `}
                   onClick={checkItemHandler} checked={checkedItems.includes(shoppingItem.id)}
                   type="checkbox"
            />
            <div className={styles.title}>
                <span className={valueStyles}>{shoppingItem.value}</span>
            </div>
            <div className={styles.buttons}>
                <button className={valueStyles} onClick={completeHandler}>
                    <CheckIcon/>
                </button>
                <button className={valueStyles} onClick={deleteHandler}>
                    <DeleteIcon/>
                </button>
            </div>
        </li>
    );
}
