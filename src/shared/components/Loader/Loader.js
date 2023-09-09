import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { renderIf } from '../../utils/helper';

const Loader = ({ show }) => {
  if (!show) {
    return null;
  }
  return (
    <View style={[StyleSheet.absoluteFill, styles.container]}>
      <View style={styles.loadingCard}>
        <Text>Loading...</Text>
      </View>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    zIndex: 9999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  loadingCard: {
    backgroundColor: 'white',
    height: 100,
    width: 100,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
