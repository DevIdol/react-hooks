import React, { useEffect, useState } from "react";


const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const UseEffectFive = () => {
  const [theme, setTheme] = useState(getStorageTheme());
  let themeMode = theme === "light-theme" ? "Light Mode" : "Dark Mode";
  const [color, setColor] = useState(themeMode);
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
        <p
          style={{
            backgroundColor: "#fff",
            padding: "100px",
            border: "1px solid red",
          }}
        >
          Light Mode
        </p>
      ) : (
        <p
          style={{
            backgroundColor: "#282c35",
            padding: "100px",
            color: "#fff",
            border: "1px solid red",
          }}
        >
          Dark Mode
        </p>
      )}
    </section>
  );
};

export default UseEffectFive;
