import { combineReducers } from "redux";
import postReducer from "./postSlice";
import userReducer from "./userSlice";

const rootReducer = combineReducers({
  post: postReducer,
  user: userReducer,
});

export default rootReducer;
