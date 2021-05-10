import React from "react";

import "./style.less";

interface Props {
  icon?: any;
  title: string;
}

function MenuItem(props: Props) {
  const { icon: Icon, title } = props;

  return (
    <div className="menu-item">
      {Icon && <Icon />}
      <span>{title}</span>
    </div>
  );
}

export default React.memo(MenuItem);
