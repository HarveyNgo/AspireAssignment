module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        alias: {
          src: './src',
          '@navigators': './src/navigators',
          '@routes': './src/routes',
          '@store': './src/store',
          '@components': './src/components',
          '@assets': ['./src/assets'],
        },
      },
    ],
  ],
};
