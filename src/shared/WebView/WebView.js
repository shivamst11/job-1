import { StyleSheet, View, BackHandler, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import React,{useState,useRef, useEffect} from 'react';
import Loader from '../components/Loader/Loader';
import { useGlobal } from '../hooks/useGlobal';



const WebScreen = (props) => {
  const [loading, setLoading] = useState(false);
  const { setIsCorporateView } = useGlobal();
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

  useEffect(() => {
    const tabName = props.route.name;
    if (tabName === 'enterprise') {
      setIsCorporateView(true);
    } else if (tabName === 'home') {
      setIsCorporateView(false);
    }
  }, [props]);


  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef}
        originWhitelist={['*']}
        source={{ uri: url }}
        cacheEnabled
        onLoadStart={() => setLoading(true)}
        scrollEnabled={true}
        onMessage={(event) => {
          const loginResponse = JSON.parse(event.data);

          //push token
          //userid from loginResponse
          //platform type Platform.OS
        }}
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
