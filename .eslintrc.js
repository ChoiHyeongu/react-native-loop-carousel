module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    'react-native',
    'import',
    'unused-imports',
    'prettier',
  ],
  ignorePatterns: ['src/lib/*'],
  rules: {
    quotes: 0,
    'react-hooks/exhaustive-deps': 0,
    'react-native/no-inline-styles': 0,
    curly: 0,
    'unused-imports/no-unused-imports': 'warn',
    '@typescript-eslint/no-unused-vars': 1,
  },
};
