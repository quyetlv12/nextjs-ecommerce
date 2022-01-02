import { configureStore } from '@reduxjs/toolkit';
import productsSlices from './slices/productsSlices';


export const store = configureStore({
  reducer: {
    allproducts: productsSlices,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;