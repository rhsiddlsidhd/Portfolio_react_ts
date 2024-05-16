import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/reducer/youtube/authSlice/AuthSlice";

export const store = configureStore({
  reducer: {
    // selector할때 youtube 키값을 전달달
    youtube: authReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
// selector 타입을 전달
export type RootReducerState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// dispatch 타입을 전달
export type AppDispatch = typeof store.dispatch;
