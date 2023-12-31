import * as yup from 'yup';

const NewTaskValidationSchema = yup.object({
  title: yup.string()
    .required('Please specify title for your task')
    .trim('No empty values allowed')
    .max(256, 'Must be max 256 characters'),
  description: yup.string()
    .required('Please specify a description for your task')
    .trim('No empty values allowed')
    .max(256, 'Must be max 256 characters'),
});

export default NewTaskValidationSchema;
