import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import AppStack from './src/navigator/AppStack.Navigator';

const Stack = createStackNavigator();
const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <AppStack />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
export default App;
