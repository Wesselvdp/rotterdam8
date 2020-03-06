module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/recommended",
    "airbnb-base",
    "prettier",
    "plugin:vue-a11y/recommended"
  ],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/html-closing-bracket-newline': [
      'error',
      {
        'singleline': 'never',
        'multiline': 'never',
      },
    ],
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: ["state", "$scope"],
      },
    ],
    "comma-dangle": ["error", "always-multiline"],
  },

  parserOptions: {
    parser: 'babel-eslint',
  },

  plugins: [
    "prettier",
    "vue-a11y",
  ],
};