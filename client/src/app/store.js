import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/postSlice";
import userReducer from "../features/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
  },
});
