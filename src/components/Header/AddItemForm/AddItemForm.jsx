import styles from "./AddItemForm.module.scss";
import {useState, useRef, useEffect, useContext} from "react";
import { ShoppingListContext } from "../../../contexts/ShoppingListContext";

export default function AddItemForm() {
    const [item, setItem] = useState("");
    const {addItem} = useContext(ShoppingListContext);
    const inputRef = useRef(null);

    const submitHandler = (e) => {
        e.preventDefault();
        addItem(item);
        setItem("");
    };

    useEffect(() => {
        inputRef.current?.focus();
    })

    return (
        <form className={styles.addItemForm}
            onSubmit={(event) => submitHandler(event)}
            action="">
            <input
                id="shoppingItem"
                ref={inputRef}
                type="text"
                placeholder="I need to buy..."
                value={item}
                onChange={(event) => setItem(event.target.value)}
            />
            <button
                disabled={item.length === 0}
                type="submit">
                Add
            </button>
        </form>
    )
}