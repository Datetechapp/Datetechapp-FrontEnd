import { INotificationProps } from './types';

export const getAllNotifications = (state: {
  notifications: { notifications: INotificationProps[] };
}) => state.notifications.notifications;
