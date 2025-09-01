import * as yup from 'yup';

export const personalInfo = yup.object({
   name: yup.string().required('Name is required'),
   surname: yup.string().required('Surname is required'),
   email: yup.string().required('Email is required').email(),
   phone: yup.string().required('Phone is required'),
});
