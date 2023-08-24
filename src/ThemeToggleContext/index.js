import React from "react";
import { ThemeProvider } from "./ThemeContext";
import ToggleThemeParent from "./Component/ToggleThemeParent";

const ToggleTheme = () => {
  return (
    <ThemeProvider>
      <ToggleThemeParent />
    </ThemeProvider>
  );
};

export default ToggleTheme;
