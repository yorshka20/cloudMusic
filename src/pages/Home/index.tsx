import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import { store } from "../../store";
import { Header, Footer } from "../../components";
import "./index.less";

interface State {
  app: {
    currentResource: any;
  };
}

export default function Home() {
  const dispatch = useDispatch();

  const currentResource = useSelector(
    (state: State) => state.app.currentResource
  );

  useEffect(() => {
    console.log("currentResource", currentResource);
  }, [currentResource]);

  const handleClick = () => {
    dispatch({
      type: "INCREMENT",
      payload: {
        data: 1,
      },
    });
  };

  return (
    <div className="main-container">
      <Header></Header>
      <main className="main">
        <div className="left-panel">
          left
          <Button onClick={handleClick}>click</Button>
        </div>
        <div className="main-content">main-content</div>
      </main>
      <Footer></Footer>
    </div>
  );
}
/* eslint-disable */
require("react-dom");
// @ts-ignore
window.React2 = require("react");
// @ts-ignore
console.log(window.React1 === window.React2);
