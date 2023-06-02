import React from 'react';
import WebView from 'react-native-webview';
import {WebViewProps} from '../../navigation/AppStack';

function WebViewScreen({route}: WebViewProps): JSX.Element {
  const {uri} = route.params;
  return <WebView source={{uri}} />;
}

export default WebViewScreen;
