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

  // "plugins": [
  //   ["module:react-native-dotenv", {
  //     "moduleName": "@env",
  //     "path": ".env",
  //     "blocklist": null,
  //     "allowlist": null,
  //     // "blacklist": null, // DEPRECATED
  //     // "whitelist": null, // DEPRECATED
  //     "safe": false,
  //     "allowUndefined": false,
  //     "verbose": false
  //   }]
  // ]
  "plugins": [
    ["module:react-native-dotenv", {
      "moduleName": "react-native-dotenv"
    }]
  ]
};
