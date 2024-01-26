import { useGetEventsQuery } from './slice';
import { IEventProps } from './types';

export const getUsers = async (): Promise<IEventProps[]> => {
  const { data: events = [] } = useGetEventsQuery();
  return new Promise((resolve) => resolve(events));
};
