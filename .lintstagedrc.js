module.exports = {
  '*.{js,jsx,ts,tsx}': ['stylelint', 'eslint --fix', 'prettier --write'],
  '*.test.{js,ts}': ['npm run test --bail --findRelatedTests --watchAll=false'],
};
