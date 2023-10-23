import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

const counterSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
  },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
