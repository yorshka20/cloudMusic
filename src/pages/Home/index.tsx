import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Header,
  Footer,
  Menu,
  UserBlock,
  PlayListPanel,
} from "../../components";
import "./index.less";
import { login } from "../../api";
import { Button } from "antd";

const avatar = `https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.zhimg.com%2F50%2Fv2-e73ebe5fb7fbae39d69ed94dcc82f145_hd.jpg&refer=http%3A%2F%2Fpic1.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623170567&t=acc91ce2476dd69ad2f9941b388aab59`;

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

  // eslint-disable-next-line
  // @ts-ignore
  window.login = login;

  return (
    <div className="main-container">
      {/* 头部组件 */}
      <Header />

      {/* 主屏幕内容 */}
      <main className="main">
        {/* 左侧菜单栏 */}
        <div className="left-panel">
          <UserBlock avatar={avatar} name="yorshka" />
          <Menu />
        </div>

        {/* 右侧主内容区域 */}
        <div className="main-content">
          {/* 首页推荐走马灯 */}
          <div className="carousel-block">img</div>

          {/* 推荐歌单 */}
          <div className="album-block"></div>

          {/* 专属推荐 */}
          <div className="special-recommend-block"></div>

          {/* 最新音乐 */}
          <div className="hottest-music-block"></div>

          {/* mv列表 */}
          <div className="mv-block"></div>

          {/* 主播电台 */}
          <div className="radio-block"></div>
        </div>
      </main>

      {/* 底部播放控制组件 */}
      <Footer />

      {/* absolute component */}
      <PlayListPanel />
    </div>
  );
}
