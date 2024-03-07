import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { notifications } from '../../components/pages/NotificationPage/db';

const notificationsAdapter = createEntityAdapter();

const SLICE_NAME = 'notifications';

const initialState = notificationsAdapter.getInitialState({
  notifications,
});

export const { reducer, actions } = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    notificationCreate: (state, action) => {
      notificationsAdapter.addOne(state, action.payload);
    },
    notificationDelete: (state, action) => {
      notificationsAdapter.removeOne(state, action.payload);
    },
  },
});

export default reducer;

export const { notificationCreate, notificationDelete } = actions;
