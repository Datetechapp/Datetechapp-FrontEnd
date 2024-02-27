import { createSlice } from '@reduxjs/toolkit';

const SLICE_NAME = 'email';

export interface emailStore {
  email: string;
}

const initialState: emailStore = {
  email: '',
};

export const { reducer, actions } = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    setData: (state, action) => {
      state.email = action.payload;
    },
  },
});
