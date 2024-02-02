import { IMessageProps } from './types';

export const getAllMessages = (state: {
  messages: { messages: IMessageProps[] };
}) => state.messages.messages;
