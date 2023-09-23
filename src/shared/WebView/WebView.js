import { StyleSheet, View, BackHandler, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import React, { useState, useRef, useEffect } from 'react';
import { useGlobal } from '../hooks/useGlobal';
import { saveNotification } from '../api/saveNotification';
import { useNotification } from '../hooks/useNotification';
import { getData, storeData } from '../utils/localStorage';

const WebScreen = (props) => {
  const [loading, setLoading] = useState(false);
  const { setIsCorporateView } = useGlobal();
  const webViewRef = useRef(null);
  const url = props.route.params.url;
  const { registerForPushNotification } = useNotification();

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

  const onMessageEvent = async (event) => {
    const eventData = JSON.parse(event.nativeEvent.data);
    const userId = eventData?.userId;
    await storeData('user-id', userId);
    const token = await registerForPushNotification();
    saveNotification({
      notificationToken: token.data,
      platform: Platform.OS,
      userId: userId,
    });
  };

  useEffect(() => {
    const tabName = props.route.name;
    if (tabName === 'enterprise') {
      setIsCorporateView(true);
    } else if (tabName === 'home') {
      setIsCorporateView(false);
    }
  }, [props]);

  useEffect(() => {
    (async () => {
      let userId;
      try {
        userId = await getData('user-id');
      } catch (error) {
        console.warn(error);
      }
      const token = await registerForPushNotification();
      if (userId && token) {
        saveNotification({
          notificationToken: token,
          platform: Platform.OS,
          userId: userId,
        });
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef}
        originWhitelist={['*']}
        source={{ uri: url }}
        cacheEnabled
        onLoadStart={() => setLoading(true)}
        scrollEnabled={true}
        onMessage={onMessageEvent}
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
