export interface INotificationProps {
  id: string;
  type: 'event' | 'like' | 'new' | 'decline' | 'accept';
  image: string;
  name: string;
  time: string;
  event: string;
  premium?: boolean;
  status: string;
}
