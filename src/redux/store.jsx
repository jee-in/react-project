import { configureStore } from '@reduxjs/toolkit';
import diariesReducer from './diariesSlice';

const store = configureStore({
  reducer: {
    diaries: diariesReducer,
  },
});

export default store;
