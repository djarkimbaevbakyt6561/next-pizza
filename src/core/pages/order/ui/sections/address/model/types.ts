import * as yup from 'yup';

export const address = yup.object({
   address: yup.string().required('Address is required'),
   comment: yup.string(),
});
