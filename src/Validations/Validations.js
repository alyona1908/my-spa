import * as yup from 'yup';

const userSchema = yup.object().shape({
  email: yup.string().email().required(),
  firstName: yup.string().min(3).required(),
  lastName: yup.string().min(3).required(),
  bDay: yup.string().max(10).required(),
  city: yup.string().min(3).required(),
});
export default userSchema;
