module.exports = {
  "env": {
    "node": true,
    "es6": true
  },
  "rules": {
    "quotes": [2, "single"],
    "semi": 2,
    "max-len": [1, 150, 2],
    "arrow-body-style": [1, "as-needed"],
    "comma-dangle": [2, "never"],
    "object-curly-spacing": 0,
    "no-console": 1,
    "no-param-reassign": [1, { "props": false }],
    "consistent-return": 1,
    "jsx-a11y/img-has-alt": 0
  },
  "extends": "airbnb"
};
