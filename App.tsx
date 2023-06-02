import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import PostsListing from './src/components/screens/PostsListing';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PostsListing />
    </Provider>
  );
}

export default App;
