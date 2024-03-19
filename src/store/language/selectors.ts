import type { RootStore } from '..';
import { languageStore } from './slice';

export const getLanguage = (store: RootStore): languageStore['language'] => {
  return store.language.language;
};
