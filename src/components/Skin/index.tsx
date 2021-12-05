import React from "react";
import { Popover } from "antd";
import { SkinOutlined } from "@ant-design/icons";

import "./style.less";

const COLOR_PALETTE = [
  {
    color: "#F6F6F6",
    name: "浅色",
  },
  {
    color: "#D33A32",
    name: "红色",
  },
  {
    color: "#202020",
    name: "黑色",
  },
  {
    color: "#8F8F8F",
    name: "自动",
  },
];

function SkinButton() {
  const content = (
    <div className={"header-skin-popover"}>
      {COLOR_PALETTE.map((item, index) => (
        <div className={"header-skin-item"} key={index}>
          <div
            className={"skin-item-color"}
            style={{ backgroundColor: item.color }}
          />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );

  return (
    <Popover placement="bottomRight" content={content} trigger="click">
      <SkinOutlined className={"test"} />
    </Popover>
  );
}

export default SkinButton;
