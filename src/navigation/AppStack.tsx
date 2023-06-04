import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import PostsListingScreen from '../components/screens/PostsListing';
import SubredditsListing from '../components/screens/SubredditsListing';
import WebViewScreen from '../components/screens/WebView';

export type AppStackParamList = {
  Home: undefined;
  Subreddits: undefined;
  WebView: {uri: string};
};

export type WebViewProps = NativeStackScreenProps<AppStackParamList, 'WebView'>;

export const useAppStackNavigation = () =>
  useNavigation<NativeStackNavigationProp<AppStackParamList>>();

const Stack = createNativeStackNavigator<AppStackParamList>();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={PostsListingScreen} />
      <Stack.Screen name="Subreddits" component={SubredditsListing} />
      <Stack.Screen name="WebView" component={WebViewScreen} />
    </Stack.Navigator>
  );
}

export default AppStack;
