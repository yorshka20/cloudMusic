import React from "react";
import { HashRouter } from "react-router-dom";
import Pages from "./pages";
import { Provider } from "react-redux";
import { store } from "./store";

import "./App.less";

function App(): JSX.Element {
  return (
    <div className="appContainer" style={{ height: "100%" }}>
      <HashRouter>
        <Provider store={store}>
          <Pages />
        </Provider>
      </HashRouter>
    </div>
  );
}

export default App;
