import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const response = await axios.get("http://localhost:3000/posts");
  return response.data;
});

export const addPost = createAsyncThunk("posts/addPost", async ({title, content}) => {
  const response = await axios.post("http://localhost:3000/posts", {
    title, content
  });
  return response.data;
});

const postEntity = createEntityAdapter({
  selectId: (post) => post.id,
});

const initialState = { value: 0 };

const postSlice = createSlice({
  name: "post",
  initialState: postEntity.getInitialState(),
  extraReducers: {
    [getPosts.fulfilled]: (state, action) => {
      postEntity.setAll(state, action.payload);
    },
    [addPost.fulfilled]: (state, action) => {
      postEntity.addOne(state, action.payload);
    },
  },
});

export const postSelectors = postEntity.getSelectors((state) => state.post);
export default postSlice.reducer;
