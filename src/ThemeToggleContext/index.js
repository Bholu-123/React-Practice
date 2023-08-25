import React from "react";
import { ThemeProvider } from "./ThemeContext";
import ToggleThemeParent from "./Components/ToggleThemeParent";

const ToggleTheme = () => {
  return (
    <ThemeProvider>
      <ToggleThemeParent />
    </ThemeProvider>
  );
};

export default ToggleTheme;
