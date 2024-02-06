import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export default authSlice.reducer;
