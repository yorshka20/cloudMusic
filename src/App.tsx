import React from "react";
import { HashRouter } from "react-router-dom";
import Pages from "./pages";
import "./App.less";

function App(): JSX.Element {
  return (
    <div className="appContainer" style={{ height: "100%" }}>
      <HashRouter>
        <Pages />
      </HashRouter>
    </div>
  );
}

export default App;
