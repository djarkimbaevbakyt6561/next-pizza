import { createSlice } from '@reduxjs/toolkit';

interface CartDrawerState {
   open: boolean;
}

const initialState: CartDrawerState = {
   open: false,
};

const cartDrawerSlice = createSlice({
   name: 'cartDrawer',
   initialState,
   reducers: {
      handleOnOpenDrawer: state => {
         state.open = true;
      },
      handleOnCloseDrawer: state => {
         state.open = false;
      },
   },
});

export const { handleOnCloseDrawer, handleOnOpenDrawer } =
   cartDrawerSlice.actions;
export const cartDrawerReducer = cartDrawerSlice.reducer;
