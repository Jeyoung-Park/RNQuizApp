module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  // alias: {
  //   '@': './src',
  //   '@components': './src/components',
  //   '@containers': './src/containers',
  //   '@modules': './src/modules',
  //   '@scenes': './src/scenes',
  //   '@utils': './src/utils',
  // },
  plugins: [
    ["module:react-native-dotenv", {
      "moduleName": "@env",
      "path": "./src/config/env",
      "blacklist": null,
      "whitelist": null,
      "safe": false,
      "allowUndefined": true
    }]
  ]
};
