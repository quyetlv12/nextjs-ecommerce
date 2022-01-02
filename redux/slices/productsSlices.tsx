import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  id: 1,
  username: 'benja',
};

export const productsSlices = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setUser: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState>
    ) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
    },
    // resetUser: (state: Draft<typeof initialState>) => {
    //   state.id = null;
    //   state.username = null;
    // },
  },
});

// Selectors
export const getUser = (state:any) => state.products;

// Reducers and actions
export const { setUser } = productsSlices.actions;

export default productsSlices.reducer;