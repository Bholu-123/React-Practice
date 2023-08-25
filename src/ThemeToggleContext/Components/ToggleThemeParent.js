import React from "react";
import Child from "./Child";
import Header from "./Header";
import Footer from "./Footer";
import { ThemeContext } from "../ThemeContext";

export default function ToggleThemeParent() {
  const { toggle } = React.useContext(ThemeContext);
  return (
    <div className={toggle ? "dark" : "light"}>
      <Header />
      <Child />
      <Footer />
    </div>
  );
}
