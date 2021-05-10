import React from "react";
import MenuItem from "./MenuItem";

import { StepForwardOutlined } from "@ant-design/icons";
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
    <div className="menu-block">
      <div className="entry-block">
        {entryList.map((entry: string) => (
          <MenuItem icon={StepForwardOutlined} key={entry} title={entry} />
        ))}
      </div>
      <div className="my-music-block">
        {myMusicList.map((name: string) => (
          <MenuItem icon={StepForwardOutlined} key={name} title={name} />
        ))}
      </div>
    </div>
  );
}

export default React.memo(Menu);
