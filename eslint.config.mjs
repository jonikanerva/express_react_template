import tseslint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import prettierConfig from 'eslint-config-prettier'

export default [
  {
    ignores: ['node_modules/**', 'build/**', 'coverage/**', '*.js', '*.mjs'],
  },
  ...tseslint.configs.recommended,
  reactPlugin.configs.flat.recommended,
  prettierConfig,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      'react/react-in-jsx-scope': 'off',
    },
  },
]
