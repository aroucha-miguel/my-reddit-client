import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {ActionSheetProvider} from '@expo/react-native-action-sheet';
import store from './src/redux/store';
import AppStart from './src/AppStart';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <ActionSheetProvider>
        <NavigationContainer>
          <AppStart />
        </NavigationContainer>
      </ActionSheetProvider>
    </Provider>
  );
}

export default App;
