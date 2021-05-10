import React from "react";
import {
  LeftOutlined,
  RightOutlined,
  SettingOutlined,
  MailOutlined,
  SkinOutlined,
  SwitcherOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import "./style.less";

interface Props {
  [key: string]: any;
}

function Header(props: Props) {
  const handleLeft = () => {
    console.log("left");
  };

  const handleRight = () => {
    console.log("right");
  };

  const menuList = [
    "个性推荐",
    "歌单",
    "主播电台",
    "排行榜",
    "歌手",
    "最新音乐",
  ];

  const handleMenuClick = (menu: string) => {
    console.log("menu", menu);
  };

  return (
    <header className="header-container">
      <div className="navigate-block">
        <LeftOutlined onClick={handleLeft} />
        <RightOutlined onClick={handleRight} />
      </div>

      <div className="header-menu-block">
        {menuList.map((menu) => (
          <span
            className="menu-item"
            key="menu"
            onClick={() => handleMenuClick(menu)}
          >
            {menu}
          </span>
        ))}
      </div>

      {/* search  */}
      <Input width={140} />

      {/* toolbar  */}
      <div className="toolbar-block">
        <SettingOutlined />
        <MailOutlined />
        <SkinOutlined />
        <SwitcherOutlined />
      </div>
    </header>
  );
}

export default React.memo(Header);
