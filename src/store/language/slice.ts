import { createSlice } from '@reduxjs/toolkit';

const SLICE_NAME = 'language';

export interface languageStore {
  language: string;
}

const initialState: languageStore = {
  language: 'English',
};

export const { reducer, actions } = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export default reducer;

export const { setLanguage } = actions;
