import React from "react";
import MenuItem from "./MenuItem";
import { StepForwardOutlined } from "@ant-design/icons";
import "./style.less";

interface Props {
  data: any[];
  title?: string;
}

function MenuBlock(props: Props) {
  const { data, title } = props;

  return (
    <>
      {title && <p className="menu-block-title">{title}</p>}
      <div className="menu-block">
        {data.map((entry: string) => (
          <MenuItem icon={StepForwardOutlined} key={entry} title={entry} />
        ))}
      </div>
    </>
  );
}

export default React.memo(MenuBlock);
