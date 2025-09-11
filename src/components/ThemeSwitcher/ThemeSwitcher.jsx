import React from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import "./ThemeSwitcher.scss";

const ThemeSwitcher = ({ theme, toggleTheme }) => {
  return (
    <div className="theme-switcher" onClick={toggleTheme}>
      {theme === "light" ? <HiMoon /> : <HiSun />}
    </div>
  );
};

export default ThemeSwitcher;
