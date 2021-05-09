import React from "react";
import { HashRouter } from "react-router-dom";
import Pages from "./pages";
import { Provider } from "react-redux";
import { store } from "./store";

import "./App.less";

function App(): JSX.Element {
  // eslint-disable-next-line
  // @ts-ignore
  window.store = store;

  return (
    <Provider store={store}>
      <HashRouter>
        <Pages />
      </HashRouter>
    </Provider>
  );
}

export default App;
