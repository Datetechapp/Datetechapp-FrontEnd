import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

type VideoItemT = {
  id: string;
  img: string;
  src: string;
  isPlaying: boolean;
};

const SLICE_NAME = 'VIDEO_ITEM';

const initialState = {
  videoItems: <VideoItemT[]>[],
  videoItem: {
    id: null,
    img: '',
    src: '',
    isPlaying: false,
  },
};
export const { reducer, actions } = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    videoItemsSet: (state, action) => {
      state.videoItems = action.payload.map((video: VideoItemT) => ({
        id: video.id,
        img: video.img,
        src: video.src,
        isPlaying: video.isPlaying,
      }));
    },
  },
});

export default reducer;

export const { videoItemsSet } = actions;
