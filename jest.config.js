module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  // transformIgnorePatterns: ['node_modules/react-native-iphone-x-helper'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native' +
      '|react-native' +
      '|react-navigation-tabs' +
      '|react-native-reanimated' +
      '|react-native-iphone-x-helper' +
      '|@react-navigation' +
      '|@react-navigation/stack' +
      ')/)',
  ],
};
