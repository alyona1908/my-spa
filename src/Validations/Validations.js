import * as yup from 'yup';

const userSchema = yup.object().shape({
  email: yup.string().email('Enter the correct email').required('Required!'),
  firstName: yup.string().min(3, 'Must be at least 3 characters').required('Required!'),
  lastName: yup.string().typeError('Must be a string').min(3, 'Must be at least 3 characters')
    .required('Required!'),
  bDay: yup.string().matches(/^\(?([0-9]{2})\)?[.]?([0-9]{2})[.]?([0-9]{4})$/, 'Date of birth must be in the format: 12.12.1999')
    .required('Required!'),
  city: yup.string().typeError('Must be a string').min(3, 'Must be at least 3 characters').required('Required!'),
});
export default userSchema;
