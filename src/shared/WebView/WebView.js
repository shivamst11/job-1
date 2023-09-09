import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, BackHandler, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import Loader from '../components/Loader/Loader';

const WebScreen = (props) => {
  const [loading, setLoading] = useState(false);
  const webViewRef = useRef(null);
  const onAndroidBackPress = () => {
    if (webViewRef.current) {
      webViewRef.current.goBack();
      return true; // prevent default behavior (exit app)
    }
    return false;
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', onAndroidBackPress);
      return () => {
        BackHandler.removeEventListener(
          'hardwareBackPress',
          onAndroidBackPress
        );
      };
    }
  }, []);
  const url = props.route.params.url;

  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef}
        originWhitelist={['*']}
        source={{ uri: url }}
        cacheEnabled
        onLoadStart={() => setLoading(true)}
        scrollEnabled={true}
        pagingEnabled={true}
        javaScriptEnabled={true}
        pullToRefreshEnabled={true}
        domStorageEnabled={true}
        nestedScrollEnabled={true}
        webviewDebuggingEnabled={true}
        onLoadEnd={() => setLoading(false)}
        onError={(error) => console.error('WebView error: ', error)}
        userAgent={
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
        }
      />
      {/* <Loader show={loading} / > */}
    </View>
  );
};

export default WebScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
