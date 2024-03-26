import { Dispatch, ReactNode, SetStateAction } from 'react';

export type ProfileContentT = {
  setOpenVideoList: Dispatch<SetStateAction<boolean>>;
  setSelectedVideo: Dispatch<SetStateAction<string | ''>>;
  openVideoList: boolean;
  title: ReactNode;
};

export type VideoItemT = {
  id: string;
  img: string;
  src: string;
  isPlaying: boolean;
};

export type VideoListT = {
  setOpenVideoList: Dispatch<SetStateAction<boolean>>;
  selectedVideo: string;
};
