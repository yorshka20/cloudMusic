import React from "react";

import "./style.less";

interface Props {
  avatar: string;
  name: string;
}

function UserBlock(props: Props) {
  const { avatar, name } = props;

  return (
    <div className="user-block">
      <img src={avatar} alt="" />
      <span>{name}</span>
    </div>
  );
}

export default React.memo(UserBlock);
