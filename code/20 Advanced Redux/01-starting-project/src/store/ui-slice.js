import { createSlice } from '@reduxjs/toolkit';

createSlice({
  name: 'ui',
  inintialState: { cartIsVisible: false },
  reducer: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    }
  }
})
