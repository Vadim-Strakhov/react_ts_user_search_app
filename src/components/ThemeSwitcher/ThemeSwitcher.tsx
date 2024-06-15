import SunIcon from "src/assets/icon-sun.svg?react";
import MoonIcon from "src/assets/icon-moon.svg?react";

import styles from "./ThemeSwitcher.module.scss";
import { useEffect, useState } from "react";

export const ThemeSwitcher = () => {
  const [isDark, setDark] = useState(false);

  const themeText = isDark ? "Light" : "Dark";
  const ThemeIcon = isDark ? SunIcon : MoonIcon;

  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className={styles.switcher} onClick={() => setDark(!isDark)}>
      <span>{themeText}</span>
      <ThemeIcon className={styles.icon} />
    </div>
  );
};
