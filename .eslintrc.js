module.exports = {
    extends: [
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'plugin:vue/recommended',
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser', // Specifies the ESLint parser
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
    },
    rules: {
        'no-console': ['error', { allow: ['error', 'info'] }],
        'indent': ['error', 4],
        'valid-jsdoc': ['error'],
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
    },
};