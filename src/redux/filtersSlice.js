import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    findNumber(state, action) {
      const nameToFind = action.payload.toLowerCase();
      return state.filter(
        contacts => contacts.name.toLowerCase() === nameToFind
      );
    },
  },
});

export const { findNumber } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
