import React, { Suspense } from "react";
import { Spin } from "antd";
import { HashRouter } from "react-router-dom";
import Pages from "./pages";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="appContainer" style={{ height: "100%" }}>
      <HashRouter>
        <Suspense
          fallback={
            <div
              style={{
                width: "100vw",
                height: "100vh",
                backgroundColor: "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Spin />
            </div>
          }
        >
          <Pages />
        </Suspense>
      </HashRouter>
    </div>
  );
}

export default App;
