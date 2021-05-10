import { State } from "./types";

const initialState: State = {
  currentResource: 0,
  user: {
    nickname: "",
    token: "",
    avatar: "",
  },
  showPlayListPanel: false,
};

export default initialState;
