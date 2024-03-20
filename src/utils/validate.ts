import moment from 'moment';

export const isDayValid = (value: string): boolean =>
  Number(value) >= 1 && Number(value) <= 31;

export const isMonthValid = (value: string): boolean =>
  Number(value) >= 1 && Number(value) <= 12;

export const isYearValid = (value: string): boolean =>
  Number(value) >= 1950 && Number(value) <= moment().year();
