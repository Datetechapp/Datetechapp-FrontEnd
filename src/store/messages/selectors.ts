import { IMessageProps } from './types';

export const getAllMessages = (state: {
  mesages: { mesages: IMessageProps[] };
}) => state.mesages.mesages;
