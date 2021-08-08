module.exports = {
  root: true,
  extends: ['airbnb-typescript', '@react-native-community'],
  parserOptions:{
    project: './tsconfig.json',
  },
  rules:{
    'prettier/prettier':[
      'error',
      {
        endOfLine:'auto',
      }
    ]
  }
};
