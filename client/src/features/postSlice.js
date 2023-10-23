import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    title: "",
    content: "",
  },
  reducers: {
    update: (state, action) => {
      state.title = action.payload.title;
      state.content = action.payload.content;
    },
  },
});

export const { update } = postSlice.actions;
export default postSlice.reducer;
