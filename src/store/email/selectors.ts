import type { RootStore } from '..';
import { emailStore } from './slice';

export const getEmail = (store: RootStore): emailStore['email'] => {
  return store.email.email;
};
