export interface State {
  currentResource?: any;
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
