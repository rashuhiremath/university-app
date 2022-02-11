import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
//import signupReducer from "./reducers/signupform";
import calenderReducer from "./reducers/calender.js";
import blogReducer from "./reducers/blog";
/* import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css"; */

export const initialState = {
  signup: {
    showForm: true,
  },
  calender: {
    events: [],
  },
  blogs: {
    blog: [],
  },
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const mainReducer = combineReducers({
  //   signup: signupReducer,
  calender: calenderReducer,
  blogs: blogReducer,
});

const configStore = createStore(
  mainReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default configStore;
