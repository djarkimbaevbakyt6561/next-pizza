interface InputField {
   id: number;
   label: string;
   name:
      | 'personalInfo.name'
      | 'personalInfo.surname'
      | 'personalInfo.email'
      | 'personalInfo.phone';
   type: string;
   required?: boolean;
}

export const inputFields: InputField[] = [
   {
      id: 1,
      label: 'Name',
      name: 'personalInfo.name',
      type: 'text',
      required: true,
   },
   {
      id: 2,
      label: 'Surname',
      name: 'personalInfo.surname',
      type: 'text',
      required: true,
   },
   {
      id: 3,
      label: 'E-Mail',
      name: 'personalInfo.email',
      type: 'email',
      required: true,
   },
   {
      id: 4,
      label: 'Phone',
      name: 'personalInfo.phone',
      type: 'tel',
      required: true,
   },
];
