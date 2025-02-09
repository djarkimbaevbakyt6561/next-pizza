import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
   baseDirectory: __dirname,
});

const eslintConfig = [
   ...compat.config({
      env: { browser: true, es2021: true },
      extends: [
         '@feature-sliced',
         'plugin:prettier/recommended',
         'next/core-web-vitals',
         'next/typescript',
      ],
      settings: {
         'import/resolver': {
            typescript: {
               alwaysTryTypes: true,
            },
         },
      },
      rules: {
         'no-console': 'warn',
         'prettier/prettier': [
            'warn',
            {
               endOfLine: 'auto',
            },
         ],
         'import/no-internal-modules': 'off',
         'import/newline-after-import': 'error',
         'react-hooks/exhaustive-deps': 'warn',
         'react-hooks/rules-of-hooks': 'warn',
         'react/jsx-props-no-spreading': 'off',
         'react/react-in-jsx-scope': 'off',
         'react/self-closing-comp': [
            'error',
            {
               component: true,
               html: true,
            },
         ],
         '@typescript-eslint/no-empty-interface': 'warn',
         '@typescript-eslint/no-explicit-any': 'warn',
      },
   }),
];

export default eslintConfig;
