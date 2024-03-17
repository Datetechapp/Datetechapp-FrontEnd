import { createSlice } from '@reduxjs/toolkit';

const SLICE_NAME = 'audioInfo';

const initialState = {
  audioInfo: {
    id: '',
    speed: 1,
    volume: 0.5,
    duration: 0,
    isPlaying: false,
    isPinned: false,
    blob: '',
  },
};

export const { reducer, actions } = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    audioInfoSet: (state, action) => {
      state.audioInfo = action.payload;
    },
    audioInfoDelete: (state) => {
      state.audioInfo = initialState.audioInfo;
    },
    audioInfoUpdate: (state, action) => {
      state.audioInfo = { ...state.audioInfo, ...action.payload };
    },
  },
});

export default reducer;

export const { audioInfoSet, audioInfoDelete, audioInfoUpdate } = actions;
