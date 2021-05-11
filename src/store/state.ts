import { State } from "./types";

const initialState: State = {
  currentResource: 0,
  user: {
    nickname: "",
    token: "",
    avatar: "",
  },
  showPlayListPanel: false,
  showModal: false,
};

export default initialState;
