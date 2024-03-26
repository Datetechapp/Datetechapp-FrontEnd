import { Dispatch, SetStateAction } from 'react';

export type ProfileContentT = {
  setOpenVideoList: Dispatch<SetStateAction<boolean>>;
  setSelectedVideo: Dispatch<SetStateAction<string | ''>>;
  videoItems: VideoItemT[];
  openVideoList: boolean;
};

export type VideoItemT = {
  id: string;
  img: string;
  src: string;
  isPlaying: boolean;
};

export type VideoListT = {
  setOpenVideoList: Dispatch<SetStateAction<boolean>>;
  videoItems: VideoItemT[];
  selectedVideo: string;
};
