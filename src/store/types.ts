export interface State {
  // 当前资源
  currentResource?: any;
  // 用户信息
  user: {
    token: string;
    avatar: string;
    nickname: string;
  };
  // 是否展示歌曲列表
  showPlayListPanel: boolean;
}

interface SongInfo {
  id: string;
  name: string;
  url: string;
  cover?: string;
}

export const GET_SONG_INFO = "GET_SONG_INFO";

interface Action {
  type: string;
  payload?: any;
}

export type ActionType = Action;
