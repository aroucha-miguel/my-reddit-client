import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import store from './src/redux/store';
import AppStart from './src/AppStart';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStart />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
