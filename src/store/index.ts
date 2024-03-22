import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { reducer as genderAndPurposesReducer } from './gendersAndPurpose/slice';
import { reducer as eventsReducer } from './events/slice';
import { reducer as messagesReducer } from './messages/slice';
import { reducer as emailReducer } from './email/slice';
import { reducer as paymentReducer } from './payments/slice';
import { reducer as notificationReducer } from './notifications/slice';
import { reducer as languageReducer } from './language/slice';
import { reducer as audioInfoReducer } from './audioInfo/slice';
import { reducer as videoItemReducer } from './videoUser/slice';

const reducer = combineReducers({
  gendersAndPurposes: genderAndPurposesReducer,
  events: eventsReducer,
  messages: messagesReducer,
  email: emailReducer,
  paymentData: paymentReducer,
  notifications: notificationReducer,
  language: languageReducer,
  audioInfo: audioInfoReducer,
  videoItem: videoItemReducer,
});

export const store = configureStore({
  reducer,
});

export type RootStore = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
