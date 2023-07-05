module.exports = {
    env: {
        browser: true,
        es2018: true,
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        lib: ['es2018']
    },
    plugins: ['react', 'react-hooks', 'react-refresh', 'jsx-a11y'],
    rules: {
        'react-refresh/only-export-components': 'warn',
        'no-unused-vars': 2,
        'react/jsx-no-target-blank': 0,
        'no-mixed-spaces-and-tabs': 2,
        'quotes': [2, 'single'],
        'jsx-quotes': [2, 'prefer-single'],
        'no-multiple-empty-lines': [1, {'max': 2}],
        'indent': ['error', 2],
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 0,
        'react-hooks/rules-of-hooks': 2,
        'react-hooks/exhaustive-deps': 0,
        'max-len': [2, {'code': 150}],
        'import/extensions': 0,
        'import/no-unresolved': 0,
        'import/no-extraneous-dependencies': 0,
        'import/prefer-default-export': 0,
        'no-plusplus': 0,
        'react/jsx-props-no-spreading': 0,
        'no-underscore-dangle': 0,
        'jsx-a11y/label-has-for': 0,
        'jsx-a11y/label-has-associated-control': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/anchor-is-valid': 0,
        'jsx-a11y/anchor-has-content': 0,
        'jsx-a11y/no-noninteractive-element-interactions': 0,
        'no-param-reassign': [0, {'props': false}],
        'no-console': 2,
        'react/forbid-prop-types': 0
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
