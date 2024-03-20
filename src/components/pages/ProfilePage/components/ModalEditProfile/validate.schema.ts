import * as Yup from 'yup';

export const profileSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(/^[a-zA-Z]+$/, 'The name must contain only letters')
    .required('Required name'),
  location: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
  //   .required('Required loc'),
  day: Yup.number().min(1).max(31).required('Required'),
  year: Yup.number().min(1950).required('Required'),
  about: Yup.string(),
});
