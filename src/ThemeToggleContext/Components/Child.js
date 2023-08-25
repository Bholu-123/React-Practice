import React from "react";
import { ThemeContext } from "../ThemeContext";

export default function Child() {
  const { toggle, toggleFunction } = React.useContext(ThemeContext);
  return (
    <div>
      Hello
      <button onClick={toggleFunction}>Change</button>
      {toggle ? "Dark" : "Light"}
    </div>
  );
}
