import { initialState } from "../index.js";
import { FETCH_EVENTS } from "../actions/index.js";

export default function calenderReducer(state = initialState.calender, action) {
  console.log(action, state);

  const { type, payload } = action;

  switch (action.type) {
    case FETCH_EVENTS:
      return {
        ...state,
        events: action.payload,
      };
    default:
      return state;
  }
}
