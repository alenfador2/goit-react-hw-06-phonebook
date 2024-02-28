import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    findNumber(state, action) {
      state.value = action.payload;
    },
  },
});

export const { findNumber } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
