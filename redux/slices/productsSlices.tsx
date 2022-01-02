import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
  availableProducts : [] = [] 
} as any

export const productsSlices = createSlice({
  name: 'availableProducts',
  initialState,
  reducers: {
    getAllProducts: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState>
    ) => {
      state.availableProducts = action.payload
      
    },
  },
});

// Selectors
export const getUser = (state:any) => state.availableProducts;

// Reducers and actions
export const { getAllProducts } = productsSlices.actions;
export const setProducts = (state: RootState) => state.allproducts;
export default productsSlices.reducer;