import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [
      {
        username: "admin",
        password: "admin123",
        isLoggedIn: false,
      },
    ],
    currentUser: null,
  },
  reducers: {
    register: (state, action) => {
      const { username, password } = action.payload;
      state.users.push({
        username,
        password,
        isLoggedIn: false,
      });
    },
    login: (state, action) => {
      const { username, password } = action.payload;
      const user = state.users.find(
        (user) => user.username === username && user.password === password
      );
      if (user) {
        state.currentUser = user;
        user.isLoggedIn = true;
      } else {
        state.currentUser = null;
      }
    },
    reset: (state) => {
      state.currentUser = null;
    }
  },
});

export const {login, register, reset} = userSlice.actions;
export default userSlice.reducer;
