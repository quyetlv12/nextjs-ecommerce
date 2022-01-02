import { configureStore } from '@reduxjs/toolkit';
import productsSlices from './slices/productsSlices';


export default configureStore({
  reducer: {
    products: productsSlices,
  },
});