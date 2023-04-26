import { configureStore } from '@reduxjs/toolkit';
import itemReducer from '../features/items/itemSlice'
export const store = configureStore({
  reducer: {
    items:itemReducer
  },
});
