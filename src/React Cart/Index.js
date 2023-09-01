import React from "react";
import "./Index.css";
import { Provider } from "react-redux";
import { store } from "./Store/Index";
import Wrapper from "./Components/Wrapper";

const ReduxCart = () => {
  return (
    <Provider store={store}>
      <Wrapper />
    </Provider>
  );
};

export default ReduxCart;
