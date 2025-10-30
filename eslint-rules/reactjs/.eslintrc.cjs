/* eslint-disable import/no-commonjs */
module.exports = {
    root: true,
    env: { browser: true, es2021: true },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json', // required by airbnb-typescript rules
    },
    plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y', 'prettier'],
    extends: [
        'airbnb', // base + react rules
        'airbnb/hooks', // react-hooks rules
        'airbnb-typescript', // airbnb + TypeScript integration
        'plugin:@typescript-eslint/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
    ],
    settings: {
        react: { version: 'detect' },
        'import/resolver': {
            typescript: {}, // lets eslint-plugin-import resolve TS paths
            node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        },
    },
    rules: {
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/no-explicit-any': 'error',
        'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
        'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
        'no-console': 'error',
        'react/jsx-props-no-spreading': 'off',
        'react/react-in-jsx-scope': 'off',
        'import/extensions': 'off',
    },
};
