import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IEventProps } from './types';

export const baseUrl: string = 'http://localhost:3000';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Events'],
  endpoints: (builder) => ({
    getEvents: builder.query<IEventProps[], void>({
      query: () => 'events',
      providesTags: ['Events'],
    }),
    deleteEvent: builder.mutation<IEventProps[], number>({
      query: (id) => ({
        url: `events/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Events'],
    }),
    createEvent: builder.mutation<void, IEventProps>({
      query: (event) => ({
        url: 'events',
        method: 'POST',
        body: event,
      }),
      invalidatesTags: ['Events'],
    }),
    updateEvent: builder.mutation<void, IEventProps>({
      query: (event) => ({
        url: `events/${event.id}`,
        method: 'PATCH',
        body: event,
      }),
      invalidatesTags: ['Events'],
    }),
  }),
});

export const {
  useGetEventsQuery,
  useDeleteEventMutation,
  useCreateEventMutation,
  useUpdateEventMutation,
} = apiSlice;
