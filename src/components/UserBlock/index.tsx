import React from "react";
import { useDispatch } from "react-redux";

import "./style.less";

interface Props {
  avatar: string;
  name: string;
}

function UserBlock(props: Props) {
  const { avatar, name } = props;

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: "toggleModal",
    });
  };

  return (
    <div className="user-block">
      <img src={avatar} alt="" />
      <span onClick={handleClick}>{name}</span>
    </div>
  );
}

export default React.memo(UserBlock);
