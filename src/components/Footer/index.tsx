import React, { useEffect, useState } from "react";
import { Progress } from "antd";
import {
  HeartOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
  PlayCircleOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import "./style.less";

function Footer() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((percent) => {
        if (percent >= 100) {
          return 0;
        }
        return percent + 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <footer className="footer-container">
      {/* 进度条，mock */}
      <Progress
        className="progress-bar"
        strokeLinecap="square"
        showInfo={false}
        percent={percent}
      />

      {/* 音乐信息 */}
      <div className="music-info-block">
        <div className="music-info">
          <img className="cover" src="" alt="" />
          <div className="info">
            <p className="name">asdasd</p>
            <p className="time-range">10:11/12:10</p>
          </div>
        </div>

        {/* 播放控制 */}
        <div className="play-control-block">
          <HeartOutlined />
          <StepBackwardOutlined />
          <PlayCircleOutlined size={40} />
          <StepForwardOutlined />
          <ShareAltOutlined />
        </div>

        {/* footer工具栏 */}
        <div className="toolbar-block">
          <ShareAltOutlined />
          <ShareAltOutlined />
          <ShareAltOutlined />
          <ShareAltOutlined />
          <ShareAltOutlined />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
