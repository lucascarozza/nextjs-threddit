import { configureStore } from '@reduxjs/toolkit';
import postsReducer from "./features/postsSlice/postsSlice";
import subredditsReducer from "./features/subredditsSlice/subredditsSlice";


export const makeStore = () => {
  return configureStore({
    reducer: {
      posts: postsReducer,
      subreddits: subredditsReducer,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']