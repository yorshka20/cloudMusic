import React from "react";
import MenuBlock from "./MenuBlock";

import "./style.less";

function Menu() {
  const entryList = ["发现音乐", "私人FM", "视频", "朋友"];

  const myMusicList = [
    "本地音乐",
    "下载管理",
    "我的音乐云盘",
    "我的电台",
    "我的收藏",
  ];

  return (
    <div className="menu-block-container">
      <MenuBlock data={entryList} />
      <MenuBlock title={"我的音乐"} data={myMusicList} />
      <MenuBlock title={"创建的歌单"} data={entryList} />
    </div>
  );
}

export default React.memo(Menu);
