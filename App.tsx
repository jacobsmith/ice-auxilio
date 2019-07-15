import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppNavigator from 'src/screens/root';

export default function App() {
  return (
    <AppNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
