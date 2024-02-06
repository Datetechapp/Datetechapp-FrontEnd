import { IEventProps } from './types';

export const getAllEvents = (state: { events: { events: IEventProps[] } }) =>
  state.events.events;
