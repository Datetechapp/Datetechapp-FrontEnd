import { IPayment } from './types';

export const getPaymentData = (state: {
  paymentData: { paymentData: IPayment[] };
}) => state.paymentData.paymentData;
