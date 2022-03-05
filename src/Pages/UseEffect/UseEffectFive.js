import React, { useEffect, useState } from "react";
import styles from "./Theme.module.css";

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const UseEffectFive = () => {
  const [theme, setTheme] = useState(getStorageTheme());
  const [color, setColor] = useState("Change Theme");
  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      setColor("Dark Mode");
    } else {
      setTheme("light-theme");
      setColor("Light Mode");
    }
  };
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <section>
      <button onClick={toggleTheme}>{color}</button>
      {theme === "light-theme" ? (
        <p className={styles.light} >
          Light
        </p>
      ) : (
        <p className={styles.dark} >Dark Mode</p>
      )}
    </section>
  );
};

export default UseEffectFive;
