import type { RootStore } from '..';
import { IAudioInfo } from './types';

export const getAudioInfo = (store: RootStore): IAudioInfo => {
  return store.audioInfo.audioInfo;
};
