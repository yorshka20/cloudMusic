import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import { store } from "../../store";
import { Header, Footer, Menu, UserBlock } from "../../components";
import "./index.less";

const avatar = `https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.zhimg.com%2F50%2Fv2-e73ebe5fb7fbae39d69ed94dcc82f145_hd.jpg&refer=http%3A%2F%2Fpic1.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623170567&t=acc91ce2476dd69ad2f9941b388aab59`;

interface State {
  app: {
    currentResource: any;
  };
}

export default function Home() {
  // const dispatch = useDispatch();

  // const currentResource = useSelector(
  //   (state: State) => state.app.currentResource
  // );

  // useEffect(() => {
  //   console.log("currentResource", currentResource);
  // }, [currentResource]);

  const handleClick = () => {
    store.dispatch({
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
          <UserBlock avatar={avatar} name="yorshka" />
          <Menu />
        </div>
        <div className="main-content">main-content</div>
      </main>
      <Footer></Footer>
    </div>
  );
}
