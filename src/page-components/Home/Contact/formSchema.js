import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('This field is required'),
  email: yup
    .string()
    .email('Invalid email')
    .required('This field is required'),
  message: yup
    .string()
    .required('This field is required'),
});

export const initialValues = {
  name: "",
  email: "",
  message: "",
};