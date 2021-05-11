import React from "react";
import { useSelector } from "react-redux";
import PlayListItem from "./PlayListItem";

interface State {
  app: {
    showPlayListPanel: boolean;
  };
}

function PlayListPanel() {
  const showPlayListPanel = useSelector(
    (state: State) => state.app.showPlayListPanel
  );

  if (!showPlayListPanel) {
    return null;
  }

  return (
    <div className="play-list-panel-container">
      <div className="panel-tab-bar">
        <span className="tab-item">播放列表</span>
        <span className="tab-item">历史记录</span>
      </div>

      <div className="play-list-container">
        {Array.from({ length: 10 }).map((song, index: number) => (
          <PlayListItem
            key={index}
            name="name"
            author="author"
            duration={index * 45}
          />
        ))}
      </div>
    </div>
  );
}

export default React.memo(PlayListPanel);
