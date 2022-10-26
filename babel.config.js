module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        alias: {
          src: './src',
          '@assets': './src/assets',
          '@navigators': './src/navigators',
          '@routes': './src/routes',
          '@store': './src/store',
          '@components': './src/components',
          '@models': './src/models',
          '@common': './src/common',
          '@utils': './src/utils',
          '@constants': './src/constants',
        },
      },
    ],
  ],
};
