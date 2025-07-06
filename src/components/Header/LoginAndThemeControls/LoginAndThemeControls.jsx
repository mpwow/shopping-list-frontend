import styles from "./LoginAndThemeControls.module.scss";
import { ThemeContext } from "../../../contexts/ThemeContext";
import {useContext} from "react";

export default function LoginAndThemeControls() {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (<>
        <div className={styles.loginAndThemeControlsContainer}>
            <button onClick={toggleTheme}>
                Change Theme
            </button>
            <button>
                Sign In
            </button>
        </div>
    </>)
}