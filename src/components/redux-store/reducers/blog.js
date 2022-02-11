import { initialState } from "../index.js";
import { FETCH_BLOGS } from "../actions/index.js";

export default function blogReducer(state = initialState.blogs, action) {
  console.log(action, state);

  const { type, payload } = action;

  switch (action.type) {
    case FETCH_BLOGS:
      return {
        ...state,
        blog: action.payload,
      };
    default:
      return state;
  }
}
