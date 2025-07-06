import styles from "./Header.module.scss";
import LoginAndThemeControls from "./LoginAndThemeControls/LoginAndThemeControls.jsx";
import AddItemForm from "./AddItemForm/AddItemForm.jsx";

export default function Header() {
    return (
        <div className={styles.header}>
            <LoginAndThemeControls/>
            <h1>Shopping List</h1>
            <AddItemForm/>
        </div>
    );
}
