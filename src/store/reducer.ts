import { combineReducers } from "redux";
import { State, ActionType } from "./types";
import initialState from "./state";

const reducer = function (
  state: State = initialState,
  action: ActionType
): State {
  switch (action.type) {
    case "INCREMENT": {
      const { data } = action.payload;
      const currentResource = state.currentResource + data;
      return {
        ...state,
        currentResource,
      };
    }
    case "DECREMENT":
      return {
        ...state,
        currentResource: "-1",
      };
    default:
      return state;
  }
};

export default combineReducers({
  app: reducer,
});
