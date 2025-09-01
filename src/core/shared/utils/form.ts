/* eslint-disable @typescript-eslint/no-explicit-any */
export const getNestedError = (
   errors: any,
   fieldName: string,
): string | undefined => {
   const errorPath = fieldName.split('.');
   let error = errors;

   for (const path of errorPath) {
      error = error?.[path];
      if (!error) break;
   }

   return error?.message;
};
