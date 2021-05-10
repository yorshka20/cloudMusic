import React from "react";
import moment from "moment";
import "./style.less";

interface Props {
  name: string;
  author: string;
  duration: number;
}

function PlayListItem(props: Props) {
  const { name, author, duration } = props;

  const getTime = (time: number): string => {
    const minute = Math.floor(time / 60);
    const second = time - minute * 60;

    return `${String(minute).padStart(2)}:${String(second).padStart(2)}`;
  };

  return (
    <div className="play-list-item">
      <span className="name">{name}</span>
      <span className="author">{author}</span>
      <span className="duration">{getTime(duration)}</span>
    </div>
  );
}

export default React.memo(PlayListItem);
