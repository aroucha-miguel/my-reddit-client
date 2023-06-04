# Reddit client project.

## Browse reddit posts without having an account.

This project will open, by default, the "pics" subreddit sorted by "hot".

The user can select another subreddit by selecting from the subreddits list.
Currently, the default available subreddits are "pics", "all", "ReactNative" and "Programming".

The user can choose the sort algorithm from "hot", "top", "new" or "controversial".

By clicking a post, the app will open a WebView that will redirect to the post url.

## Run project
* checkout project
* run `yarn install`
* run `yarn install-ios` (to run on ios device/simulator)
* run `yarn start` (or `yarn start-cache` to reset cache)
* when metro bundler initialises, press `i` to run on ios or `a` to run on android

## Project Architecture
This project uses `react-redux` to manage its state, and `@react-navigation` to manage the navigation between screens.

Limited choice options (as sort algorithms) are presented through `@expo/react-native-action-sheet`.

Relevant feedback is displayed to the user with a toast, using `react-native-root-toast`.

## Project Structure
- `android` - android native project
- `ios` - ios native project
- `src` - javascript and react project
- - `components` - react components, screens and hooks
- - `navigation` - app navigation structure
- - `redux` - app state store, actions and relevant definitions
- - `services` - app external/async services. currently, only reddit client
- - `types` - relevant types to use throughout the app
- - `utils` - misc utility functions
- `App.tsx` - App init
- `index.js` - entry point
