import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const initialState = [];

const contactsSlice = createSlice({
  name: 'numbers',
  initialState,
  reducers: {
    addNumber: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteNumber: {
      reducer(state, action) {
        return state.filter(contact => contact.id !== action.payload);
      },
    },
  },
});

export const { addNumber, deleteNumber } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
