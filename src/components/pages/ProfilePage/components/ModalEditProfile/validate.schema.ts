import { object, string, number } from 'yup';
import moment from 'moment';

const minDayNumber = 1;
const maxDayNumber = 31;
const minAge = 18;
const minNameLength = 2;
const maxNameLength = 50;

export const profileSchema = object().shape({
  name: string()
    .min(minNameLength, 'Too Short!')
    .max(maxNameLength, 'Too Long!')
    .matches(/^[a-zA-Z ]+$/, 'The name must contain only letters')
    .required('Required name'),
  day: number()
    .min(minDayNumber)
    .max(maxDayNumber)
    .required('Required')
    .test('is-valid-date', 'This is not valid day number', (value, context) => {
      const { year, month } = context.parent;
      const isValidDate = moment([year, month - 1, value]).isValid();

      return isValidDate;
    }),
  month: number(),
  year: string().test(
    'is-valid-age',
    `You can't be under ${minAge}`,
    (value, context) => {
      const { day, month } = context.parent;
      const birthday = new Date(
        Date.UTC(Number(value), month - 1, day, 0, 0, 0),
      ).valueOf();
      const now = new Date().valueOf();

      const age = Math.abs(moment.duration(birthday - now).years());

      return age >= minAge;
    },
  ),
  about: string(),
});
