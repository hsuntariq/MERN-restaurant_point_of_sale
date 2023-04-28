import { configureStore } from '@reduxjs/toolkit';
import itemReducer from '../features/items/itemSlice'
import cartReducer from '../features/cart/cartSlice'
export const store = configureStore({
  reducer: {
    items: itemReducer,
    cart:cartReducer,
  },
});
