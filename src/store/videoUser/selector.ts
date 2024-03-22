import type { RootStore } from '..';
type VideoItemT = {
  id: string;
  img: string;
  src: string;
  isPlaying: boolean;
};

export const getVideoItem = (store: RootStore): VideoItemT[] => {
  return store.videoItem.videoItems;
};
