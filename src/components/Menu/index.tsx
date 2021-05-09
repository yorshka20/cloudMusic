import React from "react";
import MenuItem from "./MenuItem";

import { StepForwardOutlined } from "@ant-design/icons";
import "./style.less";

function Menu() {
  return (
    <div className="menu-block">
      <div className="entry-block">
        <MenuItem icon={StepForwardOutlined} title="发现音乐" />
        <MenuItem icon={StepForwardOutlined} title="私人FM" />
        <MenuItem icon={StepForwardOutlined} title="视频" />
        <MenuItem icon={StepForwardOutlined} title="朋友" />
      </div>
      <div className="my-music-block">
        <MenuItem icon={StepForwardOutlined} title="本地音乐" />
        <MenuItem icon={StepForwardOutlined} title="下载管理" />
        <MenuItem icon={StepForwardOutlined} title="我的音乐云盘" />
        <MenuItem icon={StepForwardOutlined} title="我的电台" />
        <MenuItem icon={StepForwardOutlined} title="我的收藏" />
      </div>
    </div>
  );
}

export default React.memo(Menu);
