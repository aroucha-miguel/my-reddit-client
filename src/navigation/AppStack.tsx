import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PostsListingScreen from '../components/screens/PostsListing';
import WebViewScreen from '../components/screens/WebView';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={PostsListingScreen} />
      <Stack.Screen name="WebView" component={WebViewScreen} />
    </Stack.Navigator>
  );
}

export default AppStack;
