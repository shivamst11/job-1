import { StatusBar, View } from 'react-native';
import React from 'react';
import RootNavigation from './src/navigation/RootNavigation';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <RootNavigation />
    </View>
  );
};

export default App;
