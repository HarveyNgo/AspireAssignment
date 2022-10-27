# AspireAssignment

## Usage

```bash
cd <project-root>/
yarn install
cd ios && pod install && cd ../

# Final, to run the project
#iOS
npx react-native run-ios
#Android
npx react-native run-android

```

## Alias

- assets: './src/assets/',
- common: './src/common/',
- components: './src/components/',
- navigators: './src/navigator/',
- routes: './src/routes/',
- services: './src/services/',
- utils: './src/utils/',

## Project folder organization

- android # Android native project
- ios # Ios native project
- src # Source code for both platform
  - assets # Contain all assets like fonts, icons, images
  - common # Contains files for config application
  - components # Precision components
  - navigators # Contains files for screen define, config router.
  - routes # Contains files for screen containers.
  - services # Contain all services files
  - store # Contain files state management define
  - utils # Contain all Utilities
- App.js # Register model, router, plugins
- babelrc.js
- eslintrc.js
- package.json
- index.js
