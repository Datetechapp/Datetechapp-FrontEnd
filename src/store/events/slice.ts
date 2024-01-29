import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { events } from '../../components/EventsMessagesBlock/db';

const eventsAdapter = createEntityAdapter();

const SLICE_NAME = 'events';

const initialState = eventsAdapter.getInitialState({
  events,
});
export const { reducer, actions } = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    eventCreate: (state, action) => {
      eventsAdapter.addOne(state, action.payload);
    },
    eventsDelete: (state, action) => {
      eventsAdapter.removeOne(state, action.payload);
    },
  },
});

export default reducer;

export const { eventCreate, eventsDelete } = actions;
