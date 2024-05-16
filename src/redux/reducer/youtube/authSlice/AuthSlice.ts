import { createSlice } from "@reduxjs/toolkit";

interface SliceState {
  isAuthenticated: boolean;
}

const initialState: SliceState = {
  isAuthenticated: false,
};

const youtubeAuthSlice = createSlice({
  name: "youtube",
  initialState,
  reducers: {
    auth(state, action) {
      state.isAuthenticated = !state.isAuthenticated;
    },
  },
});

export const { auth } = youtubeAuthSlice.actions;
export default youtubeAuthSlice.reducer;
