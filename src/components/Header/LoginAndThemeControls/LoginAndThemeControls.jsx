import styles from './LoginAndThemeControls.module.scss';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { useContext } from 'react';
import LightThemeIcon from '../../UI/Icons/LightThemeIcon/LightThemeIcon.jsx';
import DarkThemeIcon from '../../UI/Icons/DarkThemeIcon/DarkThemeIcon.jsx';

export default function LoginAndThemeControls() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div className={styles.loginAndThemeControlsContainer}>
        <button onClick={toggleTheme} className={styles.themeSwitcher}>
          {theme === 'light' ? <LightThemeIcon /> : <DarkThemeIcon />}
        </button>
        <button className={styles.login}>Sign In</button>
      </div>
    </>
  );
}
