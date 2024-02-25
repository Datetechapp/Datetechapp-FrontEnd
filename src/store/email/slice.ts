import { createSlice } from '@reduxjs/toolkit';

export interface emailStore {
  email: string;
}

const initialState: emailStore = {
  email: '',
};

export const { reducer, actions } = createSlice({
  name: 'email',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.email = action.payload;
    },
  },
});
