// @ts-check
import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import tseslint from 'typescript-eslint';

export default tseslint.config(

  {
    files: ['**/content-generators/**/*.ts',
      '**/src/**/*.tsx',
      '**/sidebars.ts',
      '**/docusaurus.config.ts',
      '**/eslint.config.mjs',
    ],
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
    ],
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      // TODO: eslint should automatically fix this, but still I have to do it manually
      // 'sort-imports': [
      //   'error',
      //   {
      //     ignoreCase: true,
      //     ignoreDeclarationSort: false,
      //     ignoreMemberSort: false,
      //     memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      //     allowSeparatedGroups: false,
      //   },
      // ],
      '@stylistic/comma-dangle': ['error', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      }],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/indent': ['error', 2],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/no-multiple-empty-lines': ['error'],
      "no-multi-spaces": ["error"],
      // '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': ['warn'],
      // '@typescript-eslint/ban-ts-comment': 'off',
      // '@typescript-eslint/no-unused-expressions': 'off',
      'no-unused-private-class-members': ['warn'],
      // '@typescript-eslint/no-unsafe-function-types': 'off',
      // 'no-prototype-builtins': 'off',
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          "fixStyle": "separate-type-imports",
          "prefer": "type-imports",
        },
      ],
    },
  },
  {
    ignores: [
      '**/demo-typedoc/',
      '**/_submodules/',
      '**/dist/',
      '**/build/',
      '**/temp/',
      '**/coverage/',
      '.idea/',
      '**/packages/website/',
    ],
  },
);
