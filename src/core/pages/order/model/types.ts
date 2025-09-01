import * as yup from 'yup';
import { address } from '../ui/sections/address';
import { personalInfo } from '../ui/sections/personal-information';

export const orderFormSchema = yup.object({
   address,
   personalInfo,
});

export type OrderFormData = yup.InferType<typeof orderFormSchema>;
