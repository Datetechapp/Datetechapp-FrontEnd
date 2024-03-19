export interface IMessageProps {
  id: string;
  type: string;
  image: string;
  weekDay: string;
  name: string;
  time: string;
  isNew: boolean;
  message: string;
  premium?: boolean;
  status: string;
}
