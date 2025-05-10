import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import reactPlugin from 'eslint-plugin-react'
import importPlugin from 'eslint-plugin-import'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tsParser,
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'react': reactPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tsPlugin,
      'import': importPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // CRA-style rules
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'always',
        },
      ],
      'max-len': ['warn', 120],
      'comma-dangle': ['warn', 'always-multiline'],
      'semi': ['warn', 'never'],
      'quotes': ['warn', 'single'],
      'indent': ['warn', 2],
      'no-trailing-spaces': ['error', { skipBlankLines: false }],
      'no-multi-spaces': ['error', { ignoreEOLComments: false }],
      'object-curly-spacing': ['error', 'always'],

      'jsx-quotes': ['warn', 'prefer-double'],
      'react/jsx-indent': ['warn', 2],
      'react/jsx-indent-props': ['warn', 2],
      'react/jsx-first-prop-new-line': ['warn', 'multiline'],
      'react/jsx-max-props-per-line': ['warn', { maximum: 2 }],

      //Unexpected token interface
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
)
