import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { messages } from '../../components/EventsMessagesBlock/db';

const messagesAdapter = createEntityAdapter();

const SLICE_NAME = 'messages';

const initialState = messagesAdapter.getInitialState({
  messages,
});
export const { reducer, actions } = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    messageCreate: (state, action) => {
      messagesAdapter.addOne(state, action.payload);
    },
    messageDelete: (state, action) => {
      messagesAdapter.removeOne(state, action.payload);
    },
  },
});

export default reducer;

export const { messageCreate, messageDelete } = actions;
