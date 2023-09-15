import { StatusBar, View } from 'react-native';
import React, { useEffect } from 'react';
import RootNavigation from './src/navigation/RootNavigation';
import { GlobalProvider } from './src/shared/context/GlobalProvider';


const App = () => {

  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <GlobalProvider>
        <RootNavigation />
      </GlobalProvider>
    </View>
  );
};

export default App;
