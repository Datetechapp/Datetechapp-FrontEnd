import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { reducer as genderAndPurposesReducer } from './gendersAndPurpose/slice';
import { reducer as eventsReducer } from './events/slice';
import { reducer as messagesReducer } from './messages/slice';

const reducer = combineReducers({
  gendersAndPurposes: genderAndPurposesReducer,
  events: eventsReducer,
  messages: messagesReducer,
});

export const store = configureStore({
  reducer,
});

export type RootStore = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
